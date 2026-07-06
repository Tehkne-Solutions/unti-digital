import Image from "next/image";
import Link from "next-intl/link";
import { Container } from "@/components/ui/Container";
import { clients } from "@/data/clients";
import { getServices } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";
import { isLocale, type AppLocale } from "@/lib/i18n";

const projectsLabel = "Empresas com projetos Unti Digital";

const heroImage =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80";
const coreImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80";
const processImage =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80";

const caseNames = [
  "TOYOTA",
  "SAVOL",
  "DAFRA",
  "ROSE PEDRAS",
  "MG MOTOR",
  "AUTOSHOPPING TIQUATIRA",
  "JESUS É BOM"
];

const copy = {
  pt: {
    eyebrow: "White label técnico e operação digital",
    title: "Estrutura técnica para empresas que precisam entregar mais sem aumentar a complexidade interna.",
    description:
      "A UNTI Digital atua como braço técnico para desenvolvimento web, aplicações, integrações, infraestrutura, marketing digital e operação com cliente final.",
    primaryCta: "Agendar diagnóstico",
    secondaryCta: "Ver serviços",
    coreEyebrow: "Direcionamento principal",
    coreTitle: "Serviços sob demanda com atuação white label quando a operação precisa de reforço técnico.",
    coreDescription:
      "Entramos como squad técnico para absorver demandas, executar sprints, corrigir gargalos, sustentar projetos entregues e manter a marca da empresa ou agência no centro da relação com o cliente.",
    servicesEyebrow: "Nossos serviços",
    servicesTitle: "A UNTI cobre as frentes essenciais para estruturar e operar o digital da empresa.",
    casesEyebrow: "Cases",
    casesTitle: "Projetos e operações que representam a experiência da UNTI.",
    processEyebrow: "Modelo de trabalho",
    processTitle: "Um fluxo simples para sair do diagnóstico e chegar na operação.",
    whyTitle: "Por que a UNTI funciona como braço técnico da operação",
    finalTitle: "Vamos mapear onde a UNTI entra na sua operação?",
    finalDescription:
      "O primeiro passo é entender o cenário atual, os gargalos e quais frentes precisam de execução imediata.",
    seoTitle: "Serviços digitais e white label técnico | UNTI Digital",
    seoDescription:
      "Landing page de serviços da UNTI Digital: desenvolvimento web, tecnologia, marketing digital, aplicações, infraestrutura, integração e operação."
  },
  en: {
    eyebrow: "Technical white-label and digital operations",
    title: "Technical structure for companies that need to ship more without increasing internal complexity.",
    description:
      "UNTI Digital works as a technical arm for web development, applications, integrations, infrastructure, digital marketing, and end-client operations.",
    primaryCta: "Book a technical diagnosis",
    secondaryCta: "View services",
    coreEyebrow: "Main direction",
    coreTitle: "On-demand services with white-label execution when the operation needs technical reinforcement.",
    coreDescription:
      "We work as a technical squad to absorb demands, execute sprints, fix bottlenecks, maintain delivered projects, and keep the company or agency brand at the center of the client relationship.",
    servicesEyebrow: "Our services",
    servicesTitle: "UNTI covers the essential fronts to structure and operate a company’s digital ecosystem.",
    casesEyebrow: "Cases",
    casesTitle: "Projects and operations that represent UNTI’s experience.",
    processEyebrow: "Working model",
    processTitle: "A clear flow to move from diagnosis to operation.",
    whyTitle: "Why UNTI works as the technical arm of the operation",
    finalTitle: "Let’s map where UNTI fits into your operation?",
    finalDescription:
      "The first step is to understand the current scenario, bottlenecks, and which fronts need immediate execution.",
    seoTitle: "Digital services and technical white-label | UNTI Digital",
    seoDescription:
      "UNTI Digital services landing page: web development, technology, digital marketing, applications, infrastructure, integration, and operations."
  },
  es: {
    eyebrow: "White label técnico y operación digital",
    title: "Estructura técnica para empresas que necesitan entregar más sin aumentar la complejidad interna.",
    description:
      "UNTI Digital actúa como brazo técnico para desarrollo web, aplicaciones, integraciones, infraestructura, marketing digital y operación con cliente final.",
    primaryCta: "Agendar diagnóstico",
    secondaryCta: "Ver servicios",
    coreEyebrow: "Dirección principal",
    coreTitle: "Servicios bajo demanda con actuación white label cuando la operación necesita refuerzo técnico.",
    coreDescription:
      "Entramos como squad técnico para absorber demandas, ejecutar sprints, corregir cuellos de botella, sostener proyectos entregados y mantener la marca de la empresa o agencia en el centro de la relación con el cliente.",
    servicesEyebrow: "Nuestros servicios",
    servicesTitle: "UNTI cubre los frentes esenciales para estructurar y operar el digital de la empresa.",
    casesEyebrow: "Casos",
    casesTitle: "Proyectos y operaciones que representan la experiencia de UNTI.",
    processEyebrow: "Modelo de trabajo",
    processTitle: "Un flujo claro para pasar del diagnóstico a la operación.",
    whyTitle: "Por qué UNTI funciona como brazo técnico de la operación",
    finalTitle: "¿Mapeamos dónde UNTI entra en tu operación?",
    finalDescription:
      "El primer paso es entender el escenario actual, los cuellos de botella y qué frentes necesitan ejecución inmediata.",
    seoTitle: "Servicios digitales y white label técnico | UNTI Digital",
    seoDescription:
      "Landing page de servicios de UNTI Digital: desarrollo web, tecnología, marketing digital, aplicaciones, infraestructura, integración y operación."
  }
} satisfies Record<AppLocale, Record<string, string>>;

const processSteps = {
  pt: [
    ["Diagnóstico", "Mapeamos operação, stack, canais, gargalos e prioridades."],
    ["Plano de execução", "Organizamos frentes, responsáveis, ritmo de entrega e checkpoints."],
    ["Implementação", "Executamos desenvolvimento, integração, infraestrutura, marketing e operação."],
    ["Gestão contínua", "Mantemos evolução, manutenção, melhorias e sustentação dos projetos."]
  ],
  en: [
    ["Diagnosis", "We map operations, stack, channels, bottlenecks, and priorities."],
    ["Execution plan", "We organize fronts, owners, delivery rhythm, and checkpoints."],
    ["Implementation", "We execute development, integrations, infrastructure, marketing, and operations."],
    ["Continuous management", "We maintain evolution, support, improvements, and project continuity."]
  ],
  es: [
    ["Diagnóstico", "Mapeamos operación, stack, canales, cuellos de botella y prioridades."],
    ["Plan de ejecución", "Organizamos frentes, responsables, ritmo de entrega y checkpoints."],
    ["Implementación", "Ejecutamos desarrollo, integración, infraestructura, marketing y operación."],
    ["Gestión continua", "Mantenemos evolución, soporte, mejoras y continuidad de proyectos."]
  ]
} satisfies Record<AppLocale, string[][]>;

const whyItems = {
  pt: [
    ["Execução sob demanda", "A equipe entra onde há gargalo técnico, comercial ou operacional."],
    ["Visão integrada", "Tecnologia, marketing, atendimento, infraestrutura e gestão ficam no mesmo mapa."],
    ["Operação white label", "Quando necessário, a UNTI atua nos bastidores preservando a marca da empresa ou agência."]
  ],
  en: [
    ["On-demand execution", "The team plugs into technical, commercial, or operational bottlenecks."],
    ["Integrated view", "Technology, marketing, service, infrastructure, and management stay on the same map."],
    ["White-label operation", "When needed, UNTI works behind the scenes while preserving the company or agency brand."]
  ],
  es: [
    ["Ejecución bajo demanda", "El equipo entra donde hay cuello de botella técnico, comercial u operativo."],
    ["Visión integrada", "Tecnología, marketing, atención, infraestructura y gestión quedan en el mismo mapa."],
    ["Operación white label", "Cuando es necesario, UNTI actúa en segundo plano preservando la marca de la empresa o agencia."]
  ]
} satisfies Record<AppLocale, string[][]>;

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const resolvedLocale: AppLocale = isLocale(locale) ? locale : "pt";
  const pageCopy = copy[resolvedLocale];

  return buildMetadata({
    locale: resolvedLocale,
    title: pageCopy.seoTitle,
    description: pageCopy.seoDescription,
    pathname: "/lp-services"
  });
}

export default function LpServicesPage({ params: { locale } }: { params: { locale: AppLocale } }) {
  const pageCopy = copy[locale];
  const services = getServices(locale);
  const coreService =
    services.find((service) => service.slug === "servicos-sob-demanda") ?? services[services.length - 1];
  const visibleClients = clients.filter((client) => client.locales.includes(locale)).slice(0, 10);

  return (
    <div className="bg-white text-zinc-950">
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
            <div className="motion-safe:animate-fade-in-up">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-unti-blue">{pageCopy.eyebrow}</p>
              <h1 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.045em] text-zinc-950 md:text-6xl">
                {pageCopy.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl">
                {pageCopy.description}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contato"
                  className="inline-flex h-14 items-center justify-center rounded-2xl bg-unti-blue px-7 text-sm font-black uppercase tracking-[0.16em] text-white no-underline shadow-[0_18px_42px_rgba(57,108,255,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:no-underline"
                >
                  {pageCopy.primaryCta}
                </Link>
                <a
                  href="#services"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-zinc-300 bg-white px-7 text-sm font-black uppercase tracking-[0.16em] text-zinc-950 no-underline transition duration-300 hover:-translate-y-0.5 hover:border-unti-blue hover:text-unti-blue hover:no-underline"
                >
                  {pageCopy.secondaryCta}
                </a>
              </div>
            </div>

            <div className="motion-safe:animate-fade-in-up">
              <div className="group relative overflow-hidden rounded-[36px] border border-zinc-200 bg-zinc-50 p-3 shadow-[0_28px_80px_rgba(15,23,42,0.12)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_34px_90px_rgba(15,23,42,0.16)]">
                <div className="relative h-[420px] overflow-hidden rounded-[28px] bg-zinc-100">
                  <Image
                    src={heroImage}
                    alt={pageCopy.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-7 left-7 right-7 rounded-[24px] border border-white/70 bg-white/90 p-5 shadow-xl backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-unti-blue">{pageCopy.coreEyebrow}</p>
                  <p className="mt-2 text-lg font-black leading-snug text-zinc-950">{coreService.title}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-zinc-100 bg-zinc-50 py-10">
        <Container>
          <p className="text-center text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">{projectsLabel}</p>
          <div className="mt-8 grid grid-cols-2 items-center gap-4 md:grid-cols-5">
            {visibleClients.map((client) => (
              <div
                key={client.id}
                className="relative h-20 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Image src={client.logo} alt={client.name} fill sizes="160px" className="p-4 object-contain" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="services" className="bg-white py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden rounded-[34px] border border-zinc-200 bg-zinc-50 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.1)]">
              <div className="relative h-[360px] overflow-hidden rounded-[26px] bg-zinc-100">
                <Image
                  src={coreImage}
                  alt={pageCopy.coreTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-unti-blue">{pageCopy.coreEyebrow}</p>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] text-zinc-950 md:text-5xl">
                {pageCopy.coreTitle}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-zinc-600">{pageCopy.coreDescription}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {coreService.bullets.map((bullet) => (
                  <div key={bullet} className="flex gap-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-unti-blue" />
                    <p className="text-sm font-medium leading-relaxed text-zinc-700">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-zinc-50 py-20 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-unti-blue">{pageCopy.servicesEyebrow}</p>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] text-zinc-950 md:text-5xl">
              {pageCopy.servicesTitle}
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-black text-zinc-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{service.shortDescription}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-unti-blue">{pageCopy.processEyebrow}</p>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] text-zinc-950 md:text-5xl">
                {pageCopy.processTitle}
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {processSteps[locale].map(([title, description], index) => (
                  <article key={title} className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <span className="text-sm font-black text-unti-blue">0{index + 1}</span>
                    <h3 className="mt-4 text-xl font-black text-zinc-950">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600">{description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-zinc-200 bg-zinc-50 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.1)]">
              <div className="relative h-[460px] overflow-hidden rounded-[26px] bg-zinc-100">
                <Image
                  src={processImage}
                  alt={pageCopy.processTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-zinc-50 py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-unti-blue">{pageCopy.casesEyebrow}</p>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] text-zinc-950 md:text-5xl">
              {pageCopy.casesTitle}
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {caseNames.map((caseName) => (
              <article
                key={caseName}
                className="rounded-[26px] border border-zinc-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-lg font-black tracking-[-0.02em] text-zinc-950">{caseName}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black leading-tight tracking-[-0.035em] text-zinc-950 md:text-5xl">
              {pageCopy.whyTitle}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whyItems[locale].map(([title, description]) => (
              <article key={title} className="rounded-[30px] border border-zinc-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-xl font-black text-zinc-950">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-100 bg-white py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-4xl rounded-[36px] border border-zinc-200 bg-zinc-50 p-8 text-center shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:p-12">
            <h2 className="text-3xl font-black leading-tight tracking-[-0.035em] text-zinc-950 md:text-5xl">{pageCopy.finalTitle}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">{pageCopy.finalDescription}</p>
            <Link
              href="/contato"
              className="mt-9 inline-flex h-14 items-center justify-center rounded-2xl bg-unti-blue px-8 text-sm font-black uppercase tracking-[0.16em] text-white no-underline shadow-[0_18px_42px_rgba(57,108,255,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:no-underline"
            >
              {pageCopy.primaryCta}
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
