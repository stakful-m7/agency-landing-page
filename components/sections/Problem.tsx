"use client";

import { BarChart2, Clock, DollarSign } from "lucide-react";
import { fontBody, fontHeading } from "@/components/brand/tokens";
import { useIntersection } from "@/components/primitives/useIntersection";

const STATS = [
  {
    icon: DollarSign,
    stat: "$300K+",
    label: "Average in-house AI CTO salary",
    sub: "Plus benefits, equity, ramp time. Most DFW SMBs can't absorb that overhead.",
  },
  {
    icon: Clock,
    stat: "9–14 mo",
    label: "Typical AI project timeline without leadership",
    sub: "Misaligned vendors, scope creep, no accountability. Your competitors won't wait.",
  },
  {
    icon: BarChart2,
    stat: "68%",
    label: "AI pilots that never reach production",
    sub: "Proof-of-concept ≠ production ROI. You need an operator, not a researcher.",
  },
] as const;

export function Problem() {
  const { ref, visible } = useIntersection();
  return (
    <section ref={ref} aria-labelledby="problem-heading" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="problem-heading"
            className="font-bold text-slate-900 mb-4"
            style={{ ...fontHeading, fontSize: "clamp(1.75rem, 4vw, 2.25rem)" }}
          >
            DFW Businesses Are Leaving AI ROI on the Table
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto" style={fontBody}>
            You know AI can transform your operations. But without the right leadership, most
            implementations stall, over-spend, or never ship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map(({ icon: Icon, stat, label, sub }) => (
            <div
              key={stat}
              className={`stat-reveal bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white ${
                visible ? "visible" : ""
              }`}
            >
              <Icon className="w-8 h-8 text-orange-400 mb-4" aria-hidden="true" />
              <p className="text-4xl font-bold text-white mb-1" style={fontHeading}>
                {stat}
              </p>
              <p className="text-sm text-slate-300 font-semibold mb-3">{label}</p>
              <p className="text-sm text-slate-400">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
