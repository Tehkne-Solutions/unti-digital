import type { AppLocale } from "@/lib/i18n";

type ContactCard = {
  title: string;
  value: string;
  description: string;
};

type ContactContent = {
  heroTag: string;
  heroTitle: string;
  heroDescription: string;
  whatsappLabel: string;
  formLabel: string;
  formTitle: string;
  supportLabel: string;
  supportTitle: string;
  supportDescription: string;
  cards: ContactCard[];
  routing: ContactCard[];
  visitTag: string;
  visitTitle: string;
  openMaps: string;
  mapTitle: string;
  mapDescription: string;
  seoTitle: string;
  seoDescription: string;
};

const content: Record<AppLocale, ContactContent> = {
  pt: {
    heroTag: "Contato",
    heroTitle: "Vamos organizar o próximo passo da sua operação digital",
    heroDescription:
      "Se você precisa de um site mais sólido, uma plataforma sob medida ou integrações que reduzam ruído operacional, podemos começar por aqui.",
    whatsappLabel: "Chamar no WhatsApp",
    formLabel: "Briefing",
    formTitle: "Conte o contexto do projeto",
    supportLabel: "Atendimento consultivo",
    supportTitle: "Encaminhamento certo acelera resposta.",
    supportDescription: "Direcionamos cada contato para o fluxo mais adequado desde o início.",
    cards: [
      { title: "Telefone", value: "+55 19 98280-9717", description: "Atendimento comercial e técnico." },
      { title: "Base", value: "Campinas - SP", description: "Atendimento remoto nacional e reuniões agendadas." },
      { title: "Horário", value: "Segunda a sexta, 9h às 18h", description: "Janelas de reunião sob alinhamento." },
      { title: "E-mail", value: "contato@untidigital.com.br", description: "Canal institucional para briefing e propostas." }
    ],
    routing: [
      { title: "Sites", value: "01", description: "Projetos institucionais, landing pages e reposicionamento digital." },
      { title: "Plataformas", value: "02", description: "Portais, áreas logadas e fluxos operacionais sob medida." },
      { title: "Integrações", value: "03", description: "CRM, ERP, APIs e automações críticas." },
      { title: "White label", value: "04", description: "Apoio técnico para agências e squads sob demanda." }
    ],
    visitTag: "Localização",
    visitTitle: "Atendimento centralizado em Campinas, com operação nacional",
    openMaps: "Abrir no Maps",
    mapTitle: "Fluxo organizado",
    mapDescription: "Comercial, técnico e operação alinhados em um ponto único de contato.",
    seoTitle: "Contato | UNTI Digital",
    seoDescription: "Fale com a UNTI Digital sobre sites, plataformas, integrações e apoio técnico."
  },
  en: {
    heroTag: "Contact",
    heroTitle: "Let’s organize the next step of your digital operation",
    heroDescription:
      "If you need a stronger website, a custom platform, or integrations that reduce operational noise, we can start here.",
    whatsappLabel: "Open WhatsApp",
    formLabel: "Briefing",
    formTitle: "Share the project context",
    supportLabel: "Consultative support",
    supportTitle: "The right routing speeds up response.",
    supportDescription: "Each contact is directed to the most appropriate flow from the start.",
    cards: [
      { title: "Phone", value: "+55 19 98280-9717", description: "Commercial and technical assistance." },
      { title: "Base", value: "Campinas - SP", description: "Nationwide remote support and scheduled meetings." },
      { title: "Hours", value: "Monday to Friday, 9am to 6pm", description: "Meetings scheduled in advance." },
      { title: "Email", value: "contato@untidigital.com.br", description: "Institutional channel for briefs and proposals." }
    ],
    routing: [
      { title: "Websites", value: "01", description: "Institutional projects, landing pages, and digital repositioning." },
      { title: "Platforms", value: "02", description: "Portals, member areas, and custom operational flows." },
      { title: "Integrations", value: "03", description: "CRM, ERP, APIs, and critical automation." },
      { title: "White-label", value: "04", description: "Technical support for agencies and on-demand squads." }
    ],
    visitTag: "Location",
    visitTitle: "Centralized service from Campinas, supporting operations nationwide",
    openMaps: "Open in Maps",
    mapTitle: "Organized flow",
    mapDescription: "Commercial, technical, and operational teams aligned through a single contact point.",
    seoTitle: "Contact | UNTI Digital",
    seoDescription: "Talk to UNTI Digital about websites, platforms, integrations, and technical support."
  },
  es: {
    heroTag: "Contacto",
    heroTitle: "Organicemos el próximo paso de tu operación digital",
    heroDescription:
      "Si necesitas un sitio más sólido, una plataforma a medida o integraciones que reduzcan ruido operativo, podemos empezar aquí.",
    whatsappLabel: "Abrir WhatsApp",
    formLabel: "Briefing",
    formTitle: "Comparte el contexto del proyecto",
    supportLabel: "Atención consultiva",
    supportTitle: "El direccionamiento correcto acelera la respuesta.",
    supportDescription: "Cada contacto se dirige al flujo más adecuado desde el inicio.",
    cards: [
      { title: "Teléfono", value: "+55 19 98280-9717", description: "Atención comercial y técnica." },
      { title: "Base", value: "Campinas - SP", description: "Atención remota nacional y reuniones agendadas." },
      { title: "Horario", value: "Lunes a viernes, 9h a 18h", description: "Reuniones programadas previamente." },
      { title: "Correo", value: "contato@untidigital.com.br", description: "Canal institucional para briefs y propuestas." }
    ],
    routing: [
      { title: "Sitios", value: "01", description: "Proyectos institucionales, landing pages y reposicionamiento digital." },
      { title: "Plataformas", value: "02", description: "Portales, áreas privadas y flujos operativos a medida." },
      { title: "Integraciones", value: "03", description: "CRM, ERP, APIs y automatizaciones críticas." },
      { title: "White-label", value: "04", description: "Apoyo técnico para agencias y squads bajo demanda." }
    ],
    visitTag: "Ubicación",
    visitTitle: "Atención centralizada desde Campinas, con operación nacional",
    openMaps: "Abrir en Maps",
    mapTitle: "Flujo organizado",
    mapDescription: "Comercial, técnico y operación alineados en un único punto de contacto.",
    seoTitle: "Contacto | UNTI Digital",
    seoDescription: "Habla con UNTI Digital sobre sitios, plataformas, integraciones y apoyo técnico."
  }
};

export function getContactContent(locale: AppLocale) {
  return content[locale];
}
