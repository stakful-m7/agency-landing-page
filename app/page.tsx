import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { STEFramework } from "@/components/sections/STEFramework";
import { ServiceTiers } from "@/components/sections/ServiceTiers";
import { CaseStudyDFW } from "@/components/sections/CaseStudyDFW";
import { Credentials } from "@/components/sections/Credentials";
import { About } from "@/components/sections/About";
import { ContactCTA } from "@/components/sections/ContactCTA";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stakful.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "Stakful Systems",
      description:
        "Fractional CTO services for DFW businesses. AI strategy, implementation, and oversight without a $300K+ executive hire.",
      url: SITE_URL,
      email: "jterrance@stakful.com",
      areaServed: {
        "@type": "Place",
        name: "Dallas-Fort Worth Metroplex",
      },
      address: {
        "@type": "PostalAddress",
        addressRegion: "TX",
        addressCountry: "US",
      },
      founder: { "@id": `${SITE_URL}/#founder` },
      knowsAbout: [
        "Fractional CTO",
        "AI implementation",
        "Microsoft Azure",
        "Azure AI Foundry",
        "Document Intelligence",
        "Microsoft Fabric",
        "Power Platform",
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#founder`,
      name: "Terrance Jones",
      jobTitle: "Founder & Fractional CTO",
      worksFor: { "@id": `${SITE_URL}/#business` },
      sameAs: ["https://www.linkedin.com/in/terrance-jones-677268123/"],
      email: "jterrance@stakful.com",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Stakful Systems",
      publisher: { "@id": `${SITE_URL}/#business` },
      inLanguage: "en-US",
    },
  ],
};

export default function LandingPage() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Problem />
        <STEFramework />
        <ServiceTiers />
        <CaseStudyDFW />
        <Credentials />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
