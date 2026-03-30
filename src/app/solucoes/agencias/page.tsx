import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SolutionPage, SolutionStep } from "@/components/solucoes/SolutionPage";

export const metadata = {
    title: "Desenvolvimento de Sites para Agencias | Unti Digital",
    description:
        "Terceirizacao white label para agencias com planos flexiveis, suporte continuo, correcao de bugs e entrega garantida sem burocracia.",
    keywords: [
        "desenvolvimento para agencias",
        "white label para agencias",
        "terceirizacao de desenvolvimento",
        "planos para agencias",
        "desenvolvimento de sites para agencias",
    ],
    alternates: {
        canonical: "/solucoes/agencias",
    },
    openGraph: {
        title: "Desenvolvimento de Sites para Agencias | Unti Digital",
        description:
            "Terceirize o desenvolvimento da sua agencia com planos flexiveis, suporte tecnico e entrega garantida.",
        type: "website",
        url: "https://unti-digital.vercel.app/solucoes/agencias",
    },
};

const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Desenvolvimento de Sites para Agencias",
    serviceType: "White Label para Agencias",
    description:
        "Servico de terceirizacao de desenvolvimento para agencias com planos flexiveis, suporte continuo e capacidade sob demanda.",
    provider: {
        "@type": "Organization",
        name: "Unti Digital",
        url: "https://unti-digital.vercel.app",
    },
    areaServed: "BR",
};

const benefits = [
    {
        title: "01. Briefing e Plano",
        description:
            "Entendemos o fluxo de agencias. Seus requisitos minimos ja sao nosso ponto de partida, do marketing ao wireframe.",
    },
    {
        title: "02. Escolha seu Plano",
        description:
            "Flexibilidade total para operar do seu jeito, com planos mensais de manutencao ou projetos pontuais que acompanham sua demanda.",
    },
    {
        title: "03. Entrega e Gestao",
        description:
            "Sua agencia ganha suporte continuo e um canal claro para solicitar ajustes, evitando retrabalho e tarefas esquecidas.",
    },
];

const processSteps: SolutionStep[] = [
    {
        title: "Alinhamento de agencia",
        description:
            "Entramos no seu processo, entendemos prioridades, tipos de cliente e formato de aprovacao para operar sem atrito.",
    },
    {
        title: "Plano e priorizacao",
        description:
            "Definimos se a melhor rota e manutencao recorrente ou projeto pontual, com SLA coerente ao ritmo comercial da sua agencia.",
    },
    {
        title: "Desenvolvimento white label",
        description:
            "Executamos sob sua marca com disciplina, confidencialidade e acompanhamento de tudo o que esta em producao.",
    },
    {
        title: "Entrega e suporte continuo",
        description:
            "Apos publicar, continuamos no circuito para correcoes, ajustes e novas solicitacoes sem deixar sua equipe descoberta.",
    },
];

type AgencyPlan = {
    name: string;
    badge?: string;
    featured?: boolean;
    backups: string;
    bugFixes: string;
    textAdjustments: string;
    imageChanges: string;
    insurance: string;
    investment: string;
};

const plans: AgencyPlan[] = [
    {
        name: "Plano P",
        badge: "Entrada agil",
        backups: "2x por mes",
        bugFixes: "Ate 7 dias uteis",
        textAdjustments: "Sob encomenda",
        imageChanges: "Sim",
        insurance: "Incluso",
        investment: "Consultar",
    },
    {
        name: "Plano M",
        badge: "Mais vendido",
        featured: true,
        backups: "4x por mes",
        bugFixes: "Ate 5 dias uteis",
        textAdjustments: "Sob encomenda",
        imageChanges: "Sim",
        insurance: "Incluso",
        investment: "Consultar",
    },
    {
        name: "Plano GIGA",
        badge: "Alta prioridade",
        backups: "4x por mes",
        bugFixes: "Ate 2 dias uteis",
        textAdjustments: "Sob encomenda",
        imageChanges: "Sim",
        insurance: "Incluso",
        investment: "Consultar",
    },
];

const testimonials = [
    {
        name: "John L. Nascimento",
        role: "CEO - Conect 7G",
        summary: "Depoimento sobre parceria tecnica para escalar entregas sem inflar o time interno.",
    },
    {
        name: "Wellington Leite",
        role: "CTO - Criativa Marketing",
        summary: "Relato focado em previsibilidade, fluidez no processo e menos dor com gestao de desenvolvimento.",
    },
    {
        name: "Andre Luis",
        role: "CEO - Grupo ALJR",
        summary: "Visao de quem precisava de uma retaguarda confiavel para manter projetos andando com ritmo.",
    },
];

const faqs = [
    {
        question: "Qual a diferenca entre Planos Agencia e Planos Empresa?",
        answer:
            "Os planos para agencias partem do principio de que sua equipe ja chega com briefing, wireframe, estrategia e fluxo de aprovacao mais definidos. Isso permite uma operacao white label mais agil, com suporte tecnico especializado para alta rotatividade de demandas.",
    },
    {
        question: "O que e o Seguro Site?",
        answer:
            "O Seguro Site funciona como uma camada de protecao para emergencias. Em caso de perda, instabilidade ou necessidade critica de retomada, atuamos com abertura de chamado, recuperacao via backup e aceleracao da volta ao ar.",
    },
    {
        question: "Posso contratar apenas um projeto pontual?",
        answer:
            "Sim. Se a sua agencia nao precisa de um plano recorrente, tambem atendemos demandas sob encomenda para lancamentos, ajustes pontuais e entregas especificas.",
    },
];

export default function AgenciasPage() {
    return (
        <SolutionPage
            schemaMarkup={schemaMarkup}
            breadcrumb={[{ label: "Solucoes", href: "/solucoes" }, { label: "Para Agencias" }]}
            preTitle="Para Agencias"
            title="Desenvolvimento de Sites para Agencias: Sem burocracia e com entrega garantida"
            subtitle="Seja o braco tecnologico de elite que sua agencia precisa. Terceirize o desenvolvimento com a Unti Digital e elimine o estresse com prazos, bugs e gestao de devs."
            benefits={benefits}
            benefitsTitle="Tres pilares para terceirizar sem perder o controle"
            benefitsSubtitle="Unimos a clareza comercial do modelo antigo com uma operacao mais premium, previsivel e facil de encaixar no ritmo da sua agencia."
            heroCtaButtonText="Conhecer Planos e Precos"
            heroCtaButtonHref="#planos"
            heroSecondaryCtaText="Falar com Especialista"
            heroSecondaryCtaHref="/contato"
            afterBenefitsSection={
                <section className="bg-slate-50 py-20">
                    <Container>
                        <div id="planos">
                            <SectionReveal className="mx-auto max-w-3xl text-center">
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-unti-blue">
                                    Planos e precos
                                </p>
                                <h2 className="mt-4 text-3xl font-bold text-zinc-900 md:text-4xl">
                                    Escolha o formato que melhor acompanha a sua operacao
                                </h2>
                                <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                                    Seja para manutencao recorrente ou para demandas pontuais, sua agencia ganha
                                    previsibilidade de entrega, cobertura de bugs e suporte real sem carregar uma
                                    estrutura de desenvolvimento fixa.
                                </p>
                            </SectionReveal>
                        </div>

                        <div className="mt-12 grid gap-6 lg:grid-cols-3">
                            {plans.map((plan) => (
                                <SectionReveal key={plan.name} className="h-full">
                                    <article
                                        className={`flex h-full flex-col rounded-[32px] border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                                            plan.featured
                                                ? "border-blue-200 ring-1 ring-blue-100"
                                                : "border-slate-200"
                                        }`}
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-400">
                                                    {plan.name}
                                                </p>
                                                <h3 className="mt-3 text-3xl font-bold text-zinc-900">
                                                    {plan.investment}
                                                </h3>
                                                <p className="mt-2 text-sm text-zinc-500">Investimento sob consulta</p>
                                            </div>
                                            {plan.badge && (
                                                <span
                                                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                                                        plan.featured
                                                            ? "bg-blue-600 text-white"
                                                            : "bg-slate-100 text-zinc-600"
                                                    }`}
                                                >
                                                    {plan.badge}
                                                </span>
                                            )}
                                        </div>

                                        <div className="mt-8 space-y-4">
                                            {[
                                                { label: "Backups", value: plan.backups },
                                                { label: "Correcao de bugs", value: plan.bugFixes },
                                                { label: "Ajustes de texto", value: plan.textAdjustments },
                                                { label: "Alteracao de imagens", value: plan.imageChanges },
                                                { label: "Seguro Site", value: plan.insurance },
                                            ].map((item) => (
                                                <div
                                                    key={item.label}
                                                    className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 text-sm"
                                                >
                                                    <span className="font-medium text-zinc-500">{item.label}</span>
                                                    <span className="text-right font-semibold text-zinc-900">{item.value}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-8 pt-2">
                                            <Link href="/contato">
                                                <Button
                                                    variant={plan.featured ? "primary" : "secondary"}
                                                    className="h-12 w-full"
                                                >
                                                    Consultar este plano
                                                </Button>
                                            </Link>
                                        </div>
                                    </article>
                                </SectionReveal>
                            ))}
                        </div>

                        <SectionReveal className="mt-10">
                            <div className="rounded-[28px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-8 shadow-[0_18px_50px_rgba(37,99,235,0.08)]">
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-unti-blue">
                                    Operacao flexivel
                                </p>
                                <h3 className="mt-4 text-2xl font-bold text-zinc-900">
                                    Planos mensais quando voce precisa de retaguarda constante.
                                </h3>
                                <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                                    Projetos sob encomenda quando a sua necessidade e pontual. Em ambos os casos,
                                    a Unti entra como parceira white label para tirar peso da sua operacao e dar
                                    mais seguranca ao comercial.
                                </p>
                            </div>
                        </SectionReveal>

                        <SectionReveal className="mx-auto mt-20 max-w-3xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-unti-blue">
                                Prova social
                            </p>
                            <h2 className="mt-4 text-3xl font-bold text-zinc-900 md:text-4xl">
                                O que estao falando da Unti Digital
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                                A Unti Digital e para sua empresa e para sua agencia. Nao somos apenas
                                terceirizados, somos o seu socio tecnologico.
                            </p>
                        </SectionReveal>

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
                    </Container>
                </section>
            }
            processSteps={processSteps}
            processTitle="Como a parceria funciona na pratica"
            keyMessage="Sua agencia com capacidade de entrega ilimitada"
            keyText="Reduza custos fixos e foque na estrategia enquanto nos cuidamos do codigo."
            extraSection={
                <section className="bg-white py-20">
                    <Container>
                        <SectionReveal className="mx-auto mb-12 max-w-3xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-unti-blue">
                                FAQ estrategico
                            </p>
                            <h2 className="mt-4 text-3xl font-bold text-zinc-900 md:text-4xl">
                                Duvidas que costumam travar a decisao da agencia
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                                Aqui esta o que normalmente precisa ficar claro antes de terceirizar o desenvolvimento.
                            </p>
                        </SectionReveal>

                        <div className="grid gap-6 md:grid-cols-3">
                            {faqs.map((item) => (
                                <SectionReveal key={item.question} className="h-full">
                                    <article className="h-full rounded-[28px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                                        <h3 className="text-2xl font-semibold text-zinc-900">{item.question}</h3>
                                        <p className="mt-4 leading-relaxed text-zinc-600">{item.answer}</p>
                                    </article>
                                </SectionReveal>
                            ))}
                        </div>
                    </Container>
                </section>
            }
            ctaTitle="Quer uma retaguarda tecnica que acompanhe o ritmo da sua agencia?"
            ctaText="Fale com a Unti Digital e descubra o formato ideal para ganhar capacidade de entrega sem aumentar a complexidade do seu operacional."
            ctaButtonText="Falar com Especialista"
            ctaButtonHref="/contato"
        />
    );
}
