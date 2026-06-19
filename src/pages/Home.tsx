import { HeroSection } from "../components/home/HeroSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { ProcessSection } from "../components/home/ProcessSection";
import { WhyChooseUsSection } from "../components/home/WhyChooseUsSection";
import { SectorsSection } from "../components/home/SectorsSection";
import { TechnologiesSection } from "../components/home/TechnologiesSection";
import { FaqSection } from "../components/home/FaqSection";
import { FinalCtaSection } from "../components/home/FinalCtaSection";

export function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-white">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <SectorsSection />
      <TechnologiesSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}