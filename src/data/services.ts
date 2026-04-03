export interface Service {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  fullDescription: string;
  bullets: string[];
  deliverables: string[];
  image: string;
}

export const services: Service[] = [
  {
    slug: "sites-institucionais",
    title: "Sites Institucionais de Alta Performance",
    description: "Sites institucionais premium com foco em conversao, integracao e performance real para empresas B2B.",
    shortDescription: "Sites institucionais premium com foco em conversao, integracao e performance real.",
    fullDescription: "Construimos hubs corporativos desenhados para empresas que buscam autoridade imediata. Unimos design minimalista premium a uma infraestrutura técnica robusta, com foco em Core Web Vitals, SEO técnico e integração com fluxos internos.",
    bullets: [
      "Arquitetura focada em CRO e geracao de oportunidades",
      "Core Web Vitals e experiencia consistente em todos os dispositivos",
      "Integracao com CRM, automacoes e fluxos internos",
      "Narrativa corporativa clara para reforco de autoridade"
    ],
    deliverables: [
      "Hub corporativo responsivo",
      "Estrutura técnica otimizada para SEO",
      "Integrações com ferramentas do negocio",
      "Documentacao e orientacao de operacao",
      "Plano de evolucao pos-lancamento"
    ],
    image: "/images/unti-digital-homepage-image-nossas-solucoes-sites-institucionais.png"
  },
  {
    slug: "plataformas-web",
    title: "Plataformas Web Sob Medida",
    description: "Engenharia de software para operações complexas, produtos SaaS e ecossistemas digitais sob medida.",
    shortDescription: "Engenharia de software para operações complexas e plataformas sob medida.",
    fullDescription: "Desenvolvemos soluções de software web exclusivas para operações que fogem do convencional. Criamos ecossistemas SaaS, dashboards e ferramentas de gestão com arquitetura modular preparada para crescer sem sacrificar estabilidade.",
    bullets: [
      "Arquitetura modular preparada para expansao",
      "Integrações avancadas com sistemas externos",
      "Camadas técnicas pensadas para escala e governança",
      "Observabilidade e evolucao continua do produto"
    ],
    deliverables: [
      "Plataforma web customizada",
      "Documentação técnica e de APIs",
      "Estratégia de deploy e infraestrutura",
      "Monitoramento e trilha de evolucao",
      "Base pronta para novas integrações"
    ],
    image: "/images/unti-digital-homepage-image-nossas-solucoes-plataformas-web.png"
  },
  {
    slug: "integrações-crm-erp",
    title: "Integrações com CRM e ERP",
    description: "Automacao inteligente entre marketing, vendas e operacao com dados sincronizados em tempo real.",
    shortDescription: "Integrações robustas entre CRM, ERP, marketing e operacao.",
    fullDescription: "Eliminamos silos de dados conectando CRM, ERP, marketing e operacao. Desenvolvemos integrações robustas que automatizam processos, reduzem erros manuais e transformam sistemas isolados em um fluxo operacional unificado.",
    bullets: [
      "Sincronizacao entre CRM, ERP e ferramentas de marketing",
      "Automacao de workflows e etapas operacionais",
      "Tratamento de erro e observabilidade de integrações",
      "Dados confiaveis para times comercial e operacional"
    ],
    deliverables: [
      "APIs, webhooks e pontos de sincronizacao",
      "Documentacao completa dos fluxos",
      "Monitoramento das integrações criticas",
      "Plano de contingencia operacional",
      "Suporte técnico para evolução dos fluxos"
    ],
    image: "/images/unti-digital-homepage-image-nossas-solucoes-integracoes-e-automacoes.png"
  },
  {
    slug: "governanca-seguranca",
    title: "Governança e Segurança",
    description: "Segurança nível enterprise com controle de acessos, monitoramento contínuo e compliance digital.",
    shortDescription: "Arquiteturas Zero-Trust, monitoramento continuo e conformidade.",
    fullDescription: "Implementamos arquiteturas de segurança nível enterprise para proteger operações digitais críticas. Combinamos governança, controle granular de acessos, monitoramento ativo e adequação a LGPD para reduzir riscos reais.",
    bullets: [
      "Arquitetura Zero-Trust e menor privilegio",
      "Controle granular de acessos e identidades",
      "Monitoramento continuo de ameacas e anomalias",
      "Conformidade com LGPD e boas praticas corporativas"
    ],
    deliverables: [
      "Diagnostico de riscos e vulnerabilidades",
      "Roadmap de segurança e governança",
      "Implantação de controles técnicos",
      "Documentacao de politicas e acessos",
      "Recomendacoes de evolucao continua"
    ],
    image: "/images/unti-digital-homepage-image-agilidade-tecnica-com-governanca.png"
  },
  {
    slug: "white-label-agencias",
    title: "White Label Técnico para Agências",
    description: "Engenharia sob sua marca com confidencialidade, escala e qualidade técnica para projetos premium.",
    shortDescription: "Engenharia senior sob sua marca para ampliar a entrega da agencia.",
    fullDescription: "Atuamos como braço tecnológico invisível da sua agência, com confidencialidade, capacidade sob demanda e arquitetura robusta. Você preserva a relação com o cliente final enquanto nós garantimos a excelência técnica por trás da entrega.",
    bullets: [
      "Confidencialidade e NDA em toda a operacao",
      "Integracao ao processo, time e padrao da agencia",
      "Capacidade sob demanda para projetos mais complexos",
      "Execução técnica com padrão enterprise",
    ],
    deliverables: [
      "Squad técnico sob demanda",
      "Entrega white label com documentacao",
      "Fluxo de alinhamento e checkpoints",
      "Sustentação técnica para novos projetos",
      "Escala sem ampliar estrutura fixa"
    ],
    image: "/images/unti-digital-homepage-image-nossas-solucoes-white-label-tecnico.png"
  }
];
