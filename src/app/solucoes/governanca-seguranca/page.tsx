import Image from "next/image";
import { SolutionPage, SolutionBenefit, SolutionStep } from "@/components/solucoes/SolutionPage";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const metadata = {
    title: "Governança e Segurança | Unti Digital",
    description: "Arquiteturas Zero-Trust com controle de acessos, monitoramento contínuo, LGPD e governança para operações digitais críticas.",
    keywords: [
        "governança e segurança digital",
        "zero trust",
        "compliance lgpd",
        "controle de acessos",
        "monitoramento de segurança"
    ],
    alternates: { canonical: "/solucoes/governanca-seguranca" },
    openGraph: {
        title: "Governança e Segurança | Unti Digital",
        description: "Arquiteturas Zero-Trust com controle de acessos, monitoramento contínuo, LGPD e governança para operações digitais críticas.",
        type: "website",
        url: "https://unti-digital.vercel.app/solucoes/governanca-seguranca",
    },
};

const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Governança e Segurança",
    description: "Protegemos operações digitais com arquitetura Zero-Trust, controle de acessos, monitoramento contínuo e conformidade com LGPD.",
    provider: { "@type": "Organization", name: "Unti Digital", url: "https://unti-digital.vercel.app" },
    areaServed: "BR",
};

const benefits: SolutionBenefit[] = [
    { title: "Arquitetura Zero-Trust", description: "Adotamos o princípio de menor privilégio para reduzir superfície de ataque e fortalecer toda a operação digital." },
    { title: "Controle granular de acessos", description: "Definimos identidades, perfis e permissões com rastreabilidade para usuários, integrações e serviços críticos." },
    { title: "Compliance orientado ao negócio", description: "Traduzimos LGPD e exigências regulatórias em práticas aplicáveis ao seu ecossistema digital sem burocracia." },
    { title: "Monitoramento e resposta", description: "Implementamos visibilidade contínua para detectar anomalias, eventos críticos e comportamentos suspeitos em tempo real." },
];

const processSteps: SolutionStep[] = [
    { title: "Avaliação e auditoria", description: "Revisamos arquitetura, permissões, fluxos e riscos para identificar vulnerabilidades e lacunas de governança." },
    { title: "Plano de endurecimento", description: "Definimos roadmap com políticas, controles, responsabilidades e prioridades de implementação." },
    { title: "Implantação de controles", description: "Aplicamos proteção de acesso, segregação, monitoramento e práticas de segurança aderentes ao ambiente." },
    { title: "Validação e conformidade", description: "Executamos testes, revisões e verificações para comprovar aderência técnica e regulatória." },
    { title: "Operação contínua", description: "Mantemos monitoramento ativo, recomendações evolutivas e resposta mais rápida a novos riscos." },
];

const testimonials = [
    {
        name: "Arthur",
        role: "Empresário parceiro",
        duration: "01:24",
        quote: "A UNTI implementou uma arquitetura Zero-Trust que nos deu controle total sobre acessos. Hoje sabemos exatamente quem acessa o quê e quando.",
    },
    {
        name: "Wellington",
        role: "CTO de agência parceira",
        duration: "01:08",
        quote: "A conformidade com LGPD deixou de ser um problema. A UNTI traduziu os requisitos regulatórios em práticas técnicas aplicáveis sem travar a operação.",
    },
    {
        name: "André",
        role: "CEO de grupo parceiro",
        duration: "00:56",
        quote: "Dormimos tranquilos sabendo que nossa operação está blindada. O monitoramento contínuo detectou e bloqueou tentativas de acesso antes de qualquer dano.",
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
                    Proteção total contra vazamentos e conformidade com LGPD implementados como padrão, não como opcional.
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

export default function GovernancaSegurancaPage() {
    return (
        <SolutionPage
            schemaMarkup={schemaMarkup}
            breadcrumb={[{ label: "Soluções", href: "/solucoes" }, { label: "Governança e Segurança" }]}
            preTitle="Solução em Governança e Segurança"
            title="Governança e Segurança"
            subtitle="Protegemos sua operação com arquiteturas Zero-Trust, controle rigoroso de acessos, monitoramento contínuo e conformidade com LGPD e normas de segurança corporativa."
            benefits={benefits}
            afterBenefitsSection={socialProofSection}
            processSteps={processSteps}
            keyMessage="Resultado Esperado"
            keyText="Implementação de protocolos SSL avançados, conformidade total com LGPD (criptografia em repouso e trânsito) e firewalls de aplicação (WAF). Blindagem da reputação digital com proteção total contra vazamentos de dados que poderiam resultar em multas pesadas e perda irreversível de confiança do mercado."
        />
    );
}
