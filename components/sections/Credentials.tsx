import { Award, Clock, MapPin, Shield } from "lucide-react";
import { fontHeading } from "@/components/brand/tokens";

const CREDS = [
  { icon: Shield, title: "Microsoft Partner", sub: "Active partner network member" },
  { icon: Award, title: "Azure Certified", sub: "Azure Solutions Architect Expert" },
  { icon: Clock, title: "10+ Years Enterprise", sub: "Fortune 500 to mid-market" },
  { icon: MapPin, title: "DFW-Based", sub: "Serving the DFW Metroplex" },
] as const;

const STACK = [
  "Azure AI Foundry",
  "OpenAI",
  "Azure Document Intelligence",
  "Microsoft Fabric",
  "Power Platform",
  "Next.js",
  "Python",
  ".NET / C#",
] as const;

export function Credentials() {
  return (
    <section aria-labelledby="creds-heading" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="creds-heading" className="sr-only">
          Credentials and Technology Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {CREDS.map(({ icon: Icon, title, sub }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-50"
            >
              <Icon className="w-8 h-8 text-blue-600 mb-2" aria-hidden="true" />
              <p className="font-semibold text-slate-900 text-sm" style={fontHeading}>
                {title}
              </p>
              <p className="text-slate-500 text-xs mt-1">{sub}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="text-center text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wider">
            Technology Stack
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {STACK.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
