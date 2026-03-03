import { SolutionHero } from "@/components/solucoes/SolutionHero";
import { SolutionBenefits } from "@/components/solucoes/SolutionBenefits";
import { SolutionProcess } from "@/components/solucoes/SolutionProcess";
import { SolutionCases } from "@/components/solucoes/SolutionCases";
import { SolutionCTA } from "@/components/solucoes/SolutionCTA";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

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

export default function IntegracoesPage() {
    const benefits = [
        {
            title: "Conexão entre sistemas",
            description: "Integramos CRM, ERP, e-commerce e ferramentas de marketing em um único ecossistema.",
        },
        {
            title: "Automação de processos",
            description: "Reduza retrabalho e eliminamos gargalos através de automações inteligentes.",
        },
        {
            title: "Redução de retrabalho",
            description: "Dados sincronizados em tempo real eliminam entrada manual e erros.",
        },
    ];

    const steps = [
        {
            title: "Mapeamento de sistemas",
            description: "Identificamos todos os sistemas, seus dados e pontos de integração.",
        },
        {
            title: "Arquitetura de integração",
            description: "Projetamos a melhor forma de conectar os sistemas mantendo performance.",
        },
        {
            title: "Implementação",
            description: "Desenvolvemos integrações testadas e documentadas de forma robusta.",
        },
        {
            title: "Testes",
            description: "Validamos completamente a integração antes do deployment em produção.",
        },
        {
            title: "Monitoramento",
            description: "Acompanhamos continuamente a saúde das integrações e otimizamos fluxos.",
        },
    ];

    const cases = [
        {
            title: "Integração SAP com Salesforce",
            result: "Sincronização de dados em tempo real entre ERP e CRM com Zero erros.",
        },
        {
            title: "E-commerce com operações",
            result: "Automação completa de pedidos da venda até fulfillment.",
        },
        {
            title: "Marketing Cloud integrado",
            result: "Dados de clientes sincronizados para marketing automation e personalização.",
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
                    { label: "Integrações CRM e ERP" },
                ]}
            />
            <SolutionHero
                title="Integrações que conectam marketing, vendas e operação"
                subtitle="Automatizamos processos e eliminamos silos de dados através de integrações robustas e confiáveis."
                primaryCTA="Falar com especialista"
                secondaryCTA="Ver cases"
            />
            <SolutionBenefits items={benefits} />
            <SolutionProcess steps={steps} />
            <SolutionCases cases={cases} />
            <SolutionCTA
                title="Vamos integrar sua operação digital?"
                buttonText="Falar com especialista"
            />
        </div>
    );
}
