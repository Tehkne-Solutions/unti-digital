import { SolutionPage, SolutionBenefit, SolutionStep } from "@/components/solucoes/SolutionPage";

export const metadata = {
    title: "Governança e Segurança Digital | Unti Digital",
    description: "Arquitetura segura com controle de acessos, monitoramento contínuo e compliance garantido.",
    openGraph: {
        title: "Governança e Segurança Digital | Unti Digital",
        description: "Arquitetura segura com controle de acessos, monitoramento contínuo e compliance garantido.",
        type: "website",
    },
};

const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Governança e Segurança Digital",
    description: "Arquitetura segura com controle de acessos, monitoramento contínuo e compliance garantido.",
    provider: {
        "@type": "Organization",
        name: "Unti Digital",
        url: "https://unti-digital.vercel.app",
    },
    areaServed: "BR",
};

const benefits: SolutionBenefit[] = [
    { title: "Arquitetura segura", description: "Implementamos práticas de segurança desde o design da solução." },
    { title: "Controle de acessos", description: "Gerenciamento granular de permissões e roles para cada usuário e sistema." },
    { title: "Monitoramento contínuo", description: "Detectamos anomalias e ameaças em tempo real com alertas automáticos." },
];

const processSteps: SolutionStep[] = [
    { title: "Auditoria de segurança", description: "Analisamos sua arquitetura atual e identificamos vulnerabilidades." },
    { title: "Planejamento de segurança", description: "Criamos roadmap detalhado para implementar controles necessários." },
    { title: "Implementação", description: "Implantamos controles, certificados, firewalls e sistemas de proteção." },
    { title: "Testes de penetração", description: "Validamos a segurança com testes especializados e correção de vulnerabilidades." },
    { title: "Evolução contínua", description: "Mantemos monitoramento ativo e atualizamos conforme novas ameaças surgem." },
];

export default function GovernancaSegurancaPage() {
  return (
    <SolutionPage
      schemaMarkup={schemaMarkup}
      breadcrumb={[{ label: "Soluções", href: "/solucoes" }, { label: "Governança e Segurança" }]}
      preTitle="Solução em Governança e Segurança"
      title="Governança e Segurança"
      subtitle="Arquitetura segura com controle de acessos, monitoramento contínuo e compliance garantido."
      benefits={benefits}
      processSteps={processSteps}
      keyMessage="Processo seguro"
      keyText="Segurança digital sólida é base para operações confiáveis, crescimento e retenção de clientes."
    />
  );
}
