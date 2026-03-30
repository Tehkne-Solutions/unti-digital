import { SolutionPage, SolutionBenefit, SolutionStep } from "@/components/solucoes/SolutionPage";

export const metadata = {
    title: "Seguranca Nivel Enterprise e Compliance Digital | Unti Digital",
    description: "Arquiteturas Zero-Trust com controle de acessos, monitoramento continuo, LGPD e governanca para operacoes digitais criticas.",
    keywords: [
        "governanca e seguranca digital",
        "zero trust",
        "compliance lgpd",
        "controle de acessos",
        "monitoramento de seguranca"
    ],
    alternates: {
        canonical: "/solucoes/governanca-seguranca",
    },
    openGraph: {
        title: "Seguranca Nivel Enterprise e Compliance Digital | Unti Digital",
        description: "Arquiteturas Zero-Trust com controle de acessos, monitoramento continuo, LGPD e governanca para operacoes digitais criticas.",
        type: "website",
        url: "https://unti-digital.vercel.app/solucoes/governanca-seguranca",
    },
};

const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Seguranca Nivel Enterprise e Compliance Digital",
    description: "Protegemos operacoes digitais com arquitetura Zero-Trust, controle de acessos, monitoramento continuo e conformidade com LGPD.",
    provider: {
        "@type": "Organization",
        name: "Unti Digital",
        url: "https://unti-digital.vercel.app",
    },
    areaServed: "BR",
};

const benefits: SolutionBenefit[] = [
    { title: "Arquitetura Zero-Trust", description: "Adotamos o principio de menor privilegio para reduzir superficie de ataque e fortalecer a operacao." },
    { title: "Controle granular de acessos", description: "Definimos identidades, perfis e permissoes com rastreabilidade para usuarios, integracoes e servicos." },
    { title: "Compliance orientado ao negocio", description: "Traduzimos LGPD e exigencias regulatorias em praticas aplicaveis ao seu ecossistema digital." },
    { title: "Monitoramento e resposta", description: "Implementamos visibilidade continua para detectar anomalias, eventos criticos e comportamentos suspeitos." },
];

const processSteps: SolutionStep[] = [
    { title: "Avaliacao e auditoria", description: "Revisamos arquitetura, permissoes, fluxos e riscos para identificar vulnerabilidades e lacunas de governanca." },
    { title: "Plano de endurecimento", description: "Definimos roadmap com politicas, controles, responsabilidades e prioridades de implementacao." },
    { title: "Implantacao de controles", description: "Aplicamos protecao de acesso, segregacao, monitoramento e praticas de seguranca aderentes ao ambiente." },
    { title: "Validacao e conformidade", description: "Executamos testes, revisoes e verificacoes para comprovar aderencia tecnica e regulatoria." },
    { title: "Operacao continua", description: "Mantemos monitoramento ativo, recomendacoes evolutivas e resposta mais rapida a novos riscos." },
];

export default function GovernancaSegurancaPage() {
  return (
    <SolutionPage
      schemaMarkup={schemaMarkup}
      breadcrumb={[{ label: "Solucoes", href: "/solucoes" }, { label: "Governanca e Seguranca" }]}
      preTitle="Solucao em Governanca e Seguranca"
      title="Seguranca Nivel Enterprise e Compliance Digital"
      subtitle="Protegemos sua operacao com arquiteturas Zero-Trust, controle rigoroso de acessos, monitoramento continuo e conformidade com LGPD e normas de seguranca corporativa."
      benefits={benefits}
      processSteps={processSteps}
      keyMessage="Resultados esperados"
      keyText="Arquitetura Zero-Trust com monitoramento ativo, compliance garantido e controle granular de acessos, assegurando protecao total contra ataques e vazamento de dados."
    />
  );
}
