import Image from "next/image";
import { SolutionPage, SolutionBenefit, SolutionStep } from "@/components/solucoes/SolutionPage";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const metadata = {
    title: "Integrações com CRM e ERP | Unti Digital",
    description: "Integrações robustas entre CRM, ERP, marketing e operação com sincronização em tempo real e redução de retrabalho.",
    keywords: [
        "integração crm e erp",
        "automação de processos",
        "sincronização de dados em tempo real",
        "integração salesforce sap",
        "integração hubspot rd station"
    ],
    alternates: { canonical: "/solucoes/integracoes-crm-erp" },
    openGraph: {
        title: "Integrações com CRM e ERP | Unti Digital",
        description: "Integrações robustas entre CRM, ERP, marketing e operação com sincronização em tempo real e redução de retrabalho.",
        type: "website",
        url: "https://unti-digital.vercel.app/solucoes/integracoes-crm-erp",
    },
};

const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Integrações com CRM e ERP",
    description: "Conectamos CRM, ERP, marketing e operação com integrações robustas, automação e dados em tempo real.",
    provider: { "@type": "Organization", name: "Unti Digital", url: "https://unti-digital.vercel.app" },
    areaServed: "BR",
};

const benefits: SolutionBenefit[] = [
    { title: "Fluxos automatizados ponta a ponta", description: "Eliminamos tarefas manuais repetitivas conectando marketing, vendas, financeiro e operação em um único ecossistema de dados." },
    { title: "Sincronização em tempo real", description: "Os dados circulam entre sistemas críticos com consistência, rastreabilidade e contexto operacional sem latência." },
    { title: "Redução de falhas humanas", description: "Menos retrabalho, menos duplicidade e mais confiança nas informações que sustentam a tomada de decisão estratégica." },
    { title: "Integrações resilientes", description: "Projetamos camadas de integração com tratamento de erro, monitoramento ativo e escalabilidade para picos de volume." },
];

const processSteps: SolutionStep[] = [
    { title: "Mapeamento de ecossistema", description: "Levantamos sistemas, regras de negócio, fontes de dados e pontos de atrito da operação." },
    { title: "Arquitetura de integração", description: "Definimos filas, APIs, webhooks, políticas de sincronização e estratégia de observabilidade." },
    { title: "Implementação robusta", description: "Desenvolvemos as integrações com validação de payload, segurança e documentação técnica completa." },
    { title: "Homologação e testes", description: "Simulamos cenários reais para garantir consistência, performance e comportamento confiável em produção." },
    { title: "Monitoramento contínuo", description: "Acompanhamos logs, falhas e performance para manter os fluxos críticos sempre saudáveis." },
];

const testimonials = [
    {
        name: "Arthur",
        role: "Empresário parceiro",
        duration: "01:24",
        quote: "A integração entre nosso CRM e ERP eliminou completamente o retrabalho manual. Os dados agora fluem em tempo real e nossa equipe de vendas opera com informações precisas.",
    },
    {
        name: "Wellington",
        role: "CTO de agência parceira",
        duration: "01:08",
        quote: "A UNTI mapeou nosso ecossistema inteiro e entregou uma arquitetura de integração resiliente. Nenhum dado perdido, nenhuma falha silenciosa.",
    },
    {
        name: "André",
        role: "CEO de grupo parceiro",
        duration: "00:56",
        quote: "Finalmente temos visão 360° do negócio. Marketing, vendas e financeiro falam a mesma língua. A decisão baseada em dados virou realidade.",
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
                    Integrações que eliminam silos de dados e conectam toda a operação em tempo real.
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

export default function IntegracoesPage() {
    return (
        <SolutionPage
            schemaMarkup={schemaMarkup}
            breadcrumb={[{ label: "Soluções", href: "/solucoes" }, { label: "Integrações CRM e ERP" }]}
            preTitle="Solução em Integrações"
            title="Integrações com CRM e ERP"
            subtitle="Conectamos marketing, vendas e operação por meio de integrações robustas entre Salesforce, SAP, RD Station, HubSpot e sistemas proprietários, eliminando silos de dados e erros manuais."
            benefits={benefits}
            afterBenefitsSection={socialProofSection}
            processSteps={processSteps}
            keyMessage="Resultado Esperado"
            keyText="Conectividade via Webhooks e filas (RabbitMQ/Redis) para garantir que nenhum dado seja perdido em sincronizações entre Salesforce, SAP, RD Station ou ERPs legados. Visão 360° do negócio com dados fluindo sem gargalos entre marketing, vendas e financeiro — permitindo decisões baseadas em números reais, não suposições."
        />
    );
}
