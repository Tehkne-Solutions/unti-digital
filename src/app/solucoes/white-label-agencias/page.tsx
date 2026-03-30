import { SolutionPage, SolutionBenefit, SolutionStep } from "@/components/solucoes/SolutionPage";

export const metadata = {
    title: "White Label para Agências | Unti Digital",
    description: "Desenvolvimento sob demanda com sua marca, entrega confidencial e arquitetura robusta.",
    openGraph: {
        title: "White Label para Agências | Unti Digital",
        description: "Desenvolvimento sob demanda com sua marca, entrega confidencial e arquitetura robusta.",
        type: "website",
    },
};

const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "White Label para Agências",
    description: "Desenvolvimento sob demanda com sua marca, entrega confidencial e arquitetura robusta.",
    provider: {
        "@type": "Organization",
        name: "Unti Digital",
        url: "https://unti-digital.vercel.app",
    },
    areaServed: "BR",
};

const benefits: SolutionBenefit[] = [
    { title: "White label completo", description: "Desenvolvimento sob sua marca sem qualquer menção à Unti Digital." },
    { title: "Escala sem riscos", description: "Aumente sua capacidade de entrega sem comprometer outros projetos." },
    { title: "Equipe dedicada", description: "Times especializados focados exclusivamente nos seus projetos." },
];

const processSteps: SolutionStep[] = [
    { title: "Consultoria inicial", description: "Entendemos seus projetos, stack tecnológica e padrões internos." },
    { title: "Seleção de equipe", description: "Alocamos profissionais especializados com expertise no seu segmento." },
    { title: "Alinhamento de processos", description: "Garantimos que nossa operação se integre perfeitamente à sua." },
    { title: "Desenvolvimento", description: "Executamos com a mesma qualidade e padrões que você demanda." },
    { title: "Suporte contínuo", description: "Acompanhamento, melhorias e evolução permanente dos projetos." },
];

export default function WhiteLabelAgenciasPage() {
  return (
    <SolutionPage
      schemaMarkup={schemaMarkup}
      breadcrumb={[{ label: "Soluções", href: "/solucoes" }, { label: "White Label para Agências" }]}
      preTitle="Solução White Label"
      title="White Label Técnico para Agências"
      subtitle="Desenvolvimento sob demanda com sua marca, entrega confidencial e arquitetura robusta."
      benefits={benefits}
      processSteps={processSteps}
      keyMessage="Entrega com confidencialidade"
      keyText="Somos parceiro técnico estratégico de agências, com foco em escalabilidade, deadlines garantidos e total sigilo de marca."
    />
  );
}
