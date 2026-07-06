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

const imageMap = {
  web: "/images/unti-digital-homepage-image-nossas-solucoes-sites-institucionais.png",
  platform: "/images/unti-digital-homepage-image-nossas-solucoes-plataformas-web.png",
  integration: "/images/unti-digital-homepage-image-nossas-solucoes-integracoes-e-automacoes.png",
  governance: "/images/unti-digital-homepage-image-agilidade-tecnica-com-governanca.png",
  whiteLabel: "/images/unti-digital-homepage-image-nossas-solucoes-white-label-tecnico.png"
};

const servicesContent: Record<AppLocale, ServicesContent> = {
  pt: {
    title: "Nossos serviços",
    subtitle:
      "Soluções para empresas que precisam estruturar tecnologia, marketing digital, operação com cliente final e evolução contínua dos projetos.",
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
        slug: "desenvolvimento-web",
        title: "Desenvolvimento Web",
        description:
          "Sites, landing pages e estruturas web com foco em autoridade, performance, SEO e geração de oportunidades.",
        shortDescription: "Sites e páginas premium para empresas que precisam vender, comunicar e operar melhor.",
        fullDescription:
          "Criamos experiências web completas para empresas que precisam de presença digital forte, páginas rápidas, conteúdo organizado e caminhos claros de conversão.",
        bullets: [
          "Arquitetura de páginas com foco comercial",
          "Performance, responsividade e SEO técnico",
          "Design alinhado à identidade da empresa",
          "Estrutura preparada para evolução contínua"
        ],
        deliverables: [
          "Site institucional ou landing page",
          "Componentes responsivos",
          "Base técnica otimizada",
          "Configuração de rotas de conversão",
          "Documentação de operação"
        ],
        image: imageMap.web,
        audience: "companies",
        seoTitle: "Desenvolvimento Web | UNTI Digital",
        metaDescription: "Desenvolvimento web para empresas com foco em performance, SEO, autoridade e conversão."
      },
      {
        slug: "implementacao-setor-tecnologia",
        title: "Implementação do setor de tecnologia da empresa",
        description:
          "Estruturamos processos, ferramentas, arquitetura e rotina técnica para empresas que precisam organizar sua área de tecnologia.",
        shortDescription: "Organização do setor de tecnologia com processos, ferramentas e governança técnica.",
        fullDescription:
          "Apoiamos empresas na criação ou profissionalização do setor de tecnologia, conectando estratégia, operação, processos, fornecedores, documentação e gestão técnica.",
        bullets: [
          "Diagnóstico da maturidade técnica atual",
          "Definição de processos e responsabilidades",
          "Organização de stack, acessos e documentação",
          "Rotina de governança e priorização"
        ],
        deliverables: [
          "Mapa de maturidade tecnológica",
          "Plano de estruturação do setor",
          "Documentação de acessos e ferramentas",
          "Processo de gestão de demandas",
          "Roadmap técnico inicial"
        ],
        image: imageMap.platform,
        audience: "companies",
        seoTitle: "Implementação de setor de tecnologia | UNTI Digital",
        metaDescription: "Estruturação de setor de tecnologia para empresas com processos, governança, documentação e roadmap técnico."
      },
      {
        slug: "implementacao-mkt-digital",
        title: "Implementação do setor de MKT Digital da empresa",
        description:
          "Montamos a base de marketing digital para aquisição, posicionamento, conteúdo, campanhas e acompanhamento de resultados.",
        shortDescription: "Estruturação de marketing digital para empresas que precisam gerar demanda com método.",
        fullDescription:
          "Organizamos o setor de marketing digital com canais, métricas, campanhas, conteúdo, automações e rotinas de análise para tornar a geração de demanda mais previsível.",
        bullets: [
          "Mapeamento de canais e público",
          "Organização de campanhas e funis",
          "Rotina de conteúdo e análise",
          "Integração com vendas e atendimento"
        ],
        deliverables: [
          "Plano de marketing digital",
          "Estrutura de campanha e captação",
          "Calendário inicial de conteúdo",
          "Métricas de acompanhamento",
          "Fluxo entre marketing e vendas"
        ],
        image: imageMap.whiteLabel,
        audience: "companies",
        seoTitle: "Implementação de MKT Digital | UNTI Digital",
        metaDescription: "Implementação de setor de marketing digital para empresas com campanhas, conteúdo, funis e métricas."
      },
      {
        slug: "desenvolvimento-aplicacoes-aplicativos",
        title: "Desenvolvimento de aplicações e aplicativos",
        description:
          "Criamos sistemas, portais, áreas logadas, aplicações web e aplicativos para digitalizar processos e produtos.",
        shortDescription: "Aplicações, sistemas e aplicativos sob medida para operações digitais mais completas.",
        fullDescription:
          "Desenvolvemos aplicações sob medida para empresas que precisam transformar processos, serviços ou produtos em experiências digitais robustas, escaláveis e bem organizadas.",
        bullets: [
          "Arquitetura modular e escalável",
          "UX voltada ao uso real da operação",
          "Áreas autenticadas, dashboards e permissões",
          "Integrações com APIs e sistemas internos"
        ],
        deliverables: [
          "Desenho funcional da aplicação",
          "Aplicação web ou app sob medida",
          "Documentação técnica",
          "Deploy e monitoramento",
          "Roadmap de evolução"
        ],
        image: imageMap.platform,
        audience: "companies",
        seoTitle: "Desenvolvimento de aplicações e aplicativos | UNTI Digital",
        metaDescription: "Desenvolvimento de sistemas, aplicações web e aplicativos sob medida para empresas."
      },
      {
        slug: "infraestrutura-digital",
        title: "Infraestrutura digital",
        description:
          "Organizamos hospedagem, domínio, segurança, performance, acessos, monitoramento e base técnica dos ambientes digitais.",
        shortDescription: "Base técnica, segurança e infraestrutura para ambientes digitais mais confiáveis.",
        fullDescription:
          "Estruturamos a infraestrutura digital da empresa para reduzir riscos, melhorar performance, organizar acessos e manter ambientes mais seguros e estáveis.",
        bullets: [
          "Revisão de hospedagem, domínio e DNS",
          "Organização de acessos e permissões",
          "Boas práticas de segurança e backup",
          "Monitoramento e plano de continuidade"
        ],
        deliverables: [
          "Diagnóstico de infraestrutura",
          "Mapa de acessos e riscos",
          "Plano de segurança e backup",
          "Configuração de ambientes",
          "Rotina de manutenção técnica"
        ],
        image: imageMap.governance,
        audience: "shared",
        seoTitle: "Infraestrutura digital | UNTI Digital",
        metaDescription: "Infraestrutura digital para empresas com hospedagem, domínio, segurança, backup e monitoramento."
      },
      {
        slug: "integracao",
        title: "Integração",
        description:
          "Conectamos sistemas, CRMs, ERPs, formulários, automações e dados para reduzir retrabalho e acelerar a operação.",
        shortDescription: "Integrações entre ferramentas, APIs, CRM, ERP e automações operacionais.",
        fullDescription:
          "Mapeamos fluxos, eventos, dependências e regras de negócio para criar integrações confiáveis entre ferramentas comerciais, sistemas operacionais e canais digitais.",
        bullets: [
          "Mapeamento de fluxos e dependências",
          "Integração via APIs, webhooks e automações",
          "Tratamento de falhas e logs",
          "Documentação funcional e técnica"
        ],
        deliverables: [
          "Mapa de integrações",
          "Conectores e webhooks",
          "Rotinas de sincronização",
          "Logs e alertas",
          "Documentação do processo"
        ],
        image: imageMap.integration,
        audience: "shared",
        seoTitle: "Integração de sistemas | UNTI Digital",
        metaDescription: "Integração de sistemas, CRM, ERP, APIs e automações para empresas."
      },
      {
        slug: "operacao-cliente-final",
        title: "Operação com cliente final",
        description:
          "Apoiamos a operação digital no contato com o cliente final, organizando canais, atendimento, funis e rotinas comerciais.",
        shortDescription: "Apoio na operação digital com cliente final, atendimento, canais e funis comerciais.",
        fullDescription:
          "Estruturamos a operação com cliente final para tornar o atendimento mais claro, reduzir perdas de oportunidade e conectar marketing, vendas e suporte em um fluxo mais eficiente.",
        bullets: [
          "Mapeamento da jornada do cliente final",
          "Organização de canais e respostas",
          "Integração com CRM e WhatsApp",
          "Rotina de acompanhamento comercial"
        ],
        deliverables: [
          "Fluxo de atendimento digital",
          "Organização de canais",
          "Roteiros e automações iniciais",
          "Métricas de contato e conversão",
          "Plano de melhoria da operação"
        ],
        image: imageMap.web,
        audience: "companies",
        seoTitle: "Operação com cliente final | UNTI Digital",
        metaDescription: "Operação digital com cliente final, atendimento, canais, funis e rotinas comerciais."
      },
      {
        slug: "manutencao-gestao-projetos",
        title: "Manutenção e gestão de projetos entregues",
        description:
          "Mantemos projetos digitais em evolução com suporte, melhorias, organização de demandas e gestão técnica contínua.",
        shortDescription: "Manutenção, sustentação e gestão técnica para projetos digitais já entregues.",
        fullDescription:
          "Assumimos a manutenção e evolução de projetos digitais para preservar qualidade, corrigir pontos críticos, priorizar melhorias e manter a operação técnica funcionando com previsibilidade.",
        bullets: [
          "Correções, melhorias e suporte recorrente",
          "Gestão de demandas e prioridades",
          "Monitoramento de estabilidade e performance",
          "Documentação e histórico de evolução"
        ],
        deliverables: [
          "Plano de manutenção",
          "Backlog priorizado",
          "Correções e melhorias contínuas",
          "Relatórios de acompanhamento",
          "Gestão técnica do projeto"
        ],
        image: imageMap.governance,
        audience: "shared",
        seoTitle: "Manutenção e gestão de projetos digitais | UNTI Digital",
        metaDescription: "Manutenção, sustentação e gestão técnica de sites, sistemas, aplicações e projetos digitais entregues."
      },
      {
        slug: "servicos-sob-demanda",
        title: "Serviços sob demanda",
        description:
          "Squad técnico flexível para demandas pontuais, sprints, correções, melhorias, white label e reforço de capacidade.",
        shortDescription: "Equipe sob demanda para ampliar capacidade técnica com rapidez, sigilo e qualidade.",
        fullDescription:
          "Atuamos sob demanda para empresas e agências que precisam de reforço técnico, white label, apoio em sprints, correções críticas ou execução de projetos específicos com padrão profissional.",
        bullets: [
          "Atuação white label quando necessário",
          "Sprints pontuais ou recorrentes",
          "Correções, melhorias e novas entregas",
          "Capacidade técnica sem contratação fixa"
        ],
        deliverables: [
          "Diagnóstico da demanda",
          "Sprint técnica definida",
          "Execução e validação",
          "Documentação objetiva",
          "Plano de continuidade quando aplicável"
        ],
        image: imageMap.whiteLabel,
        audience: "agencies",
        seoTitle: "Serviços sob demanda | UNTI Digital",
        metaDescription: "Serviços técnicos sob demanda para empresas e agências: white label, sprints, melhorias e reforço de capacidade."
      }
    ]
  },
  en: {
    title: "Our services",
    subtitle:
      "Solutions for companies that need technology structure, digital marketing operations, client-facing workflows, and continuous project evolution.",
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
        slug: "desenvolvimento-web",
        title: "Web Development",
        description: "Websites, landing pages, and web structures focused on authority, performance, SEO, and qualified opportunities.",
        shortDescription: "Premium websites and pages for companies that need to sell, communicate, and operate better.",
        fullDescription: "We build complete web experiences for companies that need strong digital presence, fast pages, organized content, and clear conversion paths.",
        bullets: ["Commercial page architecture", "Performance, responsiveness, and technical SEO", "Design aligned with the company identity", "Structure prepared for continuous evolution"],
        deliverables: ["Institutional website or landing page", "Responsive components", "Optimized technical base", "Conversion path setup", "Operational documentation"],
        image: imageMap.web,
        audience: "companies",
        seoTitle: "Web Development | UNTI Digital",
        metaDescription: "Web development for companies focused on performance, SEO, authority, and conversion."
      },
      {
        slug: "implementacao-setor-tecnologia",
        title: "Technology department implementation",
        description: "We structure processes, tools, architecture, and technical routines for companies that need to organize their technology area.",
        shortDescription: "Technology department organization with processes, tools, and technical governance.",
        fullDescription: "We support companies in creating or professionalizing their technology department by connecting strategy, operation, processes, vendors, documentation, and technical management.",
        bullets: ["Technical maturity diagnosis", "Process and responsibility definition", "Stack, access, and documentation organization", "Governance and prioritization routine"],
        deliverables: ["Technology maturity map", "Department structuring plan", "Access and tool documentation", "Demand management process", "Initial technical roadmap"],
        image: imageMap.platform,
        audience: "companies",
        seoTitle: "Technology department implementation | UNTI Digital",
        metaDescription: "Technology department implementation for companies with processes, governance, documentation, and technical roadmap."
      },
      {
        slug: "implementacao-mkt-digital",
        title: "Digital marketing department implementation",
        description: "We build the digital marketing foundation for acquisition, positioning, content, campaigns, and performance tracking.",
        shortDescription: "Digital marketing structure for companies that need demand generation with method.",
        fullDescription: "We organize digital marketing operations with channels, metrics, campaigns, content, automations, and analysis routines to make demand generation more predictable.",
        bullets: ["Channel and audience mapping", "Campaign and funnel organization", "Content and analysis routine", "Sales and customer service integration"],
        deliverables: ["Digital marketing plan", "Campaign and acquisition structure", "Initial content calendar", "Tracking metrics", "Marketing-to-sales flow"],
        image: imageMap.whiteLabel,
        audience: "companies",
        seoTitle: "Digital marketing department implementation | UNTI Digital",
        metaDescription: "Digital marketing department implementation with campaigns, content, funnels, and metrics."
      },
      {
        slug: "desenvolvimento-aplicacoes-aplicativos",
        title: "Application and app development",
        description: "We build systems, portals, logged areas, web applications, and apps to digitize processes and products.",
        shortDescription: "Custom applications, systems, and apps for more complete digital operations.",
        fullDescription: "We develop custom applications for companies that need to turn processes, services, or products into robust, scalable, and well-organized digital experiences.",
        bullets: ["Modular and scalable architecture", "UX designed for real operational use", "Authenticated areas, dashboards, and permissions", "Integrations with APIs and internal systems"],
        deliverables: ["Functional application design", "Custom web application or app", "Technical documentation", "Deploy and monitoring", "Evolution roadmap"],
        image: imageMap.platform,
        audience: "companies",
        seoTitle: "Application and app development | UNTI Digital",
        metaDescription: "Development of systems, web applications, and custom apps for companies."
      },
      {
        slug: "infraestrutura-digital",
        title: "Digital infrastructure",
        description: "We organize hosting, domains, security, performance, access, monitoring, and the technical base of digital environments.",
        shortDescription: "Technical base, security, and infrastructure for more reliable digital environments.",
        fullDescription: "We structure the company's digital infrastructure to reduce risks, improve performance, organize access, and maintain safer and more stable environments.",
        bullets: ["Hosting, domain, and DNS review", "Access and permission organization", "Security and backup best practices", "Monitoring and continuity plan"],
        deliverables: ["Infrastructure diagnosis", "Access and risk map", "Security and backup plan", "Environment setup", "Technical maintenance routine"],
        image: imageMap.governance,
        audience: "shared",
        seoTitle: "Digital infrastructure | UNTI Digital",
        metaDescription: "Digital infrastructure for companies with hosting, domains, security, backup, and monitoring."
      },
      {
        slug: "integracao",
        title: "Integration",
        description: "We connect systems, CRMs, ERPs, forms, automations, and data to reduce rework and accelerate operations.",
        shortDescription: "Integrations across tools, APIs, CRM, ERP, and operational automations.",
        fullDescription: "We map flows, events, dependencies, and business rules to create reliable integrations between commercial tools, operational systems, and digital channels.",
        bullets: ["Flow and dependency mapping", "API, webhook, and automation integration", "Failure handling and logs", "Functional and technical documentation"],
        deliverables: ["Integration map", "Connectors and webhooks", "Synchronization routines", "Logs and alerts", "Process documentation"],
        image: imageMap.integration,
        audience: "shared",
        seoTitle: "System integration | UNTI Digital",
        metaDescription: "Systems, CRM, ERP, API, and automation integration for companies."
      },
      {
        slug: "operacao-cliente-final",
        title: "End-client operation",
        description: "We support the digital operation in contact with the end client by organizing channels, service flows, funnels, and commercial routines.",
        shortDescription: "Support for end-client digital operations, service channels, and commercial funnels.",
        fullDescription: "We structure the end-client operation to make service clearer, reduce lost opportunities, and connect marketing, sales, and support in a more efficient flow.",
        bullets: ["End-client journey mapping", "Channel and response organization", "CRM and WhatsApp integration", "Commercial follow-up routine"],
        deliverables: ["Digital service flow", "Channel organization", "Initial scripts and automations", "Contact and conversion metrics", "Operation improvement plan"],
        image: imageMap.web,
        audience: "companies",
        seoTitle: "End-client operation | UNTI Digital",
        metaDescription: "End-client digital operation, service channels, funnels, and commercial routines."
      },
      {
        slug: "manutencao-gestao-projetos",
        title: "Maintenance and management of delivered projects",
        description: "We keep digital projects evolving with support, improvements, demand organization, and continuous technical management.",
        shortDescription: "Maintenance, support, and technical management for delivered digital projects.",
        fullDescription: "We take over maintenance and evolution of digital projects to preserve quality, correct critical points, prioritize improvements, and keep the technical operation predictable.",
        bullets: ["Recurring fixes, improvements, and support", "Demand and priority management", "Stability and performance monitoring", "Documentation and evolution history"],
        deliverables: ["Maintenance plan", "Prioritized backlog", "Continuous fixes and improvements", "Follow-up reports", "Technical project management"],
        image: imageMap.governance,
        audience: "shared",
        seoTitle: "Maintenance and management of digital projects | UNTI Digital",
        metaDescription: "Maintenance, support, and technical management for websites, systems, applications, and delivered digital projects."
      },
      {
        slug: "servicos-sob-demanda",
        title: "On-demand services",
        description: "A flexible technical squad for specific demands, sprints, fixes, improvements, white-label execution, and capacity reinforcement.",
        shortDescription: "On-demand team to expand technical capacity with speed, confidentiality, and quality.",
        fullDescription: "We work on demand for companies and agencies that need technical reinforcement, white-label execution, sprint support, critical fixes, or specific projects with a professional standard.",
        bullets: ["White-label execution when needed", "One-off or recurring sprints", "Fixes, improvements, and new deliveries", "Technical capacity without fixed hiring"],
        deliverables: ["Demand diagnosis", "Defined technical sprint", "Execution and validation", "Objective documentation", "Continuity plan when applicable"],
        image: imageMap.whiteLabel,
        audience: "agencies",
        seoTitle: "On-demand services | UNTI Digital",
        metaDescription: "On-demand technical services for companies and agencies: white label, sprints, improvements, and capacity reinforcement."
      }
    ]
  },
  es: {
    title: "Nuestros servicios",
    subtitle:
      "Soluciones para empresas que necesitan estructurar tecnología, marketing digital, operación con cliente final y evolución continua de proyectos.",
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
        slug: "desenvolvimento-web",
        title: "Desarrollo Web",
        description: "Sitios, landing pages y estructuras web enfocadas en autoridad, rendimiento, SEO y oportunidades calificadas.",
        shortDescription: "Sitios y páginas premium para empresas que necesitan vender, comunicar y operar mejor.",
        fullDescription: "Creamos experiencias web completas para empresas que necesitan presencia digital fuerte, páginas rápidas, contenido organizado y rutas claras de conversión.",
        bullets: ["Arquitectura de páginas con foco comercial", "Rendimiento, responsividad y SEO técnico", "Diseño alineado con la identidad de la empresa", "Estructura lista para evolución continua"],
        deliverables: ["Sitio institucional o landing page", "Componentes responsivos", "Base técnica optimizada", "Configuración de rutas de conversión", "Documentación operativa"],
        image: imageMap.web,
        audience: "companies",
        seoTitle: "Desarrollo Web | UNTI Digital",
        metaDescription: "Desarrollo web para empresas con foco en rendimiento, SEO, autoridad y conversión."
      },
      {
        slug: "implementacao-setor-tecnologia",
        title: "Implementación del sector de tecnología de la empresa",
        description: "Estructuramos procesos, herramientas, arquitectura y rutina técnica para empresas que necesitan organizar su área de tecnología.",
        shortDescription: "Organización del sector de tecnología con procesos, herramientas y gobernanza técnica.",
        fullDescription: "Apoyamos a empresas en la creación o profesionalización del sector de tecnología, conectando estrategia, operación, procesos, proveedores, documentación y gestión técnica.",
        bullets: ["Diagnóstico de madurez técnica", "Definición de procesos y responsabilidades", "Organización de stack, accesos y documentación", "Rutina de gobernanza y priorización"],
        deliverables: ["Mapa de madurez tecnológica", "Plan de estructura del sector", "Documentación de accesos y herramientas", "Proceso de gestión de demandas", "Roadmap técnico inicial"],
        image: imageMap.platform,
        audience: "companies",
        seoTitle: "Implementación de sector de tecnología | UNTI Digital",
        metaDescription: "Implementación de sector de tecnología con procesos, gobernanza, documentación y roadmap técnico."
      },
      {
        slug: "implementacao-mkt-digital",
        title: "Implementación del sector de MKT Digital de la empresa",
        description: "Montamos la base de marketing digital para adquisición, posicionamiento, contenido, campañas y seguimiento de resultados.",
        shortDescription: "Estructura de marketing digital para empresas que necesitan generar demanda con método.",
        fullDescription: "Organizamos la operación de marketing digital con canales, métricas, campañas, contenido, automatizaciones y rutinas de análisis para volver la generación de demanda más previsible.",
        bullets: ["Mapeo de canales y público", "Organización de campañas y embudos", "Rutina de contenido y análisis", "Integración con ventas y atención"],
        deliverables: ["Plan de marketing digital", "Estructura de campaña y captación", "Calendario inicial de contenido", "Métricas de seguimiento", "Flujo entre marketing y ventas"],
        image: imageMap.whiteLabel,
        audience: "companies",
        seoTitle: "Implementación de MKT Digital | UNTI Digital",
        metaDescription: "Implementación de sector de marketing digital con campañas, contenido, embudos y métricas."
      },
      {
        slug: "desenvolvimento-aplicacoes-aplicativos",
        title: "Desarrollo de aplicaciones y apps",
        description: "Creamos sistemas, portales, áreas privadas, aplicaciones web y apps para digitalizar procesos y productos.",
        shortDescription: "Aplicaciones, sistemas y apps a medida para operaciones digitales más completas.",
        fullDescription: "Desarrollamos aplicaciones a medida para empresas que necesitan transformar procesos, servicios o productos en experiencias digitales robustas, escalables y bien organizadas.",
        bullets: ["Arquitectura modular y escalable", "UX enfocada en uso operativo real", "Áreas autenticadas, dashboards y permisos", "Integraciones con APIs y sistemas internos"],
        deliverables: ["Diseño funcional de la aplicación", "Aplicación web o app a medida", "Documentación técnica", "Deploy y monitoreo", "Roadmap de evolución"],
        image: imageMap.platform,
        audience: "companies",
        seoTitle: "Desarrollo de aplicaciones y apps | UNTI Digital",
        metaDescription: "Desarrollo de sistemas, aplicaciones web y apps a medida para empresas."
      },
      {
        slug: "infraestrutura-digital",
        title: "Infraestructura digital",
        description: "Organizamos hosting, dominio, seguridad, rendimiento, accesos, monitoreo y base técnica de ambientes digitales.",
        shortDescription: "Base técnica, seguridad e infraestructura para ambientes digitales más confiables.",
        fullDescription: "Estructuramos la infraestructura digital de la empresa para reducir riesgos, mejorar rendimiento, organizar accesos y mantener ambientes más seguros y estables.",
        bullets: ["Revisión de hosting, dominio y DNS", "Organización de accesos y permisos", "Buenas prácticas de seguridad y backup", "Monitoreo y plan de continuidad"],
        deliverables: ["Diagnóstico de infraestructura", "Mapa de accesos y riesgos", "Plan de seguridad y backup", "Configuración de ambientes", "Rutina de mantenimiento técnico"],
        image: imageMap.governance,
        audience: "shared",
        seoTitle: "Infraestructura digital | UNTI Digital",
        metaDescription: "Infraestructura digital para empresas con hosting, dominio, seguridad, backup y monitoreo."
      },
      {
        slug: "integracao",
        title: "Integración",
        description: "Conectamos sistemas, CRMs, ERPs, formularios, automatizaciones y datos para reducir retrabajo y acelerar la operación.",
        shortDescription: "Integraciones entre herramientas, APIs, CRM, ERP y automatizaciones operativas.",
        fullDescription: "Mapeamos flujos, eventos, dependencias y reglas de negocio para crear integraciones confiables entre herramientas comerciales, sistemas operativos y canales digitales.",
        bullets: ["Mapeo de flujos y dependencias", "Integración vía APIs, webhooks y automatizaciones", "Tratamiento de fallos y logs", "Documentación funcional y técnica"],
        deliverables: ["Mapa de integraciones", "Conectores y webhooks", "Rutinas de sincronización", "Logs y alertas", "Documentación del proceso"],
        image: imageMap.integration,
        audience: "shared",
        seoTitle: "Integración de sistemas | UNTI Digital",
        metaDescription: "Integración de sistemas, CRM, ERP, APIs y automatizaciones para empresas."
      },
      {
        slug: "operacao-cliente-final",
        title: "Operación con cliente final",
        description: "Apoyamos la operación digital en el contacto con el cliente final, organizando canales, atención, embudos y rutinas comerciales.",
        shortDescription: "Apoyo en operación digital con cliente final, atención, canales y embudos comerciales.",
        fullDescription: "Estructuramos la operación con cliente final para volver la atención más clara, reducir pérdida de oportunidades y conectar marketing, ventas y soporte en un flujo más eficiente.",
        bullets: ["Mapeo de jornada del cliente final", "Organización de canales y respuestas", "Integración con CRM y WhatsApp", "Rutina de seguimiento comercial"],
        deliverables: ["Flujo de atención digital", "Organización de canales", "Guiones y automatizaciones iniciales", "Métricas de contacto y conversión", "Plan de mejora de la operación"],
        image: imageMap.web,
        audience: "companies",
        seoTitle: "Operación con cliente final | UNTI Digital",
        metaDescription: "Operación digital con cliente final, atención, canales, embudos y rutinas comerciales."
      },
      {
        slug: "manutencao-gestao-projetos",
        title: "Mantenimiento y gestión de proyectos entregados",
        description: "Mantenemos proyectos digitales en evolución con soporte, mejoras, organización de demandas y gestión técnica continua.",
        shortDescription: "Mantenimiento, soporte y gestión técnica para proyectos digitales ya entregados.",
        fullDescription: "Asumimos el mantenimiento y evolución de proyectos digitales para preservar calidad, corregir puntos críticos, priorizar mejoras y mantener la operación técnica funcionando con previsibilidad.",
        bullets: ["Correcciones, mejoras y soporte recurrente", "Gestión de demandas y prioridades", "Monitoreo de estabilidad y rendimiento", "Documentación e histórico de evolución"],
        deliverables: ["Plan de mantenimiento", "Backlog priorizado", "Correcciones y mejoras continuas", "Informes de seguimiento", "Gestión técnica del proyecto"],
        image: imageMap.governance,
        audience: "shared",
        seoTitle: "Mantenimiento y gestión de proyectos digitales | UNTI Digital",
        metaDescription: "Mantenimiento, soporte y gestión técnica de sitios, sistemas, aplicaciones y proyectos digitales entregados."
      },
      {
        slug: "servicos-sob-demanda",
        title: "Servicios bajo demanda",
        description: "Squad técnico flexible para demandas puntuales, sprints, correcciones, mejoras, white label y refuerzo de capacidad.",
        shortDescription: "Equipo bajo demanda para ampliar capacidad técnica con rapidez, confidencialidad y calidad.",
        fullDescription: "Actuamos bajo demanda para empresas y agencias que necesitan refuerzo técnico, white label, apoyo en sprints, correcciones críticas o ejecución de proyectos específicos con estándar profesional.",
        bullets: ["Actuación white label cuando sea necesario", "Sprints puntuales o recurrentes", "Correcciones, mejoras y nuevas entregas", "Capacidad técnica sin contratación fija"],
        deliverables: ["Diagnóstico de la demanda", "Sprint técnica definida", "Ejecución y validación", "Documentación objetiva", "Plan de continuidad cuando aplique"],
        image: imageMap.whiteLabel,
        audience: "agencies",
        seoTitle: "Servicios bajo demanda | UNTI Digital",
        metaDescription: "Servicios técnicos bajo demanda para empresas y agencias: white label, sprints, mejoras y refuerzo de capacidad."
      }
    ]
  }
};

const serviceAliases: Record<string, string> = {
  "sites-institucionais": "desenvolvimento-web",
  "plataformas-web": "desenvolvimento-aplicacoes-aplicativos",
  "integracoes-crm-erp": "integracao",
  "governanca-seguranca": "infraestrutura-digital",
  "white-label-agencias": "servicos-sob-demanda"
};

export function getServicesContent(locale: AppLocale) {
  return servicesContent[locale];
}

export function getServices(locale: AppLocale) {
  return servicesContent[locale].services;
}

export function getServiceBySlug(locale: AppLocale, slug: string) {
  const resolvedSlug = serviceAliases[slug] ?? slug;
  return getServices(locale).find((service) => service.slug === resolvedSlug);
}
