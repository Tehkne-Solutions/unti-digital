import Image from "next/image";
import Link from "next-intl/link";
import { Container } from "@/components/ui/Container";
import { clients } from "@/data/clients";
import { getServices } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";
import { isLocale, type AppLocale } from "@/lib/i18n";

type LpCopy = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  proofLabel: string;
  heroImageAlt: string;
  coreEyebrow: string;
  coreTitle: string;
  coreDescription: string;
  coreImageAlt: string;
  coreBullets: string[];
  metrics: { value: string; label: string }[];
  servicesEyebrow: string;
  servicesTitle: string;
  servicesDescription: string;
  processEyebrow: string;
  processTitle: string;
  process: { title: string; description: string }[];
  whyEyebrow: string;
  whyTitle: string;
  whyItems: { title: string; description: string }[];
  faqEyebrow: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  finalTitle: string;
  finalDescription: string;
  seoTitle: string;
  seoDescription: string;
};

const heroImage =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80";
const coreImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80";
const processImage =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80";

const lpCopy: Record<AppLocale, LpCopy> = {
  pt: {
    eyebrow: "White label técnico para empresas e agências",
    title: "Equipe técnica sob sua marca para entregar mais, melhor e com previsibilidade.",
    description:
      "A UNTI Digital atua como extensão sênior da sua operação para sites, plataformas, integrações e sustentação técnica, mantendo confidencialidade e padrão profissional de entrega.",
    primaryCta: "Agendar diagnóstico",
    secondaryCta: "Conhecer o modelo",
    proofLabel: "Marcas e operações que confiam em execução técnica consistente",
    heroImageAlt: "Equipe técnica colaborando em planejamento digital",
    coreEyebrow: "Oferta principal",
    coreTitle: "White label técnico para ampliar a capacidade de entrega sem aumentar a estrutura fixa.",
    coreDescription:
      "Entramos nos bastidores como squad técnico para organizar escopo, produzir com qualidade e manter o relacionamento comercial sob a sua marca. A operação ganha força sem perder controle, sigilo ou ritmo.",
    coreImageAlt: "Reunião de estratégia e execução técnica",
    coreBullets: [
      "Atuação confidencial sob a marca do cliente ou da agência",
      "Entrega de sites, plataformas, integrações e melhorias contínuas",
      "Comunicação objetiva, checkpoints e documentação de apoio",
      "Capacidade sob demanda para projetos complexos e recorrentes"
    ],
    metrics: [
      { value: "01", label: "squad técnico plugado à sua operação" },
      { value: "04", label: "frentes digitais cobertas em um único parceiro" },
      { value: "100%", label: "foco em entrega discreta e orientada a resultado" }
    ],
    servicesEyebrow: "Serviços integrados",
    servicesTitle: "O white label é o centro. Os serviços completam a entrega digital.",
    servicesDescription:
      "A UNTI combina execução técnica, visão de produto e sustentação para cobrir as principais necessidades digitais de empresas e agências.",
    processEyebrow: "Modelo de trabalho",
    processTitle: "Um fluxo claro para iniciar rápido e manter a entrega sob controle.",
    process: [
      {
        title: "Diagnóstico",
        description: "Entendemos escopo, stack, prazos, riscos e prioridades comerciais."
      },
      {
        title: "Plano de entrega",
        description: "Definimos responsabilidades, etapas, checkpoints e padrão de comunicação."
      },
      {
        title: "Execução",
        description: "Implementamos sites, plataformas, integrações e correções com time sênior."
      },
      {
        title: "Evolução",
        description: "Mantemos suporte, melhorias e novas entregas conforme a demanda cresce."
      }
    ],
    whyEyebrow: "Por que UNTI",
    whyTitle: "Entrega técnica com postura de parceiro, não de fornecedor genérico.",
    whyItems: [
      {
        title: "Confidencialidade real",
        description: "A UNTI pode operar nos bastidores, preservando a marca, o relacionamento e a estratégia comercial."
      },
      {
        title: "Padrão sênior de execução",
        description: "Arquitetura, performance, responsividade, integrações e documentação entram no mesmo fluxo de entrega."
      },
      {
        title: "Escala com controle",
        description: "A operação ganha capacidade sem contratar às pressas, sem inflar equipe e sem perder governança."
      }
    ],
    faqEyebrow: "Dúvidas frequentes",
    faqTitle: "Antes de iniciar uma parceria white label.",
    faqs: [
      {
        question: "A UNTI aparece para o cliente final?",
        answer: "Somente quando isso fizer sentido. O modelo white label permite atuação discreta sob a sua marca."
      },
      {
        question: "Vocês atendem empresas americanas?",
        answer: "Sim. O atendimento pode ser remoto, com comunicação objetiva, documentação e alinhamentos por etapa."
      },
      {
        question: "Quais entregas podem entrar no modelo?",
        answer: "Sites, plataformas web, integrações CRM/ERP, governança, segurança, sustentação técnica e melhorias contínuas."
      }
    ],
    finalTitle: "Sua operação precisa entregar mais sem aumentar complexidade?",
    finalDescription: "Vamos mapear como a UNTI pode atuar como squad técnico white label no próximo ciclo de entrega.",
    seoTitle: "White label técnico para empresas e agências | UNTI Digital",
    seoDescription:
      "White label técnico da UNTI Digital para sites, plataformas, integrações CRM/ERP, governança e sustentação digital."
  },
  en: {
    eyebrow: "Technical white-label for US companies and agencies",
    title: "A senior technical team under your brand, built to ship with confidence.",
    description:
      "UNTI Digital works as a discreet technical extension for websites, custom platforms, CRM/ERP integrations, and ongoing digital operations without forcing you to build a large in-house team.",
    primaryCta: "Book a technical diagnosis",
    secondaryCta: "See the model",
    proofLabel: "Brands and operations that trust consistent technical execution",
    heroImageAlt: "Technical team collaborating on digital planning",
    coreEyebrow: "Core offer",
    coreTitle: "Technical white-label delivery to expand capacity without expanding fixed structure.",
    coreDescription:
      "We work behind the scenes as your technical squad to organize scope, produce with quality, and keep the commercial relationship under your brand. Your operation gains delivery power without losing control, confidentiality, or pace.",
    coreImageAlt: "Business and technical strategy meeting",
    coreBullets: [
      "Confidential delivery under your company or agency brand",
      "Websites, custom platforms, integrations, and continuous improvements",
      "Clear communication, checkpoints, and supporting documentation",
      "On-demand capacity for complex projects and recurring delivery"
    ],
    metrics: [
      { value: "01", label: "technical squad plugged into your operation" },
      { value: "04", label: "digital delivery fronts covered by one partner" },
      { value: "100%", label: "focused on discreet execution and business outcomes" }
    ],
    servicesEyebrow: "Integrated services",
    servicesTitle: "White-label is the center. The services complete the digital delivery.",
    servicesDescription:
      "UNTI combines technical execution, product thinking, and ongoing support to cover the main digital needs of companies and agencies.",
    processEyebrow: "Working model",
    processTitle: "A clear flow to start quickly and keep delivery under control.",
    process: [
      {
        title: "Diagnosis",
        description: "We understand scope, stack, timeline, risks, and commercial priorities."
      },
      {
        title: "Delivery plan",
        description: "We define responsibilities, stages, checkpoints, and communication standards."
      },
      {
        title: "Execution",
        description: "We implement websites, platforms, integrations, and improvements with a senior team."
      },
      {
        title: "Evolution",
        description: "We keep supporting, improving, and shipping as demand grows."
      }
    ],
    whyEyebrow: "Why UNTI",
    whyTitle: "Technical delivery with a partner mindset, not a generic vendor approach.",
    whyItems: [
      {
        title: "Real confidentiality",
        description: "UNTI can operate behind the scenes, preserving your brand, client relationship, and commercial strategy."
      },
      {
        title: "Senior execution standard",
        description: "Architecture, performance, responsiveness, integrations, and documentation stay inside the same delivery flow."
      },
      {
        title: "Scale with control",
        description: "Your operation gains capacity without rushed hiring, bloated teams, or loss of governance."
      }
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Before starting a white-label partnership.",
    faqs: [
      {
        question: "Does UNTI appear to the end client?",
        answer: "Only when it makes sense. The white-label model allows discreet delivery under your brand."
      },
      {
        question: "Do you work with US companies?",
        answer: "Yes. Delivery can be remote, with objective communication, documentation, and stage-based alignment."
      },
      {
        question: "Which services can be delivered white-label?",
        answer: "Websites, custom web platforms, CRM/ERP integrations, governance, security, technical support, and continuous improvements."
      }
    ],
    finalTitle: "Need to ship more without increasing operational complexity?",
    finalDescription: "Let’s map how UNTI can work as your white-label technical squad for the next delivery cycle.",
    seoTitle: "Technical white-label for US companies and agencies | UNTI Digital",
    seoDescription:
      "UNTI Digital provides technical white-label delivery for websites, custom platforms, CRM/ERP integrations, governance, and digital operations."
  },
  es: {
    eyebrow: "White label técnico para empresas y agencias",
    title: "Equipo técnico bajo tu marca para entregar más, mejor y con previsibilidad.",
    description:
      "UNTI Digital actúa como extensión técnica senior para sitios, plataformas, integraciones y operación digital continua, manteniendo confidencialidad y estándar profesional.",
    primaryCta: "Agendar diagnóstico",
    secondaryCta: "Ver el modelo",
    proofLabel: "Marcas y operaciones que confían en ejecución técnica consistente",
    heroImageAlt: "Equipo técnico colaborando en planificación digital",
    coreEyebrow: "Oferta central",
    coreTitle: "White label técnico para ampliar capacidad sin aumentar estructura fija.",
    coreDescription:
      "Trabajamos en segundo plano como squad técnico para organizar alcance, producir con calidad y mantener la relación comercial bajo tu marca. La operación gana fuerza sin perder control, confidencialidad ni ritmo.",
    coreImageAlt: "Reunión de estrategia técnica y comercial",
    coreBullets: [
      "Entrega confidencial bajo la marca de la empresa o agencia",
      "Sitios, plataformas, integraciones y mejoras continuas",
      "Comunicación clara, checkpoints y documentación de apoyo",
      "Capacidad bajo demanda para proyectos complejos y recurrentes"
    ],
    metrics: [
      { value: "01", label: "squad técnico conectado a tu operación" },
      { value: "04", label: "frentes digitales cubiertos por un solo socio" },
      { value: "100%", label: "enfoque en ejecución discreta y resultados" }
    ],
    servicesEyebrow: "Servicios integrados",
    servicesTitle: "El white label es el centro. Los servicios completan la entrega digital.",
    servicesDescription:
      "UNTI combina ejecución técnica, visión de producto y soporte continuo para cubrir las principales necesidades digitales de empresas y agencias.",
    processEyebrow: "Modelo de trabajo",
    processTitle: "Un flujo claro para empezar rápido y mantener la entrega bajo control.",
    process: [
      {
        title: "Diagnóstico",
        description: "Entendemos alcance, stack, plazos, riesgos y prioridades comerciales."
      },
      {
        title: "Plan de entrega",
        description: "Definimos responsabilidades, etapas, checkpoints y comunicación."
      },
      {
        title: "Ejecución",
        description: "Implementamos sitios, plataformas, integraciones y mejoras con equipo senior."
      },
      {
        title: "Evolución",
        description: "Mantenemos soporte, mejoras y nuevas entregas conforme crece la demanda."
      }
    ],
    whyEyebrow: "Por qué UNTI",
    whyTitle: "Entrega técnica con postura de socio, no de proveedor genérico.",
    whyItems: [
      {
        title: "Confidencialidad real",
        description: "UNTI puede operar en segundo plano, preservando tu marca, relación comercial y estrategia."
      },
      {
        title: "Estándar senior de ejecución",
        description: "Arquitectura, rendimiento, responsividad, integraciones y documentación dentro del mismo flujo."
      },
      {
        title: "Escala con control",
        description: "La operación gana capacidad sin contrataciones urgentes, equipos inflados o pérdida de gobernanza."
      }
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Antes de iniciar una alianza white label.",
    faqs: [
      {
        question: "¿UNTI aparece para el cliente final?",
        answer: "Solo cuando tiene sentido. El modelo white label permite entrega discreta bajo tu marca."
      },
      {
        question: "¿Atienden empresas de Estados Unidos?",
        answer: "Sí. La entrega puede ser remota, con comunicación objetiva, documentación y alineación por etapas."
      },
      {
        question: "¿Qué servicios pueden entrar en el modelo?",
        answer: "Sitios, plataformas web, integraciones CRM/ERP, gobernanza, seguridad, soporte técnico y mejoras continuas."
      }
    ],
    finalTitle: "¿Tu operación necesita entregar más sin aumentar complejidad?",
    finalDescription: "Mapeemos cómo UNTI puede actuar como squad técnico white label en el próximo ciclo de entrega.",
    seoTitle: "White label técnico para empresas y agencias | UNTI Digital",
    seoDescription:
      "White label técnico de UNTI Digital para sitios, plataformas, integraciones CRM/ERP, gobernanza y operación digital."
  }
};

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const resolvedLocale: AppLocale = isLocale(locale) ? locale : "pt";
  const copy = lpCopy[resolvedLocale];

  return buildMetadata({
    locale: resolvedLocale,
    title: copy.seoTitle,
    description: copy.seoDescription,
    pathname: "/lp-services"
  });
}

export default function LpServicesPage({ params: { locale } }: { params: { locale: AppLocale } }) {
  const copy = lpCopy[locale];
  const services = getServices(locale);
  const whiteLabelService = services.find((service) => service.slug === "white-label-agencias") ?? services[0];
  const supportingServices = services.filter((service) => service.slug !== whiteLabelService.slug);
  const visibleClients = clients.filter((client) => client.locales.includes(locale)).slice(0, 10);

  return (
    <div className="bg-white text-zinc-950">
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
            <div className="motion-safe:animate-fade-in-up">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-unti-blue">{copy.eyebrow}</p>
              <h1 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.045em] text-zinc-950 md:text-6xl">
                {copy.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl">{copy.description}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contato"
                  className="inline-flex h-14 items-center justify-center rounded-2xl bg-unti-blue px-7 text-sm font-black uppercase tracking-[0.16em] text-white no-underline shadow-[0_18px_42px_rgba(57,108,255,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:no-underline"
                >
                  {copy.primaryCta}
                </Link>
                <a
                  href="#white-label"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-zinc-300 bg-white px-7 text-sm font-black uppercase tracking-[0.16em] text-zinc-950 no-underline transition duration-300 hover:-translate-y-0.5 hover:border-unti-blue hover:text-unti-blue hover:no-underline"
                >
                  {copy.secondaryCta}
                </a>
              </div>
            </div>

            <div className="motion-safe:animate-fade-in-up">
              <div className="group relative overflow-hidden rounded-[36px] border border-zinc-200 bg-zinc-50 p-3 shadow-[0_28px_80px_rgba(15,23,42,0.12)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_34px_90px_rgba(15,23,42,0.16)]">
                <div className="relative h-[420px] overflow-hidden rounded-[28px] bg-zinc-100">
                  <Image
                    src={heroImage}
                    alt={copy.heroImageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-7 left-7 right-7 rounded-[24px] border border-white/70 bg-white/90 p-5 shadow-xl backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-unti-blue">{copy.coreEyebrow}</p>
                  <p className="mt-2 text-lg font-black leading-snug text-zinc-950">{whiteLabelService.title}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-zinc-100 bg-zinc-50 py-10">
        <Container>
          <p className="text-center text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">{copy.proofLabel}</p>
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

      <section id="white-label" className="bg-white py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden rounded-[34px] border border-zinc-200 bg-zinc-50 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.1)]">
              <div className="relative h-[360px] overflow-hidden rounded-[26px] bg-zinc-100">
                <Image
                  src={coreImage}
                  alt={copy.coreImageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-unti-blue">{copy.coreEyebrow}</p>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] text-zinc-950 md:text-5xl">
                {copy.coreTitle}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-zinc-600">{copy.coreDescription}</p>
              <div className="mt-8 grid gap-3">
                {copy.coreBullets.map((bullet) => (
                  <div key={bullet} className="flex gap-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-unti-blue" />
                    <p className="text-sm font-medium leading-relaxed text-zinc-700">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {copy.metrics.map((metric) => (
              <article key={metric.label} className="rounded-[28px] border border-zinc-200 bg-zinc-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                <p className="text-4xl font-black text-unti-blue">{metric.value}</p>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-zinc-600">{metric.label}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="services" className="bg-zinc-50 py-20 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-unti-blue">{copy.servicesEyebrow}</p>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] text-zinc-950 md:text-5xl">
              {copy.servicesTitle}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">{copy.servicesDescription}</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[32px] border border-unti-blue/20 bg-white p-8 shadow-[0_24px_70px_rgba(57,108,255,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(57,108,255,0.18)]">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-unti-blue">{copy.coreEyebrow}</p>
              <h3 className="mt-4 text-3xl font-black tracking-[-0.025em] text-zinc-950">{whiteLabelService.title}</h3>
              <p className="mt-4 text-zinc-600">{whiteLabelService.fullDescription}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {whiteLabelService.deliverables.slice(0, 4).map((item) => (
                  <div key={item} className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm font-semibold text-zinc-800">
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <div className="grid gap-4">
              {supportingServices.map((service) => (
                <article key={service.slug} className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-xl font-black text-zinc-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{service.shortDescription}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-unti-blue">{copy.processEyebrow}</p>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] text-zinc-950 md:text-5xl">
                {copy.processTitle}
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {copy.process.map((step, index) => (
                  <article key={step.title} className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <span className="text-sm font-black text-unti-blue">0{index + 1}</span>
                    <h3 className="mt-4 text-xl font-black text-zinc-950">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600">{step.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-zinc-200 bg-zinc-50 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.1)]">
              <div className="relative h-[460px] overflow-hidden rounded-[26px] bg-zinc-100">
                <Image
                  src={processImage}
                  alt={copy.processTitle}
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
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-unti-blue">{copy.whyEyebrow}</p>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] text-zinc-950 md:text-5xl">{copy.whyTitle}</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {copy.whyItems.map((item) => (
              <article key={item.title} className="rounded-[30px] border border-zinc-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-xl font-black text-zinc-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-unti-blue">{copy.faqEyebrow}</p>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] text-zinc-950 md:text-5xl">{copy.faqTitle}</h2>
            </div>
            <div className="grid gap-4">
              {copy.faqs.map((faq) => (
                <article key={faq.question} className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-lg font-black text-zinc-950">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-100 bg-white py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-4xl rounded-[36px] border border-zinc-200 bg-zinc-50 p-8 text-center shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:p-12">
            <h2 className="text-3xl font-black leading-tight tracking-[-0.035em] text-zinc-950 md:text-5xl">{copy.finalTitle}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">{copy.finalDescription}</p>
            <Link
              href="/contato"
              className="mt-9 inline-flex h-14 items-center justify-center rounded-2xl bg-unti-blue px-8 text-sm font-black uppercase tracking-[0.16em] text-white no-underline shadow-[0_18px_42px_rgba(57,108,255,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:no-underline"
            >
              {copy.primaryCta}
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
