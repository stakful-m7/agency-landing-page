import { Link } from "lucide-react";
import { fontBody, fontHeading } from "@/components/brand/tokens";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-16 py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/facepic_02.jpg"
              alt="Terrance Jones — Founder &amp; Fractional CTO"
              className="w-64 h-80 rounded-2xl object-cover object-top shadow-2xl ring-1 ring-black/5"
            />
          </div>

          {/* Bio */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-blue-300 text-sm font-medium">Founder & Fractional CTO</span>
            </div>
            <h2
              id="about-heading"
              className="font-bold mb-4"
              style={{ ...fontHeading, fontSize: "clamp(1.5rem, 3.5vw, 2rem)" }}
            >
              Built by someone who&apos;s shipped enterprise AI — not just advised on it
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4" style={fontBody}>
              I&apos;m Terrance. I&apos;ve spent 10+ years in enterprise technology — from Fortune
              500 software delivery to building AI automation systems for mid-market businesses
              across the DFW metroplex.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4" style={fontBody}>
              I started Stakful Systems because I kept seeing the same pattern: DFW business owners
              knew AI was the future but didn&apos;t have the in-house leadership to execute safely.
              So they either over-hired expensive talent, under-used cheap tools, or got sold a
              consulting report that collected dust.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8" style={fontBody}>
              I&apos;m Azure certified, a Microsoft Partner, and I&apos;ve personally deployed AI
              systems that are in production today. When you work with Stakful Systems, you&apos;re
              working with me directly — not a team of generalist consultants.
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
