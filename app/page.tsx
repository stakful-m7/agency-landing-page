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

export default function LandingPage() {
  return (
    <>
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>
      <Navbar />
      <Hero />
      <Problem />
      <STEFramework />
      <ServiceTiers />
      <CaseStudyDFW />
      <Credentials />
      <About />
      <ContactCTA />
      <Footer />
    </>
  );
}
