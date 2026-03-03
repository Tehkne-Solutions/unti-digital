import { SolutionHero } from "@/components/solucoes/SolutionHero";
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
            <SolutionHero
                title="Plataformas web sob medida para operações complexas"
                subtitle="Desenvolvemos soluções personalizadas com arquitetura escalável, integrações avançadas e performance garantida."
                primaryCTA="Falar com especialista"
                secondaryCTA="Ver cases"
            />
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
