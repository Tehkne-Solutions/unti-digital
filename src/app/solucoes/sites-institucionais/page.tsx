import { SolutionPage, SolutionBenefit, SolutionStep, SolutionImageSection } from "@/components/solucoes/SolutionPage";

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

const imageSections: SolutionImageSection[] = [
    {
        title: "Design Responsivo e Acessível",
        description: "Criamos interfaces que se adaptam perfeitamente a todos os dispositivos, garantindo uma experiência excepcional em desktop, tablet e mobile. Nossa abordagem mobile-first assegura que seu site institucional seja acessível e funcional para todos os usuários.",
        imageSrc: "/images/unti-digital-homepage-image-nossas-solucoes-sites-institucionais.png",
        imageAlt: "Design responsivo de sites institucionais"
    },
    {
        title: "Performance e Velocidade Otimizadas",
        description: "Utilizamos as melhores práticas de desenvolvimento para garantir carregamento rápido e performance excepcional. Técnicas avançadas de otimização de imagens, código minificado e CDN garantem que seu site converta visitantes em leads.",
        imageSrc: "/images/unti-digital-homepage-image-slider-servicos-sites-e-plataformas-de-alta-performance.png",
        imageAlt: "Performance otimizada para sites institucionais"
    },
    {
        title: "Integração com Sistemas Empresariais",
        description: "Conectamos seu site institucional com CRM, ERP e outras ferramentas essenciais do seu negócio. Automatizamos processos de captação de leads e sincronização de dados para maximizar a eficiência operacional.",
        imageSrc: "/images/unti-digital-homepage-image-nossas-solucoes-integracoes-e-automacoes.png",
        imageAlt: "Integração de sistemas empresariais"
    }
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
            imageSections={imageSections}
            keyMessage="Resultados Comprovados: Sites Institucionais que Convertem"
            keyText="Nossos sites institucionais não apenas impressionam visualmente, mas entregam resultados mensuráveis. Aumentamos a taxa de conversão em até 300% para clientes corporativos, reduzimos o tempo de carregamento para menos de 2 segundos e melhoramos o ranqueamento orgânico em 150% em média. Cada projeto é otimizado para performance, acessibilidade e ROI máximo."
        />
    );
}
