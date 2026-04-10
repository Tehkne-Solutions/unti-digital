import type { AppLocale } from "@/lib/i18n";

export type BlogContentBlock =
  | { type: "heading"; level: 2 | 3; content: string }
  | { type: "paragraph"; content: string }
  | { type: "quote"; content: string; caption?: string }
  | { type: "checklist"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  author: string;
  image: string;
  tags: string[];
  keyInsight: string;
  seoTitle: string;
  metaDescription: string;
  body: BlogContentBlock[];
}

const blogDictionary: Record<AppLocale, BlogPost[]> = {
  pt: [
    {
      slug: "estrategia-digital-b2b",
      title: "Estratégia digital para empresas B2B",
      excerpt: "Como transformar presença digital em confiança, contexto e oportunidade comercial.",
      description: "Posicionamento institucional, conteúdo de autoridade e conversão qualificada para negócios B2B.",
      category: "Estratégia",
      publishedAt: "2026-03-18",
      readingTime: "6 min de leitura",
      author: "Time UNTI Digital",
      image: "/images/unti-digital-homepage-image-blog-estrategia-digital-para-empresas-b2b.png",
      tags: ["B2B", "Autoridade", "Marketing"],
      keyInsight: "No B2B, confiança vem antes do formulário.",
      seoTitle: "Estratégia digital para empresas B2B | UNTI Digital",
      metaDescription: "Veja como combinar autoridade, conteúdo e conversão em uma estratégia digital B2B.",
      body: [
        { type: "heading", level: 2, content: "Autoridade antes da reunião" },
        {
          type: "paragraph",
          content:
            "Sites, cases e conteúdo técnico ajudam a moldar a percepção de valor muito antes da primeira conversa comercial."
        },
        {
          type: "checklist",
          items: [
            "Oferta explicada com clareza",
            "Sinais reais de autoridade",
            "Rota simples para o próximo passo"
          ]
        },
        {
          type: "quote",
          content: "Estratégia digital B2B não é volume. É confiança suficiente para a próxima conversa acontecer.",
          caption: "UNTI Digital"
        }
      ]
    },
    {
      slug: "integracoes-que-escalam-operacoes",
      title: "Integrações que escalam operações",
      excerpt: "Conectar CRM, ERP e fluxos internos reduz atrito e devolve previsibilidade à operação.",
      description: "Um resumo prático sobre integração, automação e organização de dados críticos.",
      category: "Integrações",
      publishedAt: "2026-03-14",
      readingTime: "5 min de leitura",
      author: "Time UNTI Digital",
      image: "/images/unti-digital-homepage-image-blog-integracoes-que-escalam-operacoes.png",
      tags: ["CRM", "ERP", "APIs"],
      keyInsight: "Sem integração, crescimento vira retrabalho.",
      seoTitle: "Integrações que escalam operações | UNTI Digital",
      metaDescription: "Entenda como integrações confiáveis reduzem retrabalho e aceleram a operação.",
      body: [
        { type: "heading", level: 2, content: "O custo do retrabalho manual" },
        {
          type: "paragraph",
          content:
            "Quando cada time depende de dados espalhados, a operação perde velocidade, consistência e capacidade de resposta."
        },
        {
          type: "checklist",
          items: [
            "Captura de leads e CRM",
            "ERP e disponibilidade operacional",
            "Monitoramento de falhas e alertas"
          ]
        },
        {
          type: "quote",
          content: "Integração madura é previsibilidade para quem depende do fluxo todos os dias.",
          caption: "UNTI Digital"
        }
      ]
    },
    {
      slug: "governanca-e-seguranca-em-plataformas-web",
      title: "Governança e segurança em plataformas web",
      excerpt: "Escalar plataforma sem controle de acesso e visibilidade aumenta risco técnico e comercial.",
      description: "Fundamentos para tornar plataformas e integrações mais seguras, auditáveis e sustentáveis.",
      category: "Segurança",
      publishedAt: "2026-03-11",
      readingTime: "5 min de leitura",
      author: "Time UNTI Digital",
      image: "/images/unti-digital-homepage-image-blog-governanca-e-seguranca-em-plataformas-web.png",
      tags: ["Segurança", "Governança", "LGPD"],
      keyInsight: "Segurança precisa nascer junto com a arquitetura.",
      seoTitle: "Governança e segurança em plataformas web | UNTI Digital",
      metaDescription: "Aprenda os princípios de governança e segurança para plataformas web e integrações críticas.",
      body: [
        { type: "heading", level: 2, content: "Segurança começa no desenho" },
        {
          type: "paragraph",
          content:
            "Permissões, ambientes, logs e proteção de dados precisam ser definidos cedo para evitar dívida técnica e exposição operacional."
        },
        {
          type: "checklist",
          items: [
            "Controle de acesso por contexto",
            "Logs úteis para auditoria",
            "Monitoramento de rotinas sensíveis"
          ]
        },
        {
          type: "quote",
          content: "Plataformas seguras continuam previsíveis quando volume e complexidade aumentam.",
          caption: "UNTI Digital"
        }
      ]
    },
    {
      slug: "ux-para-ambientes-enterprise",
      title: "UX para ambientes enterprise",
      excerpt: "Boa UX em operações complexas reduz esforço, erro e tempo de execução.",
      description: "Princípios para desenhar plataformas usadas por times comerciais, operacionais e executivos.",
      category: "UX",
      publishedAt: "2026-03-07",
      readingTime: "4 min de leitura",
      author: "Time UNTI Digital",
      image: "/images/unti-digital-homepage-image-blog-ux-para-ambientes-enterprise.png",
      tags: ["UX", "Enterprise", "Produto"],
      keyInsight: "Clareza é produtividade.",
      seoTitle: "UX para ambientes enterprise | UNTI Digital",
      metaDescription: "Veja como UX para plataformas enterprise reduz atrito operacional e melhora a execução.",
      body: [
        { type: "heading", level: 2, content: "Clareza é produtividade" },
        {
          type: "paragraph",
          content:
            "Interfaces enterprise precisam ajudar o time a decidir rápido, com contexto suficiente e baixo risco de erro."
        },
        {
          type: "checklist",
          items: [
            "Hierarquia visual forte",
            "Estados claros para erro e sucesso",
            "Fluxos curtos para tarefas recorrentes"
          ]
        },
        {
          type: "quote",
          content: "UX operacional não precisa impressionar. Precisa funcionar bem todos os dias.",
          caption: "UNTI Digital"
        }
      ]
    }
  ],
  en: [
    {
      slug: "estrategia-digital-b2b",
      title: "Digital strategy for B2B companies",
      excerpt: "How to turn digital presence into trust, context, and qualified commercial momentum.",
      description: "Institutional positioning, authority content, and qualified conversion for B2B businesses.",
      category: "Strategy",
      publishedAt: "2026-03-18",
      readingTime: "6 min read",
      author: "UNTI Digital Team",
      image: "/images/unti-digital-homepage-image-blog-estrategia-digital-para-empresas-b2b.png",
      tags: ["B2B", "Authority", "Marketing"],
      keyInsight: "In B2B, trust comes before the form fill.",
      seoTitle: "Digital strategy for B2B companies | UNTI Digital",
      metaDescription: "See how authority, content, and conversion work together in a B2B digital strategy.",
      body: [
        { type: "heading", level: 2, content: "Authority before the meeting" },
        {
          type: "paragraph",
          content:
            "Websites, case studies, and technical content shape perceived value long before the first commercial conversation."
        },
        {
          type: "checklist",
          items: [
            "An offer explained with clarity",
            "Real proof of authority",
            "A simple route to the next step"
          ]
        },
        {
          type: "quote",
          content: "B2B digital strategy is not about volume. It is about enough trust for the next conversation to happen.",
          caption: "UNTI Digital"
        }
      ]
    },
    {
      slug: "integracoes-que-escalam-operacoes",
      title: "Integrations that scale operations",
      excerpt: "Connecting CRM, ERP, and internal flows reduces friction and brings predictability back to operations.",
      description: "A practical summary about integration, automation, and organization of critical data.",
      category: "Integrations",
      publishedAt: "2026-03-14",
      readingTime: "5 min read",
      author: "UNTI Digital Team",
      image: "/images/unti-digital-homepage-image-blog-integracoes-que-escalam-operacoes.png",
      tags: ["CRM", "ERP", "APIs"],
      keyInsight: "Without integration, growth becomes rework.",
      seoTitle: "Integrations that scale operations | UNTI Digital",
      metaDescription: "Understand how reliable integrations reduce rework and accelerate digital operations.",
      body: [
        { type: "heading", level: 2, content: "The cost of manual rework" },
        {
          type: "paragraph",
          content:
            "When every team depends on scattered data, the operation loses speed, consistency, and response capacity."
        },
        {
          type: "checklist",
          items: [
            "Lead capture and CRM",
            "ERP and operational availability",
            "Failure monitoring and alerts"
          ]
        },
        {
          type: "quote",
          content: "Mature integration means predictability for the people who rely on the flow every day.",
          caption: "UNTI Digital"
        }
      ]
    },
    {
      slug: "governanca-e-seguranca-em-plataformas-web",
      title: "Governance and security in web platforms",
      excerpt: "Scaling a platform without access control and visibility increases both technical and commercial risk.",
      description: "Core principles to make platforms and integrations safer, auditable, and sustainable.",
      category: "Security",
      publishedAt: "2026-03-11",
      readingTime: "5 min read",
      author: "UNTI Digital Team",
      image: "/images/unti-digital-homepage-image-blog-governanca-e-seguranca-em-plataformas-web.png",
      tags: ["Security", "Governance", "Privacy"],
      keyInsight: "Security has to start with the architecture.",
      seoTitle: "Governance and security in web platforms | UNTI Digital",
      metaDescription: "Learn the basics of governance and security for web platforms and critical integrations.",
      body: [
        { type: "heading", level: 2, content: "Security starts in the design" },
        {
          type: "paragraph",
          content:
            "Permissions, environments, logs, and data protection need to be defined early to avoid technical debt and operational exposure."
        },
        {
          type: "checklist",
          items: [
            "Context-based access control",
            "Useful logs for audits",
            "Monitoring for sensitive routines"
          ]
        },
        {
          type: "quote",
          content: "Secure platforms stay predictable as volume and complexity increase.",
          caption: "UNTI Digital"
        }
      ]
    },
    {
      slug: "ux-para-ambientes-enterprise",
      title: "UX for enterprise environments",
      excerpt: "Good UX in complex operations reduces effort, mistakes, and execution time.",
      description: "Principles for designing platforms used by commercial, operational, and executive teams.",
      category: "UX",
      publishedAt: "2026-03-07",
      readingTime: "4 min read",
      author: "UNTI Digital Team",
      image: "/images/unti-digital-homepage-image-blog-ux-para-ambientes-enterprise.png",
      tags: ["UX", "Enterprise", "Product"],
      keyInsight: "Clarity is productivity.",
      seoTitle: "UX for enterprise environments | UNTI Digital",
      metaDescription: "See how UX for enterprise platforms reduces operational friction and improves execution.",
      body: [
        { type: "heading", level: 2, content: "Clarity is productivity" },
        {
          type: "paragraph",
          content:
            "Enterprise interfaces should help teams make fast decisions with enough context and lower risk of error."
        },
        {
          type: "checklist",
          items: [
            "Strong visual hierarchy",
            "Clear states for error and success",
            "Short flows for recurring tasks"
          ]
        },
        {
          type: "quote",
          content: "Operational UX does not need to impress. It needs to work well every day.",
          caption: "UNTI Digital"
        }
      ]
    }
  ],
  es: [
    {
      slug: "estrategia-digital-b2b",
      title: "Estrategia digital para empresas B2B",
      excerpt: "Cómo convertir presencia digital en confianza, contexto y tracción comercial calificada.",
      description: "Posicionamiento institucional, contenido de autoridad y conversión calificada para negocios B2B.",
      category: "Estrategia",
      publishedAt: "2026-03-18",
      readingTime: "6 min de lectura",
      author: "Equipo UNTI Digital",
      image: "/images/unti-digital-homepage-image-blog-estrategia-digital-para-empresas-b2b.png",
      tags: ["B2B", "Autoridad", "Marketing"],
      keyInsight: "En B2B, la confianza llega antes del formulario.",
      seoTitle: "Estrategia digital para empresas B2B | UNTI Digital",
      metaDescription: "Descubre cómo autoridad, contenido y conversión trabajan juntos en una estrategia digital B2B.",
      body: [
        { type: "heading", level: 2, content: "Autoridad antes de la reunión" },
        {
          type: "paragraph",
          content:
            "Sitios, casos y contenido técnico ayudan a formar la percepción de valor mucho antes de la primera conversación comercial."
        },
        {
          type: "checklist",
          items: [
            "Oferta explicada con claridad",
            "Pruebas reales de autoridad",
            "Ruta simple hacia el siguiente paso"
          ]
        },
        {
          type: "quote",
          content: "La estrategia digital B2B no trata de volumen. Trata de generar la confianza suficiente para la próxima conversación.",
          caption: "UNTI Digital"
        }
      ]
    },
    {
      slug: "integracoes-que-escalam-operacoes",
      title: "Integraciones que escalan operaciones",
      excerpt: "Conectar CRM, ERP y flujos internos reduce fricción y devuelve previsibilidad a la operación.",
      description: "Un resumen práctico sobre integración, automatización y organización de datos críticos.",
      category: "Integraciones",
      publishedAt: "2026-03-14",
      readingTime: "5 min de lectura",
      author: "Equipo UNTI Digital",
      image: "/images/unti-digital-homepage-image-blog-integracoes-que-escalam-operacoes.png",
      tags: ["CRM", "ERP", "APIs"],
      keyInsight: "Sin integración, crecer se convierte en retrabajo.",
      seoTitle: "Integraciones que escalan operaciones | UNTI Digital",
      metaDescription: "Entiende cómo integraciones confiables reducen retrabajo y aceleran la operación digital.",
      body: [
        { type: "heading", level: 2, content: "El costo del retrabajo manual" },
        {
          type: "paragraph",
          content:
            "Cuando cada equipo depende de datos dispersos, la operación pierde velocidad, consistencia y capacidad de respuesta."
        },
        {
          type: "checklist",
          items: [
            "Captación de leads y CRM",
            "ERP y disponibilidad operativa",
            "Monitoreo de fallos y alertas"
          ]
        },
        {
          type: "quote",
          content: "Una integración madura significa previsibilidad para quien depende del flujo todos los días.",
          caption: "UNTI Digital"
        }
      ]
    },
    {
      slug: "governanca-e-seguranca-em-plataformas-web",
      title: "Gobernanza y seguridad en plataformas web",
      excerpt: "Escalar una plataforma sin control de acceso ni visibilidad aumenta el riesgo técnico y comercial.",
      description: "Principios para volver plataformas e integraciones más seguras, auditables y sostenibles.",
      category: "Seguridad",
      publishedAt: "2026-03-11",
      readingTime: "5 min de lectura",
      author: "Equipo UNTI Digital",
      image: "/images/unti-digital-homepage-image-blog-governanca-e-seguranca-em-plataformas-web.png",
      tags: ["Seguridad", "Gobernanza", "Privacidad"],
      keyInsight: "La seguridad debe comenzar con la arquitectura.",
      seoTitle: "Gobernanza y seguridad en plataformas web | UNTI Digital",
      metaDescription: "Aprende las bases de gobernanza y seguridad para plataformas web e integraciones críticas.",
      body: [
        { type: "heading", level: 2, content: "La seguridad empieza en el diseño" },
        {
          type: "paragraph",
          content:
            "Permisos, ambientes, logs y protección de datos deben definirse pronto para evitar deuda técnica y exposición operativa."
        },
        {
          type: "checklist",
          items: [
            "Control de acceso por contexto",
            "Logs útiles para auditorías",
            "Monitoreo de rutinas sensibles"
          ]
        },
        {
          type: "quote",
          content: "Las plataformas seguras siguen siendo predecibles cuando aumentan el volumen y la complejidad.",
          caption: "UNTI Digital"
        }
      ]
    },
    {
      slug: "ux-para-ambientes-enterprise",
      title: "UX para entornos enterprise",
      excerpt: "Una buena UX en operaciones complejas reduce esfuerzo, errores y tiempo de ejecución.",
      description: "Principios para diseñar plataformas usadas por equipos comerciales, operativos y ejecutivos.",
      category: "UX",
      publishedAt: "2026-03-07",
      readingTime: "4 min de lectura",
      author: "Equipo UNTI Digital",
      image: "/images/unti-digital-homepage-image-blog-ux-para-ambientes-enterprise.png",
      tags: ["UX", "Enterprise", "Producto"],
      keyInsight: "La claridad es productividad.",
      seoTitle: "UX para entornos enterprise | UNTI Digital",
      metaDescription: "Mira cómo la UX para plataformas enterprise reduce fricción operativa y mejora la ejecución.",
      body: [
        { type: "heading", level: 2, content: "La claridad es productividad" },
        {
          type: "paragraph",
          content:
            "Las interfaces enterprise deben ayudar al equipo a decidir rápido, con contexto suficiente y menor riesgo de error."
        },
        {
          type: "checklist",
          items: [
            "Jerarquía visual fuerte",
            "Estados claros para error y éxito",
            "Flujos cortos para tareas recurrentes"
          ]
        },
        {
          type: "quote",
          content: "La UX operativa no necesita impresionar. Necesita funcionar bien todos los días.",
          caption: "UNTI Digital"
        }
      ]
    }
  ]
};

export const blogPosts = blogDictionary.pt;

export function getBlogPosts(locale: AppLocale = "pt") {
  return blogDictionary[locale];
}

export function getBlogPostBySlug(locale: AppLocale = "pt", slug: string) {
  return getBlogPosts(locale).find((post) => post.slug === slug);
}

export function getAllBlogSlugs() {
  return blogDictionary.pt.map((post) => post.slug);
}
