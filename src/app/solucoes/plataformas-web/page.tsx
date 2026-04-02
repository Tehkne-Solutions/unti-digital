import Image from "next/image";
import { SolutionPage, SolutionBenefit, SolutionStep } from "@/components/solucoes/SolutionPage";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const metadata = {
    title: "Plataformas Web Sob Medida | Unti Digital",
    description: "Plataformas web sob medida com arquitetura modular, integrações avançadas e escala para operações complexas e ambientes SaaS.",
    keywords: [
        "plataformas web sob medida",
        "engenharia de software b2b",
        "arquitetura modular",
        "saas sob medida",
        "sistema web escalável"
    ],
    alternates: { canonical: "/solucoes/plataformas-web" },
    openGraph: {
        title: "Plataformas Web Sob Medida | Unti Digital",
        description: "Plataformas web sob medida com arquitetura modular, integrações avançadas e escala para operações complexas e ambientes SaaS.",
        type: "website",
        url: "https://unti-digital.vercel.app/solucoes/plataformas-web",
    },
};

const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plataformas Web Sob Medida",
    description: "Desenvolvemos sistemas web personalizados com arquitetura modular, integrações avançadas e preparo para alta escala.",
    provider: { "@type": "Organization", name: "Unti Digital", url: "https://unti-digital.vercel.app" },
    areaServed: "BR",
};

const benefits: SolutionBenefit[] = [
    { title: "Arquitetura pensada para escala", description: "Projetamos a solução para acompanhar crescimento de usuários, volume transacional e expansão de produto sem reescritas." },
    { title: "Modularidade para evoluir sem travas", description: "Sua operação ganha uma base técnica preparada para novos módulos, integrações e frentes de negócio." },
    { title: "Integrações de terceiros sem fragilidade", description: "Conectamos APIs, serviços externos e regras de negócio complexas com previsibilidade operacional e tratamento de erros." },
    { title: "Governança técnica desde a origem", description: "Observabilidade, segurança e organização de código entram no projeto desde a primeira entrega, não como correção posterior." },
];

const processSteps: SolutionStep[] = [
    { title: "Imersão na operação", description: "Entendemos fluxo, regras de negócio, integrações e metas para definir a arquitetura certa." },
    { title: "Desenho de arquitetura", description: "Planejamos módulos, camadas e estratégia de escalabilidade de acordo com a complexidade do produto." },
    { title: "Construção incremental", description: "Desenvolvemos em ciclos curtos com entregas testadas, documentação técnica e validações frequentes." },
    { title: "Integração e endurecimento", description: "Conectamos sistemas externos, ajustamos performance e reforçamos estabilidade para produção." },
    { title: "Operação e evolução", description: "Acompanhamos a plataforma com monitoramento, backlog técnico e roadmap de crescimento contínuo." },
];

const testimonials = [
    {
        name: "Arthur",
        role: "Empresário parceiro",
        duration: "01:24",
        quote: "A UNTI entregou uma plataforma que processa nossas operações sem travar. A arquitetura modular nos permitiu adicionar novos módulos sem reescrever nada.",
    },
    {
        name: "Wellington",
        role: "CTO de agência parceira",
        duration: "01:08",
        quote: "O diferencial foi a governança técnica desde o início. Código limpo, documentado e com observabilidade real. Exatamente o que precisávamos para escalar.",
    },
    {
        name: "André",
        role: "CEO de grupo parceiro",
        duration: "00:56",
        quote: "Passamos de um sistema legado para uma plataforma SaaS modular em tempo recorde. A UNTI entregou com clareza e compromisso do início ao fim.",
    },
];

type AuthorityBrand = { kind: "text"; name: string } | { kind: "image"; name: string; logo: string; alt: string };

const authorityBrands: AuthorityBrand[] = [
    { name: "Grupo Savol", kind: "text" },
    { name: "WRK Agência", kind: "image", logo: "/images/clients/wrk-agencia.webp", alt: "Logo da WRK Agência" },
    { name: "Toriba Renault", kind: "image", logo: "/images/clients/toriba-renault.png", alt: "Logo da Toriba Renault" },
    { name: "Shopping Móveis Água Branca", kind: "image", logo: "/images/clients/shopping-moveis-agua-branca.png", alt: "Logo do Shopping Móveis Água Branca" },
    { name: "Santos", kind: "text" },
];

const socialProofSection = (
    <section className="bg-slate-50/70 py-20">
        <Container>
            <SectionReveal className="mx-auto mb-12 max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-unti-blue">Prova social</p>
                <h2 className="mt-4 text-3xl font-bold text-zinc-900 md:text-4xl">O que estão falando da Unti Digital</h2>
                <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                    Plataformas que escalam, integram e operam com 99.9% de disponibilidade. Veja o que nossos parceiros dizem sobre a entrega.
                </p>
            </SectionReveal>

            <div className="grid gap-6 md:grid-cols-3">
                {testimonials.map((item) => (
                    <SectionReveal key={item.name} className="h-full">
                        <article className="group relative h-full overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <div className="mb-6 flex items-center justify-between">
                                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-unti-blue">Depoimento em vídeo</span>
                                <span className="text-sm font-medium text-zinc-400">{item.duration}</span>
                            </div>
                            <div className="mb-6 flex h-20 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-900 via-slate-800 to-zinc-700">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                                    <div className="ml-1 h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white" />
                                </div>
                            </div>
                            <blockquote className="text-base leading-relaxed text-zinc-600">&quot;{item.quote}&quot;</blockquote>
                            <div className="mt-6 border-t border-slate-100 pt-5">
                                <p className="text-lg font-semibold text-zinc-900">{item.name}</p>
                                <p className="text-sm text-zinc-500">{item.role}</p>
                            </div>
                        </article>
                    </SectionReveal>
                ))}
            </div>

            <SectionReveal className="mx-auto mt-16 max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-unti-blue">Autoridade de mercado</p>
                <h3 className="mt-4 text-2xl font-bold text-zinc-900 md:text-3xl">Empresas que já confiaram na Unti Digital</h3>
            </SectionReveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {authorityBrands.map((brand) => (
                    <SectionReveal key={brand.name} className="h-full">
                        <article className="flex h-full min-h-[132px] items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            {brand.kind === "image" ? (
                                <Image src={brand.logo} alt={brand.alt} width={180} height={72} className="h-14 w-auto object-contain grayscale transition duration-300 hover:grayscale-0" />
                            ) : (
                                <div className="text-center">
                                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">Marca parceira</p>
                                    <p className="mt-3 text-lg font-semibold text-zinc-900">{brand.name}</p>
                                </div>
                            )}
                        </article>
                    </SectionReveal>
                ))}
            </div>
        </Container>
    </section>
);

export default function PlataformasWebPage() {
    return (
        <SolutionPage
            schemaMarkup={schemaMarkup}
            breadcrumb={[{ label: "Soluções", href: "/solucoes" }, { label: "Plataformas Web" }]}
            preTitle="Solução em Plataformas Web"
            title="Plataformas Web Sob Medida"
            subtitle="Desenvolvemos ecossistemas SaaS, dashboards e ferramentas de gestão exclusivas. Nossa arquitetura personalizada garante estabilidade, flexibilidade e escala para operações que fogem do convencional."
            benefits={benefits}
            afterBenefitsSection={socialProofSection}
            processSteps={processSteps}
            keyMessage="Resultado Esperado"
            keyText="Desenvolvimento de ecossistemas SaaS modulares, dashboards em tempo real e APIs RESTful/GraphQL com escalabilidade horizontal via Docker. Automação de processos operacionais complexos, reduzindo o custo de mão de obra e eliminando erros humanos em fluxos de gestão críticos — com 99.9% de disponibilidade garantida."
        />
    );
}
