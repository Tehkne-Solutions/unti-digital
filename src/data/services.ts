import type { AppLocale } from "@/lib/i18n";

export interface Service {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  fullDescription: string;
  bullets: string[];
  deliverables: string[];
  image: string;
  audience: "companies" | "agencies" | "shared";
  seoTitle: string;
  metaDescription: string;
}

type ServicesContent = {
  title: string;
  subtitle: string;
  labels: {
    differentials: string;
    deliverables: string;
    contactExpert: string;
    viewCases: string;
    viewDetails: string;
    previous: string;
    next: string;
    goToSlide: string;
  };
  services: Service[];
};

const servicesContent: Record<AppLocale, ServicesContent> = {
  pt: {
    title: "Nossas soluções digitais",
    subtitle:
      "Serviços desenhados para empresas e agências que precisam combinar autoridade, integrações críticas, segurança e crescimento previsível.",
    labels: {
      differentials: "Diferenciais",
      deliverables: "Entregáveis",
      contactExpert: "Falar com especialista",
      viewCases: "Ver cases",
      viewDetails: "Ver detalhes",
      previous: "Serviço anterior",
      next: "Próximo serviço",
      goToSlide: "Ir para o serviço"
    },
    services: [
      {
        slug: "sites-institucionais",
        title: "Sites institucionais de alta performance",
        description:
          "Presença institucional com narrativa clara, velocidade real, SEO técnico e estrutura voltada a geração de oportunidades.",
        shortDescription:
          "Sites premium para empresas que precisam comunicar autoridade e converter melhor.",
        fullDescription:
          "Criamos hubs institucionais pensados para empresas que precisam transmitir maturidade digital desde a primeira visita. O foco é unir posicionamento, performance, arquitetura de conteúdo e rotas de conversão com uma base técnica sólida.",
        bullets: [
          "Arquitetura focada em posicionamento, leitura rápida e conversão consultiva",
          "Core Web Vitals e experiência estável em desktop e mobile",
          "Base preparada para SEO técnico, conteúdo e crescimento orgânico",
          "Pontos de contato distribuídos para reduzir atrito comercial"
        ],
        deliverables: [
          "Mapa de páginas e arquitetura institucional",
          "Interface responsiva com foco em autoridade",
          "Estrutura preparada para integrações com CRM e automações",
          "Blocos de prova, diferenciais e conteúdo escalável",
          "Documentação de operação e evolução contínua"
        ],
        image: "/images/unti-digital-homepage-image-nossas-solucoes-sites-institucionais.png",
        audience: "companies",
        seoTitle: "Sites institucionais de alta performance | UNTI Digital",
        metaDescription:
          "Projetamos sites institucionais premium com foco em autoridade, performance, SEO técnico e geração de oportunidades."
      },
      {
        slug: "plataformas-web",
        title: "Plataformas web sob medida",
        description:
          "Sistemas, portais e operações digitais construídos para suportar fluxos complexos sem perder clareza, estabilidade e escala.",
        shortDescription:
          "Engenharia sob medida para operações, produtos e áreas logadas de maior complexidade.",
        fullDescription:
          "Desenvolvemos plataformas web para operações que precisam ir além do site institucional. Estruturamos módulos, permissões, dashboards, automações e integrações em arquiteturas preparadas para evolução contínua.",
        bullets: [
          "Arquitetura modular preparada para novas regras de negócio",
          "Experiência orientada a operação e usabilidade real",
          "Camadas de acesso, governança e observabilidade",
          "Base técnica pronta para crescer sem reescrever a plataforma"
        ],
        deliverables: [
          "Descoberta de fluxos e desenho funcional",
          "Plataforma web customizada com áreas autenticadas",
          "Documentação técnica, endpoints e integrações",
          "Estratégia de deploy e monitoramento",
          "Roadmap inicial de evolução do produto"
        ],
        image: "/images/unti-digital-homepage-image-nossas-solucoes-plataformas-web.png",
        audience: "companies",
        seoTitle: "Plataformas web sob medida | UNTI Digital",
        metaDescription:
          "Criamos plataformas web, portais e sistemas sob medida com foco em escala, governança e operação digital."
      },
      {
        slug: "integracoes-crm-erp",
        title: "Integrações com CRM e ERP",
        description:
          "Conectamos marketing, vendas, operações e dados críticos para reduzir retrabalho e acelerar respostas comerciais.",
        shortDescription:
          "Integrações robustas entre CRM, ERP, APIs e sistemas internos.",
        fullDescription:
          "Mapeamos fluxos, eventos, dependências e regras de negócio para criar integrações confiáveis entre ferramentas comerciais e sistemas operacionais. O objetivo é eliminar silos e transformar dados dispersos em um fluxo único.",
        bullets: [
          "Sincronização entre CRM, ERP, marketing e operação",
          "Tratamento de falhas e observabilidade dos fluxos",
          "Automação de etapas repetitivas e críticas",
          "Mais previsibilidade para equipes comercial e operacional"
        ],
        deliverables: [
          "Mapeamento técnico dos fluxos e pontos de integração",
          "APIs, webhooks e rotinas de sincronização",
          "Monitoramento e alertas para integrações críticas",
          "Documentação funcional e técnica dos processos",
          "Plano de contingência e evolução dos conectores"
        ],
        image: "/images/unti-digital-homepage-image-nossas-solucoes-integracoes-e-automacoes.png",
        audience: "shared",
        seoTitle: "Integrações com CRM e ERP | UNTI Digital",
        metaDescription:
          "Integramos CRM, ERP, APIs e automações para unificar dados, reduzir retrabalho e acelerar a operação digital."
      },
      {
        slug: "governanca-seguranca",
        title: "Governança e segurança",
        description:
          "Camadas de proteção, controle de acessos, trilhas de auditoria e boas práticas para operações digitais mais seguras.",
        shortDescription:
          "Segurança, governança e conformidade para ambientes web e integrações críticas.",
        fullDescription:
          "Organizamos políticas, acessos, riscos e práticas técnicas para reduzir exposição operacional. A proposta é transformar segurança em uma decisão de arquitetura e não em uma reação tardia.",
        bullets: [
          "Controle de acessos e desenho de permissões",
          "Revisão de superfícies críticas e riscos operacionais",
          "Boas práticas alinhadas a LGPD e governança digital",
          "Mais previsibilidade para auditoria, manutenção e escala"
        ],
        deliverables: [
          "Diagnóstico inicial de riscos e prioridades",
          "Roadmap técnico de segurança e governança",
          "Recomendações de controle de acesso e proteção",
          "Documentação de fluxos sensíveis e pontos críticos",
          "Trilha de melhoria contínua para evolução da operação"
        ],
        image: "/images/unti-digital-homepage-image-agilidade-tecnica-com-governanca.png",
        audience: "shared",
        seoTitle: "Governança e segurança digital | UNTI Digital",
        metaDescription:
          "Estruturamos governança, segurança e controles para operações digitais com foco em proteção, conformidade e escala."
      },
      {
        slug: "white-label-agencias",
        title: "White label técnico para agências",
        description:
          "Squad técnico sob demanda para ampliar a capacidade da agência com confidencialidade, velocidade e padrão enterprise.",
        shortDescription:
          "Engenharia sob sua marca para projetos que exigem mais robustez técnica.",
        fullDescription:
          "Atuamos como extensão técnica da agência para viabilizar entregas mais sofisticadas sem sobrecarregar a estrutura interna. Entramos para organizar escopo, executar com consistência e preservar a relação comercial da agência com o cliente final.",
        bullets: [
          "Atuação confidencial com integração ao processo da agência",
          "Capacidade sob demanda para projetos mais complexos",
          "Entrega técnica com padrão consistente de engenharia",
          "Mais escala comercial sem ampliar folha fixa"
        ],
        deliverables: [
          "Apoio técnico em sites, plataformas e integrações",
          "Fluxo de alinhamento, checkpoints e documentação",
          "Estrutura white label para squads sob demanda",
          "Suporte na priorização técnica e distribuição de escopo",
          "Base confiável para recorrência e retenção de clientes"
        ],
        image: "/images/unti-digital-homepage-image-nossas-solucoes-white-label-tecnico.png",
        audience: "agencies",
        seoTitle: "White label técnico para agências | UNTI Digital",
        metaDescription:
          "Apoiamos agências com engenharia white label para sites, plataformas e integrações com confidencialidade e escala."
      }
    ]
  },
  en: {
    title: "Our digital solutions",
    subtitle:
      "Services designed for companies and agencies that need authority, critical integrations, strong security, and predictable growth.",
    labels: {
      differentials: "Differentials",
      deliverables: "Deliverables",
      contactExpert: "Talk to a specialist",
      viewCases: "View cases",
      viewDetails: "View details",
      previous: "Previous service",
      next: "Next service",
      goToSlide: "Go to service"
    },
    services: [
      {
        slug: "sites-institucionais",
        title: "High-performance institutional websites",
        description:
          "Institutional presence with clear messaging, real speed, technical SEO, and a structure built to generate qualified opportunities.",
        shortDescription:
          "Premium websites for companies that need to communicate authority and convert better.",
        fullDescription:
          "We build institutional hubs for companies that need to signal digital maturity from the first visit. The goal is to combine positioning, performance, content architecture, and conversion paths on top of a reliable technical foundation.",
        bullets: [
          "Architecture focused on positioning, quick comprehension, and consultative conversion",
          "Stable Core Web Vitals across desktop and mobile",
          "A technical base ready for SEO, content, and organic growth",
          "Distributed contact points to reduce commercial friction"
        ],
        deliverables: [
          "Institutional sitemap and content architecture",
          "Responsive interface built around authority and clarity",
          "Structure prepared for CRM and automation integrations",
          "Proof, differentiation, and scalable content blocks",
          "Operational documentation and an evolution plan"
        ],
        image: "/images/unti-digital-homepage-image-nossas-solucoes-sites-institucionais.png",
        audience: "companies",
        seoTitle: "High-performance institutional websites | UNTI Digital",
        metaDescription:
          "We design premium institutional websites focused on authority, performance, technical SEO, and opportunity generation."
      },
      {
        slug: "plataformas-web",
        title: "Custom web platforms",
        description:
          "Systems, portals, and digital operations built to support complex workflows without sacrificing clarity, stability, or scale.",
        shortDescription:
          "Tailored engineering for operations, products, and higher-complexity member areas.",
        fullDescription:
          "We develop web platforms for operations that need more than a marketing website. We structure modules, permissions, dashboards, automations, and integrations inside architectures designed for continuous evolution.",
        bullets: [
          "Modular architecture prepared for new business rules",
          "Experience designed around real operational use",
          "Access layers, governance, and observability",
          "A technical base that can scale without rebuilding the platform"
        ],
        deliverables: [
          "Workflow discovery and functional design",
          "Custom web platform with authenticated areas",
          "Technical documentation, endpoints, and integrations",
          "Deployment and monitoring strategy",
          "Initial product evolution roadmap"
        ],
        image: "/images/unti-digital-homepage-image-nossas-solucoes-plataformas-web.png",
        audience: "companies",
        seoTitle: "Custom web platforms | UNTI Digital",
        metaDescription:
          "We build custom web platforms, portals, and systems focused on scale, governance, and digital operations."
      },
      {
        slug: "integracoes-crm-erp",
        title: "CRM and ERP integrations",
        description:
          "We connect marketing, sales, operations, and critical data to reduce manual work and speed up commercial response.",
        shortDescription:
          "Robust integrations across CRM, ERP, APIs, and internal systems.",
        fullDescription:
          "We map flows, events, dependencies, and business rules to create reliable integrations between commercial tools and operational systems. The objective is to remove silos and turn fragmented data into a single flow.",
        bullets: [
          "Synchronization across CRM, ERP, marketing, and operations",
          "Failure handling and observability for critical flows",
          "Automation of repetitive and high-impact steps",
          "More predictability for commercial and operational teams"
        ],
        deliverables: [
          "Technical mapping of flows and integration points",
          "APIs, webhooks, and synchronization routines",
          "Monitoring and alerts for critical integrations",
          "Functional and technical process documentation",
          "Contingency and connector evolution plan"
        ],
        image: "/images/unti-digital-homepage-image-nossas-solucoes-integracoes-e-automacoes.png",
        audience: "shared",
        seoTitle: "CRM and ERP integrations | UNTI Digital",
        metaDescription:
          "We integrate CRM, ERP, APIs, and automation flows to unify data, reduce rework, and accelerate digital operations."
      },
      {
        slug: "governanca-seguranca",
        title: "Governance and security",
        description:
          "Protection layers, access control, audit trails, and operational best practices for safer digital environments.",
        shortDescription:
          "Security, governance, and compliance for web environments and critical integrations.",
        fullDescription:
          "We organize policies, access, risks, and technical practices to reduce operational exposure. The goal is to make security an architectural decision rather than a late-stage reaction.",
        bullets: [
          "Access control and permission design",
          "Review of critical surfaces and operational risk points",
          "Best practices aligned with data privacy and digital governance",
          "More predictability for audits, maintenance, and scale"
        ],
        deliverables: [
          "Initial diagnosis of risks and priorities",
          "Security and governance technical roadmap",
          "Recommendations for access control and protection",
          "Documentation of sensitive flows and critical points",
          "Continuous improvement track for the operation"
        ],
        image: "/images/unti-digital-homepage-image-agilidade-tecnica-com-governanca.png",
        audience: "shared",
        seoTitle: "Digital governance and security | UNTI Digital",
        metaDescription:
          "We structure governance, security, and controls for digital operations with a focus on protection, compliance, and scale."
      },
      {
        slug: "white-label-agencias",
        title: "Technical white-label for agencies",
        description:
          "On-demand technical squad to expand agency delivery with confidentiality, speed, and enterprise-grade execution.",
        shortDescription:
          "Engineering under your brand for projects that require stronger technical depth.",
        fullDescription:
          "We work as an extension of the agency's technical team to make more sophisticated deliveries viable without overloading the internal structure. We step in to organize scope, execute consistently, and preserve the agency's commercial relationship with the end client.",
        bullets: [
          "Confidential work integrated into the agency process",
          "On-demand capacity for more complex projects",
          "Consistent engineering standards across deliveries",
          "More commercial scale without expanding fixed payroll"
        ],
        deliverables: [
          "Technical support for websites, platforms, and integrations",
          "Alignment flow, checkpoints, and documentation",
          "White-label structure for on-demand squads",
          "Support in technical prioritization and scope distribution",
          "Reliable base for recurring delivery and retention"
        ],
        image: "/images/unti-digital-homepage-image-nossas-solucoes-white-label-tecnico.png",
        audience: "agencies",
        seoTitle: "Technical white-label for agencies | UNTI Digital",
        metaDescription:
          "We support agencies with white-label engineering for websites, platforms, and integrations with confidentiality and scale."
      }
    ]
  },
  es: {
    title: "Nuestras soluciones digitales",
    subtitle:
      "Servicios pensados para empresas y agencias que necesitan autoridad, integraciones críticas, seguridad sólida y crecimiento predecible.",
    labels: {
      differentials: "Diferenciales",
      deliverables: "Entregables",
      contactExpert: "Hablar con un especialista",
      viewCases: "Ver casos",
      viewDetails: "Ver detalles",
      previous: "Servicio anterior",
      next: "Siguiente servicio",
      goToSlide: "Ir al servicio"
    },
    services: [
      {
        slug: "sites-institucionais",
        title: "Sitios institucionales de alto rendimiento",
        description:
          "Presencia institucional con narrativa clara, velocidad real, SEO técnico y estructura orientada a generar oportunidades calificadas.",
        shortDescription:
          "Sitios premium para empresas que necesitan comunicar autoridad y convertir mejor.",
        fullDescription:
          "Creamos hubs institucionales para empresas que necesitan transmitir madurez digital desde la primera visita. La propuesta combina posicionamiento, rendimiento, arquitectura de contenido y rutas de conversión sobre una base técnica confiable.",
        bullets: [
          "Arquitectura orientada a posicionamiento, lectura rápida y conversión consultiva",
          "Core Web Vitals estables en desktop y mobile",
          "Base técnica preparada para SEO, contenido y crecimiento orgánico",
          "Puntos de contacto distribuidos para reducir fricción comercial"
        ],
        deliverables: [
          "Mapa de páginas y arquitectura institucional",
          "Interfaz responsive enfocada en autoridad y claridad",
          "Estructura lista para integraciones con CRM y automatizaciones",
          "Bloques de prueba, diferenciación y contenido escalable",
          "Documentación operativa y plan de evolución"
        ],
        image: "/images/unti-digital-homepage-image-nossas-solucoes-sites-institucionais.png",
        audience: "companies",
        seoTitle: "Sitios institucionales de alto rendimiento | UNTI Digital",
        metaDescription:
          "Diseñamos sitios institucionales premium con foco en autoridad, rendimiento, SEO técnico y generación de oportunidades."
      },
      {
        slug: "plataformas-web",
        title: "Plataformas web a medida",
        description:
          "Sistemas, portales y operaciones digitales creados para soportar flujos complejos sin perder claridad, estabilidad ni escala.",
        shortDescription:
          "Ingeniería a medida para operaciones, productos y áreas privadas de mayor complejidad.",
        fullDescription:
          "Desarrollamos plataformas web para operaciones que necesitan ir más allá del sitio institucional. Estructuramos módulos, permisos, tableros, automatizaciones e integraciones en arquitecturas listas para evolucionar continuamente.",
        bullets: [
          "Arquitectura modular preparada para nuevas reglas de negocio",
          "Experiencia diseñada para el uso operativo real",
          "Capas de acceso, gobernanza y observabilidad",
          "Base técnica que puede escalar sin rehacer la plataforma"
        ],
        deliverables: [
          "Descubrimiento de flujos y diseño funcional",
          "Plataforma web customizada con áreas autenticadas",
          "Documentación técnica, endpoints e integraciones",
          "Estrategia de deploy y monitoreo",
          "Roadmap inicial de evolución del producto"
        ],
        image: "/images/unti-digital-homepage-image-nossas-solucoes-plataformas-web.png",
        audience: "companies",
        seoTitle: "Plataformas web a medida | UNTI Digital",
        metaDescription:
          "Creamos plataformas web, portales y sistemas a medida con foco en escala, gobernanza y operación digital."
      },
      {
        slug: "integracoes-crm-erp",
        title: "Integraciones con CRM y ERP",
        description:
          "Conectamos marketing, ventas, operaciones y datos críticos para reducir retrabajo y acelerar la respuesta comercial.",
        shortDescription:
          "Integraciones robustas entre CRM, ERP, APIs y sistemas internos.",
        fullDescription:
          "Mapeamos flujos, eventos, dependencias y reglas de negocio para crear integraciones confiables entre herramientas comerciales y sistemas operativos. El objetivo es eliminar silos y convertir datos fragmentados en un flujo único.",
        bullets: [
          "Sincronización entre CRM, ERP, marketing y operación",
          "Tratamiento de fallos y observabilidad de flujos críticos",
          "Automatización de pasos repetitivos y de alto impacto",
          "Más previsibilidad para equipos comerciales y operativos"
        ],
        deliverables: [
          "Mapeo técnico de flujos y puntos de integración",
          "APIs, webhooks y rutinas de sincronización",
          "Monitoreo y alertas para integraciones críticas",
          "Documentación funcional y técnica de procesos",
          "Plan de contingencia y evolución de conectores"
        ],
        image: "/images/unti-digital-homepage-image-nossas-solucoes-integracoes-e-automacoes.png",
        audience: "shared",
        seoTitle: "Integraciones con CRM y ERP | UNTI Digital",
        metaDescription:
          "Integramos CRM, ERP, APIs y automatizaciones para unificar datos, reducir retrabajo y acelerar la operación digital."
      },
      {
        slug: "governanca-seguranca",
        title: "Gobernanza y seguridad",
        description:
          "Capas de protección, control de acceso, trazabilidad y buenas prácticas para operaciones digitales más seguras.",
        shortDescription:
          "Seguridad, gobernanza y cumplimiento para entornos web e integraciones críticas.",
        fullDescription:
          "Organizamos políticas, accesos, riesgos y prácticas técnicas para reducir exposición operativa. La meta es transformar la seguridad en una decisión de arquitectura y no en una reacción tardía.",
        bullets: [
          "Control de accesos y diseño de permisos",
          "Revisión de superficies críticas y puntos de riesgo operativo",
          "Buenas prácticas alineadas con privacidad y gobernanza digital",
          "Más previsibilidad para auditorías, mantenimiento y escala"
        ],
        deliverables: [
          "Diagnóstico inicial de riesgos y prioridades",
          "Roadmap técnico de seguridad y gobernanza",
          "Recomendaciones de control de acceso y protección",
          "Documentación de flujos sensibles y puntos críticos",
          "Ruta de mejora continua para la operación"
        ],
        image: "/images/unti-digital-homepage-image-agilidade-tecnica-com-governanca.png",
        audience: "shared",
        seoTitle: "Gobernanza y seguridad digital | UNTI Digital",
        metaDescription:
          "Estructuramos gobernanza, seguridad y controles para operaciones digitales con foco en protección, cumplimiento y escala."
      },
      {
        slug: "white-label-agencias",
        title: "White label técnico para agencias",
        description:
          "Squad técnico bajo demanda para ampliar la capacidad de la agencia con confidencialidad, velocidad y estándar enterprise.",
        shortDescription:
          "Ingeniería bajo tu marca para proyectos que requieren mayor profundidad técnica.",
        fullDescription:
          "Actuamos como extensión técnica de la agencia para hacer viables entregas más sofisticadas sin sobrecargar la estructura interna. Entramos para organizar el alcance, ejecutar con consistencia y preservar la relación comercial de la agencia con el cliente final.",
        bullets: [
          "Trabajo confidencial integrado al proceso de la agencia",
          "Capacidad bajo demanda para proyectos más complejos",
          "Estándar consistente de ingeniería en las entregas",
          "Más escala comercial sin ampliar la nómina fija"
        ],
        deliverables: [
          "Soporte técnico para sitios, plataformas e integraciones",
          "Flujo de alineación, checkpoints y documentación",
          "Estructura white label para squads bajo demanda",
          "Apoyo en priorización técnica y distribución de alcance",
          "Base confiable para recurrencia y retención"
        ],
        image: "/images/unti-digital-homepage-image-nossas-solucoes-white-label-tecnico.png",
        audience: "agencies",
        seoTitle: "White label técnico para agencias | UNTI Digital",
        metaDescription:
          "Apoyamos agencias con ingeniería white label para sitios, plataformas e integraciones con confidencialidad y escala."
      }
    ]
  }
};

export function getServicesContent(locale: AppLocale) {
  return servicesContent[locale];
}

export function getServices(locale: AppLocale) {
  return servicesContent[locale].services;
}

export function getServiceBySlug(locale: AppLocale, slug: string) {
  return getServices(locale).find((service) => service.slug === slug);
}
