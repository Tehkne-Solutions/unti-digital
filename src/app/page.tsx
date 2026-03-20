import { Hero } from "@/components/home/hero";
import { Segmentation } from "@/components/home/segmentation";
import { ServicesCarousel } from "@/components/home/services-carousel";
import LogoCloud from "@/components/home/logo-cloud";
import { FeatureBlocks } from "@/components/home/feature-blocks";
import { BlogGrid } from "@/components/home/blog-grid";
import { FinalCTA } from "@/components/home/final-cta";
import { HowWeWork } from "@/components/home/how-we-work";
import { FixedCTA } from "@/components/home/fixed-cta";
import CasesSection from "@/components/CasesSection";
import { SectionReveal } from "@/components/ui/SectionReveal";

export default function HomePage() {
  return (
    <>
      <SectionReveal>
        <Hero />
      </SectionReveal>
      <SectionReveal>
        <LogoCloud />
      </SectionReveal>
      <SectionReveal>
        <Segmentation />
      </SectionReveal>
      <SectionReveal>
        <HowWeWork />
      </SectionReveal>
      <SectionReveal>
        <ServicesCarousel />
      </SectionReveal>
      <SectionReveal>
        <CasesSection />
      </SectionReveal>
      <SectionReveal>
        <FeatureBlocks />
      </SectionReveal>
      <SectionReveal>
        <BlogGrid />
      </SectionReveal>
      <SectionReveal>
        <FinalCTA />
      </SectionReveal>
      <FixedCTA />
    </>
  );
}
