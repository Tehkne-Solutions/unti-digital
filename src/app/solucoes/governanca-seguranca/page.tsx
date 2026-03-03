import { SolutionHero } from "@/components/solucoes/SolutionHero";
import { SolutionBenefits } from "@/components/solucoes/SolutionBenefits";
import { SolutionProcess } from "@/components/solucoes/SolutionProcess";
import { SolutionCases } from "@/components/solucoes/SolutionCases";
import { SolutionCTA } from "@/components/solucoes/SolutionCTA";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

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

export default function GovernancaSegurancaPage() {
    const benefits = [
        {
            title: "Arquitetura segura",
            description: "Implementamos práticas de segurança desde o design da solução.",
        },
        {
            title: "Controle de acessos",
            description: "Gerenciamento granular de permissões e roles para cada usuário e sistema.",
        },
        {
            title: "Monitoramento contínuo",
            description: "Detectamos anomalias e ameaças em tempo real com alertas automáticos.",
        },
    ];

    const steps = [
        {
            title: "Auditoria de segurança",
            description: "Analisamos sua arquitetura atual e identificamos vulnerabilidades.",
        },
        {
            title: "Planejamento de segurança",
            description: "Criamos roadmap detalhado para implementar controles necessários.",
        },
        {
            title: "Implementação",
            description: "Implantamos controles, certificados, firewalls e sistemas de proteção.",
        },
        {
            title: "Testes de penetração",
            description: "Validamos a segurança com testes especializados e correção de vulnerabilidades.",
        },
        {
            title: "Evolução contínua",
            description: "Mantemos monitoramento ativo e atualizamos conforme novas ameaças surgem.",
        },
    ];

    const cases = [
        {
            title: "Certificação ISO 27001",
            result: "Implementação completa de ISMS com todas as práticas e documentações.",
        },
        {
            title: "Compliance LGPD",
            result: "Adequação de sistemas para total conformidade com LGPD brasileira.",
        },
        {
            title: "Zero Trust Architecture",
            result: "Redesenho completo com modelo zero-trust para maior proteção de dados críticos.",
        },
    ];

    return (
        <div className="w-full">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />
            <Breadcrumb
                items={[
                    { label: "Soluções", href: "/solucoes" },
                    { label: "Governança e Segurança" },
                ]}
            />
            <SolutionHero
                title="Governança e segurança para ambientes digitais críticos"
                subtitle="Protegemos seus dados e operações com arquitetura robusta, compliance e monitoramento 24/7."
                primaryCTA="Falar com especialista"
                secondaryCTA="Ver cases"
            />
            <SolutionBenefits items={benefits} />
            <SolutionProcess steps={steps} />
            <SolutionCases cases={cases} />
            <SolutionCTA
                title="Proteja sua operação digital com estrutura profissional"
                buttonText="Falar com especialista"
            />
        </div>
    );
}
