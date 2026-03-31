export type BlogContentBlock =
  | {
      type: "heading";
      level: 2 | 3;
      content: string;
    }
  | {
      type: "paragraph";
      content: string;
    }
  | {
      type: "quote";
      content: string;
      caption?: string;
    }
  | {
      type: "checklist";
      items: string[];
    };

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

export const blogPosts: BlogPost[] = [
  {
    slug: "estrategia-digital-b2b",
    title: "Estratégia digital para empresas B2B",
    excerpt:
      "Como um site institucional de alta performance e conteúdo técnico reduzem o ciclo de vendas e aumentam o ticket médio.",
    description:
      "Empresas B2B não precisam de likes: precisam de pipeline, previsibilidade comercial e autoridade digital.",
    category: "Estrategia",
    publishedAt: "2026-03-18",
    readingTime: "6 min de leitura",
    author: "Time UNTI Digital",
    image: "/images/unti-digital-homepage-image-blog-estrategia-digital-para-empresas-b2b.png",
    tags: ["B2B", "Leads", "Site institucional", "Autoridade digital"],
    keyInsight: "O site e o seu melhor vendedor 24/7 quando ele traduz oferta, prova e proximo passo com clareza.",
    seoTitle: "Estrategia digital para empresas B2B | Blog UNTI Digital",
    metaDescription:
      "Entenda como sites institucionais e conteudo tecnico criam pipeline, previsibilidade e autoridade para empresas B2B.",
    body: [
      {
        type: "paragraph",
        content:
          "Empresas B2B nao precisam de volume vazio. Elas precisam de demanda qualificada, clareza de posicionamento e uma presenca digital que reduza friccao na jornada comercial. Quando o site institucional e tratado apenas como vitrine, o time de vendas perde tempo explicando o basico em toda reuniao."
      },
      {
        type: "paragraph",
        content:
          "A estrategia digital de alto nivel comeca no entendimento do cliente alvo e da cadeia de decisao. E por isso que um link building interno estruturado - como um mapa da jornada que parte de um blog sobre desafios e chega a uma pagina de <a href=\"/solucoes/sites-institucionais\" title=\"Sites Institucionais de Alta Performance\" class=\"text-blue-600 hover:underline\">Sites Institucionais de Alta Performance</a> - e essencial para converter."
      },
      {
        type: "quote",
        content:
          "O site institucional nao deve apenas apresentar a empresa. Ele deve antecipar duvidas, elevar confianca e preparar a conversa comercial antes da primeira reuniao.",
        caption: "Insight central de autoridade digital"
      },
      {
        type: "heading",
        level: 2,
        content: "Por que a maioria dos sites B2B nao gera previsibilidade"
      },
      {
        type: "paragraph",
        content:
          "Quanto mais generico for o conteudo, menor sera o espacamento de palavras-chave especificas (e poderosas) como <a href=\"/solucoes/plataformas-web\" title=\"Engenharia de Software\" class=\"text-blue-600 hover:underline\">Engenharia de Software</a>. Entre empresas decidentes, essa falta de foco aumenta as perguntas abertas e atrasa o fechamento."
      },
      {
        type: "paragraph",
        content:
          "A estrategia que funciona muda o objetivo de cada bloco de texto: em vez de explicar quem voce e, responde \"por que esta empresa deve me considerar agora\". Essa narrativa natural leva ao problema -> solucao e ao CTA logico, gutando a transicao para <a href=\"/solucoes/integracoes-crm-erp\" title=\"Integracoes com CRM e ERP\" class=\"text-blue-600 hover:underline\">Integracoes com CRM e ERP</a>."
      },
      {
        type: "checklist",
        items: [
          "Redirecionar termos genericos para paginas de servico especificas","Usar articulos como nudos de interligacao", "Aplicar CTA com sentido explicito (queremos _case_)", "Melhorar orga\u00e7\u00e3o com pilares (Authorized, Problema, Solucao, Prova)"
        ]
      },
      {
        type: "heading",
        level: 2,
        content: "Cases e prova social como aceleradores"
      },
      {
        type: "paragraph",
        content:
          "Em B2B, o sentido de risco e o fator numero 1. Por isso a estrategia deve mencionar <a href=\"/cases\" title=\"Cases de Sucesso\" class=\"text-blue-600 hover:underline\">Cases de Sucesso</a> logo nas primeiras secoes - e reforcar com metricas reais, dashboards e depuracaos. Isso constri a credibilidade e reduz atrito com diretores, CFO e comite tecnico."
      },
      {
        type: "heading",
        level: 3,
        content: "Arquitetura do conteudo para conversao"
      },
      {
        type: "paragraph",
        content:
          "A sequencia ideal e: dor -> impacto -> evidencias -> solucao -> proximos passos. Cada paragrafo deve trabalhar palavras-chave de alto valor e sutilmente linkar para paginas de servico, como <a href=\"/solucoes/para-agencias\" title=\"White Label Tecnico\" class=\"text-blue-600 hover:underline\">White Label Tecnico</a>. O leitor que esteja dentro de um funil de decisao ver um fluxo assim entende que o blog e parte de uma cadeia de valor."
      },
      {
        type: "paragraph",
        content:
          "Essa logica de conexao tambem melhora SEO: o Google ve essas ligacoes internas como sinal de hierarquia e topica, favorecendo tanto a pagina de blog quanto as paginas de servico quando a semantica esta correta."
      },
      {
        type: "heading",
        level: 2,
        content: "Como medir o impacto da estrategia"
      },
      {
        type: "paragraph",
        content:
          "Nao basta publicar: monitore parcours (scroll, leitura, clique) para ver se o leitor que veio via blog de \"Estratégia Digital para Empresas B2B\" foi na sequencia para <a href=\"/solucoes/sites-institucionais\" title=\"Sites Institucionais de Alta Performance\" class=\"text-blue-600 hover:underline\">Sites Institucionais de Alta Performance</a> ou <a href=\"/solucoes/plataformas-web\" title=\"Engenharia de Software\" class=\"text-blue-600 hover:underline\">Engenharia de Software</a>. Ajuste o copy dos blocos de problema e solucao com base nessa jornada."
      },
      {
        type: "paragraph",
        content:
          "Isso vira um loop virtuoso: cada novo artigo alimenta a malha de Link Building Interno, reforca o termo \"Empresas B2B\" e aumenta a relevancia geral das paginas principais."
      }
    ],
  },
  {
    slug: "integracoes-que-escalam-operacoes",
    title: "Integrações que escalam operações",
    excerpt:
      "Como conectar CRMs, ERPs e plataformas web para eliminar retrabalho manual e destravar crescimento operacional.",
    description:
      "Software deve servir a operacao, nao o contrario. Integracoes bem projetadas criam fluxo unico de dados e aumentam eficiencia.",
    category: "Tecnologia",
    publishedAt: "2026-03-14",
    readingTime: "7 min de leitura",
    author: "Time UNTI Digital",
    image: "/images/unti-digital-homepage-image-blog-integracoes-que-escalam-operacoes.png",
    tags: ["Integracoes", "CRM", "ERP", "Automacao"],
    keyInsight: "Software deve servir a operacao, nao o contrario.",
    seoTitle: "Integracoes que escalam operacoes | Blog UNTI Digital",
    metaDescription:
      "Veja como integrar CRM, ERP e plataformas web para eliminar retrabalho manual e criar escala com governanca.",
    body: [
      {
        type: "paragraph",
        content:
          "Toda empresa que cresce sem uma camada de integracao acaba acumulando atrito operacional. Equipes duplicam cadastro, copiam informacoes entre sistemas e perdem tempo conferindo se o dado de uma area bate com o da outra. O problema raramente esta em um software isolado: esta na ausencia de um fluxo unico."
      },
      {
        type: "quote",
        content:
          "Crescimento desordenado gera divida tecnica. Integracao bem planejada transforma sistemas separados em uma operacao coesa.",
        caption: "Principio de escala operacional"
      },
      {
        type: "heading",
        level: 2,
        content: "Onde as operacoes travam"
      },
      {
        type: "paragraph",
        content:
          "Na pratica, o gargalo aparece quando marketing, vendas, financeiro e operacao trabalham com visoes diferentes do mesmo cliente. O comercial enxerga uma oportunidade, o ERP enxerga um cadastro incompleto e a plataforma web recebe um dado atrasado. Esse descompasso reduz produtividade e fragiliza decisao."
      },
      {
        type: "checklist",
        items: [
          "Leads captados no site sem sincronizacao imediata com o CRM",
          "Pedidos ou contratos que exigem digitacao manual no ERP",
          "Relatorios montados em planilhas paralelas por falta de dados unificados",
          "Automacoes quebradas porque os sistemas nao compartilham o mesmo estado"
        ]
      },
      {
        type: "heading",
        level: 2,
        content: "O papel da plataforma web nessa arquitetura"
      },
      {
        type: "paragraph",
        content:
          "A plataforma web costuma ser a primeira camada de captura e relacionamento. Quando conectada corretamente a ferramentas como Salesforce, HubSpot, SAP ou TOTVS, ela deixa de ser apenas um front-end e passa a atuar como ponto de entrada governado para dados, eventos e automacoes."
      },
      {
        type: "heading",
        level: 3,
        content: "Integre por processo, nao por moda"
      },
      {
        type: "paragraph",
        content:
          "Nem toda integracao precisa acontecer em tempo real, e nem toda automacao precisa nascer complexa. A pergunta certa nao e qual conector usar, mas qual processo precisa ficar mais confiavel, rapido e auditavel. Escala vem da eliminacao de friccao critica, nao da acumulacao de ferramentas."
      },
      {
        type: "heading",
        level: 2,
        content: "O que uma integracao madura entrega"
      },
      {
        type: "checklist",
        items: [
          "Unica fonte de verdade para cadastro, status e historico do cliente",
          "Menos retrabalho manual entre marketing, vendas e operacao",
          "Mais velocidade para responder eventos e demandas em tempo util",
          "Mais confianca para automatizar sem perder controle"
        ]
      },
      {
        type: "paragraph",
        content:
          "Integrar e escalar nao significa criar uma arquitetura extravagante. Significa desenhar um fluxo de dados que respeite a operacao real da empresa e reduza trabalho improdutivo. Quando isso acontece, o software finalmente passa a servir ao negocio."
      },
      {
        type: "paragraph",
        content:
          "Nesse contexto, uma <a href=\"/solucoes/integracoes-crm-erp\" title=\"Integracoes com CRM e ERP\" class=\"text-blue-600 hover:underline\">Integracoes com CRM e ERP</a> bem executada permite que dados de <a href=\"/solucoes/plataformas-web\" title=\"Plataformas Web Sob Medida\" class=\"text-blue-600 hover:underline\">Plataformas Web Sob Medida</a> alimentem indicadores em tempo real. O resultado e menos retrabalho, menos erros manuais e mais tempo para alavancar estrategia.",
      },
      {
        type: "paragraph",
        content:
          "Ao mesmo tempo, o blog deve referenciar o nivel de maturidade, como em <a href=\"/solucoes/sites-institucionais\" title=\"Site Institucional de Alta Performance\" class=\"text-blue-600 hover:underline\">Site Institucional de Alta Performance</a> e <a href=\"/solucoes/para-agencias\" title=\"White Label Tecnico para Agencias\" class=\"text-blue-600 hover:underline\">White Label Tecnico para Agencias</a>, construindo autoridade e gerando proximidade com potenciais compradores.",
      }
    ]
  },
  {
    slug: "governanca-e-seguranca-em-plataformas-web",
    title: "Governança e segurança em plataformas web",
    excerpt:
      "Por que empresas líderes investem em monitoramento contínuo, arquitetura segura e conformidade para proteger reputação e dados.",
    description:
      "Seguranca e o alicerce da confianca digital. Sem governanca, qualquer ganho de crescimento fica fragil.",
    category: "Seguranca",
    publishedAt: "2026-03-10",
    readingTime: "7 min de leitura",
    author: "Time UNTI Digital",
    image: "/images/unti-digital-homepage-image-blog-governanca-e-seguranca-em-plataformas-web.png",
    tags: ["LGPD", "Seguranca", "Governanca", "Compliance"],
    keyInsight: "Seguranca e o alicerce da confianca digital.",
    seoTitle: "Governanca e seguranca em plataformas web | Blog UNTI Digital",
    metaDescription:
      "Entenda como zero-trust, monitoramento continuo e LGPD fortalecem a confianca digital em plataformas web.",
    body: [
      {
        type: "paragraph",
        content:
          "Confianca digital nao se sustenta apenas com design impecavel e performance. Ela depende de seguranca, monitoramento e capacidade de resposta. Em empresas que operam com dados sensiveis, qualquer falha rapidamente deixa de ser tecnica e passa a ser reputacional."
      },
      {
        type: "quote",
        content:
          "Quando seguranca entra apenas no fim do projeto, a empresa herda custo, risco e retrabalho. Quando entra na arquitetura, ela protege reputacao e acelera decisao.",
        caption: "Visao de seguranca aplicada a negocio"
      },
      {
        type: "heading",
        level: 2,
        content: "Por que governanca vem antes da ferramenta"
      },
      {
        type: "paragraph",
        content:
          "Muitas equipes procuram uma stack milagrosa para resolver seguranca. O ponto central, porem, e governanca: quem acessa o que, como esse acesso e revisado, onde o dado circula, quais trilhas de auditoria existem e como incidentes sao detectados. Sem esse desenho, a ferramenta vira paliativo."
      },
      {
        type: "checklist",
        items: [
          "Controle de acessos com privilegio minimo e revisao periodica",
          "Inventario claro de dados pessoais e dados sensiveis",
          "Logs e monitoramento para detectar comportamento anomalo",
          "Plano de resposta para incidente, backup e recuperacao"
        ]
      },
      {
        type: "heading",
        level: 2,
        content: "Zero-trust e conformidade nao sao discurso"
      },
      {
        type: "paragraph",
        content:
          "A logica de zero-trust parte de um principio simples: nenhum acesso deve ser presumido como confiavel apenas por estar dentro da rede ou do sistema. Em plataformas web, isso se traduz em autenticacao bem desenhada, validacao consistente, segregacao de permissao e observabilidade real."
      },
      {
        type: "heading",
        level: 3,
        content: "LGPD como disciplina operacional"
      },
      {
        type: "paragraph",
        content:
          "LGPD nao deve aparecer apenas na politica de privacidade. Ela precisa existir nos formularios, nos fluxos de armazenamento, nas integracoes com terceiros e no ciclo de vida do dado. A empresa que trata privacidade como disciplina operacional protege o cliente e protege a si mesma."
      },
      {
        type: "heading",
        level: 2,
        content: "O que lideres digitais fazem de forma diferente"
      },
      {
        type: "checklist",
        items: [
          "Monitoram continuamente disponibilidade, acesso e comportamento de sistemas",
          "Documentam riscos e responsabilidades em vez de depender de memoria informal",
          "Projetam arquitetura considerando recuperacao e continuidade",
          "Entendem seguranca como parte da experiencia de marca"
        ]
      },
      {
        type: "paragraph",
        content:
          "Seguranca robusta nao atrasa crescimento. Ela cria uma base para crescer com menos risco, mais consistencia e mais confianca do mercado. Em plataformas web, governanca e seguranca nao sao extras: sao a infraestrutura invisivel da reputacao."
      },
      {
        type: "paragraph",
        content:
          "Uma trilha de <a href=\"/solucoes/governanca-seguranca\" title=\"Governanca e Seguranca\" class=\"text-blue-600 hover:underline\">Governanca e Seguranca</a> deve sempre linkar internamente para <a href=\"/solucoes/plataformas-web\" title=\"Plataformas Web Sob Medida\" class=\"text-blue-600 hover:underline\">Plataformas Web Sob Medida</a> para que os leitores entendam como a arquitectura embedada garante consistencia e controle. Pontos de referencia em <a href=\"/solucoes/para-agencias\" title=\"White Label Tecnico\" class=\"text-blue-600 hover:underline\">White Label Tecnico</a> e <a href=\"/solucoes/integracoes-crm-erp\" title=\"Integracoes com CRM e ERP\" class=\"text-blue-600 hover:underline\">Integracoes com CRM e ERP</a> reforcam a malha de valor.",
      },
      {
        type: "paragraph",
        content:
          "Nas publicacoes do blog, sempre substitua termos genericos por links com titulos claros e estrategicos, como " +
          "<a href=\"/cases\" title=\"Cases de Sucesso\" class=\"text-blue-600 hover:underline\">Cases de Sucesso</a>, para melhorar o SEO e guiacimento do usuario do problema para a solucao imediata." 
      }
    ]
  },
  {
    slug: "ux-para-ambientes-enterprise",
    title: "UX para ambientes enterprise",
    excerpt:
      "Como projetar interfaces densas que equilibram produtividade, navegação fluida e performance para operações corporativas.",
    description:
      "Interfaces complexas nao precisam ser complicadas. Menos friccao significa mais conversao e mais produtividade.",
    category: "Design",
    publishedAt: "2026-03-06",
    readingTime: "5 min de leitura",
    author: "Time UNTI Digital",
    image: "/images/unti-digital-homepage-image-blog-ux-para-ambientes-enterprise.png",
    tags: ["UX", "Enterprise", "Design de produto", "Usabilidade"],
    keyInsight: "Menos friccao, mais conversao.",
    seoTitle: "UX para ambientes enterprise | Blog UNTI Digital",
    metaDescription:
      "Explore como UX enterprise equilibra densidade funcional, navegacao fluida e performance para plataformas corporativas.",
    body: [
      {
        type: "paragraph",
        content:
          "Ambientes enterprise convivem com alta densidade de informacao, regras de negocio complexas e multiplos perfis de uso. Por isso, a tentacao comum e aceitar interfaces confusas como algo inevitavel. Nao e. Complexidade operacional nao precisa virar experiencia ruim."
      },
      {
        type: "quote",
        content:
          "Quando a interface exige esforco demais para ser entendida, a plataforma deixa de apoiar a operacao e passa a competir com ela.",
        caption: "Principio de usabilidade enterprise"
      },
      {
        type: "heading",
        level: 2,
        content: "O erro de tratar densidade como poluicao"
      },
      {
        type: "paragraph",
        content:
          "Plataformas corporativas precisam mostrar muita informacao. O problema nao esta na quantidade, mas na falta de hierarquia. Sem organizacao visual, o usuario nao encontra rapidamente o que precisa, comete mais erros e demora mais para executar tarefas criticas."
      },
      {
        type: "checklist",
        items: [
          "Priorizacao visual do que exige atencao imediata",
          "Agrupamento de funcoes por contexto operacional e nao por conveniencia tecnica",
          "Estados, feedbacks e validacoes que reduzem erro humano",
          "Performance percebida para nao quebrar o ritmo de trabalho"
        ]
      },
      {
        type: "heading",
        level: 2,
        content: "UX enterprise e produtividade aplicada"
      },
      {
        type: "paragraph",
        content:
          "Diferente de um site promocional, uma plataforma enterprise e usada repetidamente por pessoas que precisam executar tarefas, aprovar fluxos e tomar decisao. Isso significa que o sucesso do design deve ser medido por produtividade, curva de aprendizagem e confianca de uso."
      },
      {
        type: "heading",
        level: 3,
        content: "Menos friccao na jornada, menos custo invisivel"
      },
      {
        type: "paragraph",
        content:
          "Toda friccao de interface tem custo. Ela aumenta tempo de treinamento, gera suporte recorrente, eleva chance de erro e desgasta a percepcao da plataforma. Em escala enterprise, pequenos ruídos se multiplicam rapidamente em perda operacional."
      },
      {
        type: "heading",
        level: 2,
        content: "O que um bom design enterprise precisa garantir"
      },
      {
        type: "checklist",
        items: [
          "Navegacao orientada por tarefas e papeis reais de usuario",
          "Tela densa, mas com ritmo visual, agrupamento e respiro estrategico",
          "Feedback claro para acao, erro e confirmacao",
          "Desempenho consistente para nao interromper a produtividade"
        ]
      },
      {
        type: "paragraph",
        content:
          "Interfaces complexas nao precisam ser complicadas. Quando design e engenharia caminham juntos, a plataforma enterprise fica mais clara, mais rapida e mais confiavel. O resultado e simples de medir: mais produtividade, menos desgaste e mais conversao de valor em uso real."
      },
      {
        type: "paragraph",
        content:
          "Esses principios devem sempre ser reforcados com curriculo de <a href=\"/solucoes/plataformas-web\" title=\"Plataformas Web Sob Medida\" class=\"text-blue-600 hover:underline\">Plataformas Web Sob Medida</a> e <a href=\"/solucoes/sites-institucionais\" title=\"Site Institucional de Alta Performance\" class=\"text-blue-600 hover:underline\">Sites Institucionais de Alta Performance</a> que provem, passo a passo, de qual a veloci¬dade de implementacao e ROI. Uma forte estruturacao de <a href=\"/cases\" title=\"Cases de Sucesso\" class=\"text-blue-600 hover:underline\">Cases de Sucesso</a> externo-interno ajuda a convencer decisores e donos de processos.",
      },
      {
        type: "paragraph",
        content:
          "No caso de agencias, adicione referencia a <a href=\"/solucoes/para-agencias\" title=\"White Label Tecnico\" class=\"text-blue-600 hover:underline\">White Label Tecnico</a> e integre no encadeamento de leitura para evitar perder oportunidade de precificacao premium. Nesse fluxo, cada paragrafo do blog vira um ponto de ancoragem do Link Building Interno, conectando problema a solucao com sinais claros para SEO e conversao."
      }
    ]
  }
];

export function getBlogPosts() {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs() {
  return blogPosts.map((post) => post.slug);
}
