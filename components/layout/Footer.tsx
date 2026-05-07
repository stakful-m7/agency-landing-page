import { Link, Mail, MapPin } from "lucide-react";
import { StakfulLogo } from "@/components/brand/StakfulLogo";
import { fontHeading } from "@/components/brand/tokens";

const FOOTER_NAV = [
  { href: "#ste", label: "Our Approach" },
  { href: "#services", label: "Services & Pricing" },
  { href: "#case-study", label: "Case Study" },
  { href: "#about", label: "About Terrance" },
  { href: "#contact", label: "Book a Free AI Strategy Session" },
] as const;

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center"
                aria-hidden="true"
              >
                <StakfulLogo className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold" style={fontHeading}>
                Stakful Systems
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Fractional CTO services for DFW businesses. Azure certified. Microsoft Partner.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-slate-300 font-semibold text-sm mb-3" style={fontHeading}>
              Navigation
            </p>
            <ul className="space-y-2">
              {FOOTER_NAV.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-slate-400 hover:text-white text-sm transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm outline-none"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-slate-300 font-semibold text-sm mb-3" style={fontHeading}>
              Contact
            </p>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                Serving the DFW Metroplex
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                <a
                  href="mailto:jterrance@stakful.com"
                  className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm outline-none"
                >
                  jterrance@stakful.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Link className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                <a
                  href="https://www.linkedin.com/in/terrance-jones-677268123/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm outline-none"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Stakful Systems. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
            <span>DFW Metroplex, Texas</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
