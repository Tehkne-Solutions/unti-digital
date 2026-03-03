import { SolutionHero } from "@/components/solucoes/SolutionHero";
import { SolutionBenefits } from "@/components/solucoes/SolutionBenefits";
import { SolutionProcess } from "@/components/solucoes/SolutionProcess";
import { SolutionCases } from "@/components/solucoes/SolutionCases";
import { SolutionCTA } from "@/components/solucoes/SolutionCTA";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata = {
    title: "Sites Institucionais de Alta Performance | Unti Digital",
    description: "Desenvolvemos plataformas corporativas focadas em conversão, integração e governança digital.",
    openGraph: {
        title: "Sites Institucionais de Alta Performance | Unti Digital",
        description: "Desenvolvemos plataformas corporativas focadas em conversão, integração e governança digital.",
        type: "website",
    },
};

const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sites Institucionais de Alta Performance",
    description: "Desenvolvemos plataformas corporativas focadas em conversão, integração e governança digital.",
    provider: {
        "@type": "Organization",
        name: "Unti Digital",
        url: "https://unti-digital.vercel.app",
    },
    areaServed: "BR",
};

export default function SitesInstitucionaisPage() {
    const benefits = [
        {
            title: "Performance e SEO estruturado",
            description: "Estrutura otimizada para velocidade, indexação e geração de leads qualificados.",
        },
        {
            title: "Arquitetura escalável",
            description: "Projetos preparados para crescer junto com a operação da empresa.",
        },
        {
            title: "Integração com CRM e ERP",
            description: "Conectamos marketing, vendas e operação em um único ecossistema digital.",
        },
    ];

    const steps = [
        {
            title: "Diagnóstico estratégico",
            description: "Entendemos seu negócio, objetivos e desafios para estruturar a melhor solução.",
        },
        {
            title: "Arquitetura e UX",
            description: "Planejamos a estrutura técnica e a experiência do usuário para conversão máxima.",
        },
        {
            title: "Desenvolvimento estruturado",
            description: "Desenvolvimento com metodologia clara, documentado e com comunicação contínua.",
        },
        {
            title: "Integração e testes",
            description: "Conectamos com seus sistemas e validamos toda a plataforma antes do launch.",
        },
        {
            title: "Governança contínua",
            description: "Acompanhamento, otimizações e evolução da plataforma após o lançamento.",
        },
    ];

    const cases = [
        {
            title: "Projeto SAVOL",
            result: "Plataforma institucional integrada com sistemas internos, aumentando conversão em 40%.",
        },
        {
            title: "Projeto corporativo B2B",
            result: "Estrutura orientada para geração de leads qualificados com integração CRM.",
        },
        {
            title: "Projeto multiunidade",
            result: "Padronização digital com governança centralizada para múltiplas unidades.",
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
                    { label: "Sites Institucionais" },
                ]}
            />
            <SolutionHero
                title="Sites institucionais de alta performance para empresas que precisam gerar resultados"
                subtitle="Desenvolvemos plataformas corporativas focadas em conversão, integração e governança digital."
                primaryCTA="Falar com especialista"
                secondaryCTA="Ver cases"
            />
            <SolutionBenefits items={benefits} />
            <SolutionProcess steps={steps} />
            <SolutionCases cases={cases} />
            <SolutionCTA
                title="Vamos estruturar o próximo passo digital da sua empresa?"
                buttonText="Falar com especialista"
            />
        </div>
    );
}
