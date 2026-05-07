"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

export type LeadFieldErrors = Partial<
  Record<"name" | "email" | "company" | "industry" | "challenge" | "captcha", string>
>;

export type LeadState = {
  ok: boolean;
  message?: string;
  fieldErrors?: LeadFieldErrors;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TRANSPORT_FAILURE_MESSAGE =
  "We couldn't submit your request right now. Please email jterrance@stakful.com directly.";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

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

type LeadFields = {
  name: string;
  email: string;
  company: string;
  industry: string;
  challenge: string;
};

async function deliverLead(fields: LeadFields): Promise<{ ok: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "leads@stakful.com";
  const toEmail = process.env.RESEND_TO_EMAIL ?? "jterrance@stakful.com";

  if (!apiKey) {
    // Provider not configured — refuse to fake a success. The user will see
    // the transport-failure message and a fallback mailto.
    console.error(
      "[lead] RESEND_API_KEY not set — submission was validated but not delivered",
      { email: fields.email, company: fields.company }
    );
    return { ok: false };
  }

  const resend = new Resend(apiKey);

  const subject = `New strategy session request — ${fields.name} (${fields.company})`;
  const textBody = [
    `Name:      ${fields.name}`,
    `Email:     ${fields.email}`,
    `Company:   ${fields.company}`,
    `Industry:  ${fields.industry || "(not provided)"}`,
    "",
    "Biggest operational challenge:",
    fields.challenge || "(not provided)",
  ].join("\n");

  const htmlBody = `
    <table cellpadding="0" cellspacing="0" border="0" style="font-family: system-ui, -apple-system, sans-serif; color: #0F172A; line-height: 1.5;">
      <tr><td style="padding: 4px 12px 4px 0;"><strong>Name</strong></td><td>${escapeHtml(fields.name)}</td></tr>
      <tr><td style="padding: 4px 12px 4px 0;"><strong>Email</strong></td><td><a href="mailto:${escapeHtml(fields.email)}">${escapeHtml(fields.email)}</a></td></tr>
      <tr><td style="padding: 4px 12px 4px 0;"><strong>Company</strong></td><td>${escapeHtml(fields.company)}</td></tr>
      <tr><td style="padding: 4px 12px 4px 0;"><strong>Industry</strong></td><td>${escapeHtml(fields.industry || "(not provided)")}</td></tr>
    </table>
    <p style="font-family: system-ui, -apple-system, sans-serif; color: #0F172A; margin-top: 24px;"><strong>Biggest operational challenge:</strong></p>
    <p style="font-family: system-ui, -apple-system, sans-serif; color: #334155; white-space: pre-wrap;">${escapeHtml(fields.challenge || "(not provided)")}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: `Stakful Lead <${fromEmail}>`,
      to: toEmail,
      replyTo: fields.email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    if (error) {
      console.error("[lead] resend returned error", error);
      return { ok: false };
    }

    return { ok: true };
  } catch (e) {
    console.error("[lead] resend transport failure", e);
    return { ok: false };
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

  const delivered = await deliverLead({ name, email, company, industry, challenge });
  if (!delivered.ok) {
    return { ok: false, message: TRANSPORT_FAILURE_MESSAGE };
  }

  return {
    ok: true,
    message: "Thanks — I'll be in touch within one business day.",
  };
}
