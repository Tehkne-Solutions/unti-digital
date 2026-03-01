export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  bullets: string[];
  deliverables: string[];
  image: string;
}

export const services: Service[] = [
  {
    slug: "sites-institucionais",
    title: "Sites Institucionais",
    shortDescription: "Sites corporativos de alta performance com foco em conversão e experiência do usuário.",
    fullDescription: "Desenvolvemos sites institucionais modernos e responsivos, otimizados para SEO e conversão. Cada projeto é construído com tecnologias de ponta, garantindo performance, segurança e escalabilidade.",
    bullets: [
      "Design responsivo e moderno",
      "Otimização para mecanismos de busca (SEO)",
      "Performance e velocidade de carregamento",
      "Integração com ferramentas de analytics"
    ],
    deliverables: [
      "Site completo responsivo",
      "Painel administrativo",
      "Documentação técnica",
      "Treinamento da equipe",
      "Suporte pós-lançamento"
    ],
    image: "/placeholder-site.jpg"
  },
  {
    slug: "plataformas-web",
    title: "Plataformas Web",
    shortDescription: "Sistemas web complexos e escaláveis para gestão de processos e operações críticas.",
    fullDescription: "Criamos plataformas web robustas e escaláveis, desde dashboards administrativos até sistemas complexos de gestão. Arquitetura moderna, segurança enterprise e performance otimizada.",
    bullets: [
      "Arquitetura escalável e modular",
      "Segurança enterprise-level",
      "Dashboards e relatórios customizados",
      "APIs RESTful e integrações"
    ],
    deliverables: [
      "Plataforma completa",
      "Documentação de APIs",
      "Testes automatizados",
      "Deploy e infraestrutura",
      "Monitoramento e logs"
    ],
    image: "/placeholder-platform.jpg"
  },
  {
    slug: "integracoes",
    title: "Integrações e Automações",
    shortDescription: "Conecte seus sistemas e automatize processos com integrações robustas e confiáveis.",
    fullDescription: "Desenvolvemos integrações customizadas entre CRM, ERP, e-commerce e outros sistemas. Automatizamos fluxos de trabalho, reduzindo erros manuais e aumentando a eficiência operacional.",
    bullets: [
      "Integração com CRM (HubSpot, Salesforce, RD Station)",
      "Conexão com ERPs e sistemas legados",
      "Automação de workflows",
      "Sincronização de dados em tempo real"
    ],
    deliverables: [
      "APIs de integração",
      "Webhooks e eventos",
      "Documentação completa",
      "Monitoramento de integrações",
      "Suporte técnico dedicado"
    ],
    image: "/placeholder-integration.jpg"
  },
  {
    slug: "e-commerce",
    title: "E-commerce",
    shortDescription: "Lojas virtuais completas com gestão de produtos, pagamentos e logística integrada.",
    fullDescription: "Desenvolvemos e-commerces de alta conversão, com experiência de compra otimizada, gestão completa de produtos, integração com gateways de pagamento e sistemas de logística.",
    bullets: [
      "Plataforma de vendas completa",
      "Integração com gateways de pagamento",
      "Gestão de estoque e produtos",
      "Painel administrativo robusto"
    ],
    deliverables: [
      "Loja virtual completa",
      "Painel de gestão",
      "Integrações de pagamento",
      "Sistema de cupons e promoções",
      "Relatórios de vendas"
    ],
    image: "/placeholder-ecommerce.jpg"
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    shortDescription: "Páginas de conversão otimizadas para campanhas de marketing e geração de leads.",
    fullDescription: "Criamos landing pages de alta conversão, otimizadas para campanhas de marketing digital. Design focado em CTA, integração com ferramentas de automação e tracking completo.",
    bullets: [
      "Design focado em conversão",
      "Otimização para campanhas pagas",
      "Integração com ferramentas de marketing",
      "A/B testing e otimização contínua"
    ],
    deliverables: [
      "Landing page responsiva",
      "Formulários de captação",
      "Integração com CRM",
      "Tracking e analytics",
      "Variações para testes A/B"
    ],
    image: "/placeholder-landing.jpg"
  },
  {
    slug: "white-label",
    title: "White Label Técnico",
    shortDescription: "Desenvolvimento técnico sob demanda para agências que precisam de um parceiro confiável.",
    fullDescription: "Oferecemos serviços de desenvolvimento white label para agências. Sua marca, nossa execução técnica. Entregas pontuais, qualidade garantida e total confidencialidade.",
    bullets: [
      "Desenvolvimento sob sua marca",
      "Entregas pontuais e previsíveis",
      "Comunicação direta com sua equipe",
      "Flexibilidade de escopo e demanda"
    ],
    deliverables: [
      "Código-fonte completo",
      "Documentação técnica",
      "Suporte durante o projeto",
      "Revisões ilimitadas",
      "Confidencialidade garantida"
    ],
    image: "/placeholder-whitelabel.jpg"
  }
];
