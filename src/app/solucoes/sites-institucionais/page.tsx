import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import {
    SolutionBenefit,
    SolutionImageSection,
    SolutionPage,
    SolutionStep,
} from "@/components/solucoes/SolutionPage";

export const metadata = {
    title: "Sites Institucionais de Alta Performance | Unti Digital",
    description:
        "Criacao de sites profissionais com foco em vendas, autoridade, suporte e SEO local para empresas em Sao Paulo, Curitiba, Santa Catarina, Mato Grosso do Sul e todo o Brasil.",
    keywords: [
        "criacao de sites",
        "site profissional",
        "criacao de sites em sao paulo",
        "site para empresa",
        "site focado em resultados",
        "agencia criacao de sites",
    ],
    alternates: {
        canonical: "/solucoes/sites-institucionais",
    },
    openGraph: {
        title: "Sites Institucionais de Alta Performance | Unti Digital",
        description:
            "Criacao de sites profissionais com foco em autoridade, conversao e suporte para empresas que querem vender mais.",
        type: "website",
        url: "https://unti-digital.vercel.app/solucoes/sites-institucionais",
    },
};

const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sites Institucionais de Alta Performance",
    serviceType: "Sites Institucionais de Alta Performance",
    description:
        "Servico de criacao de sites profissionais com foco em autoridade, conversao, suporte e SEO local para empresas em todo o Brasil.",
    provider: {
        "@type": "Organization",
        name: "Unti Digital",
        url: "https://unti-digital.vercel.app",
    },
    areaServed: ["Sao Paulo", "Curitiba", "Santa Catarina", "Mato Grosso do Sul", "Brasil"],
};

const benefits: SolutionBenefit[] = [
    {
        title: "Seu site no ar em tempo recorde",
        description:
            "Sabemos que tempo e dinheiro. Trabalhamos com prazos rigorosos para colocar sua empresa no ar sem perder oportunidades comerciais.",
    },
    {
        title: "Estratégia personalizada",
        description:
            "Antes de codificar, entendemos seu negocio. Seu site nasce como ferramenta de vendas, nao como mais uma pagina bonita sem direcao.",
    },
    {
        title: "Suporte que nao te deixa na mao",
        description:
            "Da criacao a manutencao, seguimos ao seu lado para garantir estabilidade, evolucao e uma operacao tranquila no dia a dia.",
    },
];

const processSteps: SolutionStep[] = [
    {
        title: "Imersao no seu negocio",
        description:
            "Entendemos seu mercado, seus diferenciais e o que faz um lead confiar na sua empresa antes mesmo do primeiro contato.",
    },
    {
        title: "Estrutura pensada para vender",
        description:
            "Organizamos conteudo, provas de autoridade, formularios e chamadas para acao para facilitar a decisao do cliente.",
    },
    {
        title: "Design premium com prazo real",
        description:
            "Criamos um visual profissional, leve e responsivo sem abrir mao de velocidade, clareza e cronogramas bem definidos.",
    },
    {
        title: "Publicacao, suporte e evolucao",
        description:
            "Seu projeto entra no ar com acompanhamento, orientacao e espaco para melhorias conforme a empresa cresce.",
    },
];

const imageSections: SolutionImageSection[] = [
    {
        title: "Seu site rapido e no topo do Google",
        description:
            "Otimizamos carregamento, estrutura tecnica e experiencia de navegação para que sua empresa transmita profissionalismo e apareca melhor nas buscas.",
        imageSrc: "/images/unti-digital-homepage-image-slider-servicos-sites-e-plataformas-de-alta-performance.png",
        imageAlt: "Site profissional rapido e otimizado para Google",
    },
    {
        title: "Site que cresce com sua empresa",
        description:
            "Planejamos uma base preparada para novas paginas, servicos, integrações e campanhas, sem obrigar voce a reconstruir tudo mais adiante.",
        imageSrc: "/images/unti-digital-homepage-image-nossas-solucoes-sites-institucionais.png",
        imageAlt: "Site preparado para crescimento da empresa",
    },
    {
        title: "Uma vitrine digital que transmite confianca",
        description:
            "Design premium, copy clara e hierarquia visual forte ajudam sua marca a parecer maior, mais segura e mais pronta para fechar negocio.",
        imageSrc: "/images/unti-digital-homepage-image-nossas-solucoes-integracoes-e-automacoes.png",
        imageAlt: "Vitrine digital profissional para gerar confianca",
    },
];

const testimonials = [
    {
        name: "Arthur",
        role: "Empresario parceiro",
        duration: "01:24",
        quote:
            "A Unti conseguiu transformar nosso site em uma apresentacao comercial muito mais forte. Passamos a transmitir mais confianca logo no primeiro acesso.",
    },
    {
        name: "Wellington",
        role: "CTO de agencia parceira",
        duration: "01:08",
        quote:
            "O diferencial foi unir agilidade com estrategia. Nao recebemos so um layout bonito, recebemos uma estrutura que ajuda a vender.",
    },
    {
        name: "Andre",
        role: "CEO de grupo parceiro",
        duration: "00:56",
        quote:
            "Quando precisavamos de velocidade e suporte de verdade, a equipe entregou com clareza, compromisso e acompanhamento do inicio ao fim.",
    },
];

type AuthorityBrand =
    | {
          kind: "text";
          name: string;
      }
    | {
          kind: "image";
          name: string;
          logo: string;
          alt: string;
      };

const authorityBrands: AuthorityBrand[] = [
    {
        name: "Grupo Savol",
        kind: "text",
    },
    {
        name: "WRK Agência",
        kind: "image",
        logo: "/images/clients/wrk-agencia.webp",
        alt: "Logo da WRK Agência",
    },
    {
        name: "Toriba Renault",
        kind: "image",
        logo: "/images/clients/toriba-renault.png",
        alt: "Logo da Toriba Renault",
    },
    {
        name: "Shopping Moveis Agua Branca",
        kind: "image",
        logo: "/images/clients/shopping-moveis-agua-branca.png",
        alt: "Logo do Shopping Moveis Agua Branca",
    },
    {
        name: "Santos",
        kind: "text",
    },
];

const faqs = [
    {
        question: "Qual o prazo para desenvolver meu site?",
        answer:
            "Cada projeto e unico, mas entregamos sites profissionais em prazos a partir de 24 horas para casos emergenciais. Nosso padrao e unir rapidez com excelencia.",
    },
    {
        question: "Quanto custa um site?",
        answer:
            "Trabalhamos com planos personalizados para pequenas empresas, operacoes em crescimento e marcas mais estruturadas. Solicite um orcamento para entender o melhor custo-beneficio para o seu caso.",
    },
];

export default function SitesInstitucionaisPage() {
    return (
        <SolutionPage
            schemaMarkup={schemaMarkup}
            breadcrumb={[{ label: "Solucoes", href: "/solucoes" }, { label: "Sites Institucionais" }]}
            preTitle="Criacao de Sites"
            title="Sites Institucionais de Alta Performance"
            subtitle="A criacao de sites da Unti Digital vai alem do visual. Construimos sua vitrine digital de alta performance para transformar visitantes em clientes reais, com design premium, estrategia comercial e suporte de ponta a ponta."
            benefits={benefits}
            afterBenefitsSection={
                <section className="bg-slate-50/70 py-20">
                    <Container>
                        <SectionReveal className="mx-auto mb-12 max-w-3xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-unti-blue">
                                Prova social
                            </p>
                            <h2 className="mt-4 text-3xl font-bold text-zinc-900 md:text-4xl">
                                O que estao falando da Unti Digital
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                                Reforcamos a autoridade da sua marca com uma entrega que combina velocidade,
                                clareza comercial e suporte que acompanha o projeto depois da publicacao.
                            </p>
                        </SectionReveal>

                        <div className="grid gap-6 md:grid-cols-3">
                            {testimonials.map((item) => (
                                <SectionReveal key={item.name} className="h-full">
                                    <article className="group relative h-full overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                        <div className="mb-6 flex items-center justify-between">
                                            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-unti-blue">
                                                Depoimento em video
                                            </span>
                                            <span className="text-sm font-medium text-zinc-400">{item.duration}</span>
                                        </div>

                                        <div className="mb-6 flex h-20 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-900 via-slate-800 to-zinc-700">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                                                <div className="ml-1 h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white" />
                                            </div>
                                        </div>

                                        <blockquote className="text-base leading-relaxed text-zinc-600">
                                            &quot;{item.quote}&quot;
                                        </blockquote>

                                        <div className="mt-6 border-t border-slate-100 pt-5">
                                            <p className="text-lg font-semibold text-zinc-900">{item.name}</p>
                                            <p className="text-sm text-zinc-500">{item.role}</p>
                                        </div>
                                    </article>
                                </SectionReveal>
                            ))}
                        </div>

                        <SectionReveal className="mx-auto mt-16 max-w-3xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-unti-blue">
                                Autoridade de mercado
                            </p>
                            <h3 className="mt-4 text-2xl font-bold text-zinc-900 md:text-3xl">
                                Empresas que ja confiaram na Unti Digital
                            </h3>
                            <p className="mt-4 text-zinc-600">
                                Da industria automotiva ao varejo regional, ajudamos marcas que precisavam
                                transmitir confianca desde o primeiro clique.
                            </p>
                        </SectionReveal>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                            {authorityBrands.map((brand) => (
                                <SectionReveal key={brand.name} className="h-full">
                                    <article className="flex h-full min-h-[132px] items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                                        {brand.kind === "image" ? (
                                            <Image
                                                src={brand.logo}
                                                alt={brand.alt}
                                                width={180}
                                                height={72}
                                                className="h-14 w-auto object-contain grayscale transition duration-300 hover:grayscale-0"
                                            />
                                        ) : (
                                            <div className="text-center">
                                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">
                                                    Marca parceira
                                                </p>
                                                <p className="mt-3 text-lg font-semibold text-zinc-900">{brand.name}</p>
                                            </div>
                                        )}
                                    </article>
                                </SectionReveal>
                            ))}
                        </div>

                        <SectionReveal className="mt-16">
                            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-unti-blue">
                                    SEO local e regional
                                </p>
                                <h3 className="mt-4 text-3xl font-bold text-zinc-900">
                                    Expertise local com alcance nacional
                                </h3>
                                <p className="mt-5 max-w-4xl text-lg leading-relaxed text-zinc-600">
                                    Seja em Sao Paulo, Curitiba, Santa Catarina ou Mato Grosso do Sul, a
                                    Unti Digital entende as particularidades do mercado regional para
                                    posicionar sua empresa com mais forca nas buscas e transformar presenca
                                    digital em oportunidade comercial em todo o Brasil.
                                </p>
                                <div className="mt-8 flex flex-wrap gap-3">
                                    {["Sao Paulo", "Curitiba", "Santa Catarina", "Mato Grosso do Sul", "Brasil inteiro"].map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-unti-blue"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </SectionReveal>
                    </Container>
                </section>
            }
            processSteps={processSteps}
            imageSections={imageSections}
            keyMessage="Mais confianca para transformar visitas em oportunidades"
            keyText="Aumente seu faturamento com uma vitrine digital que transmite confianca e autoridade imediata."
            extraSection={
                <section className="bg-slate-50 py-20">
                    <Container>
                        <SectionReveal className="mx-auto mb-12 max-w-3xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-unti-blue">
                                FAQ
                            </p>
                            <h2 className="mt-4 text-3xl font-bold text-zinc-900 md:text-4xl">
                                Dúvidas comuns antes de criar um site profissional
                            </h2>
                            <p className="mt-4 text-lg text-zinc-600">
                                Respondemos aqui o que normalmente pesa na decisao de contratar um novo site.
                            </p>
                        </SectionReveal>

                        <div className="grid gap-6 md:grid-cols-2">
                            {faqs.map((item) => (
                                <SectionReveal key={item.question} className="h-full">
                                    <article className="h-full rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                                        <h3 className="text-2xl font-semibold text-zinc-900">{item.question}</h3>
                                        <p className="mt-4 leading-relaxed text-zinc-600">{item.answer}</p>
                                    </article>
                                </SectionReveal>
                            ))}
                        </div>

                        <SectionReveal className="mt-12 flex justify-center">
                            <Link href="/contato">
                                <Button variant="primary" className="h-14 px-8 text-base">
                                    Solicitar Orcamento Gratis
                                </Button>
                            </Link>
                        </SectionReveal>
                    </Container>
                </section>
            }
            ctaTitle="Pronto para ter um site profissional que gere confianca desde o primeiro acesso?"
            ctaText="Conte com a Unti Digital para tirar seu projeto do papel com estrategia, prazo claro e suporte de verdade."
            ctaButtonText="Solicitar Orcamento Gratis"
        />
    );
}
