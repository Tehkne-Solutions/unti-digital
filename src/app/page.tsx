import { Hero } from "@/components/home/hero";
import { Segmentation } from "@/components/home/segmentation";
import { ServicesCarousel } from "@/components/home/services-carousel";
import { LogoCloud } from "@/components/home/logo-cloud";
import { CaseStudies } from "@/components/home/case-studies";
import { FeatureBlocks } from "@/components/home/feature-blocks";
import { BlogGrid } from "@/components/home/blog-grid";
import { FinalCTA } from "@/components/home/final-cta";
import { HowWeWork } from "@/components/home/how-we-work";
import { FixedCTA } from "@/components/home/fixed-cta";
import CasesSection from "@/components/CasesSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Segmentation />
      <HowWeWork />
      <ServicesCarousel />
      <LogoCloud />
      <CasesSection />
      <CaseStudies />
      <FeatureBlocks />
      <BlogGrid />
      <FinalCTA />
      <FixedCTA />
    </>
  );
}
