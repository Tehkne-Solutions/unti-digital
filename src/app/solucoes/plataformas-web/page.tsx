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
    title: "Plataformas Web Sob Medida | Unti Digital",
    description: "Arquitetura personalizada para operações complexas com integrações avançadas em alta escala.",
    openGraph: {
        title: "Plataformas Web Sob Medida | Unti Digital",
        description: "Arquitetura personalizada para operações complexas com integrações avançadas em alta escala.",
        type: "website",
    },
};

const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plataformas Web Sob Medida",
    description: "Arquitetura personalizada para operações complexas com integrações avançadas em alta escala.",
    provider: {
        "@type": "Organization",
        name: "Unti Digital",
        url: "https://unti-digital.vercel.app",
    },
    areaServed: "BR",
};

export default function PlataformasWebPage() {
    const problems = [
        {
            title: "Operações complexas sem automação",
            description: "Processos manuais geram erros, ineficiência e limitam o crescimento.",
        },
        {
            title: "Sistemas desconectados e lentos",
            description: "Múltiplas ferramentas que não conversam geram retrabalho e perda de dados.",
        },
        {
            title: "Impossível escalar com infraestrutura atual",
            description: "Plataformas antigas não suportam crescimento, integrações ou inovação.",
        },
    ];

    const technologies = [
        "Next.js",
        "Node.js/Python",
        "APIs REST/GraphQL",
        "Banco de dados escalável",
        "Arquitetura multi-tenant",
        "Message queues",
    ];

    const results = [
        {
            metric: "10x",
            description: "Aumento de capacidade operacional",
        },
        {
            metric: "-80%",
            description: "Redução de tempo em processos manuais",
        },
        {
            metric: "+250%",
            description: "Melhoria em eficiência de equipes",
        },
    ];

    const benefits = [
        {
            title: "Arquitetura personalizada",
            description: "Desenvolvemos a estrutura técnica exatamente conforme as necessidades do seu negócio.",
        },
        {
            title: "Integrações avançadas",
            description: "Conectamos com ferramentas e sistemas complexos para operação seamless.",
        },
        {
            title: "Performance em alta escala",
            description: "Plataformas preparadas para crescer sem limites com infraestrutura robusta.",
        },
    ];

    const steps = [
        {
            title: "Levantamento técnico",
            description: "Mapeamos todas as necessidades, integrações e requisitos de performace.",
        },
        {
            title: "Arquitetura",
            description: "Projetamos a estrutura técnica otimizada para seu caso de uso específico.",
        },
        {
            title: "Desenvolvimento",
            description: "Desenvolvimento estruturado com código testado e documentado.",
        },
        {
            title: "Integrações",
            description: "Conectamos com todos os sistemas necessários de forma segura e eficiente.",
        },
        {
            title: "Governança",
            description: "Implementamos controles, monitoring e evolução contínua da plataforma.",
        },
    ];

    const cases = [
        {
            title: "SaaS de gestão operacional",
            result: "Plataforma multi-tenant com performance para milhões de operações diárias.",
        },
        {
            title: "Sistema de marketplace",
            result: "Arquitetura escalável com integração de pagamento e logistics.",
        },
        {
            title: "Plataforma de dados",
            result: "Sistema que processa e visualiza terabytes de dados em tempo real.",
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
                    { label: "Plataformas Web" },
                ]}
            />
            <SolutionHeroWithImage
                imageSrc="/images/solutions/unti-digital-solution-custom-web-platforms.png"
                title="Plataformas Web Sob Medida"
                subtitle="Arquitetura personalizada para operações complexas com integrações avançadas em alta escala."
            />
            <SolutionProblems problems={problems} />
            <SolutionTechStack technologies={technologies} />
            <SolutionResults results={results} />
            <SolutionBenefits items={benefits} />
            <SolutionProcess steps={steps} />
            <SolutionCases cases={cases} />
            <SolutionCTA
                title="Vamos estruturar sua plataforma digital?"
                buttonText="Falar com especialista"
            />
        </div>
    );
}
