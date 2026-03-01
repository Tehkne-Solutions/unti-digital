import { Hero } from "@/components/home/hero";
import { Segmentation } from "@/components/home/segmentation";
import { ServicesCarousel } from "@/components/home/services-carousel";
import { LogoCloud } from "@/components/home/logo-cloud";
import { CaseStudies } from "@/components/home/case-studies";
import { FeatureBlocks } from "@/components/home/feature-blocks";
import { BlogGrid } from "@/components/home/blog-grid";
import { FinalCTA } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Segmentation />
      <ServicesCarousel />
      <LogoCloud />
      <CaseStudies />
      <FeatureBlocks />
      <BlogGrid />
      <FinalCTA />
    </>
  );
}
