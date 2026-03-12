import { SolutionHeroWithImage } from "@/components/solucoes/SolutionHeroWithImage";
import { SolutionProblems } from "@/components/solucoes/SolutionProblems";
import { SolutionTechStack } from "@/components/solucoes/SolutionTechStack";
import { SolutionResults } from "@/components/solucoes/SolutionResults";
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
    const problems = [
        {
            title: "Vulnerabilidades de segurança críticas",
            description: "Falhas na arquitetura colocam dados e operações em risco constante.",
        },
        {
            title: "Falta de compliance com regulamentações",
            description: "Ausência de controles adequados gera riscos legais e operacionais.",
        },
        {
            title: "Sem visibilidade sobre acessos e atividades",
            description: "Impossível auditar quem acessou o quê, quando e por quê.",
        },
    ];

    const technologies = [
        "Criptografia de dados",
        "OAuth 2.0 / OIDC",
        "Auditing avançado",
        "Compliance automation",
        "DLP (Data Loss Prevention)",
        "Security monitoring 24/7",
    ];

    const results = [
        {
            metric: "100%",
            description: "Conformidade com LGPD e ISO 27001",
        },
        {
            metric: "-95%",
            description: "Redução de riscos de segurança",
        },
        {
            metric: "24/7",
            description: "Monitoramento ativo de ameaças",
        },
    ];

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
            <SolutionHeroWithImage
                imageSrc="/images/solutions/unti-digital-solution-governance-security.png"
                title="Governança e Segurança"
                subtitle="Arquitetura segura com controle de acessos, monitoramento contínuo e compliance garantido."
            />
            <SolutionProblems problems={problems} />
            <SolutionTechStack technologies={technologies} />
            <SolutionResults results={results} />
            <SolutionBenefits items={benefits} />
            <SolutionProcess steps={steps} />
            <SolutionCases cases={cases} />
            <SolutionCTA
                title="Vamos blindar sua plataforma?"
                buttonText="Falar com especialista"
            />
        </div>
    );
}
