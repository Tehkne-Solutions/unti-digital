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
    const problems = [
        {
            title: "Dados fragmentados em múltiplos sistemas",
            description: "Informações desorganizadas dificultam análises, decisões e geram retrabalho.",
        },
        {
            title: "Processos manuais causam atraso e erros",
            description: "Transferência manual de dados entre sistemas é lenta, trabalhosa e propensa a erros.",
        },
        {
            title: "Impossível ter visão unificada do cliente",
            description: "Dados espalhados impedem uma estratégia integrada de marketing e vendas.",
        },
    ];

    const technologies = [
        "APIs REST/GraphQL",
        "Zapier/Make integrations",
        "Message brokers",
        "Data synchronization",
        "Workflow automation",
        "Real-time webhooks",
    ];

    const results = [
        {
            metric: "-85%",
            description: "Redução de trabalho manual",
        },
        {
            metric: "+150%",
            description: "Velocidade de processamento",
        },
        {
            metric: "0",
            description: "Erros de entrada de dados manual",
        },
    ];

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
            <SolutionHeroWithImage
                imageSrc="/images/solutions/unti-digital-solution-crm-erp-integrations.png"
                title="Integrações com CRM e ERP"
                subtitle="Conecte marketing, vendas e operação através de integrações robustas que automatizam processos."
            />
            <SolutionProblems problems={problems} />
            <SolutionTechStack technologies={technologies} />
            <SolutionResults results={results} />
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
