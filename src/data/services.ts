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
    title: "Hubs Corporativos de Alta Performance",
    description: "Sites institucionais premium com foco em conversao, integracao e performance real para empresas B2B.",
    shortDescription: "Sites institucionais premium com foco em conversao, integracao e performance real.",
    fullDescription: "Construimos hubs corporativos desenhados para empresas que buscam autoridade imediata. Unimos design minimalista premium a uma infraestrutura tecnica robusta, com foco em Core Web Vitals, SEO tecnico e integracao com fluxos internos.",
    bullets: [
      "Arquitetura focada em CRO e geracao de oportunidades",
      "Core Web Vitals e experiencia consistente em todos os dispositivos",
      "Integracao com CRM, automacoes e fluxos internos",
      "Narrativa corporativa clara para reforco de autoridade"
    ],
    deliverables: [
      "Hub corporativo responsivo",
      "Estrutura tecnica otimizada para SEO",
      "Integracoes com ferramentas do negocio",
      "Documentacao e orientacao de operacao",
      "Plano de evolucao pos-lancamento"
    ],
    image: "/images/unti-digital-homepage-image-nossas-solucoes-sites-institucionais.png"
  },
  {
    slug: "plataformas-web",
    title: "Plataformas Web Sob Medida",
    description: "Engenharia de software para operacoes complexas, produtos SaaS e ecossistemas digitais sob medida.",
    shortDescription: "Engenharia de software para operacoes complexas e plataformas sob medida.",
    fullDescription: "Desenvolvemos solucoes de software web exclusivas para operacoes que fogem do convencional. Criamos ecossistemas SaaS, dashboards e ferramentas de gestao com arquitetura modular preparada para crescer sem sacrificar estabilidade.",
    bullets: [
      "Arquitetura modular preparada para expansao",
      "Integracoes avancadas com sistemas externos",
      "Camadas tecnicas pensadas para escala e governanca",
      "Observabilidade e evolucao continua do produto"
    ],
    deliverables: [
      "Plataforma web customizada",
      "Documentacao tecnica e de APIs",
      "Estrategia de deploy e infraestrutura",
      "Monitoramento e trilha de evolucao",
      "Base pronta para novas integracoes"
    ],
    image: "/images/unti-digital-homepage-image-nossas-solucoes-plataformas-web.png"
  },
  {
    slug: "integracoes-crm-erp",
    title: "Integracoes com CRM e ERP",
    description: "Automacao inteligente entre marketing, vendas e operacao com dados sincronizados em tempo real.",
    shortDescription: "Integracoes robustas entre CRM, ERP, marketing e operacao.",
    fullDescription: "Eliminamos silos de dados conectando CRM, ERP, marketing e operacao. Desenvolvemos integracoes robustas que automatizam processos, reduzem erros manuais e transformam sistemas isolados em um fluxo operacional unificado.",
    bullets: [
      "Sincronizacao entre CRM, ERP e ferramentas de marketing",
      "Automacao de workflows e etapas operacionais",
      "Tratamento de erro e observabilidade de integracoes",
      "Dados confiaveis para times comercial e operacional"
    ],
    deliverables: [
      "APIs, webhooks e pontos de sincronizacao",
      "Documentacao completa dos fluxos",
      "Monitoramento das integracoes criticas",
      "Plano de contingencia operacional",
      "Suporte tecnico para evolucao dos fluxos"
    ],
    image: "/images/unti-digital-homepage-image-nossas-solucoes-integracoes-e-automacoes.png"
  },
  {
    slug: "governanca-seguranca",
    title: "Governanca e Seguranca",
    description: "Seguranca nivel enterprise com controle de acessos, monitoramento continuo e compliance digital.",
    shortDescription: "Arquiteturas Zero-Trust, monitoramento continuo e conformidade.",
    fullDescription: "Implementamos arquiteturas de seguranca nivel enterprise para proteger operacoes digitais criticas. Combinamos governanca, controle granular de acessos, monitoramento ativo e adequacao a LGPD para reduzir riscos reais.",
    bullets: [
      "Arquitetura Zero-Trust e menor privilegio",
      "Controle granular de acessos e identidades",
      "Monitoramento continuo de ameacas e anomalias",
      "Conformidade com LGPD e boas praticas corporativas"
    ],
    deliverables: [
      "Diagnostico de riscos e vulnerabilidades",
      "Roadmap de seguranca e governanca",
      "Implantacao de controles tecnicos",
      "Documentacao de politicas e acessos",
      "Recomendacoes de evolucao continua"
    ],
    image: "/images/unti-digital-homepage-image-agilidade-tecnica-com-governanca.png"
  },
  {
    slug: "white-label-agencias",
    title: "White Label Tecnico para Agencias",
    description: "Engenharia sob sua marca com confidencialidade, escala e qualidade tecnica para projetos premium.",
    shortDescription: "Engenharia senior sob sua marca para ampliar a entrega da agencia.",
    fullDescription: "Atuamos como braco tecnologico invisivel da sua agencia, com confidencialidade, capacidade sob demanda e arquitetura robusta. Voce preserva a relacao com o cliente final enquanto nos garantimos a excelencia tecnica por tras da entrega.",
    bullets: [
      "Confidencialidade e NDA em toda a operacao",
      "Integracao ao processo, time e padrao da agencia",
      "Capacidade sob demanda para projetos mais complexos",
      "Execucao tecnica com padrao enterprise"
    ],
    deliverables: [
      "Squad tecnico sob demanda",
      "Entrega white label com documentacao",
      "Fluxo de alinhamento e checkpoints",
      "Sustentacao tecnica para novos projetos",
      "Escala sem ampliar estrutura fixa"
    ],
    image: "/images/unti-digital-homepage-image-nossas-solucoes-white-label-tecnico.png"
  }
];
