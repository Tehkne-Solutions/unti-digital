import Image from "next/image";
import { SolutionPage, SolutionBenefit, SolutionStep } from "@/components/solucoes/SolutionPage";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const metadata = {
    title: "White Label Técnico para Agências | Unti Digital",
    description: "White Label técnico para agências com confidencialidade, engenharia sênior sob demanda e entrega invisível para projetos complexos.",
    keywords: [
        "white label técnico para agências",
        "parceria técnica para agência",
        "desenvolvimento sob demanda para agência",
        "nda para agência digital",
        "equipe de desenvolvimento white label"
    ],
    alternates: { canonical: "/solucoes/white-label-agencias" },
    openGraph: {
        title: "White Label Técnico para Agências | Unti Digital",
        description: "White Label técnico para agências com confidencialidade, engenharia sênior sob demanda e entrega invisível para projetos complexos.",
        type: "website",
        url: "https://unti-digital.vercel.app/solucoes/white-label-agencias",
    },
};

const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "White Label Técnico para Agências",
    description: "Fornecemos engenharia sênior sob sua marca com confidencialidade, arquitetura robusta e capacidade sob demanda para agências.",
    provider: { "@type": "Organization", name: "Unti Digital", url: "https://unti-digital.vercel.app" },
    areaServed: "BR",
};

const benefits: SolutionBenefit[] = [
    { title: "Confidencialidade total", description: "Operamos com NDA e entrega invisível, preservando a relação da sua agência com o cliente final em todos os projetos." },
    { title: "Capacidade sob demanda", description: "Você amplia a entrega técnica sem carregar o custo fixo de estruturar uma equipe interna completa de engenharia." },
    { title: "Engenharia sênior plugada ao seu fluxo", description: "Nos integramos aos seus processos, padrões e rituais para manter consistência e qualidade na operação." },
    { title: "Qualidade enterprise para projetos premium", description: "Assumimos projetos mais complexos com arquitetura robusta, previsibilidade e padrão alto de execução." },
];

const processSteps: SolutionStep[] = [
    { title: "Diagnóstico da operação", description: "Entendemos seu modelo comercial, stack, gargalos e expectativas de entrega para definir o modelo de colaboração." },
    { title: "Acordos e governança", description: "Definimos confidencialidade, fluxo de comunicação, SLA e modelo de colaboração com sua agência." },
    { title: "Integração ao processo", description: "Entramos nos seus rituais, ferramentas e padrão de execução para operar como extensão do seu time." },
    { title: "Entrega técnica invisível", description: "Executamos projetos com engenharia robusta, checkpoints claros e prazos rigorosos sob sua marca." },
    { title: "Continuidade e escala", description: "Mantemos sustentação técnica e abrimos capacidade para novos projetos sem perda de qualidade." },
];

const testimonials = [
    {
        name: "Arthur",
        role: "Empresário parceiro",
        duration: "01:24",
        quote: "A UNTI opera como se fosse nosso time interno. O cliente final nunca soube que havia um parceiro técnico por trás. Entrega impecável e dentro do prazo.",
    },
    {
        name: "Wellington",
        role: "CTO de agência parceira",
        duration: "01:08",
        quote: "Conseguimos absorver projetos que antes recusávamos por falta de capacidade técnica. A UNTI entrou no nosso fluxo sem atritos e entregou com qualidade enterprise.",
    },
    {
        name: "André",
        role: "CEO de grupo parceiro",
        duration: "00:56",
        quote: "Escalamos nossa receita sem aumentar a folha. O modelo White Label da UNTI nos deu acesso a engenharia sênior sob demanda com total confidencialidade.",
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
                    Agências que escalaram sua capacidade técnica sem aumentar custo fixo, com entrega invisível e qualidade garantida.
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
                <h3 className="mt-4 text-2xl font-bold text-zinc-900 md:text-3xl">Agências que já confiam na Unti Digital</h3>
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

export default function WhiteLabelAgenciasPage() {
    return (
        <SolutionPage
            schemaMarkup={schemaMarkup}
            breadcrumb={[{ label: "Soluções", href: "/solucoes" }, { label: "White Label para Agências" }]}
            preTitle="Solução White Label"
            title="White Label Técnico para Agências"
            subtitle="Expanda a capacidade de entrega da sua agência com engenharia de ponta sob sua própria marca. Atuamos com confidencialidade, arquitetura robusta e disciplina operacional para projetos de alta exigência."
            benefits={benefits}
            afterBenefitsSection={socialProofSection}
            processSteps={processSteps}
            keyMessage="Resultado Esperado"
            keyText="Squads dedicadas operando com GitFlow, Clean Code e documentação técnica completa via Swagger para garantir independência e fácil manutenção. Escalabilidade imediata para sua agência absorver projetos de alto calibre sem aumentar o custo fixo de folha — com a garantia de qualidade e confidencialidade total da UNTI."
        />
    );
}
