"use client";

import { useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  MapPin,
  Award,
  Shield,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  ChevronDown,
  BarChart2,
  Layers,
  BookOpen,
  DollarSign,
  Clock,
  Star,
  Menu,
  X,
  Mail,
  Link,
} from "lucide-react";

// ── Utility ────────────────────────────────────────────────
function useIntersection(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ── Navbar ──────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 shadow-lg" : "bg-slate-900"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm outline-none">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center" aria-hidden="true">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>
              Stakful M7
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {[
              { href: "#ste", label: "Our Approach" },
              { href: "#services", label: "Services" },
              { href: "#case-study", label: "Case Study" },
              { href: "#about", label: "About" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm outline-none"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-orange-300 outline-none"
            >
              Book a Free AI Strategy Session
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm outline-none p-1"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-slate-800 py-4 flex flex-col gap-4">
            {[
              { href: "#ste", label: "Our Approach" },
              { href: "#services", label: "Services" },
              { href: "#case-study", label: "Case Study" },
              { href: "#about", label: "About" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-white font-medium transition-colors px-2 py-1"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-3 rounded-lg text-sm font-semibold transition-colors text-center"
            >
              Book a Free AI Strategy Session
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// ── Hero ────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 min-h-screen flex flex-col justify-center relative"
    >
      {/* Skip nav target */}
      <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Credential badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" aria-hidden="true" />
          <span className="text-blue-300 text-sm font-medium">Fractional AI CTO — DFW Metroplex</span>
        </div>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="text-white font-bold mb-6 leading-tight"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.25rem, 6vw, 3.75rem)", lineHeight: 1.1 }}
        >
          Your AI-Powered CTO
          <br />
          <span className="text-orange-400">for a Fraction of the Cost</span>
        </h1>

        {/* Sub-copy */}
        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
          DFW businesses get enterprise-grade AI strategy, implementation, and oversight — without the $300K+ executive hire.
          We install an AI workforce that delivers measurable ROI — fast.
        </p>

        {/* ROI pull-quote */}
        <div className="inline-block bg-white/10 border border-white/20 rounded-2xl px-6 py-4 mb-10">
          <p className="text-white text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            &ldquo;70% of daily coordinator workflow automated. <span className="text-orange-400">$6,500/month saved.</span>&rdquo;
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
          {[
            { icon: MapPin, text: "DFW-Based" },
            { icon: Award, text: "Azure Certified" },
            { icon: Shield, text: "Microsoft Partner" },
            { icon: Clock, text: "20+ Years Enterprise" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-1.5">
              <Icon className="w-4 h-4 text-blue-400" aria-hidden="true" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </main>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <ChevronDown className="w-6 h-6 text-slate-500" />
      </div>
    </section>
  );
}

// ── Problem Section ─────────────────────────────────────────
function Problem() {
  const { ref, visible } = useIntersection();
  return (
    <section
      ref={ref}
      aria-labelledby="problem-heading"
      className="py-20 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="problem-heading"
            className="font-bold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 4vw, 2.25rem)" }}
          >
            DFW Businesses Are Leaving AI ROI on the Table
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            You know AI can transform your operations. But without the right leadership, most implementations
            stall, over-spend, or never ship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
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
          ].map(({ icon: Icon, stat, label, sub }) => (
            <div
              key={stat}
              className={`stat-reveal bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white ${visible ? "visible" : ""}`}
            >
              <Icon className="w-8 h-8 text-orange-400 mb-4" aria-hidden="true" />
              <p className="text-4xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-heading)" }}>{stat}</p>
              <p className="text-sm text-slate-300 font-semibold mb-3">{label}</p>
              <p className="text-sm text-slate-400">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── STE Framework ───────────────────────────────────────────
function STEFramework() {
  const { ref, visible } = useIntersection();
  const phases = [
    {
      icon: BarChart2,
      phase: "01",
      title: "Strategy",
      color: "from-blue-600 to-blue-800",
      accent: "text-blue-300",
      border: "border-blue-500/30",
      description: "We audit your operations, identify your highest-ROI AI opportunities, and deliver a prioritized implementation roadmap — not a vague transformation vision.",
      outcomes: ["AI Readiness Audit report", "Prioritized opportunity backlog", "90-day implementation roadmap", "ROI projections with real numbers"],
    },
    {
      icon: Layers,
      phase: "02",
      title: "Transformation",
      color: "from-orange-600 to-orange-800",
      accent: "text-orange-300",
      border: "border-orange-500/30",
      description: "We build and deploy your AI workforce — automated pipelines, LLM-powered agents, and integrations that replace manual processes and generate measurable savings.",
      outcomes: ["Production AI deployments", "Integrated into your existing stack", "Documented, auditable systems", "Measurable cost reduction"],
    },
    {
      icon: BookOpen,
      phase: "03",
      title: "Education",
      color: "from-green-600 to-green-800",
      accent: "text-green-300",
      border: "border-green-500/30",
      description: "Your team learns to operate the AI systems we build. No black-box dependency on us — we hand off with documentation, training, and ongoing fractional oversight.",
      outcomes: ["Team training sessions", "System documentation", "Governance frameworks", "Ongoing strategic oversight"],
    },
  ];

  return (
    <section
      id="ste"
      ref={ref}
      aria-labelledby="ste-heading"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-600 text-sm font-semibold">The STE Framework</span>
          </div>
          <h2
            id="ste-heading"
            className="font-bold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 4vw, 2.25rem)" }}
          >
            How We Turn AI Potential into Business Results
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Three phases. Clear deliverables. Measurable outcomes at every step.
            No endless pilot programs. No vague transformation promises.
          </p>
        </div>

        {/* Phase cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {phases.map(({ icon: Icon, phase, title, color, accent, border, description, outcomes }) => (
            <div
              key={phase}
              className={`stat-reveal bg-gradient-to-br ${color} rounded-2xl p-6 text-white border ${border} ${visible ? "visible" : ""}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-4xl font-bold ${accent} opacity-50`} style={{ fontFamily: "var(--font-heading)" }}>{phase}</span>
                <Icon className={`w-8 h-8 ${accent}`} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>{title}</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-5">{description}</p>
              <ul className="space-y-2">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-white/60 mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-white/90">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Flow connector */}
        <div className="flex items-center justify-center gap-2 text-slate-500 text-sm" aria-label="Framework phases flow left to right">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold text-xs">Strategy</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full font-semibold text-xs">Transformation</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold text-xs">Education</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
          <span className="px-3 py-1 bg-slate-700 text-white rounded-full font-semibold text-xs">Measurable ROI</span>
        </div>
      </div>
    </section>
  );
}

// ── Service Tiers ───────────────────────────────────────────
function Services() {
  const { ref, visible } = useIntersection();
  const tiers = [
    {
      title: "AI Readiness Audit",
      price: "$5K – $15K",
      duration: "One-time engagement",
      tagline: "Know exactly where AI will deliver ROI before spending a dollar on implementation.",
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
      tagline: "We build, deploy, and hand off production AI systems that generate measurable cost savings.",
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
      title: "Fractional AI CTO Retainer",
      price: "$5K – $15K/mo",
      duration: "Ongoing engagement",
      tagline: "Executive-level AI leadership without the executive salary. Strategy, oversight, and accountability every month.",
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
  ];

  return (
    <section
      id="services"
      ref={ref}
      aria-labelledby="services-heading"
      className="py-24 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="services-heading"
            className="font-bold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 4vw, 2.25rem)" }}
          >
            Engagements Built for DFW Business Owners
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Choose the level of AI leadership that matches your stage.
            Every engagement starts with a free AI Strategy Session.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map(({ title, price, duration, tagline, icon: Icon, highlight, outcomes, cta, roi }) => (
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
                  <span className="text-orange-400 text-xs font-semibold uppercase tracking-wide">Most Popular</span>
                </div>
              )}

              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${highlight ? "bg-orange-500/20" : "bg-blue-50"}`}>
                <Icon className={`w-5 h-5 ${highlight ? "text-orange-400" : "text-blue-600"}`} aria-hidden="true" />
              </div>

              <h3 className="font-bold text-xl mb-1" style={{ fontFamily: "var(--font-heading)" }}>{title}</h3>
              <p className={`text-3xl font-bold mb-1 ${highlight ? "text-white" : "text-slate-900"}`} style={{ fontFamily: "var(--font-heading)" }}>
                {price}
              </p>
              <p className={`text-sm mb-4 ${highlight ? "text-slate-400" : "text-slate-500"}`}>{duration}</p>
              <p className={`text-sm leading-relaxed mb-6 ${highlight ? "text-slate-300" : "text-slate-600"}`}>
                {tagline}
              </p>

              {/* ROI callout */}
              <div className={`rounded-xl px-4 py-2 mb-5 text-sm font-semibold ${highlight ? "bg-orange-500/20 text-orange-300" : "bg-green-50 text-green-700"}`}>
                <TrendingUp className="w-4 h-4 inline mr-1.5" aria-hidden="true" />
                {roi}
              </div>

              <ul className="space-y-2 mb-8 flex-1">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm">
                    <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${highlight ? "text-green-400" : "text-green-600"}`} aria-hidden="true" />
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

// ── Case Study ──────────────────────────────────────────────
function CaseStudy() {
  const { ref, visible } = useIntersection();
  const metrics = [
    { value: "70%", label: "Daily coordinator workflow automated" },
    { value: "$6,500", label: "Logistics coordinator cost replaced per month" },
    { value: "3×", label: "Delivery velocity vs. prior vendor" },
    { value: "6 weeks", label: "Kickoff to production go-live" },
  ];

  return (
    <section
      id="case-study"
      ref={ref}
      aria-labelledby="case-study-heading"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-green-700 text-sm font-semibold">Client Case Study</span>
          </div>
          <h2
            id="case-study-heading"
            className="font-bold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 4vw, 2.25rem)" }}
          >
            DFW Connect 3PL — Grand Prairie, TX
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            A third-party logistics company drowning in manual data entry. We automated their inbound freight
            processing pipeline and went from kickoff to production go-live in 6 weeks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <div>
            <div className="mb-8">
              <h3 className="font-bold text-slate-900 text-xl mb-3" style={{ fontFamily: "var(--font-heading)" }}>The Problem</h3>
              <p className="text-slate-600 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                DFW Connect was processing 400+ inbound shipments per week using a team of 3 data-entry clerks.
                Every Bill of Lading was manually transcribed into their WMS. Errors were costing them carrier
                claims and lost inventory. Staff turnover was constant because the work was mind-numbing.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="font-bold text-slate-900 text-xl mb-3" style={{ fontFamily: "var(--font-heading)" }}>What We Built</h3>
              <ul className="space-y-3 text-slate-600" style={{ fontFamily: "var(--font-body)" }}>
                {[
                  "Document AI pipeline to extract structured data from BOL images (Azure Document Intelligence)",
                  "Automated integration pushing verified data directly to their warehouse management system",
                  "Exception handling workflow routing only edge cases to human review",
                  "Real-time accuracy dashboard for operations manager visibility",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center shrink-0" aria-hidden="true">
                  <Users className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <p className="text-slate-700 italic text-sm leading-relaxed mb-2">
                    &ldquo;We had been burned twice before. The Stakful M7 team was different &mdash; they showed us their process,
                    their governance model, and their test coverage before writing a single line of production code.
                    Six weeks later we were live.&rdquo;
                  </p>
                  <p className="text-slate-500 text-xs font-semibold">Operations Director, DFW Connect 3PL</p>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map(({ value, label }, i) => (
              <div
                key={value}
                className={`stat-reveal bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 text-white ${visible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-heading)" }}>{value}</p>
                <p className="text-sm text-slate-400">{label}</p>
              </div>
            ))}
            <div className="col-span-2 bg-orange-500 rounded-2xl p-5 text-white">
              <p className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-heading)" }}>The Outcome</p>
              <p className="text-orange-100 text-sm leading-relaxed">
                94% reduction in manual dispatch errors. Zero manual BOL entry.
                Billing lag revenue leakage eliminated (3–7% of gross revenue recovered).
                Fractional AI CTO retainer activated — Phase 2 roadmap already underway.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Credentials ─────────────────────────────────────────────
function Credentials() {
  const creds = [
    { icon: Shield, title: "Microsoft Partner", sub: "Active partner network member" },
    { icon: Award, title: "Azure Certified", sub: "Azure Solutions Architect Expert" },
    { icon: Clock, title: "20+ Years Enterprise", sub: "Fortune 500 to mid-market" },
    { icon: MapPin, title: "DFW-Based", sub: "Serving the DFW Metroplex" },
  ];
  const stack = [
    "Azure AI Foundry", "OpenAI", "Azure Document Intelligence",
    "Microsoft Fabric", "Power Platform", "Next.js", "Python", ".NET / C#",
  ];

  return (
    <section
      aria-labelledby="creds-heading"
      className="py-20 bg-white border-t border-slate-100"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="creds-heading"
          className="sr-only"
        >
          Credentials and Technology Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {creds.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-50">
              <Icon className="w-8 h-8 text-blue-600 mb-2" aria-hidden="true" />
              <p className="font-semibold text-slate-900 text-sm" style={{ fontFamily: "var(--font-heading)" }}>{title}</p>
              <p className="text-slate-500 text-xs mt-1">{sub}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="text-center text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wider">Technology Stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full font-medium">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── About / Founder ─────────────────────────────────────────
function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/facepic_02.jpg"
              alt="Terrance Jones — Founder &amp; Fractional AI CTO"
              className="w-64 h-80 rounded-2xl object-cover object-top shadow-2xl ring-1 ring-black/5"
            />
          </div>

          {/* Bio */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-blue-300 text-sm font-medium">Founder & Fractional AI CTO</span>
            </div>
            <h2
              id="about-heading"
              className="font-bold mb-4"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3.5vw, 2rem)" }}
            >
              Built by someone who&apos;s shipped enterprise AI — not just advised on it
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
              I&apos;m Terrance. I&apos;ve spent 20+ years in enterprise technology — from Fortune 500 software
              delivery to building AI automation systems for mid-market businesses across the DFW metroplex.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
              I started Stakful M7 Ventures because I kept seeing the same pattern: DFW business owners knew
              AI was the future but didn&apos;t have the in-house leadership to execute safely. So they either
              over-hired expensive talent, under-used cheap tools, or got sold a consulting report that
              collected dust.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
              I&apos;m Azure certified, a Microsoft Partner, and I&apos;ve personally deployed AI systems that
              are in production today. When you work with Stakful M7, you&apos;re working with me directly — not
              a team of generalist consultants.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-orange-300 outline-none text-sm"
              >
                Book a Free AI Strategy Session
              </a>
              <a
                href="https://www.linkedin.com/in/terrance-jones-677268123/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Terrance on LinkedIn"
                className="flex items-center gap-2 text-slate-300 hover:text-white border border-white/20 hover:bg-white/10 px-4 py-3 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-white/50 outline-none text-sm font-semibold"
              >
                <Link className="w-4 h-4" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CTA Section ─────────────────────────────────────────────
function CTASection() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="py-24 bg-white"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-orange-600 text-sm font-semibold">Free — No obligation</span>
        </div>
        <h2
          id="cta-heading"
          className="font-bold text-slate-900 mb-4"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 4vw, 2.25rem)" }}
        >
          Book a Free AI Strategy Session
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-10" style={{ fontFamily: "var(--font-body)" }}>
          In 30 minutes, we&apos;ll identify your highest-ROI AI opportunity, give you a realistic implementation
          estimate, and tell you exactly what to do next — whether you work with us or not.
        </p>

        {/* Lead capture form */}
        <form
          className="text-left bg-slate-50 border border-slate-200 rounded-2xl p-8 max-w-lg mx-auto"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Book a Free AI Strategy Session"
        >
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none min-h-[44px] bg-white"
              placeholder="First and last name"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">Work Email</label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none min-h-[44px] bg-white"
              placeholder="you@company.com"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-1">Company & Industry</label>
            <input
              id="company"
              type="text"
              name="company"
              autoComplete="organization"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none min-h-[44px] bg-white"
              placeholder="Acme Corp — Logistics"
              required
            />
          </div>
          <div className="mb-7">
            <label htmlFor="challenge" className="block text-sm font-semibold text-slate-700 mb-1">Biggest operational challenge right now</label>
            <textarea
              id="challenge"
              name="challenge"
              rows={3}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none bg-white resize-none"
              placeholder="e.g. We process 500 invoices/week manually and it&apos;s killing us..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-orange-300 outline-none flex items-center justify-center gap-2 min-h-[44px]"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            Book My Free Strategy Session
          </button>
          <p className="text-center text-slate-400 text-xs mt-4">
            No sales pitch. Just a real conversation about your operations and AI potential.
          </p>
        </form>

        <p className="mt-6 text-slate-500 text-sm">
          Prefer email?{" "}
          <a href="mailto:terrance@stakfulm7.com" className="text-blue-600 hover:text-blue-700 font-medium focus-visible:ring-2 focus-visible:ring-blue-300 rounded-sm outline-none">
            terrance@stakfulm7.com
          </a>
        </p>
      </div>
    </section>
  );
}

// ── Footer ──────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-slate-900 border-t border-slate-800 py-12"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center" aria-hidden="true">
                <Zap className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-white font-bold" style={{ fontFamily: "var(--font-heading)" }}>Stakful M7 Ventures</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Fractional AI CTO services for DFW businesses. Azure certified. Microsoft Partner.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-slate-300 font-semibold text-sm mb-3" style={{ fontFamily: "var(--font-heading)" }}>Navigation</p>
            <ul className="space-y-2">
              {[
                { href: "#ste", label: "Our Approach" },
                { href: "#services", label: "Services & Pricing" },
                { href: "#case-study", label: "Case Study" },
                { href: "#about", label: "About Terrance" },
                { href: "#contact", label: "Book a Free AI Strategy Session" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-slate-400 hover:text-white text-sm transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm outline-none">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-slate-300 font-semibold text-sm mb-3" style={{ fontFamily: "var(--font-heading)" }}>Contact</p>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                Serving the DFW Metroplex
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                <a href="mailto:terrance@stakfulm7.com" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm outline-none">
                  terrance@stakfulm7.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Link className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                <a href="https://www.linkedin.com/in/terrance-jones-677268123/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm outline-none">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Stakful M7 Ventures. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
            <span>DFW Metroplex, Texas</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Page Assembly ───────────────────────────────────────────
export default function LandingPage() {
  return (
    <>
      <a href="#main-content" className="skip-nav">Skip to main content</a>
      <Navbar />
      <Hero />
      <Problem />
      <STEFramework />
      <Services />
      <CaseStudy />
      <Credentials />
      <About />
      <CTASection />
      <Footer />
    </>
  );
}
