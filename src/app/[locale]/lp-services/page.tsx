import Image from "next/image";
import Link from "next-intl/link";
import { Container } from "@/components/ui/Container";
import { clients } from "@/data/clients";
import { getServices } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";
import { isLocale, type AppLocale } from "@/lib/i18n";

const lpCopy: Record<
  AppLocale,
  {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    proofLabel: string;
    whiteLabelBadge: string;
    whiteLabelTitle: string;
    whiteLabelDescription: string;
    whiteLabelBullets: string[];
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
  }
> = {
  pt: {
    eyebrow: "White label técnico para empresas e agências",
    title: "Um squad técnico sob sua marca para entregar sites, plataformas e integrações com padrão internacional.",
    description:
      "A UNTI Digital atua como parceiro técnico de execução para operações que precisam vender mais, entregar com qualidade e escalar sem montar uma equipe fixa grande.",
    primaryCta: "Agendar diagnóstico",
    secondaryCta: "Ver serviços",
    proofLabel: "Marcas e operações que confiam em execução técnica consistente",
    whiteLabelBadge: "Serviço em destaque",
    whiteLabelTitle: "White label técnico para ampliar sua capacidade de entrega",
    whiteLabelDescription:
      "Entramos como uma extensão técnica do seu time, mantendo confidencialidade, organização de escopo e execução sênior. Ideal para empresas e agências que precisam entregar mais sem perder controle, qualidade ou previsibilidade.",
    whiteLabelBullets: [
      "Execução sob sua marca, sem exposição da operação técnica",
      "Sites, plataformas, integrações e melhorias contínuas em uma única frente",
      "Processo com checkpoints, documentação e comunicação objetiva",
      "Capacidade sob demanda para projetos complexos e recorrentes"
    ],
    servicesEyebrow: "Serviços da UNTI",
    servicesTitle: "O white label é o centro, mas a entrega cobre toda a operação digital.",
    servicesDescription:
      "A LP apresenta todos os serviços do site, com o white label técnico como oferta principal e os demais como frentes complementares de execução.",
    processEyebrow: "Como funciona",
    processTitle: "Um processo direto para começar rápido e entregar com segurança.",
    process: [
      {
        title: "Diagnóstico técnico e comercial",
        description: "Mapeamos escopo, urgência, stack, gargalos e oportunidades de entrega."
      },
      {
        title: "Plano de execução white label",
        description: "Definimos responsabilidades, checkpoints, prioridades e padrão de comunicação."
      },
      {
        title: "Implementação com squad sênior",
        description: "Executamos sites, plataformas, integrações e correções com previsibilidade."
      },
      {
        title: "Evolução contínua",
        description: "Mantemos melhorias, suporte e novas entregas conforme a demanda cresce."
      }
    ],
    whyEyebrow: "Por que UNTI",
    whyTitle: "Uma parceira técnica para entregar mais sem aumentar sua complexidade interna.",
    whyItems: [
      {
        title: "Confidencialidade operacional",
        description: "A entrega pode acontecer sob a marca do cliente ou da agência, preservando a relação comercial."
      },
      {
        title: "Engenharia orientada a negócio",
        description: "Não entregamos apenas telas: estruturamos performance, conversão, integrações e operação."
      },
      {
        title: "Ritmo de produção escalável",
        description: "Apoio sob demanda para absorver picos, projetos complexos e recorrência técnica."
      }
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Perguntas comuns antes de iniciar uma parceria white label.",
    faqs: [
      {
        question: "A UNTI aparece para o cliente final?",
        answer: "Somente se fizer sentido para a estratégia. O padrão white label permite atuação discreta, sob a sua marca."
      },
      {
        question: "Vocês atendem empresas americanas?",
        answer: "Sim. A página foi pensada para comunicação internacional, com entrega remota, documentação e alinhamento objetivo."
      },
      {
        question: "Quais serviços podem entrar no white label?",
        answer: "Sites, plataformas web, integrações CRM/ERP, governança, segurança, sustentação técnica e melhorias contínuas."
      }
    ],
    finalTitle: "Quer ampliar sua entrega técnica sem inflar a operação?",
    finalDescription: "Vamos mapear onde a UNTI pode entrar como squad white label para acelerar sua próxima entrega.",
    seoTitle: "White label técnico para empresas e agências | UNTI Digital",
    seoDescription:
      "Landing page da UNTI Digital para white label técnico, sites, plataformas, integrações CRM/ERP e governança digital."
  },
  en: {
    eyebrow: "Technical white-label for US companies and agencies",
    title: "A senior technical squad under your brand to ship websites, platforms, and integrations faster.",
    description:
      "UNTI Digital works as a discreet technical execution partner for US companies and agencies that need reliable delivery capacity without building a large in-house team.",
    primaryCta: "Book a technical diagnosis",
    secondaryCta: "Explore services",
    proofLabel: "Brands and operations that trust consistent technical execution",
    whiteLabelBadge: "Featured service",
    whiteLabelTitle: "Technical white-label delivery to expand your execution capacity",
    whiteLabelDescription:
      "We plug into your operation as a senior technical squad, keeping the commercial relationship under your brand while bringing structure, documentation, and predictable delivery across digital projects.",
    whiteLabelBullets: [
      "Execution under your brand with discreet technical involvement",
      "Websites, platforms, CRM/ERP integrations, and continuous improvements",
      "Clear checkpoints, documentation, and senior communication",
      "On-demand capacity for complex projects and recurring delivery"
    ],
    servicesEyebrow: "UNTI services",
    servicesTitle: "White-label is the core offer. The full delivery covers your entire digital operation.",
    servicesDescription:
      "This landing page positions technical white-label as the main direction for UNTI while presenting the services already offered across the website.",
    processEyebrow: "How it works",
    processTitle: "A direct process to start quickly and deliver with confidence.",
    process: [
      {
        title: "Technical and commercial diagnosis",
        description: "We map scope, urgency, stack, bottlenecks, and delivery opportunities."
      },
      {
        title: "White-label execution plan",
        description: "We define roles, checkpoints, priorities, and communication standards."
      },
      {
        title: "Senior squad implementation",
        description: "We execute websites, platforms, integrations, and improvements with predictability."
      },
      {
        title: "Continuous evolution",
        description: "We keep improving, supporting, and shipping as demand grows."
      }
    ],
    whyEyebrow: "Why UNTI",
    whyTitle: "A technical partner to increase delivery capacity without increasing internal complexity.",
    whyItems: [
      {
        title: "Operational confidentiality",
        description: "Delivery can happen under your brand, preserving your commercial relationship with the end client."
      },
      {
        title: "Business-oriented engineering",
        description: "We do not just build screens. We structure performance, conversion, integrations, and operations."
      },
      {
        title: "Scalable production rhythm",
        description: "On-demand technical capacity for peaks, complex projects, and recurring delivery."
      }
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Common questions before starting a white-label partnership.",
    faqs: [
      {
        question: "Does UNTI appear to the end client?",
        answer: "Only if it supports the strategy. The white-label model allows discreet delivery under your brand."
      },
      {
        question: "Do you work with US companies?",
        answer: "Yes. This page is designed for international communication, remote delivery, documentation, and clear alignment."
      },
      {
        question: "Which services can be delivered white-label?",
        answer: "Websites, custom platforms, CRM/ERP integrations, governance, security, technical support, and continuous improvements."
      }
    ],
    finalTitle: "Need more technical delivery capacity without growing your internal team?",
    finalDescription: "Let’s map where UNTI can plug in as your white-label technical squad for the next delivery cycle.",
    seoTitle: "Technical white-label for US companies and agencies | UNTI Digital",
    seoDescription:
      "UNTI Digital provides technical white-label delivery for US companies and agencies: websites, platforms, CRM/ERP integrations, and digital governance."
  },
  es: {
    eyebrow: "White label técnico para empresas y agencias",
    title: "Un squad técnico bajo tu marca para entregar sitios, plataformas e integraciones con más velocidad.",
    description:
      "UNTI Digital actúa como socio técnico discreto para operaciones que necesitan ampliar capacidad de entrega sin construir un equipo interno grande.",
    primaryCta: "Agendar diagnóstico",
    secondaryCta: "Ver servicios",
    proofLabel: "Marcas y operaciones que confían en ejecución técnica consistente",
    whiteLabelBadge: "Servicio destacado",
    whiteLabelTitle: "White label técnico para ampliar tu capacidad de ejecución",
    whiteLabelDescription:
      "Nos integramos a tu operación como un squad técnico senior, preservando la relación comercial bajo tu marca y aportando estructura, documentación y previsibilidad.",
    whiteLabelBullets: [
      "Ejecución bajo tu marca con actuación técnica discreta",
      "Sitios, plataformas, integraciones CRM/ERP y mejoras continuas",
      "Checkpoints claros, documentación y comunicación senior",
      "Capacidad bajo demanda para proyectos complejos y recurrentes"
    ],
    servicesEyebrow: "Servicios de UNTI",
    servicesTitle: "El white label es la oferta central. La entrega completa cubre toda la operación digital.",
    servicesDescription:
      "La landing page posiciona white label técnico como dirección principal de UNTI y presenta los servicios ya ofrecidos en el sitio.",
    processEyebrow: "Cómo funciona",
    processTitle: "Un proceso directo para empezar rápido y entregar con seguridad.",
    process: [
      {
        title: "Diagnóstico técnico y comercial",
        description: "Mapeamos alcance, urgencia, stack, cuellos de botella y oportunidades."
      },
      {
        title: "Plan de ejecución white label",
        description: "Definimos responsabilidades, checkpoints, prioridades y comunicación."
      },
      {
        title: "Implementación con squad senior",
        description: "Ejecutamos sitios, plataformas, integraciones y mejoras con previsibilidad."
      },
      {
        title: "Evolución continua",
        description: "Mantenemos mejoras, soporte y nuevas entregas a medida que crece la demanda."
      }
    ],
    whyEyebrow: "Por qué UNTI",
    whyTitle: "Un socio técnico para entregar más sin aumentar la complejidad interna.",
    whyItems: [
      {
        title: "Confidencialidad operativa",
        description: "La entrega puede ocurrir bajo tu marca, preservando la relación comercial con el cliente final."
      },
      {
        title: "Ingeniería orientada a negocio",
        description: "No solo construimos pantallas: estructuramos rendimiento, conversión, integraciones y operación."
      },
      {
        title: "Ritmo de producción escalable",
        description: "Capacidad técnica bajo demanda para picos, proyectos complejos y recurrencia."
      }
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Preguntas comunes antes de iniciar una alianza white label.",
    faqs: [
      {
        question: "¿UNTI aparece para el cliente final?",
        answer: "Solo si tiene sentido para la estrategia. El modelo white label permite entrega discreta bajo tu marca."
      },
      {
        question: "¿Atienden empresas de Estados Unidos?",
        answer: "Sí. La página está pensada para comunicación internacional, entrega remota, documentación y alineación clara."
      },
      {
        question: "¿Qué servicios pueden entrar en white label?",
        answer: "Sitios, plataformas, integraciones CRM/ERP, gobernanza, seguridad, soporte técnico y mejoras continuas."
      }
    ],
    finalTitle: "¿Necesitas más capacidad técnica sin aumentar tu equipo interno?",
    finalDescription: "Mapeemos dónde UNTI puede entrar como squad white label en tu próximo ciclo de entrega.",
    seoTitle: "White label técnico para empresas y agencias | UNTI Digital",
    seoDescription:
      "UNTI Digital ofrece white label técnico para sitios, plataformas, integraciones CRM/ERP y gobernanza digital."
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
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(57,108,255,0.18),transparent_36%),linear-gradient(135deg,#f8fafc_0%,#ffffff_48%,#eef4ff_100%)] py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-unti-blue">{copy.eyebrow}</p>
              <h1 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.05em] text-zinc-950 md:text-6xl">
                {copy.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl">{copy.description}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contato"
                  className="inline-flex h-14 items-center justify-center rounded-2xl bg-unti-blue px-7 text-sm font-black uppercase tracking-[0.18em] text-white no-underline shadow-[0_18px_46px_rgba(57,108,255,0.32)] transition hover:-translate-y-0.5 hover:bg-blue-700 hover:no-underline"
                >
                  {copy.primaryCta}
                </Link>
                <a
                  href="#services"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-zinc-300 bg-white px-7 text-sm font-black uppercase tracking-[0.18em] text-zinc-950 no-underline transition hover:-translate-y-0.5 hover:border-unti-blue hover:text-unti-blue hover:no-underline"
                >
                  {copy.secondaryCta}
                </a>
              </div>
            </div>

            <div className="rounded-[36px] border border-white bg-white/85 p-6 shadow-[0_28px_90px_rgba(15,23,42,0.14)] backdrop-blur">
              <p className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-unti-blue">
                {copy.whiteLabelBadge}
              </p>
              <h2 className="mt-5 text-3xl font-black leading-tight text-zinc-950">{whiteLabelService.title}</h2>
              <p className="mt-4 text-zinc-600">{whiteLabelService.shortDescription}</p>
              <div className="mt-6 grid gap-3">
                {copy.whiteLabelBullets.map((bullet) => (
                  <div key={bullet} className="flex gap-3 rounded-2xl border border-zinc-100 bg-zinc-50 p-4">
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-unti-blue" />
                    <p className="text-sm font-medium leading-relaxed text-zinc-700">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-zinc-100 bg-white py-10">
        <Container>
          <p className="text-center text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">{copy.proofLabel}</p>
          <div className="mt-8 grid grid-cols-2 items-center gap-4 md:grid-cols-5">
            {visibleClients.map((client) => (
              <div key={client.id} className="relative h-20 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                <Image src={client.logo} alt={client.name} fill sizes="160px" className="p-4 object-contain" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="services" className="bg-zinc-950 py-20 text-white md:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-blue-300">{copy.servicesEyebrow}</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">{copy.servicesTitle}</h2>
            <p className="mt-5 text-lg text-zinc-300">{copy.servicesDescription}</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[32px] border border-blue-400/30 bg-white p-8 text-zinc-950 shadow-[0_24px_70px_rgba(57,108,255,0.22)]">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-unti-blue">{copy.whiteLabelBadge}</p>
              <h3 className="mt-4 text-3xl font-black">{copy.whiteLabelTitle}</h3>
              <p className="mt-4 text-zinc-600">{copy.whiteLabelDescription}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {whiteLabelService.deliverables.slice(0, 4).map((item) => (
                  <div key={item} className="rounded-2xl bg-blue-50 p-4 text-sm font-semibold text-zinc-800">
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <div className="grid gap-4">
              {supportingServices.map((service) => (
                <article key={service.slug} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-black text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">{service.shortDescription}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-unti-blue">{copy.processEyebrow}</p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-zinc-950 md:text-5xl">{copy.processTitle}</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {copy.process.map((step, index) => (
                <article key={step.title} className="rounded-[28px] border border-zinc-200 bg-zinc-50 p-6">
                  <span className="text-sm font-black text-unti-blue">0{index + 1}</span>
                  <h3 className="mt-4 text-xl font-black text-zinc-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-blue-50 py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-unti-blue">{copy.whyEyebrow}</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-zinc-950 md:text-5xl">{copy.whyTitle}</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {copy.whyItems.map((item) => (
              <article key={item.title} className="rounded-[30px] border border-blue-100 bg-white p-7 shadow-sm">
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
              <h2 className="mt-4 text-3xl font-black leading-tight text-zinc-950 md:text-5xl">{copy.faqTitle}</h2>
            </div>
            <div className="grid gap-4">
              {copy.faqs.map((faq) => (
                <article key={faq.question} className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-black text-zinc-950">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-zinc-950 py-20 text-white md:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">{copy.finalTitle}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-300">{copy.finalDescription}</p>
            <Link
              href="/contato"
              className="mt-9 inline-flex h-14 items-center justify-center rounded-2xl bg-unti-blue px-8 text-sm font-black uppercase tracking-[0.18em] text-white no-underline shadow-[0_18px_46px_rgba(57,108,255,0.32)] transition hover:-translate-y-0.5 hover:bg-blue-700 hover:no-underline"
            >
              {copy.primaryCta}
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
