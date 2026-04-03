import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SolutionPage, SolutionStep } from "@/components/solucoes/SolutionPage";

export const metadata = {
    title: "Criacao de Sites e Soluções Digitais para Empresas | Unti Digital",
    description:
        "Criacao de sites, landing pages, blogs e lojas para empresas que precisam vender mais, ganhar autoridade e ter suporte real em Campinas, Sao Paulo, Curitiba, Santa Catarina, Mato Grosso do Sul e todo o Brasil.",
    keywords: [
        "criacao de sites para empresas",
        "soluções digitais para empresas",
        "criacao de landing pages",
        "blog corporativo",
        "loja virtual para empresa",
        "criacao de sites em campinas",
    ],
    alternates: {
        canonical: "/solucoes/empresas",
    },
    openGraph: {
        title: "Criacao de Sites e Soluções Digitais para Empresas | Unti Digital",
        description:
            "A Unti Digital atende empresas com sites, landing pages, blogs, lojas e suporte continuo para projetos que precisam sair do papel com previsibilidade.",
        type: "website",
        url: "https://unti-digital.vercel.app/solucoes/empresas",
    },
};

const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Criacao de Sites e Soluções Digitais para Empresas",
    serviceType: "Desenvolvimento Web para Empresas",
    description:
        "Servico de criacao de sites, landing pages, blogs, lojas e suporte digital para empresas que buscam autoridade, resultado e prazo previsivel.",
    provider: {
        "@type": "Organization",
        name: "Unti Digital",
        url: "https://unti-digital.vercel.app",
    },
    areaServed: ["Campinas", "Sao Paulo", "Curitiba", "Santa Catarina", "Mato Grosso do Sul", "Brasil"],
};

const benefits = [
    {
        title: "01. Briefing e estrategia",
        description:
            "Entendemos o seu negocio, o momento da empresa e o que precisa entrar no ar primeiro para gerar resultado sem desperdicar tempo.",
    },
    {
        title: "02. Plano sob medida",
        description:
            "Sua empresa escolhe a rota ideal entre site institucional, landing page, blog, loja ou uma combinacao dessas entregas.",
    },
    {
        title: "03. Entrega e continuidade",
        description:
            "Receba seu projeto na data combinada e continue com suporte para evoluir, corrigir e manter a operacao digital sempre segura.",
    },
];

const processSteps: SolutionStep[] = [
    {
        title: "Diagnostico comercial",
        description:
            "Mapeamos o objetivo do projeto, o publico e as prioridades da empresa para definir um caminho claro desde o inicio.",
    },
    {
        title: "Planejamento e cronograma",
        description:
            "Organizamos estrutura, escopo e etapas de entrega para que voce saiba o que sera feito, quando e com qual foco.",
    },
    {
        title: "Desenvolvimento e publicacao",
        description:
            "Construimos o projeto com foco em clareza, performance e imagem profissional para a empresa entrar no ar com confianca.",
    },
    {
        title: "Suporte e evolucao",
        description:
            "Depois do lancamento, seguimos apoiando ajustes, novas paginas e manutencao para o digital acompanhar o crescimento do negocio.",
    },
];

type BusinessOffer = {
    title: string;
    description: string;
    bullets: string[];
};

const businessOffers: BusinessOffer[] = [
    {
        title: "Sites institucionais",
        description:
            "Para empresas que precisam transmitir autoridade, apresentar servicos com clareza e facilitar o contato comercial.",
        bullets: [
            "Página inicial com narrativa comercial",
            "Estrutura para servicos e diferenciais",
            "Formulário, WhatsApp e captacao de leads",
        ],
    },
    {
        title: "Landing pages",
        description:
            "Páginas orientadas a campanha para lancamentos, captacao de leads e validacao de novas frentes comerciais.",
        bullets: [
            "Foco total em conversao",
            "CTAs claros e integracao com marketing",
            "Agilidade para subir campanhas",
        ],
    },
    {
        title: "Blogs corporativos",
        description:
            "Estrutura de conteudo para fortalecer SEO, educar o mercado e aumentar a visibilidade organica da sua empresa.",
        bullets: [
            "Base pronta para artigos e categorias",
            "Arquitetura pensada para buscas",
            "Autoridade digital de longo prazo",
        ],
    },
    {
        title: "Lojas e catalogos",
        description:
            "Projetos para vender online ou apresentar produtos de forma mais organizada, segura e profissional.",
        bullets: [
            "Catalogo ou e-commerce conforme a necessidade",
            "Apresentacao clara de produtos",
            "Base pronta para evolucao comercial",
        ],
    },
];

const authorityClients = [
    {
        name: "Toriba Renault",
        logo: "/images/clients/toriba-renault.png",
        alt: "Logo da Toriba Renault",
        segment: "Automotivo",
    },
    {
        name: "Shopping Moveis Agua Branca",
        logo: "/images/clients/shopping-moveis-agua-branca.png",
        alt: "Logo do Shopping Moveis Agua Branca",
        segment: "Varejo",
    },
    {
        name: "Anaclin",
        logo: "/images/clients/anaclin.png",
        alt: "Logo da Anaclin",
        segment: "Saude",
    },
    {
        name: "Flylink",
        logo: "/images/clients/flylink.png",
        alt: "Logo da Flylink",
        segment: "Turismo",
    },
];

const testimonials = [
    {
        name: "John L. Nascimento",
        role: "CEO - Conect 7G",
        summary:
            "Depoimento do site antigo reforcando a confianca em uma entrega profissional para empresas que precisam de velocidade e qualidade.",
    },
    {
        name: "Wellington Leite",
        role: "CTO - Criativa Marketing",
        summary:
            "Relato sobre fluidez de processo e previsibilidade, dois pontos que tambem fazem diferenca quando a empresa precisa publicar sem travar.",
    },
    {
        name: "Andre Luis",
        role: "CEO - Grupo ALJR",
        summary:
            "Visao de lideranca sobre ter um parceiro que cumpre prazo, entrega bem feito e sustenta a operacao depois do lancamento.",
    },
];

type RegionBlock = {
    region: string;
    cities: string[];
    description: string;
};

const regions: RegionBlock[] = [
    {
        region: "Sao Paulo",
        cities: ["Campinas", "Valinhos", "Sumare", "Hortolandia", "Sao Paulo", "Aguai"],
        description:
            "Atendimento para empresas de Campinas e regiao que precisam de rapidez, suporte e uma operacao digital mais estruturada.",
    },
    {
        region: "Curitiba e regiao",
        cities: ["Curitiba", "Ponta Grossa", "Paranagua"],
        description:
            "Projetos voltados para empresas que buscam presenca digital mais forte no mercado paranaense.",
    },
    {
        region: "Santa Catarina",
        cities: ["Joinville", "Blumenau", "Brusque", "Florianopolis"],
        description:
            "Solucao para empresas que querem crescer com uma vitrine digital mais profissional e preparada para competir.",
    },
    {
        region: "Mato Grosso do Sul",
        cities: ["Campo Grande", "Rochedo", "Ribas do Rio Pardo"],
        description:
            "Estrutura digital para negocios que precisam sair do offline, organizar a apresentacao e vender com mais confianca.",
    },
];

const faqs = [
    {
        question: "Qual o prazo para desenvolver um site?",
        answer:
            "Cada projeto tem seu proprio prazo, mas trabalhamos com entregas a partir de 24 horas em casos emergenciais. Na maior parte dos projetos, o objetivo e unir rapidez, qualidade e uma data combinada desde o inicio.",
    },
    {
        question: "Quanto custa um site?",
        answer:
            "O investimento varia conforme o tipo de projeto, mas trabalhamos com propostas sob medida para empresas de diferentes portes. O importante aqui e receber uma estrutura que faca sentido para o seu momento de negocio.",
    },
    {
        question: "O que e o Seguro Site?",
        answer:
            "O Seguro Site e uma camada de seguranca para situacoes criticas. Em caso de perda ou instabilidade, a Unti pode recuperar backups e acelerar a volta do projeto ao ar mediante abertura de chamado.",
    },
    {
        question: "Minha empresa precisa chegar com tudo pronto?",
        answer:
            "Nao. Diferente do fluxo de agencias, empresas muitas vezes chegam sem briefing fechado, wireframe ou estrategia completa. Faz parte do nosso trabalho organizar isso com voce e transformar a ideia em um projeto executavel.",
    },
];

export default function EmpresasPage() {
    return (
        <SolutionPage
            schemaMarkup={schemaMarkup}
            breadcrumb={[{ label: "Solucoes", href: "/solucoes" }, { label: "Para Empresas" }]}
            preTitle="Para Empresas"
            title="Criacao de Sites e Soluções Digitais para Empresas"
            subtitle="A Unti Digital atende empresas que precisam de experts em desenvolvimento de sites, landing pages, blogs e lojas. Voce ganha um parceiro para tirar o projeto do papel com clareza, prazo e uma entrega que ajuda a alavancar o negocio."
            benefits={benefits}
            benefitsTitle="Como tiramos o projeto da sua empresa do papel"
            benefitsSubtitle="Trazemos para o site novo a clareza comercial do modelo antigo: entender o negocio, montar o plano certo e entregar bem feito."
            heroCtaButtonText="Solicitar Orcamento"
            heroCtaButtonHref="/contato"
            heroSecondaryCtaText="Falar com Especialista"
            heroSecondaryCtaHref="/contato"
            afterBenefitsSection={
                <section className="bg-slate-50 py-20">
                    <Container>
                        <SectionReveal className="mx-auto max-w-3xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-unti-blue">
                                O que desenvolvemos
                            </p>
                            <h2 className="mt-4 text-3xl font-bold text-zinc-900 md:text-4xl">
                                Servicos e planos para criacao de sites e gestao digital
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                                No site antigo, a Unti se apresentava como apoio para empresas que precisavam de
                                especialistas em sites, landing pages, blogs e lojas. Aqui, essa mesma proposta
                                aparece com uma estrutura mais premium e mais clara para tomada de decisao.
                            </p>
                        </SectionReveal>

                        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                            {businessOffers.map((offer) => (
                                <SectionReveal key={offer.title} className="h-full">
                                    <article className="h-full rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                        <h3 className="text-2xl font-semibold text-zinc-900">{offer.title}</h3>
                                        <p className="mt-4 leading-relaxed text-zinc-600">{offer.description}</p>
                                        <ul className="mt-6 space-y-3">
                                            {offer.bullets.map((item) => (
                                                <li
                                                    key={item}
                                                    className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-zinc-600"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </article>
                                </SectionReveal>
                            ))}
                        </div>

                        <SectionReveal className="mt-16">
                            <div className="rounded-[32px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-8 shadow-[0_18px_50px_rgba(37,99,235,0.08)] md:p-10">
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-unti-blue">
                                    Clareza comercial
                                </p>
                                <h3 className="mt-4 text-3xl font-bold text-zinc-900">
                                    A Unti Digital e para sua empresa e para o momento em que ela precisa crescer.
                                </h3>
                                <p className="mt-5 max-w-4xl text-lg leading-relaxed text-zinc-600">
                                    Nos valorizamos cada cliente e recebemos bem qualquer area. Receba seu projeto
                                    na data combinada e alavanque o seu negocio na certeza de um servico bem feito,
                                    agora dentro de uma experiencia visual mais premium e mais confiavel.
                                </p>
                            </div>
                        </SectionReveal>

                        <SectionReveal className="mx-auto mt-20 max-w-3xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-unti-blue">
                                Autoridade e confianca
                            </p>
                            <h2 className="mt-4 text-3xl font-bold text-zinc-900 md:text-4xl">
                                Empresas que ja confiaram na Unti Digital
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                                O novo site precisa parecer mais sofisticado, mas a prova de confianca continua
                                vindo da mesma base: marcas reais, projetos reais e gente que precisava publicar com seguranca.
                            </p>
                        </SectionReveal>

                        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                            {authorityClients.map((client) => (
                                <SectionReveal key={client.name} className="h-full">
                                    <article className="flex h-full min-h-[156px] flex-col items-center justify-center rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-sm">
                                        <Image
                                            src={client.logo}
                                            alt={client.alt}
                                            width={180}
                                            height={72}
                                            className="h-14 w-auto object-contain grayscale transition duration-300 hover:grayscale-0"
                                        />
                                        <p className="mt-5 text-lg font-semibold text-zinc-900">{client.name}</p>
                                        <p className="mt-1 text-sm text-zinc-500">{client.segment}</p>
                                    </article>
                                </SectionReveal>
                            ))}
                        </div>

                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            {testimonials.map((item) => (
                                <SectionReveal key={item.name} className="h-full">
                                    <article className="h-full overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                        <div className="mb-6 flex h-20 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-900 via-slate-800 to-zinc-700">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                                                <div className="ml-1 h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white" />
                                            </div>
                                        </div>
                                        <p className="rounded-full bg-blue-50 px-3 py-1 text-center text-xs font-semibold uppercase tracking-[0.18em] text-unti-blue">
                                            Depoimento em video
                                        </p>
                                        <h3 className="mt-6 text-xl font-semibold text-zinc-900">{item.name}</h3>
                                        <p className="mt-1 text-sm text-zinc-500">{item.role}</p>
                                        <p className="mt-5 leading-relaxed text-zinc-600">{item.summary}</p>
                                    </article>
                                </SectionReveal>
                            ))}
                        </div>

                        <SectionReveal className="mx-auto mt-20 max-w-3xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-unti-blue">
                                SEO local e regional
                            </p>
                            <h2 className="mt-4 text-3xl font-bold text-zinc-900 md:text-4xl">
                                Atendemos empresas em Campinas, Sao Paulo, Curitiba, Santa Catarina e Mato Grosso do Sul
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                                O site antigo tinha uma forca importante de SEO regional. Em vez de perder isso,
                                trouxemos esse contexto para uma estrutura mais premium, reforcando que a Unti atende
                                o Brasil todo com especial atencao aos mercados em que ja construiu historico.
                            </p>
                        </SectionReveal>

                        <div className="mt-12 grid gap-6 lg:grid-cols-2">
                            {regions.map((region) => (
                                <SectionReveal key={region.region} className="h-full">
                                    <article className="h-full rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-unti-blue">
                                            {region.region}
                                        </p>
                                        <p className="mt-4 leading-relaxed text-zinc-600">{region.description}</p>
                                        <div className="mt-6 flex flex-wrap gap-3">
                                            {region.cities.map((city) => (
                                                <span
                                                    key={city}
                                                    className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-unti-blue"
                                                >
                                                    {city}
                                                </span>
                                            ))}
                                        </div>
                                    </article>
                                </SectionReveal>
                            ))}
                        </div>
                    </Container>
                </section>
            }
            processSteps={processSteps}
            processTitle="Como a sua empresa avanca com a Unti"
            keyMessage="Seu projeto com mais previsibilidade e mais autoridade"
            keyText="Receba sua estrutura digital na data combinada e alavanque o negocio com uma base feita para transmitir confianca desde o primeiro acesso."
            extraSection={
                <section className="bg-white py-20">
                    <Container>
                        <SectionReveal className="mx-auto mb-12 max-w-3xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-unti-blue">
                                FAQ estrategico
                            </p>
                            <h2 className="mt-4 text-3xl font-bold text-zinc-900 md:text-4xl">
                                Dúvidas mais comuns antes de contratar o projeto
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                                Trouxemos para ca as perguntas que o site antigo ja respondia bem, agora com uma
                                leitura mais clara dentro do novo posicionamento da Unti.
                            </p>
                        </SectionReveal>

                        <div className="grid gap-6 md:grid-cols-2">
                            {faqs.map((item) => (
                                <SectionReveal key={item.question} className="h-full">
                                    <article className="h-full rounded-[28px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                                        <h3 className="text-2xl font-semibold text-zinc-900">{item.question}</h3>
                                        <p className="mt-4 leading-relaxed text-zinc-600">{item.answer}</p>
                                    </article>
                                </SectionReveal>
                            ))}
                        </div>

                        <SectionReveal className="mt-12 flex justify-center">
                            <Link href="/contato">
                                <Button variant="primary" className="h-14 px-8 text-base">
                                    Solicitar Orcamento
                                </Button>
                            </Link>
                        </SectionReveal>
                    </Container>
                </section>
            }
            ctaTitle="Vamos estruturar o proximo passo digital da sua empresa?"
            ctaText="Conte o momento do seu negocio e vamos desenhar a melhor combinacao entre site, landing page, conteudo, loja e suporte para voce crescer com mais clareza."
            ctaButtonText="Falar com Especialista"
            ctaButtonHref="/contato"
        />
    );
}
