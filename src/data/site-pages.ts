import type { AppLocale } from "@/lib/i18n";

export type StaticPageKey =
  | "about"
  | "clients"
  | "partners"
  | "plans"
  | "privacy"
  | "businessPolicy"
  | "services"
  | "companies"
  | "notFound";

export type PageSection = {
  title: string;
  description: string;
  items?: string[];
};

export type PageAction = {
  href: string;
  label: string;
};

export type StaticPageContent = {
  eyebrow?: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  actions?: PageAction[];
  sections: PageSection[];
};

const pages: Record<AppLocale, Record<StaticPageKey, StaticPageContent>> = {
  pt: {
    about: {
      eyebrow: "Quem somos",
      title: "Engenharia digital para operações que não podem improvisar",
      description:
        "A UNTI Digital estrutura sites, plataformas e integrações com foco em clareza comercial, solidez técnica e evolução contínua.",
      seoTitle: "Sobre a UNTI Digital",
      seoDescription: "Conheça a abordagem da UNTI Digital para sites, plataformas e integrações.",
      actions: [
        { href: "/contato", label: "Falar com especialista" },
        { href: "/cases", label: "Ver cases" }
      ],
      sections: [
        {
          title: "Posicionamento com execução",
          description:
            "Trabalhamos unindo estratégia, arquitetura e implementação para que a operação digital avance com mais previsibilidade."
        },
        {
          title: "Projetos pensados para escalar",
          description:
            "A base técnica precisa sustentar crescimento, campanhas, integrações e novas demandas sem virar gargalo.",
          items: [
            "Clareza de escopo e prioridades",
            "Arquitetura preparada para evolução",
            "Execução orientada a resultado"
          ]
        },
        {
          title: "Parceria de longo prazo",
          description:
            "Mais do que lançar páginas, queremos estruturar uma presença digital que continue consistente conforme o negócio cresce."
        }
      ]
    },
    clients: {
      eyebrow: "Perfil atendido",
      title: "Empresas que precisam de mais clareza entre marketing, operação e tecnologia",
      description:
        "Atendemos operações que precisam comunicar melhor, integrar processos e ganhar uma base digital mais confiável para crescer.",
      seoTitle: "Clientes e perfis atendidos | UNTI Digital",
      seoDescription: "Veja o perfil de empresas e operações atendidas pela UNTI Digital.",
      sections: [
        {
          title: "Quem atendemos",
          description: "Empresas em reposicionamento, expansão comercial ou reorganização operacional.",
          items: [
            "Negócios B2B com ciclo consultivo",
            "Operações com integrações críticas",
            "Marcas que precisam elevar autoridade digital"
          ]
        },
        {
          title: "O que normalmente buscam",
          description: "Mais clareza, menos retrabalho e uma operação digital capaz de crescer com menos ruído.",
          items: [
            "Sites e páginas com narrativa mais forte",
            "Plataformas para fluxos específicos",
            "Integrações entre comercial e operação"
          ]
        }
      ]
    },
    partners: {
      eyebrow: "Parcerias",
      title: "Parcerias técnicas e estratégicas para acelerar entrega",
      description:
        "A UNTI se conecta a agências, consultorias e operações complementares para somar capacidade técnica, visão de negócio e consistência de execução.",
      seoTitle: "Parceiros | UNTI Digital",
      seoDescription: "Conheça como a UNTI Digital estrutura parcerias técnicas e estratégicas.",
      actions: [{ href: "/contato", label: "Conversar sobre parceria" }],
      sections: [
        {
          title: "Modelos de parceria",
          description: "Atuação white label, apoio técnico consultivo e execução sob demanda."
        },
        {
          title: "Onde geramos mais valor",
          description: "Projetos que exigem mais robustez, integração ou organização de escopo.",
          items: [
            "Sites institucionais de maior complexidade",
            "Plataformas e áreas autenticadas",
            "Integrações com CRM, ERP e APIs"
          ]
        }
      ]
    },
    plans: {
      eyebrow: "Modelos de contratação",
      title: "Planos pensados para escopo, recorrência e evolução",
      description:
        "Organizamos projetos em formatos que combinam descoberta, execução e continuidade sem engessar a operação.",
      seoTitle: "Planos e contratação | UNTI Digital",
      seoDescription: "Veja os modelos de contratação da UNTI Digital para projetos e continuidade.",
      actions: [{ href: "/contato", label: "Solicitar proposta" }],
      sections: [
        {
          title: "Projeto fechado",
          description: "Ideal para lançamentos, reformulações e entregas com escopo mais claro.",
          items: ["Descoberta e definição", "Execução com marcos", "Go-live estruturado"]
        },
        {
          title: "Squad recorrente",
          description: "Para operações que precisam de evolução contínua e suporte técnico mais próximo.",
          items: ["Prioridades mensais", "Backlog técnico", "Acompanhamento constante"]
        },
        {
          title: "White label para agências",
          description: "Capacidade técnica sob demanda para complementar a entrega da agência com confidencialidade."
        }
      ]
    },
    privacy: {
      eyebrow: "Jurídico",
      title: "Política de privacidade",
      description:
        "Tratamos dados pessoais com foco em transparência, finalidade legítima, segurança e respeito ao consentimento informado.",
      seoTitle: "Política de privacidade | UNTI Digital",
      seoDescription: "Leia a política de privacidade da UNTI Digital.",
      sections: [
        {
          title: "Dados coletados",
          description: "Coletamos apenas informações necessárias para contato comercial, relacionamento e operação do site."
        },
        {
          title: "Uso das informações",
          description: "Os dados podem ser usados para responder contatos, elaborar propostas e melhorar a experiência digital."
        },
        {
          title: "Direitos do titular",
          description: "Solicitações de acesso, correção ou exclusão podem ser feitas pelos canais oficiais da empresa."
        }
      ]
    },
    businessPolicy: {
      eyebrow: "Governança",
      title: "Política empresarial",
      description:
        "Nossa política empresarial orienta relações comerciais, boas práticas operacionais, confidencialidade e compromisso com qualidade técnica.",
      seoTitle: "Política empresarial | UNTI Digital",
      seoDescription: "Conheça os princípios de governança e operação da UNTI Digital.",
      sections: [
        {
          title: "Ética e transparência",
          description: "Priorizamos comunicação clara, decisões responsáveis e alinhamento contínuo com o cliente."
        },
        {
          title: "Qualidade de entrega",
          description: "Documentação, revisão técnica e rastreabilidade fazem parte do padrão de execução."
        },
        {
          title: "Confidencialidade",
          description: "Projetos, acessos e informações sensíveis são tratados com controles compatíveis com o contexto de cada operação."
        }
      ]
    },
    services: {
      eyebrow: "Serviços",
      title: "Sites, plataformas, integrações e apoio técnico com visão de operação",
      description:
        "Nossos serviços foram desenhados para resolver gargalos reais entre posicionamento, tecnologia e crescimento.",
      seoTitle: "Serviços | UNTI Digital",
      seoDescription: "Conheça os serviços da UNTI Digital para sites, plataformas e integrações.",
      actions: [{ href: "/solucoes", label: "Explorar soluções" }],
      sections: [
        {
          title: "Sites institucionais",
          description: "Presença premium com narrativa forte, performance real e rotas claras para contato."
        },
        {
          title: "Plataformas web",
          description: "Ambientes sob medida para fluxos, portais, dashboards e operações autenticadas."
        },
        {
          title: "Integrações e governança",
          description: "Conectores, automações e práticas de segurança para reduzir ruído e dar mais previsibilidade."
        }
      ]
    },
    companies: {
      eyebrow: "Para empresas",
      title: "Soluções para empresas que precisam alinhar marca, operação e tecnologia",
      description:
        "Estruturamos experiências digitais que ajudam a vender melhor, integrar processos e crescer com menos improviso.",
      seoTitle: "Soluções para empresas | UNTI Digital",
      seoDescription: "Veja como a UNTI Digital atende empresas com sites, plataformas e integrações.",
      actions: [{ href: "/contato", label: "Falar sobre o projeto" }],
      sections: [
        {
          title: "Onde atuamos",
          description: "Projetos institucionais, plataformas sob medida e integrações críticas."
        },
        {
          title: "O que muda na prática",
          description: "Mais clareza comercial, menos ruído operacional e uma base digital mais previsível.",
          items: [
            "Posicionamento institucional mais forte",
            "Processos conectados com menos retrabalho",
            "Estrutura preparada para evolução"
          ]
        }
      ]
    },
    notFound: {
      eyebrow: "404",
      title: "Página não encontrada",
      description: "O conteúdo que você tentou acessar não existe ou foi movido para outro endereço.",
      seoTitle: "Página não encontrada | UNTI Digital",
      seoDescription: "A página solicitada não foi encontrada.",
      actions: [{ href: "/", label: "Voltar para a home" }],
      sections: []
    }
  },
  en: {
    about: {
      eyebrow: "About us",
      title: "Digital engineering for operations that cannot improvise",
      description: "UNTI Digital builds websites, platforms, and integrations with stronger commercial clarity and technical stability.",
      seoTitle: "About UNTI Digital",
      seoDescription: "Learn about UNTI Digital's approach to websites, platforms, and integrations.",
      actions: [
        { href: "/contato", label: "Talk to a specialist" },
        { href: "/cases", label: "View cases" }
      ],
      sections: [
        { title: "Positioning with execution", description: "We connect strategy, architecture, and delivery so digital operations can move with more predictability." },
        { title: "Projects designed to scale", description: "The technical base must sustain growth, campaigns, integrations, and future demands without becoming a bottleneck.", items: ["Clear scope and priorities", "Architecture ready to evolve", "Execution oriented to business outcome"] },
        { title: "Long-term partnership", description: "We want to structure a digital presence that stays consistent as the business grows." }
      ]
    },
    clients: {
      eyebrow: "Client profile",
      title: "Companies that need more clarity between marketing, operations, and technology",
      description: "We support operations that need clearer communication, better integrations, and a more reliable digital foundation.",
      seoTitle: "Clients and profiles | UNTI Digital",
      seoDescription: "See the type of companies and operations served by UNTI Digital.",
      sections: [
        { title: "Who we serve", description: "Companies in repositioning, commercial expansion, or operational reorganization.", items: ["B2B businesses with consultative cycles", "Operations with critical integrations", "Brands improving digital authority"] },
        { title: "What they usually need", description: "More clarity, less rework, and a digital operation that can grow with less noise.", items: ["Stronger institutional pages", "Platforms for specific workflows", "Integrations between commercial and operations"] }
      ]
    },
    partners: {
      eyebrow: "Partnerships",
      title: "Technical and strategic partnerships that expand delivery",
      description: "UNTI works with agencies, consultancies, and complementary teams to add technical strength and consistent execution.",
      seoTitle: "Partners | UNTI Digital",
      seoDescription: "See how UNTI Digital structures strategic and technical partnerships.",
      actions: [{ href: "/contato", label: "Discuss a partnership" }],
      sections: [
        { title: "Partnership models", description: "White-label execution, advisory support, and on-demand technical capacity." },
        { title: "Where we create more value", description: "Projects that require stronger scope organization, integrations, or technical depth.", items: ["Higher-complexity websites", "Platforms and authenticated areas", "CRM, ERP, and API integrations"] }
      ]
    },
    plans: {
      eyebrow: "Engagement models",
      title: "Plans built for scope, continuity, and evolution",
      description: "We organize work in formats that balance discovery, implementation, and ongoing support.",
      seoTitle: "Plans and engagement | UNTI Digital",
      seoDescription: "See UNTI Digital's engagement models for projects and continuous evolution.",
      actions: [{ href: "/contato", label: "Request a proposal" }],
      sections: [
        { title: "Fixed-scope project", description: "A fit for launches, redesigns, and well-defined deliveries.", items: ["Discovery and alignment", "Execution with milestones", "Structured go-live"] },
        { title: "Recurring squad", description: "For operations that need ongoing evolution and closer technical support.", items: ["Monthly priorities", "Technical backlog", "Continuous follow-up"] },
        { title: "White-label for agencies", description: "On-demand technical capacity that complements agency delivery with confidentiality." }
      ]
    },
    privacy: {
      eyebrow: "Legal",
      title: "Privacy policy",
      description: "We handle personal data with transparency, legitimate purpose, security, and respect for informed consent.",
      seoTitle: "Privacy policy | UNTI Digital",
      seoDescription: "Read UNTI Digital's privacy policy.",
      sections: [
        { title: "Data collected", description: "We collect only the information needed for commercial contact, relationship management, and website operation." },
        { title: "How information is used", description: "Data may be used to answer requests, prepare proposals, and improve the digital experience." },
        { title: "Data subject rights", description: "Requests for access, correction, or deletion can be made through the company's official channels." }
      ]
    },
    businessPolicy: {
      eyebrow: "Governance",
      title: "Business policy",
      description: "Our policy guides commercial relationships, operational best practices, confidentiality, and technical quality standards.",
      seoTitle: "Business policy | UNTI Digital",
      seoDescription: "Understand UNTI Digital's governance and operational principles.",
      sections: [
        { title: "Ethics and transparency", description: "We prioritize clear communication, responsible decisions, and continuous alignment." },
        { title: "Delivery quality", description: "Documentation, technical review, and traceability are part of our execution standard." },
        { title: "Confidentiality", description: "Projects, accesses, and sensitive information are handled with controls appropriate to each context." }
      ]
    },
    services: {
      eyebrow: "Services",
      title: "Websites, platforms, integrations, and technical support with an operational mindset",
      description: "Our services are designed to solve real bottlenecks between positioning, technology, and growth.",
      seoTitle: "Services | UNTI Digital",
      seoDescription: "Explore UNTI Digital services for websites, platforms, and integrations.",
      actions: [{ href: "/solucoes", label: "Explore solutions" }],
      sections: [
        { title: "Institutional websites", description: "Premium presence with strong messaging, real performance, and clear paths to contact." },
        { title: "Web platforms", description: "Tailored environments for portals, dashboards, and authenticated workflows." },
        { title: "Integrations and governance", description: "Connectors, automation, and security practices that reduce noise and improve predictability." }
      ]
    },
    companies: {
      eyebrow: "For companies",
      title: "Solutions for companies aligning brand, operations, and technology",
      description: "We structure digital experiences that help companies sell better, connect processes, and grow with less improvisation.",
      seoTitle: "Solutions for companies | UNTI Digital",
      seoDescription: "See how UNTI Digital serves companies with websites, platforms, and integrations.",
      actions: [{ href: "/contato", label: "Talk about your project" }],
      sections: [
        { title: "Where we work", description: "Institutional projects, custom platforms, and critical integrations." },
        { title: "What changes in practice", description: "Clearer commercial positioning, less operational noise, and a more predictable digital base.", items: ["Stronger institutional positioning", "Connected processes with less rework", "Structure ready for evolution"] }
      ]
    },
    notFound: {
      eyebrow: "404",
      title: "Page not found",
      description: "The content you tried to access does not exist or has moved to another address.",
      seoTitle: "Page not found | UNTI Digital",
      seoDescription: "The requested page was not found.",
      actions: [{ href: "/", label: "Back to home" }],
      sections: []
    }
  },
  es: {
    about: {
      eyebrow: "Quiénes somos",
      title: "Ingeniería digital para operaciones que no pueden improvisar",
      description: "UNTI Digital desarrolla sitios, plataformas e integraciones con más claridad comercial y solidez técnica.",
      seoTitle: "Sobre UNTI Digital",
      seoDescription: "Conozca el enfoque de UNTI Digital para sitios, plataformas e integraciones.",
      actions: [
        { href: "/contato", label: "Hablar con un especialista" },
        { href: "/cases", label: "Ver casos" }
      ],
      sections: [
        { title: "Posicionamiento con ejecución", description: "Conectamos estrategia, arquitectura y entrega para que la operación digital avance con más previsibilidad." },
        { title: "Proyectos diseñados para escalar", description: "La base técnica debe sostener crecimiento, campañas, integraciones y futuras demandas sin volverse un cuello de botella.", items: ["Alcance y prioridades claras", "Arquitectura lista para evolucionar", "Ejecución orientada a resultado"] },
        { title: "Parcería de largo plazo", description: "Queremos estructurar una presencia digital que siga siendo consistente a medida que el negocio crece." }
      ]
    },
    clients: {
      eyebrow: "Perfil atendido",
      title: "Empresas que necesitan más claridad entre marketing, operación y tecnología",
      description: "Apoyamos operaciones que necesitan comunicar mejor, integrar procesos y ganar una base digital más confiable.",
      seoTitle: "Clientes y perfiles | UNTI Digital",
      seoDescription: "Vea el tipo de empresas y operaciones atendidas por UNTI Digital.",
      sections: [
        { title: "A quién atendemos", description: "Empresas en reposicionamiento, expansión comercial o reorganización operativa.", items: ["Negocios B2B con ciclo consultivo", "Operaciones con integraciones críticas", "Marcas elevando autoridad digital"] },
        { title: "Qué suelen buscar", description: "Más claridad, menos retrabajo y una operación digital capaz de crecer con menos ruido.", items: ["Páginas institucionales más fuertes", "Plataformas para flujos específicos", "Integraciones entre comercial y operación"] }
      ]
    },
    partners: {
      eyebrow: "Parcerias",
      title: "Parcerias técnicas y estratégicas para ampliar la entrega",
      description: "UNTI trabaja con agencias, consultoras y equipos complementarios para sumar capacidad técnica y consistencia de ejecución.",
      seoTitle: "Partners | UNTI Digital",
      seoDescription: "Vea cómo UNTI Digital estructura alianzas técnicas y estratégicas.",
      actions: [{ href: "/contato", label: "Hablar sobre alianza" }],
      sections: [
        { title: "Modelos de alianza", description: "Ejecución white-label, apoyo consultivo y capacidad técnica bajo demanda." },
        { title: "Dónde generamos más valor", description: "Proyectos que requieren mejor organización de alcance, integraciones o profundidad técnica.", items: ["Sitios de mayor complejidad", "Plataformas y áreas autenticadas", "Integraciones con CRM, ERP y APIs"] }
      ]
    },
    plans: {
      eyebrow: "Modelos de contratación",
      title: "Planes pensados para alcance, continuidad y evolución",
      description: "Organizamos el trabajo en formatos que equilibran descubrimiento, implementación y soporte continuo.",
      seoTitle: "Planes y contratación | UNTI Digital",
      seoDescription: "Conozca los modelos de contratación de UNTI Digital.",
      actions: [{ href: "/contato", label: "Solicitar propuesta" }],
      sections: [
        { title: "Proyecto cerrado", description: "Ideal para lanzamientos, rediseños y entregas con alcance claro.", items: ["Descubrimiento y alineación", "Ejecución con hitos", "Go-live estructurado"] },
        { title: "Squad recurrente", description: "Para operaciones que necesitan evolución continua y soporte técnico más cercano.", items: ["Prioridades mensuales", "Backlog técnico", "Seguimiento continuo"] },
        { title: "White-label para agencias", description: "Capacidad técnica bajo demanda para complementar la entrega de la agencia con confidencialidad." }
      ]
    },
    privacy: {
      eyebrow: "Legal",
      title: "Política de privacidad",
      description: "Tratamos datos personales con transparencia, finalidad legítima, seguridad y respeto por el consentimiento informado.",
      seoTitle: "Política de privacidad | UNTI Digital",
      seoDescription: "Lea la política de privacidad de UNTI Digital.",
      sections: [
        { title: "Datos recolectados", description: "Recolectamos solo la información necesaria para contacto comercial, relación y operación del sitio." },
        { title: "Uso de la información", description: "Los datos pueden utilizarse para responder solicitudes, preparar propuestas y mejorar la experiencia digital." },
        { title: "Derechos del titular", description: "Las solicitudes de acceso, corrección o eliminación pueden realizarse por los canales oficiales de la empresa." }
      ]
    },
    businessPolicy: {
      eyebrow: "Gobernanza",
      title: "Política empresarial",
      description: "Nuestra política orienta relaciones comerciales, buenas prácticas operativas, confidencialidad y estándar técnico.",
      seoTitle: "Política empresarial | UNTI Digital",
      seoDescription: "Conozca los principios de gobernanza y operación de UNTI Digital.",
      sections: [
        { title: "Ética y transparencia", description: "Priorizamos comunicación clara, decisiones responsables y alineación continua." },
        { title: "Calidad de entrega", description: "Documentación, revisión técnica y trazabilidad forman parte de nuestro estándar." },
        { title: "Confidencialidad", description: "Proyectos, accesos e información sensible se tratan con controles acordes al contexto." }
      ]
    },
    services: {
      eyebrow: "Servicios",
      title: "Sitios, plataformas, integraciones y apoyo técnico con visión operativa",
      description: "Nuestros servicios fueron diseñados para resolver cuellos de botella reales entre posicionamiento, tecnología y crecimiento.",
      seoTitle: "Servicios | UNTI Digital",
      seoDescription: "Explore los servicios de UNTI Digital para sitios, plataformas e integraciones.",
      actions: [{ href: "/solucoes", label: "Explorar soluciones" }],
      sections: [
        { title: "Sitios institucionales", description: "Presencia premium con narrativa fuerte, rendimiento real y rutas claras de contacto." },
        { title: "Plataformas web", description: "Entornos a medida para portales, dashboards y flujos autenticados." },
        { title: "Integraciones y gobernanza", description: "Conectores, automatización y prácticas de seguridad que reducen ruido y mejoran previsibilidad." }
      ]
    },
    companies: {
      eyebrow: "Para empresas",
      title: "Soluciones para empresas que alinean marca, operación y tecnología",
      description: "Estructuramos experiencias digitales que ayudan a vender mejor, conectar procesos y crecer con menos improvisación.",
      seoTitle: "Soluciones para empresas | UNTI Digital",
      seoDescription: "Vea cómo UNTI Digital atiende empresas con sitios, plataformas e integraciones.",
      actions: [{ href: "/contato", label: "Hablar sobre el proyecto" }],
      sections: [
        { title: "Dónde actuamos", description: "Proyectos institucionales, plataformas a medida e integraciones críticas." },
        { title: "Qué cambia en la práctica", description: "Posicionamiento más claro, menos ruido operativo y una base digital más predecible.", items: ["Posicionamiento institucional más fuerte", "Procesos conectados con menos retrabajo", "Estructura lista para evolucionar"] }
      ]
    },
    notFound: {
      eyebrow: "404",
      title: "Página no encontrada",
      description: "El contenido que intentaste acceder no existe o fue movido a otra dirección.",
      seoTitle: "Página no encontrada | UNTI Digital",
      seoDescription: "La página solicitada no fue encontrada.",
      actions: [{ href: "/", label: "Volver al inicio" }],
      sections: []
    }
  }
};

export function getStaticPageContent(locale: AppLocale, key: StaticPageKey) {
  return pages[locale][key];
}
