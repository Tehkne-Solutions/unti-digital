import { SolutionPage, SolutionBenefit, SolutionStep } from "@/components/solucoes/SolutionPage";

export const metadata = {
    title: "Integrações CRM e ERP | Unti Digital",
    description: "Conecte marketing, vendas e operação através de integrações robustas que automatizam processos.",
    openGraph: {
        title: "Integrações CRM e ERP | Unti Digital",
        description: "Conecte marketing, vendas e operação através de integrações robustas que automatizam processos.",
        type: "website",
    },
};

const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Integrações CRM e ERP",
    description: "Conecte marketing, vendas e operação através de integrações robustas que automatizam processos.",
    provider: {
        "@type": "Organization",
        name: "Unti Digital",
        url: "https://unti-digital.vercel.app",
    },
    areaServed: "BR",
};

const benefits: SolutionBenefit[] = [
    { title: "Conexão entre sistemas", description: "Integramos CRM, ERP, e-commerce e ferramentas de marketing em um único ecossistema." },
    { title: "Automação de processos", description: "Reduza retrabalho e eliminamos gargalos através de automações inteligentes." },
    { title: "Redução de retrabalho", description: "Dados sincronizados em tempo real eliminam entrada manual e erros." },
];

const processSteps: SolutionStep[] = [
    { title: "Mapeamento de sistemas", description: "Identificamos todos os sistemas, seus dados e pontos de integração." },
    { title: "Arquitetura de integração", description: "Projetamos a melhor forma de conectar os sistemas mantendo performance." },
    { title: "Implementação", description: "Desenvolvemos integrações testadas e documentadas de forma robusta." },
    { title: "Testes", description: "Validamos completamente a integração antes do deployment em produção." },
    { title: "Monitoramento", description: "Acompanhamos continuamente a saúde das integrações e otimizamos fluxos." },
];

export default function IntegracoesPage() {
  return (
    <SolutionPage
      schemaMarkup={schemaMarkup}
      breadcrumb={[{ label: "Soluções", href: "/solucoes" }, { label: "Integrações CRM e ERP" }]}
      preTitle="Solução em Integrações"
      title="Integrações com CRM e ERP"
      subtitle="Conecte marketing, vendas e operação através de integrações robustas que automatizam processos."
      benefits={benefits}
      processSteps={processSteps}
      keyMessage="Valor da integração"
      keyText="Integrações corretas reduzem falhas, aceleram o time-to-market e garantem dados confiáveis para decisões estratégicas."
    />
  );
}
