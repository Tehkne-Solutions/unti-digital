import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { About } from "@/components/home/about";
import { Clients } from "@/components/home/clients";
import { Numbers } from "@/components/home/numbers";
import { CtaIntegration } from "@/components/home/cta-integration";
import { ProjectHighlight } from "@/components/home/project-highlight";
import { Testimonials } from "@/components/home/testimonials";
import { CtaFinal } from "@/components/home/cta-final";
import { BlogSection } from "@/components/home/blog";

export default function HomePage() {
  return (
    <div className="space-y-2">
      <Hero />
      <Services />
      <About />
      <Clients />
      <Numbers />
      <CtaIntegration />
      <ProjectHighlight />
      <Testimonials />
      <CtaFinal />
      <BlogSection />
    </div>
  );
}
