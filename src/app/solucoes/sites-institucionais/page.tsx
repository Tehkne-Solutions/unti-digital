import { SolutionPage, SolutionBenefit, SolutionStep, SolutionImageSection } from "@/components/solucoes/SolutionPage";

export const metadata = {
    title: "Hubs Corporativos de Alta Performance e Conversao | Unti Digital",
    description: "Sites institucionais premium com foco em Core Web Vitals, CRO, integracao com sistemas internos e autoridade digital para empresas B2B.",
    keywords: [
        "sites institucionais de alta performance",
        "site corporativo b2b",
        "core web vitals",
        "cro para site institucional",
        "site com integracao crm e erp"
    ],
    alternates: {
        canonical: "/solucoes/sites-institucionais",
    },
    openGraph: {
        title: "Hubs Corporativos de Alta Performance e Conversao | Unti Digital",
        description: "Sites institucionais premium com foco em Core Web Vitals, CRO, integracao com sistemas internos e autoridade digital para empresas B2B.",
        type: "website",
        url: "https://unti-digital.vercel.app/solucoes/sites-institucionais",
    },
};

const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hubs Corporativos de Alta Performance e Conversao",
    description: "Construimos hubs corporativos premium com foco em conversao, Core Web Vitals, SEO tecnico e integracao com fluxos internos.",
    provider: {
        "@type": "Organization",
        name: "Unti Digital",
        url: "https://unti-digital.vercel.app",
    },
    areaServed: "BR",
};

const benefits: SolutionBenefit[] = [
    { title: "Arquitetura orientada a conversao", description: "Estruturamos jornadas e paginas criticas para transformar trafego em oportunidades comerciais qualificadas." },
    { title: "Core Web Vitals em primeiro plano", description: "Cada tela e construida para carregar rapido, responder com fluidez e preservar a experiencia em qualquer dispositivo." },
    { title: "Integracao com fluxos internos", description: "Seu site passa a conversar com CRM, automacoes e processos comerciais sem retrabalho manual." },
    { title: "Autoridade digital imediata", description: "Design premium e narrativa corporativa clara posicionam sua empresa como referencia desde o primeiro acesso." },
];

const processSteps: SolutionStep[] = [
    { title: "Diagnostico e posicionamento", description: "Mapeamos metas, diferenciais e gargalos comerciais para desenhar um hub corporativo alinhado ao negocio." },
    { title: "Arquitetura de experiencia", description: "Organizamos navegacao, hierarquia de conteudo e CTA com foco em clareza, autoridade e CRO." },
    { title: "Desenvolvimento e integracoes", description: "Implementamos uma base performatica com SEO tecnico, Core Web Vitals e conexao com ferramentas internas." },
    { title: "Go-live com evolucao continua", description: "Publicamos com monitoramento ativo, ajustes finos e leitura constante de performance e conversao." },
];

const imageSections: SolutionImageSection[] = [
    {
        title: "Experiencia premium em qualquer tela",
        description: "Criamos interfaces institucionais responsivas com leitura clara, hierarquia refinada e navegacao sem atrito do mobile ao desktop.",
        imageSrc: "/images/unti-digital-homepage-image-nossas-solucoes-sites-institucionais.png",
        imageAlt: "Experiencia premium para sites institucionais"
    },
    {
        title: "Performance que protege a conversao",
        description: "Otimizamos imagens, front-end e infraestrutura para entregar carregamento sub-segundo, melhor experiencia e mais relevancia organica no Google.",
        imageSrc: "/images/unti-digital-homepage-image-slider-servicos-sites-e-plataformas-de-alta-performance.png",
        imageAlt: "Performance otimizada para sites institucionais"
    },
    {
        title: "Conexao nativa com a operacao",
        description: "Integramos CRM, ERP e fluxos de automacao para transformar o site em um ativo operacional, nao apenas institucional.",
        imageSrc: "/images/unti-digital-homepage-image-nossas-solucoes-integracoes-e-automacoes.png",
        imageAlt: "Integracao de sistemas empresariais"
    }
];

export default function SitesInstitucionaisPage() {
    return (
        <SolutionPage
            schemaMarkup={schemaMarkup}
            breadcrumb={[{ label: "Solucoes", href: "/solucoes" }, { label: "Sites Institucionais" }]}
            preTitle="Solucao em Sites Institucionais"
            title="Hubs Corporativos de Alta Performance e Conversao"
            subtitle="Construimos plataformas institucionais desenhadas para empresas que buscam autoridade imediata. Unimos design minimalista premium a uma infraestrutura tecnica robusta, otimizada para Core Web Vitals e integracao com fluxos internos."
            benefits={benefits}
            processSteps={processSteps}
            imageSections={imageSections}
            keyMessage="Resultados esperados"
            keyText="Plataformas corporativas ultravelozes com arquitetura focada em conversao, integracao nativa com fluxos internos e dominio total dos indices de performance e SEO do Google."
        />
    );
}
