import type { Metadata } from "next";
import type { JSX, SVGProps } from "react";
import Image from "next/image";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";

type IconProps = SVGProps<SVGSVGElement>;

type ContactCard = {
  title: string;
  value: string;
  description: string;
  icon: (props: IconProps) => JSX.Element;
};

type RoutingCard = {
  index: string;
  title: string;
  description: string;
};

const contactCards: ContactCard[] = [
  {
    title: "Telefone",
    value: "+55 19 98280-9717",
    description: "Atendimento comercial e tecnico.",
    icon: IconPhone
  },
  {
    title: "Endereço",
    value: "Campinas - SP",
    description: "Base operacional com atendimento remoto nacional.",
    icon: IconMapPin
  },
  {
    title: "Horário",
    value: "Segunda a sexta, das 9h as 18h",
    description: "Janelas de reuniao sob agendamento.",
    icon: IconClock
  }
];

const routingCards: RoutingCard[] = [
  {
    index: "01",
    title: "Sites",
    description: "Direcionamento para projetos institucionais e landing pages."
  },
  {
    index: "02",
    title: "Plataformas",
    description: "Escopo para áreas logadas, portais e operações complexas."
  },
  {
    index: "03",
    title: "Integracoes",
    description: "Mapeamento de CRM, ERP, APIs e automacoes criticas."
  },
  {
    index: "04",
    title: "White Label",
    description: "Primeiro alinhamento para agencias e squads sob demanda."
  }
];

export const metadata: Metadata = {
  title: "Contato | UNTI Digital",
  description:
    "Entre em contato com a UNTI Digital para discutir projetos de performance, seguranca, plataformas web e integracoes."
};

export default function ContatoPage() {
  return (
    <div className="bg-white text-brand-dark">
      <SectionReveal>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/unti-digital-homepage-image-hero-bg.jpeg"
              alt="Background da pagina de contato da UNTI Digital"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>

          <Container className="relative z-10 py-16 md:py-24">
            <div className="flex min-h-[420px] items-center">
              <div className="max-w-[640px] rounded-[34px] bg-white/78 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(148,163,184,0.14),0_40px_120px_rgba(15,23,42,0.14)] backdrop-blur-xl md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">
                  Contato
                </p>
                <h1 className="mt-4 max-w-[12ch] text-4xl font-bold leading-[0.95] text-brand-dark md:text-6xl">
                  Fale com a equipe certa.
                </h1>
                <p className="mt-5 max-w-xl text-base text-brand-muted md:text-lg">
                  Um ponto de contato central para acelerar atendimento comercial e
                  direcionar seu projeto para a frente certa dentro da UNTI.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/5519982809717"
                    target="_blank"
                    rel="noreferrer"
                    className="interactive-btn inline-flex h-12 items-center justify-center rounded-2xl bg-unti-blue px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white no-underline shadow-[0_18px_40px_rgba(57,108,255,0.32)] transition-all duration-300 hover:translate-y-[-1px] hover:no-underline"
                  >
                    Falar no WhatsApp
                  </a>
                  <a
                    href="#form-contato"
                    className="inline-flex h-12 items-center justify-center rounded-2xl bg-white px-6 text-sm font-semibold uppercase tracking-[0.14em] text-brand-dark no-underline shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(148,163,184,0.16),0_16px_34px_rgba(15,23,42,0.08)] transition-all duration-300 hover:bg-slate-50 hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(148,163,184,0.2),0_20px_38px_rgba(15,23,42,0.1)] hover:scale-105 hover:no-underline"
                  >
                    Enviar mensagem
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="bg-[#f7faff] py-8 md:py-12">
          <Container>
            <div className="grid gap-5 lg:grid-cols-[1.15fr_1.35fr]">
              <ImageCard
                image="/images/unti-digital-homepage-image-agilidade-tecnica-com-governanca.png"
                label="Central de atendimento"
                title="Contato comercial e servicos em uma unica estrutura."
                description="Resposta rapida, triagem correta e atendimento direto."
                className="min-h-[320px]"
              />

              <div className="grid gap-5 md:grid-cols-3">
                {contactCards.map((card) => (
                  <InfoCard
                    key={card.title}
                    title={card.title}
                    value={card.value}
                    description={card.description}
                    icon={card.icon}
                  />
                ))}

                <div className="md:col-span-3">
                  <InfoCard
                    title="E-mail"
                    value="contato@untidigital.com.br"
                    description="Canal institucional para briefing, escopo e propostas."
                    icon={IconMail}
                    wide
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="bg-[#f7faff] py-10 md:py-14">
          <Container>
            <div className="grid gap-5 lg:grid-cols-[1.55fr_0.85fr]">
              <div>
                <div className="mb-6 max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">
                    Envie sua mensagem
                  </p>
                  <h2 className="mt-4 max-w-[10ch] text-4xl font-bold leading-[0.95] text-brand-dark md:text-5xl">
                    Envie sua mensagem.
                  </h2>
                </div>

                <ContactForm id="form-contato" />
              </div>

              <div className="grid gap-5">
                <ImageCard
                  image="/images/unti-digital-homepage-image-parceria-estrategica-para-crescimento-digital.png"
                  label="Atendimento consultivo"
                  title="Encaminhamento certo acelera resposta."
                  description="Direcionamos cada contato para o time correto."
                  className="min-h-[290px]"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  {routingCards.map((card) => (
                    <NumberCard
                      key={card.index}
                      index={card.index}
                      title={card.title}
                      description={card.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section className="bg-white py-10 md:py-14">
          <Container>
            <div className="max-w-md">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">
                Visite a base
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[0.95] text-brand-dark md:text-5xl">
                Estrutura centralizada para atendimento presencial.
              </h2>
            </div>

            <div className="relative mt-8 overflow-hidden rounded-[32px] bg-white p-3 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(148,163,184,0.14),0_30px_80px_rgba(15,23,42,0.08)]">
              <div className="relative overflow-hidden rounded-[28px] bg-[#f4f7fb] shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(148,163,184,0.1)]">
                <a
                  href="https://maps.google.com/?q=Campinas%2C%20SP"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-medium text-brand-dark no-underline shadow-md transition hover:no-underline"
                >
                  Abrir no Maps
                  <IconArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <iframe
                  title="Mapa da regiao de Campinas"
                  src="https://www.google.com/maps?q=Campinas%2C%20SP&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[440px] w-full border-0 grayscale"
                />

                <div className="absolute bottom-4 right-4 max-w-[320px] rounded-[22px] bg-white/95 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(148,163,184,0.14),0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-unti-blue/10 text-unti-blue">
                      <IconTarget className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-dark">Atendimento organizado</p>
                      <p className="mt-1 text-sm text-brand-muted">
                        Comercial, tecnico e operacao com fluxo centralizado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </SectionReveal>
    </div>
  );
}

function ImageCard({
  image,
  label,
  title,
  description,
  className = ""
}: {
  image: string;
  label: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(148,163,184,0.12),0_20px_50px_rgba(15,23,42,0.1)] ${className}`}
    >
      <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,12,24,0.18),rgba(7,12,24,0.72))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(57,108,255,0.22),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">
          {label}
        </p>
        <h3 className="mt-4 max-w-[13ch] text-3xl font-bold leading-[0.95] text-white">
          {title}
        </h3>
        <p className="mt-4 max-w-md text-sm text-white/68">{description}</p>
      </div>
    </div>
  );
}

function InfoCard({
  title,
  value,
  description,
  icon: Icon,
  wide = false
}: ContactCard & { wide?: boolean }) {
  return (
    <div
      className={`rounded-[24px] bg-white p-5 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(148,163,184,0.12),0_18px_40px_rgba(15,23,42,0.08)] md:p-6 ${
        wide ? "min-h-[138px]" : "min-h-[210px]"
      }`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-unti-blue/10 text-unti-blue">
        <Icon className="h-4 w-4" />
      </div>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">
        {title}
      </p>
      <p className="mt-4 text-2xl font-semibold leading-tight text-brand-dark">{value}</p>
      <p className="mt-4 max-w-sm text-sm text-brand-muted">{description}</p>
    </div>
  );
}

function NumberCard({ index, title, description }: RoutingCard) {
  return (
    <div className="rounded-[24px] bg-white p-5 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(148,163,184,0.12),0_18px_40px_rgba(15,23,42,0.08)]">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">
        {index}
      </p>
      <h3 className="mt-3 text-2xl font-semibold text-brand-dark">{title}</h3>
      <p className="mt-3 text-sm text-brand-muted">{description}</p>
    </div>
  );
}

function IconPhone(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.12 3.18 2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11L7.1 8.6a16 16 0 0 0 8.3 8.3l1.16-1.19a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function IconMapPin(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function IconClock(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v5l3 2" />
    </svg>
  );
}

function IconMail(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 8 8 6 8-6" />
    </svg>
  );
}

function IconArrowUpRight(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function IconTarget(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2.5" />
      <path d="M12 19.5V22" />
      <path d="M2 12h2.5" />
      <path d="M19.5 12H22" />
    </svg>
  );
}
