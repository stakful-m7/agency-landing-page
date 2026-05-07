"use server";

import { headers } from "next/headers";

export type LeadFieldErrors = Partial<
  Record<"name" | "email" | "company" | "industry" | "challenge" | "captcha", string>
>;

export type LeadState = {
  ok: boolean;
  message?: string;
  fieldErrors?: LeadFieldErrors;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    // Captcha not configured — skip verification. The widget also won't
    // render client-side without NEXT_PUBLIC_TURNSTILE_SITE_KEY, so this
    // path only fires in environments that haven't opted in.
    return true;
  }
  if (!token) return false;

  const reqHeaders = await headers();
  const remoteip = reqHeaders.get("x-forwarded-for")?.split(",")[0]?.trim();

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret,
          response: token,
          ...(remoteip ? { remoteip } : {}),
        }),
        cache: "no-store",
      }
    );
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export async function submitLead(
  _prev: LeadState,
  formData: FormData
): Promise<LeadState> {
  const name = (formData.get("name") ?? "").toString().trim();
  const email = (formData.get("email") ?? "").toString().trim();
  const company = (formData.get("company") ?? "").toString().trim();
  const industry = (formData.get("industry") ?? "").toString().trim();
  const challenge = (formData.get("challenge") ?? "").toString().trim();
  const captchaToken = (formData.get("cf-turnstile-response") ?? "").toString();

  const fieldErrors: LeadFieldErrors = {};
  if (name.length < 2) fieldErrors.name = "Please enter your full name.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Please enter a valid work email.";
  if (company.length < 1) fieldErrors.company = "Please enter your company.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      fieldErrors,
      message: "Please fix the highlighted fields.",
    };
  }

  const captchaOk = await verifyTurnstile(captchaToken);
  if (!captchaOk) {
    return {
      ok: false,
      fieldErrors: { captcha: "Captcha check failed. Please try again." },
      message: "We couldn't verify you're not a bot.",
    };
  }

  // TODO: wire an email/CRM provider here. The provider choice is a product
  // decision (cost, deliverability, CRM hookup) — leaving the integration
  // explicit so submissions surface in dev/preview logs and don't silently
  // disappear. Pick one of:
  //   - Resend:    https://resend.com/docs/send-with-nextjs
  //   - Postmark:  https://postmarkapp.com/developer/api/email-api
  //   - HubSpot:   https://developers.hubspot.com/docs/api/crm/contacts
  //
  // Required env vars (whichever provider): set in Vercel project settings.
  // On wireup, replace this console.info with the actual send + a try/catch
  // that returns { ok: false } on transport failure so users see a real
  // error instead of a false success.
  console.info("[lead-stub] submission received", {
    name,
    email,
    company,
    industry: industry || null,
    challenge: challenge || null,
  });

  return {
    ok: true,
    message: "Thanks — I'll be in touch within one business day.",
  };
}
