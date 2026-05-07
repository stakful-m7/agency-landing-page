import { ArrowRight, Award, ChevronDown, Clock, MapPin, Shield } from "lucide-react";
import { fontBody, fontHeading } from "@/components/brand/tokens";

const CREDENTIALS = [
  { icon: MapPin, text: "DFW-Based" },
  { icon: Award, text: "Azure Certified" },
  { icon: Shield, text: "Microsoft Partner" },
  { icon: Clock, text: "10+ Years Enterprise" },
] as const;

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 min-h-screen flex flex-col justify-center relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Credential badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" aria-hidden="true" />
          <span className="text-blue-300 text-sm font-medium">Fractional CTO — DFW Metroplex</span>
        </div>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="text-white font-bold mb-6 leading-tight"
          style={{ ...fontHeading, fontSize: "clamp(2.25rem, 6vw, 3.75rem)", lineHeight: 1.1 }}
        >
          Your AI-Powered CTO
          <br />
          <span className="text-orange-400">for a Fraction of the Cost</span>
        </h1>

        {/* Sub-copy */}
        <p
          className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          style={fontBody}
        >
          DFW businesses get enterprise-grade AI strategy, implementation, and oversight — without the
          $300K+ executive hire. We install an AI workforce that delivers measurable ROI — fast.
        </p>

        {/* ROI pull-quote */}
        <div className="inline-block bg-white/10 border border-white/20 rounded-2xl px-6 py-4 mb-10">
          <p className="text-white text-xl font-bold" style={fontHeading}>
            &ldquo;70% of daily coordinator workflow automated.{" "}
            <span className="text-orange-400">$6,500/month saved.</span>&rdquo;
          </p>
          <p className="text-slate-400 text-sm mt-1">— DFW Connect 3PL, Grand Prairie TX</p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-orange-300 outline-none flex items-center gap-2"
          >
            Book a Free AI Strategy Session
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
          <a
            href="#case-study"
            className="text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-white/50 outline-none"
          >
            See the DFW Connect Case Study
          </a>
        </div>

        {/* Credibility bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
          {CREDENTIALS.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-1.5">
              <Icon className="w-4 h-4 text-blue-400" aria-hidden="true" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-bounce"
        aria-hidden="true"
      >
        <ChevronDown className="w-6 h-6 text-slate-500" />
      </div>
    </section>
  );
}
