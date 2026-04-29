"use client";

import { BarChart2, CheckCircle, Star, TrendingUp, Users, Zap } from "lucide-react";
import { fontBody, fontHeading } from "@/components/brand/tokens";
import { useIntersection } from "@/components/primitives/useIntersection";

const TIERS = [
  {
    title: "AI Readiness Audit",
    price: "$5K – $15K",
    duration: "One-time engagement",
    tagline:
      "Know exactly where AI will deliver ROI before spending a dollar on implementation.",
    icon: BarChart2,
    highlight: false,
    outcomes: [
      "Prioritized AI opportunity map",
      "Realistic ROI projections",
      "Vendor evaluation criteria",
      "90-day implementation roadmap",
      "Risk and compliance assessment",
    ],
    cta: "Start with a Strategy Session",
    roi: "Avg. 3–5× ROI identification",
  },
  {
    title: "Custom AI Implementation",
    price: "$15K – $80K",
    duration: "90-day project",
    tagline:
      "We build, deploy, and hand off production AI systems that generate measurable cost savings.",
    icon: Zap,
    highlight: true,
    outcomes: [
      "Production AI pipeline deployment",
      "Full integration with existing stack",
      "Documented, auditable codebase",
      "Team training and handoff",
      "30-day post-launch support",
    ],
    cta: "Book a Free AI Strategy Session",
    roi: "Avg. $50K+ annual savings",
  },
  {
    title: "Fractional CTO Retainer",
    price: "$5K – $15K/mo",
    duration: "Ongoing engagement",
    tagline:
      "Executive-level AI leadership without the executive salary. Strategy, oversight, and accountability every month.",
    icon: Users,
    highlight: false,
    outcomes: [
      "Monthly strategy and prioritization",
      "Vendor management and oversight",
      "AI governance and compliance",
      "Team capability development",
      "Board-level AI reporting",
    ],
    cta: "Explore the Retainer",
    roi: "Replaces $300K+ exec hire",
  },
] as const;

export function ServiceTiers() {
  const { ref, visible } = useIntersection();
  return (
    <section id="services" ref={ref} aria-labelledby="services-heading" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="services-heading"
            className="font-bold text-slate-900 mb-4"
            style={{ ...fontHeading, fontSize: "clamp(1.75rem, 4vw, 2.25rem)" }}
          >
            Engagements Built for DFW Business Owners
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto" style={fontBody}>
            Choose the level of AI leadership that matches your stage. Every engagement starts with
            a free AI Strategy Session.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map(({ title, price, duration, tagline, icon: Icon, highlight, outcomes, cta, roi }) => (
            <div
              key={title}
              className={`stat-reveal rounded-2xl p-6 flex flex-col ${visible ? "visible" : ""} ${
                highlight
                  ? "bg-slate-900 text-white ring-2 ring-orange-500 scale-105"
                  : "bg-white border border-slate-200 text-slate-900"
              }`}
            >
              {highlight && (
                <div className="flex items-center gap-1.5 mb-4">
                  <Star className="w-4 h-4 text-orange-400 fill-orange-400" aria-hidden="true" />
                  <span className="text-orange-400 text-xs font-semibold uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                  highlight ? "bg-orange-500/20" : "bg-blue-50"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${highlight ? "text-orange-400" : "text-blue-600"}`}
                  aria-hidden="true"
                />
              </div>

              <h3 className="font-bold text-xl mb-1" style={fontHeading}>
                {title}
              </h3>
              <p
                className={`text-3xl font-bold mb-1 ${highlight ? "text-white" : "text-slate-900"}`}
                style={fontHeading}
              >
                {price}
              </p>
              <p className={`text-sm mb-4 ${highlight ? "text-slate-400" : "text-slate-500"}`}>
                {duration}
              </p>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  highlight ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {tagline}
              </p>

              {/* ROI callout */}
              <div
                className={`rounded-xl px-4 py-2 mb-5 text-sm font-semibold ${
                  highlight ? "bg-orange-500/20 text-orange-300" : "bg-green-50 text-green-700"
                }`}
              >
                <TrendingUp className="w-4 h-4 inline mr-1.5" aria-hidden="true" />
                {roi}
              </div>

              <ul className="space-y-2 mb-8 flex-1">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm">
                    <CheckCircle
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        highlight ? "text-green-400" : "text-green-600"
                      }`}
                      aria-hidden="true"
                    />
                    <span className={highlight ? "text-slate-300" : "text-slate-600"}>{o}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`rounded-xl px-6 py-3 text-sm font-semibold text-center transition-colors cursor-pointer focus-visible:ring-2 outline-none ${
                  highlight
                    ? "bg-orange-500 hover:bg-orange-600 text-white focus-visible:ring-orange-300"
                    : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-300"
                }`}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
