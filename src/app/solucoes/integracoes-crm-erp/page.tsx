import { SolutionPage, SolutionBenefit, SolutionStep } from "@/components/solucoes/SolutionPage";

export const metadata = {
    title: "Automacao Inteligente de Ecossistemas de Dados | Unti Digital",
    description: "Integracoes robustas entre CRM, ERP, marketing e operacao com sincronizacao em tempo real e reducao de retrabalho.",
    keywords: [
        "integracao crm e erp",
        "automacao de processos",
        "sincronizacao de dados em tempo real",
        "integracao salesforce sap",
        "integracao hubspot rd station"
    ],
    alternates: {
        canonical: "/solucoes/integracoes-crm-erp",
    },
    openGraph: {
        title: "Automacao Inteligente de Ecossistemas de Dados | Unti Digital",
        description: "Integracoes robustas entre CRM, ERP, marketing e operacao com sincronizacao em tempo real e reducao de retrabalho.",
        type: "website",
        url: "https://unti-digital.vercel.app/solucoes/integracoes-crm-erp",
    },
};

const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Automacao Inteligente de Ecossistemas de Dados",
    description: "Conectamos CRM, ERP, marketing e operacao com integracoes robustas, automacao e dados em tempo real.",
    provider: {
        "@type": "Organization",
        name: "Unti Digital",
        url: "https://unti-digital.vercel.app",
    },
    areaServed: "BR",
};

const benefits: SolutionBenefit[] = [
    { title: "Fluxos automatizados ponta a ponta", description: "Eliminamos tarefas manuais repetitivas conectando marketing, vendas, financeiro e operacao." },
    { title: "Sincronizacao em tempo real", description: "Os dados circulam entre sistemas criticos com consistencia, rastreabilidade e contexto operacional." },
    { title: "Reducao de falhas humanas", description: "Menos retrabalho, menos duplicidade e mais confianca nas informacoes que sustentam a tomada de decisao." },
    { title: "Integracoes resilientes", description: "Projetamos camadas de integracao com tratamento de erro, monitoramento e escalabilidade." },
];

const processSteps: SolutionStep[] = [
    { title: "Mapeamento de ecossistema", description: "Levantamos sistemas, regras de negocio, fontes de dados e pontos de atrito da operacao." },
    { title: "Arquitetura de integracao", description: "Definimos filas, APIs, webhooks, politicas de sincronizacao e estrategia de observabilidade." },
    { title: "Implementacao robusta", description: "Desenvolvemos as integracoes com validacao de payload, seguranca e documentacao tecnica." },
    { title: "Homologacao e testes", description: "Simulamos cenarios reais para garantir consistencia, performance e comportamento confiavel em producao." },
    { title: "Monitoramento continuo", description: "Acompanhamos logs, falhas e performance para manter os fluxos criticos sempre saudaveis." },
];

export default function IntegracoesPage() {
  return (
    <SolutionPage
      schemaMarkup={schemaMarkup}
      breadcrumb={[{ label: "Solucoes", href: "/solucoes" }, { label: "Integracoes CRM e ERP" }]}
      preTitle="Solucao em Integracoes"
      title="Automacao Inteligente de Ecossistemas de Dados"
      subtitle="Conectamos marketing, vendas e operacao por meio de integracoes robustas entre Salesforce, SAP, RD Station, HubSpot e sistemas proprietarios, eliminando silos de dados e erros manuais."
      benefits={benefits}
      processSteps={processSteps}
      keyMessage="Resultados esperados"
      keyText="Fluxos de trabalho 100% automatizados entre CRM e ERP, sincronizacao de dados em tempo real e reducao drastica de erros operacionais e retrabalho."
    />
  );
}
