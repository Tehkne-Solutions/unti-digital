import { SolutionPage, SolutionBenefit, SolutionStep } from "@/components/solucoes/SolutionPage";

export const metadata = {
    title: "Plataformas Web Sob Medida | Unti Digital",
    description: "Arquitetura personalizada para operações complexas com integrações avançadas em alta escala.",
    openGraph: {
        title: "Plataformas Web Sob Medida | Unti Digital",
        description: "Arquitetura personalizada para operações complexas com integrações avançadas em alta escala.",
        type: "website",
    },
};

const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plataformas Web Sob Medida",
    description: "Arquitetura personalizada para operações complexas com integrações avançadas em alta escala.",
    provider: {
        "@type": "Organization",
        name: "Unti Digital",
        url: "https://unti-digital.vercel.app",
    },
    areaServed: "BR",
};

const benefits: SolutionBenefit[] = [
    { title: "Arquitetura personalizada", description: "Desenvolvemos a estrutura técnica exatamente conforme as necessidades do seu negócio." },
    { title: "Integrações avançadas", description: "Conectamos com ferramentas e sistemas complexos para operação seamless." },
    { title: "Performance em alta escala", description: "Plataformas preparadas para crescer sem limites com infraestrutura robusta." },
];

const processSteps: SolutionStep[] = [
    { title: "Levantamento técnico", description: "Mapeamos todas as necessidades, integrações e requisitos de performance." },
    { title: "Arquitetura", description: "Projetamos a estrutura técnica otimizada para seu caso de uso específico." },
    { title: "Desenvolvimento", description: "Desenvolvimento estruturado com código testado e documentado." },
    { title: "Integrações", description: "Conectamos com todos os sistemas necessários de forma segura e eficiente." },
    { title: "Governança", description: "Implementamos controles, monitoring e evolução contínua da plataforma." },
];

export default function PlataformasWebPage() {
  return (
    <SolutionPage
      schemaMarkup={schemaMarkup}
      breadcrumb={[{ label: "Soluções", href: "/solucoes" }, { label: "Plataformas Web" }]}
      preTitle="Solução em Plataformas Web"
      title="Plataformas Web Sob Medida"
      subtitle="Arquitetura personalizada para operações complexas com integrações avançadas em alta escala."
      benefits={benefits}
      processSteps={processSteps}
      keyMessage="Resultados esperados"
      keyText="SaaS com performance, marketplace escalável e sistema de dados em tempo real, construídos para operar milhões de eventos diários."
    />
  );
}
