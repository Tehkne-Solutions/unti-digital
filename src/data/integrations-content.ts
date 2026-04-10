import type { AppLocale } from "@/lib/i18n";

type Benefit = {
  title: string;
  description: string;
};

type IntegrationContent = {
  eyebrow: string;
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  benefits: Benefit[];
  useCasesTitle: string;
  useCasesDescription: string;
  useCases: Benefit[];
  processTitle: string;
  process: Benefit[];
  seoTitle: string;
  seoDescription: string;
};

const content: Record<AppLocale, IntegrationContent> = {
  pt: {
    eyebrow: "Integrações",
    title: "Integrações entre CRM, ERP, APIs e operação",
    description:
      "Conectamos ferramentas críticas para reduzir retrabalho, acelerar atendimento e transformar dados dispersos em fluxo confiável.",
    ctaPrimary: "Falar com especialista",
    ctaSecondary: "Ver cases",
    benefits: [
      { title: "Menos ruído operacional", description: "Eliminamos tarefas manuais e sincronizações frágeis entre times e sistemas." },
      { title: "Resposta comercial mais rápida", description: "Leads e eventos chegam no destino certo com mais contexto e menos atraso." },
      { title: "Dados com mais consistência", description: "A operação passa a trabalhar com menos divergência entre ferramentas." }
    ],
    useCasesTitle: "Onde costumamos integrar primeiro",
    useCasesDescription: "Começamos pelos fluxos com maior impacto comercial e operacional.",
    useCases: [
      { title: "Site + CRM", description: "Formulários, leads e automações conectados ao processo comercial." },
      { title: "CRM + ERP", description: "Sincronização entre vendas, disponibilidade e operação interna." },
      { title: "APIs de negócio", description: "Catálogos, dashboards, portais e rotinas que dependem de dados em tempo real." }
    ],
    processTitle: "Como estruturamos a entrega",
    process: [
      { title: "Mapeamento", description: "Identificamos fontes, regras de negócio, riscos e pontos de falha." },
      { title: "Implementação", description: "Criamos conectores, rotinas e observabilidade para o fluxo operar com segurança." },
      { title: "Evolução", description: "Documentamos, monitoramos e ajustamos conforme a operação cresce." }
    ],
    seoTitle: "Integrações entre CRM, ERP e APIs | UNTI Digital",
    seoDescription: "Veja como a UNTI Digital conecta CRM, ERP, APIs e fluxos operacionais com mais segurança e previsibilidade."
  },
  en: {
    eyebrow: "Integrations",
    title: "Integrations across CRM, ERP, APIs, and operations",
    description:
      "We connect critical tools to reduce rework, speed up response, and turn scattered data into a reliable flow.",
    ctaPrimary: "Talk to a specialist",
    ctaSecondary: "View cases",
    benefits: [
      { title: "Less operational noise", description: "We remove manual tasks and fragile sync points between teams and systems." },
      { title: "Faster commercial response", description: "Leads and events reach the right destination with more context and less delay." },
      { title: "More consistent data", description: "The operation works with less divergence between platforms and teams." }
    ],
    useCasesTitle: "Where we usually integrate first",
    useCasesDescription: "We start with the flows that have the strongest commercial and operational impact.",
    useCases: [
      { title: "Website + CRM", description: "Forms, leads, and automation connected to the sales process." },
      { title: "CRM + ERP", description: "Synchronization between sales, availability, and internal operations." },
      { title: "Business APIs", description: "Catalogs, dashboards, portals, and routines that depend on real-time data." }
    ],
    processTitle: "How we structure the delivery",
    process: [
      { title: "Mapping", description: "We identify sources, business rules, risks, and failure points." },
      { title: "Implementation", description: "We build connectors, routines, and observability so the flow runs safely." },
      { title: "Evolution", description: "We document, monitor, and refine as the operation grows." }
    ],
    seoTitle: "CRM, ERP, and API integrations | UNTI Digital",
    seoDescription: "See how UNTI Digital connects CRM, ERP, APIs, and operational flows with more security and predictability."
  },
  es: {
    eyebrow: "Integraciones",
    title: "Integraciones entre CRM, ERP, APIs y operación",
    description:
      "Conectamos herramientas críticas para reducir retrabajo, acelerar la respuesta y convertir datos dispersos en un flujo confiable.",
    ctaPrimary: "Hablar con un especialista",
    ctaSecondary: "Ver casos",
    benefits: [
      { title: "Menos ruido operativo", description: "Eliminamos tareas manuales y sincronizaciones frágiles entre equipos y sistemas." },
      { title: "Respuesta comercial más rápida", description: "Los leads y eventos llegan al destino correcto con más contexto y menos demora." },
      { title: "Datos más consistentes", description: "La operación trabaja con menos divergencia entre plataformas y equipos." }
    ],
    useCasesTitle: "Dónde solemos integrar primero",
    useCasesDescription: "Empezamos por los flujos con mayor impacto comercial y operativo.",
    useCases: [
      { title: "Sitio + CRM", description: "Formularios, leads y automatizaciones conectados al proceso comercial." },
      { title: "CRM + ERP", description: "Sincronización entre ventas, disponibilidad y operación interna." },
      { title: "APIs de negocio", description: "Catálogos, dashboards, portales y rutinas que dependen de datos en tiempo real." }
    ],
    processTitle: "Cómo estructuramos la entrega",
    process: [
      { title: "Mapeo", description: "Identificamos fuentes, reglas de negocio, riesgos y puntos de fallo." },
      { title: "Implementación", description: "Creamos conectores, rutinas y observabilidad para que el flujo opere con seguridad." },
      { title: "Evolución", description: "Documentamos, monitoreamos y ajustamos conforme la operación crece." }
    ],
    seoTitle: "Integraciones entre CRM, ERP y APIs | UNTI Digital",
    seoDescription: "Vea cómo UNTI Digital conecta CRM, ERP, APIs y flujos operativos con más seguridad y previsibilidad."
  }
};

export function getIntegrationsContent(locale: AppLocale) {
  return content[locale];
}
