"use client";

import { ArrowRight, BarChart2, BookOpen, CheckCircle, Layers } from "lucide-react";
import { fontBody, fontHeading } from "@/components/brand/tokens";
import { useIntersection } from "@/components/primitives/useIntersection";

const PHASES = [
  {
    icon: BarChart2,
    phase: "01",
    title: "Strategy",
    color: "from-blue-600 to-blue-800",
    accent: "text-blue-300",
    border: "border-blue-500/30",
    description:
      "We audit your operations, identify your highest-ROI AI opportunities, and deliver a prioritized implementation roadmap — not a vague transformation vision.",
    outcomes: [
      "AI Readiness Audit report",
      "Prioritized opportunity backlog",
      "90-day implementation roadmap",
      "ROI projections with real numbers",
    ],
  },
  {
    icon: Layers,
    phase: "02",
    title: "Transformation",
    color: "from-orange-600 to-orange-800",
    accent: "text-orange-300",
    border: "border-orange-500/30",
    description:
      "We build and deploy your AI workforce — automated pipelines, LLM-powered agents, and integrations that replace manual processes and generate measurable savings.",
    outcomes: [
      "Production AI deployments",
      "Integrated into your existing stack",
      "Documented, auditable systems",
      "Measurable cost reduction",
    ],
  },
  {
    icon: BookOpen,
    phase: "03",
    title: "Education",
    color: "from-green-600 to-green-800",
    accent: "text-green-300",
    border: "border-green-500/30",
    description:
      "Your team learns to operate the AI systems we build. No black-box dependency on us — we hand off with documentation, training, and ongoing fractional oversight.",
    outcomes: [
      "Team training sessions",
      "System documentation",
      "Governance frameworks",
      "Ongoing strategic oversight",
    ],
  },
] as const;

export function STEFramework() {
  const { ref, visible } = useIntersection();
  return (
    <section id="ste" ref={ref} aria-labelledby="ste-heading" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-600 text-sm font-semibold">The STE Framework</span>
          </div>
          <h2
            id="ste-heading"
            className="font-bold text-slate-900 mb-4"
            style={{ ...fontHeading, fontSize: "clamp(1.75rem, 4vw, 2.25rem)" }}
          >
            How We Turn AI Potential into Business Results
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto" style={fontBody}>
            Three phases. Clear deliverables. Measurable outcomes at every step. No endless pilot
            programs. No vague transformation promises.
          </p>
        </div>

        {/* Phase cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PHASES.map(({ icon: Icon, phase, title, color, accent, border, description, outcomes }) => (
            <div
              key={phase}
              className={`stat-reveal bg-gradient-to-br ${color} rounded-2xl p-6 text-white border ${border} ${
                visible ? "visible" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-4xl font-bold ${accent} opacity-50`} style={fontHeading}>
                  {phase}
                </span>
                <Icon className={`w-8 h-8 ${accent}`} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={fontHeading}>
                {title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-5">{description}</p>
              <ul className="space-y-2">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm">
                    <CheckCircle
                      className="w-4 h-4 text-white/60 mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-white/90">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Flow connector */}
        <div
          className="flex items-center justify-center gap-2 text-slate-500 text-sm"
          aria-label="Framework phases flow left to right"
        >
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold text-xs">
            Strategy
          </span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full font-semibold text-xs">
            Transformation
          </span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold text-xs">
            Education
          </span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
          <span className="px-3 py-1 bg-slate-700 text-white rounded-full font-semibold text-xs">
            Measurable ROI
          </span>
        </div>
      </div>
    </section>
  );
}
