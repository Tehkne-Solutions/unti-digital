import { SolutionPage, SolutionBenefit, SolutionStep } from "@/components/solucoes/SolutionPage";

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

const benefits: SolutionBenefit[] = [
    { title: "Design Exclusivo", description: "Layout sob medida para sua marca, com identidade visual única e linguagem de comunicação clara." },
    { title: "SEO Otimizado", description: "Estrutura técnica e conteúdo preparado para ranqueamento, velocidade e indexação orgânica." },
    { title: "Velocidade de Carregamento", description: "Performance de carregamento rápido e fluida em desktop e mobile, reduzindo taxa de rejeição." },
    { title: "Foco em Conversão", description: "Arquitetura de jornada focada em lead gen e geração de oportunidades para seu time de vendas." },
];

const processSteps: SolutionStep[] = [
    { title: "Briefing e alinhamento", description: "Mapeamos metas, público, benchmark e KPI para o novo site institucional." },
    { title: "Design UX/UI", description: "Prototipamos com foco em clareza, acessibilidade e performance mobile-first." },
    { title: "Desenvolvimento e integração", description: "Construímos com Next.js, SEO técnico, integração CRM/ERP e automação de dados." },
    { title: "Lançamento e otimização", description: "Deploy seguro, testes A/B e monitoramento para evolução contínua do site." },
];

export default function SitesInstitucionaisPage() {
    return (
        <SolutionPage
            schemaMarkup={schemaMarkup}
            breadcrumb={[{ label: "Soluções", href: "/solucoes" }, { label: "Sites Institucionais" }]}
            preTitle="Solução em Sites Institucionais"
            title="Criação de Sites Institucionais de Alta Performance"
            subtitle="Transformamos sua presença digital em uma ferramenta de vendas e autoridade."
            benefits={benefits}
            processSteps={processSteps}
            keyMessage="O que dizíamos no site antigo"
            keyText="Os serviços da Unti Digital são soluções inteligentes para qualquer empresa e agências de marketing digital que necessitam de experts em desenvolvimento de sites, landing pages, blogs e lojas. Entregamos websites modernos com foco em velocidade, experiência do usuário e alta conversão. Com integração direta a CRM, automação de leads e suporte contínuo, mantemos sua presença digital sempre alinhada às metas de crescimento. Planejamos cada etapa para que o projeto entregue não seja apenas visualmente atrativo, mas também eficiente em geração de resultados e otimizado para o ciclo de vendas."
        />
    );
}
