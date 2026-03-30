import { SolutionPage, SolutionBenefit, SolutionStep } from "@/components/solucoes/SolutionPage";

export const metadata = {
    title: "Engenharia de Software para Operacoes Complexas | Unti Digital",
    description: "Plataformas web sob medida com arquitetura modular, integracoes avancadas e escala para operacoes complexas e ambientes SaaS.",
    keywords: [
        "plataformas web sob medida",
        "engenharia de software b2b",
        "arquitetura modular",
        "saas sob medida",
        "sistema web escalavel"
    ],
    alternates: {
        canonical: "/solucoes/plataformas-web",
    },
    openGraph: {
        title: "Engenharia de Software para Operacoes Complexas | Unti Digital",
        description: "Plataformas web sob medida com arquitetura modular, integracoes avancadas e escala para operacoes complexas e ambientes SaaS.",
        type: "website",
        url: "https://unti-digital.vercel.app/solucoes/plataformas-web",
    },
};

const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Engenharia de Software para Operacoes Complexas",
    description: "Desenvolvemos sistemas web personalizados com arquitetura modular, integracoes avancadas e preparo para alta escala.",
    provider: {
        "@type": "Organization",
        name: "Unti Digital",
        url: "https://unti-digital.vercel.app",
    },
    areaServed: "BR",
};

const benefits: SolutionBenefit[] = [
    { title: "Arquitetura pensada para escala", description: "Projetamos a solucao para acompanhar crescimento de usuarios, volume transacional e expansao de produto." },
    { title: "Modularidade para evoluir sem travas", description: "Sua operacao ganha uma base tecnica preparada para novos modulos, integracoes e frentes de negocio." },
    { title: "Integracoes de terceiros sem fragilidade", description: "Conectamos APIs, servicos externos e regras de negocio complexas com previsibilidade operacional." },
    { title: "Governanca tecnica desde a origem", description: "Observabilidade, seguranca e organizacao de codigo entram no projeto desde a primeira entrega." },
];

const processSteps: SolutionStep[] = [
    { title: "Imersao na operacao", description: "Entendemos fluxo, regras de negocio, integracoes e metas para definir a arquitetura certa." },
    { title: "Desenho de arquitetura", description: "Planejamos modulos, camadas e estrategia de escalabilidade de acordo com a complexidade do produto." },
    { title: "Construcao incremental", description: "Desenvolvemos em ciclos curtos com entregas testadas, documentacao tecnica e validacoes frequentes." },
    { title: "Integracao e endurecimento", description: "Conectamos sistemas externos, ajustamos performance e reforcamos estabilidade para producao." },
    { title: "Operacao e evolucao", description: "Acompanhamos a plataforma com monitoramento, backlog tecnico e roadmap de crescimento." },
];

export default function PlataformasWebPage() {
  return (
    <SolutionPage
      schemaMarkup={schemaMarkup}
      breadcrumb={[{ label: "Solucoes", href: "/solucoes" }, { label: "Plataformas Web" }]}
      preTitle="Solucao em Plataformas Web"
      title="Engenharia de Software para Operacoes Complexas"
      subtitle="Desenvolvemos ecossistemas SaaS, dashboards e ferramentas de gestao exclusivas. Nossa arquitetura personalizada garante estabilidade, flexibilidade e escala para operacoes que fogem do convencional."
      benefits={benefits}
      processSteps={processSteps}
      keyMessage="Resultados esperados"
      keyText="Sistemas web personalizados com arquitetura modular de alta escala, capazes de processar operacoes complexas e integracoes de terceiros com 99.9% de disponibilidade."
    />
  );
}
