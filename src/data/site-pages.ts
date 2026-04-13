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
      title: "Política de Privacidade",
      description:
        "Esta política é válida a partir de Outubro de 2021.",
      seoTitle: "Política de Privacidade | UNTI Digital",
      seoDescription: "Leia a política de privacidade da UNTI Digital.",
      sections: [
        {
          title: "Política de Privacidade – Unti Digital",
          description: "Unti Digital, pessoa jurídica de direito privado leva a sua privacidade a sério e zela pela segurança e proteção de dados de todos os seus clientes, parceiros, fornecedores e usuários do site domínio https://untidigital.com.br/ e qualquer outro site, plataforma/site ou aplicativo operado pelo lojista."
        },
        {
          title: "Esta Política de Privacidade",
          description: "Esta Política de Privacidade destina-se a informá-lo sobre o modo como nós utilizamos e divulgamos informações coletadas em suas visitas à nossa plataforma/site e em mensagens que trocamos com você. Esta Política de Privacidade aplica-se somente a informações coletadas por meio da plataforma/site."
        },
        {
          title: "Ao acessar o site",
          description: "AO ACESSAR SITE, ENVIAR COMUNICAÇÕES OU FORNECER QUALQUER TIPO DE DADO PESSOAL, VOCÊ DECLARA ESTAR CIENTE COM RELAÇÃO AOS TERMOS AQUI PREVISTOS E DE ACORDO COM A POLÍTICA DE PRIVACIDADE, A QUAL DESCREVE AS FINALIDADES E FORMAS DE TRATAMENTO DE SEUS DADOS PESSOAIS QUE VOCÊ DISPONIBILIZAR NA plataforma/site."
        },
        {
          title: "Seção 1 – Definições",
          description: "Para os fins desta Política de Privacidade: 'Dados Pessoais': significa qualquer informação que, direta ou indiretamente, identifique ou possa identificar uma pessoa natural, como por exemplo, nome, CPF, data de nascimento, endereço IP, dentre outros; 'Dados Pessoais Sensíveis': significa qualquer informação que revele, em relação a uma pessoa natural, origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico; 'Tratamento de Dados Pessoais': significa qualquer operação efetuada no âmbito dos Dados Pessoais, por meio de meios automáticos ou não, tal como a recolha, gravação, organização, estruturação, armazenamento, adaptação ou alteração, recuperação, consulta, utilização, divulgação por transmissão, disseminação ou, alternativamente, disponibilização, harmonização ou associação, restrição, eliminação ou destruição. Também é considerado Tratamento de Dados Pessoais qualquer outra operação prevista nos termos da legislação aplicável; 'Leis de Proteção de Dados': significa todas as disposições legais que regulam o Tratamento de Dados Pessoais, incluindo, porém sem se limitar, a Lei nº 13.709/18, Lei Geral de Proteção de Dados Pessoais ('LGPD')."
        },
        {
          title: "Seção 2 – Uso de Dados Pessoais",
          description: "Coletamos e usamos Dados Pessoais para gerenciar seu relacionamento conosco e melhor atendê-lo quando você estiver adquirindo produtos e/ou serviços na plataforma/site, personalizando e melhorando sua experiência. Exemplos de como usamos os dados incluem: Viabilizar que você adquira produtos e/ou serviços na plataforma/site; Para confirmar ou corrigir as informações que temos sobre você; Para enviar informações que acreditamos ser do seu interesse; Para personalizar sua experiência de uso da plataforma/site; Para entrarmos em contato por um número de telefone e/ou endereço de e-mail fornecido. Podemos entrar em contato com você pessoalmente, por mensagem de voz, através de equipamentos de discagem automática, por mensagens de texto (SMS), por e-mail, ou por qualquer outro meio de comunicação que seu dispositivo seja capaz de receber, nos termos da lei e para fins comerciais razoáveis. Além disso, os Dados Pessoais fornecidos também podem ser utilizados na forma que julgarmos necessária ou adequada: (a) nos termos das Leis de Proteção de Dados; (b) para atender exigências de processo judicial; (c) para cumprir decisão judicial, decisão regulatória ou decisão de autoridades competentes, incluindo autoridades fora do país de residência; (d) para aplicar nossos Termos e Condições de Uso; (e) para proteger nossas operações; (f) para proteger direitos, privacidade, segurança nossos, seus ou de terceiros; (g) para detectar e prevenir fraude; (h) permitir-nos usar as ações disponíveis ou limitar danos que venhamos a sofrer; e (i) de outros modos permitidos por lei."
        },
        {
          title: "Seção 3 – Não fornecimento de Dados Pessoais",
          description: "Não há obrigatoriedade em compartilhar os Dados Pessoais que solicitamos. No entanto, se você optar por não os compartilhar, em alguns casos, não poderemos fornecer a você acesso completo à plataforma/site, alguns recursos especializados ou ser capaz de prestar a assistência necessária ou, ainda, viabilizar a entrega do produto ou prestar o serviço contratado por você."
        },
        {
          title: "Seção 4 – Dados coletados",
          description: "O público em geral poderá navegar na plataforma/site sem necessidade de qualquer cadastro e envio de Dados Pessoais. No entanto, algumas das funcionalidades da plataforma/site poderão depender de cadastro e envio de Dados Pessoais como concluir a compra/contratação do serviço e/ou a viabilizar a entrega do produto/prestação do serviço por nós. No contato a plataforma/site, nós podemos coletar: Dados de contato: nome, sobrenome, número de telefone, endereço, cidade, estado e endereço de e-mail; Informações enviadas: informações que você envia via formulário (dúvidas, reclamações, sugestões, críticas, elogios etc.). Na navegação geral na plataforma/site, nós poderemos coletar: Dados de localização: dados de geolocalização quando você acessa a plataforma/site; Preferências: informações sobre suas preferências e interesses em relação aos produtos/serviços (quando você nos diz o que eles são ou quando os deduzimos do que sabemos sobre você); Dados de navegação na plataforma/site: informações sobre suas visitas e atividades, incluindo o conteúdo (e quaisquer anúncios) com os quais você visualiza e interage, informações sobre o navegador e o dispositivo que você está usando, seu endereço IP, sua localização, o endereço do site a partir do qual você chegou. Algumas dessas informações são coletadas usando nossas Ferramentas de Coleta Automática de Dados, que incluem cookies, web beacons e links da web incorporados. Para saber mais, leia como nós usamos Ferramentas de Coleta Automática de Dados na seção 7 abaixo; Dados anônimos ou agregados: respostas anônimas para pesquisas ou informações anônimas e agregadas sobre como a plataforma/site é usufruída. Durante nossas operações, em certos casos, aplicamos um processo de desidentificação ou pseudonimização aos seus dados para que seja razoavelmente improvável que você identifique você através do uso desses dados com a tecnologia disponível; Outras informações que podemos coletar: informações que não revelem especificamente a sua identidade ou que não são diretamente relacionadas a um indivíduo, tais como informações sobre navegador e dispositivo; dados de uso da plataforma/site; e informações coletadas por meio de cookies, pixel tags e outras tecnologias. Nós não coletamos Dados Pessoais Sensíveis."
        },
        {
          title: "Seção 5 – Compartilhamento de Dados Pessoais com terceiros",
          description: "Nós poderemos compartilhar seus Dados Pessoais: Com a(s) empresa(s) parceira(s) que você selecionar ou optar em enviar os seus dados, dúvidas, perguntas etc., bem como com provedores de serviços ou parceiros para gerenciar ou suportar certos aspectos de nossas operações comerciais em nosso nome. Esses provedores de serviços ou parceiros podem estar localizados nos Estados Unidos, na Argentina, no Brasil ou em outros locais globais, incluindo servidores para homologação e produção, e prestadores de serviços de hospedagem e armazenamento de dados, gerenciamento de fraudes, suporte ao cliente, vendas em nosso nome, atendimento de pedidos, personalização de conteúdo, atividades de publicidade e marketing (incluindo publicidade digital e personalizada) e serviços de TI, por exemplo; Com terceiros, com o objetivo de nos ajudar a gerenciar a plataforma/site; Com terceiros, caso ocorra qualquer reorganização, fusão, venda, joint venture, cessão, transmissão ou transferência de toda ou parte da nossa empresa, ativo ou capital (incluindo os relativos à falência ou processos semelhantes)."
        },
        {
          title: "Seção 6 – Transferências internacionais de dados",
          description: "Dados Pessoais e informações de outras naturezas coletadas por nós podem ser transferidos ou acessados por entidades pertencentes ao grupo corporativo das empresas parceiras em todo o mundo de acordo com esta Política de Privacidade."
        },
        {
          title: "Seção 7 – Coleta automática de Dados Pessoais",
          description: "Quando você visita a plataforma/site, ela pode armazenar ou recuperar informações em seu navegador, principalmente na forma de cookies, que são arquivos de texto contendo pequenas quantidades de informação. Essas informações podem ser sobre você, suas preferências ou seu dispositivo e são usadas principalmente para que a plataforma/site funcione como você espera. As informações geralmente não o identificam diretamente, mas podem oferecer uma experiência na internet mais personalizada. De acordo com esta Política de Privacidade, nós e nossos prestadores de serviços terceirizados, mediante seu consentimento, podemos coletar seus Dados Pessoais de diversas formas, incluindo, entre outros: Por meio do navegador ou do dispositivo: algumas informações são coletadas pela maior parte dos navegadores ou automaticamente por meio de dispositivos de acesso à internet, como o tipo de computador, resolução da tela, nome e versão do sistema operacional, modelo e fabricante do dispositivo, idioma, tipo e versão do navegador de Internet que está utilizando. Podemos utilizar essas informações para assegurar que a plataforma/site funcione adequadamente. Uso de cookies: informações sobre o seu uso da plataforma/site podem ser coletadas por terceiros a partir de cookies. Cookies são informações armazenadas diretamente no computador que você está utilizando. Os cookies permitem a coleta de informações tais como o tipo de navegador, o tempo despendido na plataforma/site, as páginas visitadas, as preferências de idioma, e outros dados de tráfego anônimos. Nós e nossos prestadores de serviços utilizamos informações para proteção de segurança, para facilitar a navegação, exibir informações de modo mais eficiente, e personalizar sua experiência ao utilizar a plataforma/site, assim como para rastreamento online. Também coletamos informações estatísticas sobre o uso da plataforma/site para aprimoramento contínuo do nosso design e funcionalidade, para entender como a plataforma/site é utilizada e para auxiliá-lo a solucionar questões relativas à plataforma/site. Caso não deseje que suas informações sejam coletadas por meio de cookies, há um procedimento simples na maior parte dos navegadores que permite que os cookies sejam automaticamente rejeitados, ou oferece a opção de aceitar ou rejeitar a transferência de um cookie (ou cookies) específico(s) de um site determinado para o seu computador. Entretanto, isso pode gerar inconvenientes no uso da plataforma/site. As definições que escolher podem afetar a sua experiência de navegação e o funcionamento que exige a utilização de cookies. Neste sentido, rejeitamos qualquer responsabilidade pelas consequências resultantes do funcionamento limitado da plataforma/site provocado pela desativação de cookies no seu dispositivo (incapacidade de definir ou ler um cookie). Uso de pixel tags e outras tecnologias similares: pixel tags (também conhecidos como Web beacons e GIFs invisíveis) podem ser utilizados para rastrear ações de usuários da plataforma/site (incluindo destinatários de e-mails), medir o sucesso das nossas campanhas de marketing e coletar dados estatísticos sobre o uso da plataforma/site e taxas de resposta, e ainda para outros fins não especificados. Podemos contratar empresas de publicidade comportamental, para obter relatórios sobre os anúncios da plataforma/site em toda a internet. Para isso, essas empresas utilizam cookies, pixel tags e outras tecnologias para coletar informações sobre a sua utilização, ou sobre a utilização de outros usuários, da nossa plataforma/site e de site de terceiros. Nós não somos responsáveis por pixel tags, cookies e outras tecnologias similares utilizadas por terceiros."
        },
        {
          title: "Seção 8 – Categorias de cookies",
          description: "Os cookies utilizados na nossa plataforma/site estão de acordo com os requisitos legais e são enquadrados nas seguintes categorias: Estritamente necessários: estes cookies permitem que você navegue pelo site e desfrute de recursos essenciais com segurança. Um exemplo são os cookies de segurança, que autenticam os usuários, protegem os seus dados e evitam a criação de logins fraudulentos. Desempenho: os cookies desta categoria coletam informações de forma codificada e anônima relacionadas à nossa plataforma/site virtual, como, por exemplo, o número de visitantes de uma página específica, origem das visitas ao site e quais as páginas acessadas pelo usuário. Todos os dados coletados são utilizados apenas para eventuais melhorias no site e para medir a eficácia da nossa comunicação. Funcionalidade: estes cookies são utilizados para lembrar definições de preferências do usuário com o objetivo de melhorar a sua visita no nosso site, como, por exemplo, configurações aplicadas no layout do site ou suas respostas para pop-ups de promoções e cadastros -; dessa forma, não será necessário perguntar inúmeras vezes. Publicidade: utilizamos cookies com o objetivo de criar campanhas segmentadas e entregar anúncios de acordo com o seu perfil de consumo na nossa plataforma/site virtual."
        },
        {
          title: "Seção 9 – Direitos do Usuário",
          description: "Você pode, a qualquer momento, requerer: (i) confirmação de que seus Dados Pessoais estão sendo tratados; (ii) acesso aos seus Dados Pessoais; (iii) correções a dados incompletos, inexatos ou desatualizados; (iv) anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto em lei; (v) portabilidade de Dados Pessoais a outro prestador de serviços, contanto que isso não afete nossos segredos industriais e comerciais; (vi) eliminação de Dados Pessoais tratados com seu consentimento, na medida do permitido em lei; (vii) informações sobre as entidades às quais seus Dados Pessoais tenham sido compartilhados; (viii) informações sobre a possibilidade de não fornecer o consentimento e sobre as consequências da negativa; e (ix) revogação do consentimento. Os seus pedidos serão tratados com especial cuidado de forma a que possamos assegurar a eficácia dos seus direitos. Poderá lhe ser pedido que faça prova da sua identidade de modo a assegurar que a partilha dos Dados Pessoais é apenas feita com o seu titular. Você deverá ter em mente que, em certos casos (por exemplo, devido a requisitos legais), o seu pedido poderá não ser imediatamente satisfeito, além de que nós poderemos não conseguir atendê-lo por conta de cumprimento de obrigações legais."
        },
        {
          title: "Seção 10 – Segurança dos Dados Pessoais",
          description: "Buscamos adotar as medidas técnicas e organizacionais previstas pelas Leis de Proteção de Dados adequadas para proteção dos Dados Pessoais na nossa organização. Infelizmente, nenhuma transmissão ou sistema de armazenamento de dados tem a garantia de serem 100% seguros. Caso tenha motivos para acreditar que sua interação conosco tenha deixado de ser segura (por exemplo, caso acredite que a segurança de qualquer uma de suas contas foi comprometida), favor nos notificar imediatamente."
        },
        {
          title: "Seção 11 – Links de hipertexto para outros sites e redes sociais",
          description: "A plataforma/site poderá, de tempos a tempos, conter links de hipertexto que redirecionará você para sites das redes dos nossos parceiros, anunciantes, fornecedores etc. Se você clicar em um desses links para qualquer um desses sites, lembre-se que cada site possui as suas próprias práticas de privacidade e que não somos responsáveis por essas políticas. Consulte as referidas políticas antes de enviar quaisquer Dados Pessoais para esses sites. Não nos responsabilizamos pelas políticas e práticas de coleta, uso e divulgação (incluindo práticas de proteção de dados) de outras organizações, tais como Facebook, Apple, Google, Microsoft, ou de qualquer outro desenvolvedor de software ou provedor de aplicativo, plataforma/site de mídia social, sistema operacional, prestador de serviços de internet sem fio ou fabricante de dispositivos, incluindo todos os Dados Pessoais que divulgar para outras organizações por meio dos aplicativos, relacionadas a tais aplicativos, ou publicadas em nossas páginas em mídias sociais. Nós recomendamos que você se informe sobre a política de privacidade de cada site visitado ou de cada prestador de serviço utilizado."
        },
        {
          title: "Seção 12 – Atualizações desta Política de Privacidade",
          description: "Se modificarmos nossa Política de Privacidade, publicaremos o novo texto na plataforma/site, com a data de revisão atualizada. Podemos alterar esta Política de Privacidade a qualquer momento. Caso haja alteração significativa nos termos desta Política de Privacidade, podemos informá-lo por meio das informações de contato que tivermos em nosso banco de dados ou por meio de notificação em nossa plataforma/site. Recordamos que nós temos como compromisso não tratar os seus Dados Pessoais de forma incompatível com os objetivos descritos acima, exceto se de outra forma requerido por lei ou ordem judicial. Sua utilização da plataforma/site após as alterações significa que aceitou as Políticas de Privacidade revisadas. Caso, após a leitura da versão revisada, você não esteja de acordo com seus termos, favor encerrar o acesso à plataforma/site."
        },
        {
          title: "Seção 13 – Encarregado do tratamento dos Dados Pessoais",
          description: "Caso pretenda exercer qualquer um dos direitos previstos, inclusive retirar o seu consentimento, nesta Política de Privacidade e/ou nas Leis de Proteção de Dados, ou resolver quaisquer dúvidas relacionadas ao Tratamento de seus Dados Pessoais, favor contatar-nos em contato@untidigital.com.br."
        }
      ]
    },
    businessPolicy: {
      eyebrow: "Governança",
      title: "Política Empresarial",
      description:
        "A Unti Digital, referência no cenário de Inteligência Digital e Web, reafirma seu compromisso com a excelência e a satisfação do cliente ao apresentar sua política empresarial. Esta política é delineada para estabelecer padrões claros, promovendo transparência, eficiência e integridade em todas as interações comerciais. Com a visão de atender às crescentes demandas do mercado, a Unti Digital busca, através desta política, criar uma base sólida para relações comerciais éticas e bem-sucedidas.",
      seoTitle: "Política Empresarial | UNTI Digital",
      seoDescription: "Conheça os princípios de governança e operação da UNTI Digital.",
      sections: [
        {
          title: "Horário de Funcionamento",
          description: "A empresa estará disponível para atendimento de segunda a sexta-feira, no horário das 9h às 18h."
        },
        {
          title: "Tempo de Resposta",
          description: "Mensagens recebidas via Whatsapp serão tratadas com a devida atenção e respondidas em até duas horas. Emails serão cuidadosamente analisados, com respostas garantidas em um prazo máximo de 8 horas. O atendimento exclusivo ocorrerá durante o horário comercial, assegurando uma resposta ágil e especializada."
        },
        {
          title: "Prazos para Entregas",
          description: "Ajustes simples em sites serão concluídos em até 5 dias úteis, garantindo agilidade e eficácia. Projetos de criação de sites terão prazos variados, de 5 a 60 dias úteis, dependendo da complexidade e escopo. O desenvolvimento de aplicativos demandará um prazo superior a 60 dias úteis, considerando a atenção aos detalhes e a qualidade do produto final."
        },
        {
          title: "Pagamentos",
          description: "Multas e juros relativos a pagamentos serão explicitados detalhadamente no contrato, assegurando transparência nas relações comerciais. Projetos e serviços com mais de 3 meses de atraso no pagamento serão descontinuados, resguardando a saúde financeira da empresa e mantendo a qualidade dos serviços prestados."
        },
        {
          title: "Ajuste Anual de Pagamentos",
          description: "O ajuste anual de pagamentos será realizado anualmente no mês de março, contemplando um acréscimo de 10% baseado no valor atual. Essa prática visa acompanhar as mudanças no mercado e garantir a sustentabilidade financeira da Unti Digital."
        },
        {
          title: "Novos Serviços a Partir de Junho de 2024",
          description: "A partir de junho de 2024, a Unti Digital expandirá sua gama de serviços para incluir: Criação de aplicativos institucionais. Desenvolvimento de sistemas web. Gestão de aplicativos e sistemas web. Integrações para sites. Integração com ZAPIER. Hospedagem de sites. Hospedagem de emails."
        },
        {
          title: "Serviços Descontinuados a Partir de Junho de 2024",
          description: "Com o objetivo de otimizar nossos recursos e focar em áreas estratégicas, a partir de junho de 2024, os seguintes serviços serão descontinuados: Gestão de hospedagens. Gestão de emails. Gestão de domínios. Serviços de assinaturas de emails. Serviços de gestão de planilhas."
        },
        {
          title: "Compromisso com a Excelência",
          description: "A Unti Digital, por meio desta política, reforça seu comprometimento com a excelência, inovação e atendimento eficaz. Estamos confiantes de que essas diretrizes não apenas fortalecerão nossa posição no mercado, mas também proporcionarão aos nossos clientes a confiança necessária para estabelecer parcerias duradouras. Ao adotar práticas éticas, transparentes e centradas no cliente, a Unti Digital busca continuar liderando o setor de Inteligência Digital e Web, proporcionando soluções de qualidade e construindo relações comerciais sólidas e confiáveis."
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
      title: "Privacy Policy",
      description: "This policy is valid as of October 2021.",
      seoTitle: "Privacy Policy | UNTI Digital",
      seoDescription: "Read UNTI Digital's privacy policy.",
      sections: [
        {
          title: "Privacy Policy – Unti Digital",
          description: "Unti Digital, a private legal entity, takes your privacy seriously and safeguards the security and protection of data of all its clients, partners, suppliers, and users of the website domain https://untidigital.com.br/ and any other site, platform/site, or application operated by the merchant."
        },
        {
          title: "This Privacy Policy",
          description: "This Privacy Policy is intended to inform you about how we use and disclose information collected during your visits to our platform/site and in messages we exchange with you. This Privacy Policy applies only to information collected through the platform/site."
        },
        {
          title: "By accessing the site",
          description: "BY ACCESSING THE SITE, SENDING COMMUNICATIONS OR PROVIDING ANY TYPE OF PERSONAL DATA, YOU DECLARE THAT YOU ARE AWARE OF THE TERMS PROVIDED HERE AND AGREE WITH THE PRIVACY POLICY, WHICH DESCRIBES THE PURPOSES AND FORMS OF TREATMENT OF YOUR PERSONAL DATA THAT YOU PROVIDE ON THE PLATFORM/SITE."
        },
        {
          title: "Section 1 – Definitions",
          description: "For the purposes of this Privacy Policy: 'Personal Data': means any information that, directly or indirectly, identifies or may identify a natural person, such as name, CPF, date of birth, IP address, among others; 'Sensitive Personal Data': means any information that reveals, in relation to a natural person, racial or ethnic origin, religious conviction, political opinion, union affiliation or organization of a religious, philosophical or political nature, health-related data or sexual life, genetic or biometric data; 'Personal Data Processing': means any operation carried out within the scope of Personal Data, through automated or non-automated means, such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or, alternatively, availability, harmonization or association, restriction, erasure or destruction. Any other operation provided for in the applicable legislation is also considered Personal Data Processing; 'Data Protection Laws': means all legal provisions that regulate Personal Data Processing, including, but not limited to, Law No. 13.709/18, General Personal Data Protection Law ('LGPD')."
        },
        {
          title: "Section 2 – Use of Personal Data",
          description: "We collect and use Personal Data to manage your relationship with us and better serve you when you are acquiring products and/or services on the platform/site, personalizing and improving your experience. Examples of how we use the data include: Enabling you to acquire products and/or services on the platform/site; To confirm or correct the information we have about you; To send information we believe is of interest to you; To personalize your platform/site usage experience; To contact you by telephone number and/or email address provided. We may contact you personally, by voice message, through automatic dialing equipment, by text messages (SMS), by email, or by any other means your device is capable of receiving, in accordance with the law and for reasonable commercial purposes. Furthermore, the Personal Data provided may also be used in the manner we deem necessary or appropriate: (a) under the Data Protection Laws; (b) to meet judicial process requirements; (c) to comply with judicial decisions, regulatory decisions or decisions of competent authorities, including authorities outside the country of residence; (d) to apply our Terms and Conditions of Use; (e) to protect our operations; (f) to protect rights, privacy, security of ours, yours or third parties; (g) to detect and prevent fraud; (h) to allow us to use available actions or limit damages we may suffer; and (i) in other ways permitted by law."
        },
        {
          title: "Section 3 – Non-Provision of Personal Data",
          description: "There is no obligation to share the Personal Data we request. However, if you choose not to share them, in some cases, we may not be able to provide you with full access to the platform/site, some specialized features, or be able to provide the necessary assistance, or enable the delivery of the product or provision of the service contracted by you."
        },
        {
          title: "Section 4 – Data Collected",
          description: "The general public may browse the platform/site without any registration and sending of Personal Data. However, some functionalities of the platform/site may depend on registration and sending of Personal Data such as completing the purchase/contracting of the service and/or enabling the delivery of the product/provision of the service by us. When contacting the platform/site, we may collect: Contact data: first name, last name, telephone number, address, city, state, and email address; Sent information: information you send via form (questions, complaints, suggestions, criticisms, compliments, etc.). In general browsing on the platform/site, we may collect: Location data: geolocation data when you access the platform/site; Preferences: information about your preferences and interests regarding products/services (when you tell us what they are or when we deduce them from what we know about you); Navigation data on the platform/site: information about your visits and activities, including the content (and any ads) you view and interact with, information about the browser and device you are using, your IP address, your location, the website address from which you arrived. Some of this information is collected using our Automatic Data Collection Tools, which include cookies, web beacons, and embedded web links. To learn more, read how we use Automatic Data Collection Tools in section 7 below; Anonymous or aggregated data: anonymous responses to surveys or anonymous and aggregated information about how the platform/site is used. During our operations, in certain cases, we apply a de-identification or pseudonymization process to your data so that it is reasonably unlikely that you can identify yourself through the use of these data with the technology available; Other information we may collect: information that does not specifically reveal your identity or is not directly related to an individual, such as browser and device information; platform/site usage data; and information collected through cookies, pixel tags, and other technologies. We do not collect Sensitive Personal Data."
        },
        {
          title: "Section 5 – Sharing Personal Data with Third Parties",
          description: "We may share your Personal Data: With partner companies that you select or choose to send your data, questions, questions, etc., as well as with service providers or partners to manage or support certain aspects of our business operations on our behalf. These service providers or partners may be located in the United States, Argentina, Brazil, or other global locations, including servers for testing and production, and providers of hosting and data storage services, fraud management, customer support, sales on our behalf, order fulfillment, content personalization, advertising and marketing activities (including digital and personalized advertising), and IT services, for example; With third parties, to help us manage the platform/site; With third parties, in the event of any reorganization, merger, sale, joint venture, assignment, transfer or transmission of all or part of our company, asset or capital (including those related to bankruptcy or similar processes)."
        },
        {
          title: "Section 6 – International Data Transfers",
          description: "Personal Data and information of other natures collected by us may be transferred or accessed by entities belonging to the corporate group of partner companies worldwide in accordance with this Privacy Policy."
        },
        {
          title: "Section 7 – Automatic Collection of Personal Data",
          description: "When you visit the platform/site, it may store or retrieve information in your browser, mainly in the form of cookies, which are text files containing small amounts of information. This information may be about you, your preferences, or your device and is mainly used so that the platform/site works as you expect. The information generally does not identify you directly, but can provide a more personalized internet experience. In accordance with this Privacy Policy, we and our third-party service providers, with your consent, may collect your Personal Data in various ways, including, among others: Through the browser or device: some information is collected by most browsers or automatically through internet access devices, such as computer type, screen resolution, operating system name and version, device model and manufacturer, language, internet browser type and version you are using. We may use this information to ensure that the platform/site functions properly. Use of cookies: information about your use of the platform/site may be collected by third parties from cookies. Cookies are information stored directly on the computer you are using. Cookies allow the collection of information such as browser type, time spent on the platform/site, pages visited, language preferences, and other anonymous traffic data. We and our service providers use information for security protection, to facilitate navigation, display information more efficiently, and personalize your experience when using the platform/site, as well as for online tracking. We also collect statistical information about platform/site usage for continuous improvement of our design and functionality, to understand how the platform/site is used, and to help you resolve issues related to the platform/site. If you do not wish your information to be collected through cookies, there is a simple procedure in most browsers that allows cookies to be automatically rejected, or offers the option to accept or reject the transfer of a specific cookie (or cookies) from a particular site to your computer. However, this may cause inconvenience in the use of the platform/site. The settings you choose may affect your browsing experience and the operation that requires the use of cookies. In this sense, we reject any responsibility for the consequences resulting from the limited operation of the platform/site caused by disabling cookies on your device (inability to set or read a cookie). Use of pixel tags and other similar technologies: pixel tags (also known as Web beacons and invisible GIFs) may be used to track user actions on the platform/site (including email recipients), measure the success of our marketing campaigns, and collect statistical data on platform/site usage and response rates, and for other unspecified purposes. We may hire behavioral advertising companies to obtain reports on platform/site ads across the internet. For this, these companies use cookies, pixel tags, and other technologies to collect information about your use, or the use of other users, of our platform/site and third-party sites. We are not responsible for pixel tags, cookies, and other similar technologies used by third parties."
        },
        {
          title: "Section 8 – Cookie Categories",
          description: "The cookies used on our platform/site are in accordance with legal requirements and are framed in the following categories: Strictly necessary: these cookies allow you to navigate the site and enjoy essential features securely. An example is security cookies, which authenticate users, protect your data, and prevent fraudulent logins. Performance: cookies in this category collect information in an encoded and anonymous manner related to our virtual platform/site, such as, for example, the number of visitors to a specific page, origin of site visits, and which pages the user has accessed. All collected data is used only for eventual site improvements and to measure the effectiveness of our communication. Functionality: these cookies are used to remember user preference settings to improve your visit to our site, such as layout settings applied to the site or your responses to promotion and registration pop-ups -; thus, it will not be necessary to ask countless times. Advertising: we use cookies to create segmented campaigns and deliver ads according to your consumption profile on our virtual platform/site."
        },
        {
          title: "Section 9 – User Rights",
          description: "You may, at any time, request: (i) confirmation that your Personal Data is being processed; (ii) access to your Personal Data; (iii) corrections to incomplete, inaccurate, or outdated data; (iv) anonymization, blocking, or elimination of unnecessary, excessive, or processed data in non-compliance with the law; (v) portability of Personal Data to another service provider, provided that it does not affect our industrial and commercial secrets; (vi) elimination of Personal Data processed with your consent, to the extent permitted by law; (vii) information about the entities to which your Personal Data have been shared; (viii) information about the possibility of not providing consent and the consequences of refusal; and (ix) revocation of consent. Your requests will be handled with special care so that we can ensure the effectiveness of your rights. You may be asked to prove your identity to ensure that Personal Data sharing is only made to its owner. You should keep in mind that, in certain cases (for example, due to legal requirements), your request may not be immediately satisfied, and we may not be able to fulfill it due to compliance with legal obligations."
        },
        {
          title: "Section 10 – Security of Personal Data",
          description: "We seek to adopt the technical and organizational measures provided for by the appropriate Data Protection Laws for the protection of Personal Data in our organization. Unfortunately, no data transmission or storage system is guaranteed to be 100% secure. If you have reasons to believe that your interaction with us has become insecure (for example, if you believe that the security of any of your accounts has been compromised), please notify us immediately."
        },
        {
          title: "Section 11 – Hypertext Links to Other Sites and Social Networks",
          description: "The platform/site may, from time to time, contain hypertext links that will redirect you to sites of our partners, advertisers, suppliers, etc. If you click on any of these links to any of these sites, remember that each site has its own privacy practices and we are not responsible for these policies. Consult the aforementioned policies before sending any Personal Data to these sites. We are not responsible for the collection, use, and disclosure policies and practices (including data protection practices) of other organizations, such as Facebook, Apple, Google, Microsoft, or any other software developer or application provider, social media platform/site, operating system, wireless internet service provider, or device manufacturer, including all Personal Data you disclose to other organizations through applications, related to such applications, or published on our social media pages. We recommend that you inform yourself about the privacy policy of each site visited or service provider used."
        },
        {
          title: "Section 12 – Updates to this Privacy Policy",
          description: "If we modify our Privacy Policy, we will publish the new text on the platform/site, with the updated revision date. We may change this Privacy Policy at any time. If there is a significant change in the terms of this Privacy Policy, we may inform you through the contact information we have in our database or through notification on our platform/site. We remind you that we are committed not to process your Personal Data in a manner incompatible with the objectives described above, except as otherwise required by law or judicial order. Your use of the platform/site after changes means that you have accepted the revised Privacy Policies. If, after reading the revised version, you do not agree with its terms, please stop accessing the platform/site."
        },
        {
          title: "Section 13 – Data Protection Officer",
          description: "If you intend to exercise any of the rights provided for, including withdrawing your consent, in this Privacy Policy and/or Data Protection Laws, or resolve any doubts related to the Processing of your Personal Data, please contact us at contato@untidigital.com.br."
        }
      ]
    },
    businessPolicy: {
      eyebrow: "Governance",
      title: "Business Policy",
      description: "Unti Digital, a reference in the Digital Intelligence and Web scenario, reaffirms its commitment to excellence and customer satisfaction by presenting its business policy. This policy is outlined to establish clear standards, promoting transparency, efficiency, and integrity in all commercial interactions. With the vision of meeting the growing market demands, Unti Digital seeks, through this policy, to create a solid foundation for ethical and successful business relationships.",
      seoTitle: "Business Policy | UNTI Digital",
      seoDescription: "Understand UNTI Digital's governance and operational principles.",
      sections: [
        {
          title: "Operating Hours",
          description: "The company will be available for service from Monday to Friday, from 9 AM to 6 PM."
        },
        {
          title: "Response Time",
          description: "Messages received via WhatsApp will be treated with due attention and responded to within up to two hours. Emails will be carefully analyzed, with responses guaranteed within a maximum period of 8 hours. Exclusive service will occur during business hours, ensuring agile and specialized response."
        },
        {
          title: "Delivery Deadlines",
          description: "Simple website adjustments will be completed within up to 5 business days, ensuring agility and effectiveness. Website creation projects will have varying deadlines, from 5 to 60 business days, depending on complexity and scope. Application development will require a deadline of more than 60 business days, considering attention to detail and the quality of the final product."
        },
        {
          title: "Payments",
          description: "Fines and interest related to payments will be detailed in the contract, ensuring transparency in commercial relationships. Projects and services with more than 3 months of payment delay will be discontinued, safeguarding the company's financial health and maintaining service quality."
        },
        {
          title: "Annual Payment Adjustment",
          description: "The annual payment adjustment will be carried out annually in the month of March, contemplating an increase of 10% based on the current value. This practice aims to accompany market changes and ensure Unti Digital's financial sustainability."
        },
        {
          title: "New Services Starting June 2024",
          description: "Starting June 2024, Unti Digital will expand its range of services to include: Creation of institutional applications. Development of web systems. Management of applications and web systems. Site integrations. ZAPIER integration. Website hosting. Email hosting."
        },
        {
          title: "Services Discontinued Starting June 2024",
          description: "In order to optimize our resources and focus on strategic areas, starting June 2024, the following services will be discontinued: Hosting management. Email management. Domain management. Email subscription services. Spreadsheet management services."
        },
        {
          title: "Commitment to Excellence",
          description: "Unti Digital, through this policy, reinforces its commitment to excellence, innovation, and effective service. We are confident that these guidelines will not only strengthen our market position, but also provide our clients with the necessary confidence to establish lasting partnerships. By adopting ethical, transparent, and customer-centered practices, Unti Digital seeks to continue leading the Digital Intelligence and Web sector, providing quality solutions and building solid and reliable business relationships."
        }
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
      title: "Política de Privacidad",
      description: "Esta política es válida a partir de octubre de 2021.",
      seoTitle: "Política de Privacidad | UNTI Digital",
      seoDescription: "Lea la política de privacidad de UNTI Digital.",
      sections: [
        {
          title: "Política de Privacidad – Unti Digital",
          description: "Unti Digital, persona jurídica de derecho privado, toma en serio tu privacidad y vela por la seguridad y protección de los datos de todos sus clientes, socios, proveedores y usuarios del sitio web dominio https://untidigital.com.br/ y cualquier otro sitio, plataforma/sitio o aplicación operada por el comerciante."
        },
        {
          title: "Esta Política de Privacidad",
          description: "Esta Política de Privacidad tiene como objetivo informarte sobre el modo en que utilizamos y divulgamos información recopilada en tus visitas a nuestra plataforma/sitio y en mensajes que intercambiamos contigo. Esta Política de Privacidad se aplica únicamente a información recopilada a través de la plataforma/sitio."
        },
        {
          title: "Al acceder al sitio",
          description: "AL ACCEDER AL SITIO, ENVIAR COMUNICACIONES O PROPORCIONAR CUALQUIER TIPO DE DATOS PERSONALES, DECLARAS ESTAR CONCIENTE CON RELACIÓN A LOS TÉRMINOS AQUÍ PREVISTOS Y DE ACUERDO CON LA POLÍTICA DE PRIVACIDAD, LA CUAL DESCRIBE LAS FINALIDADES Y FORMAS DE TRATAMIENTO DE TUS DATOS PERSONALES QUE PROPORCIONAS EN LA PLATAFORMA/SITIO."
        },
        {
          title: "Sección 1 – Definiciones",
          description: "Para los fines de esta Política de Privacidad: 'Datos Personales': significa cualquier información que, directa o indirectamente, identifique o pueda identificar a una persona natural, como nombre, CPF, fecha de nacimiento, dirección IP, entre otros; 'Datos Personales Sensibles': significa cualquier información que revele, en relación con una persona natural, origen racial o étnico, convicción religiosa, opinión política, afiliación sindical u organización de carácter religioso, filosófico o político, dato referente a la salud o a la vida sexual, dato genético o biométrico; 'Tratamiento de Datos Personales': significa cualquier operación efectuada en el ámbito de los Datos Personales, por medios automatizados o no, tales como la recolección, grabación, organización, estructuración, almacenamiento, adaptación o alteración, recuperación, consulta, utilización, divulgación por transmisión, diseminación o, alternativamente, disponibilidad, armonización o asociación, restricción, eliminación o destrucción. También se considera Tratamiento de Datos Personales cualquier otra operación prevista en los términos de la legislación aplicable; 'Leyes de Protección de Datos': significa todas las disposiciones legales que regulan el Tratamiento de Datos Personales, incluyendo, pero sin limitarse, la Ley nº 13.709/18, Ley General de Protección de Datos Personales ('LGPD')."
        },
        {
          title: "Sección 2 – Uso de Datos Personales",
          description: "Recopilamos y utilizamos Datos Personales para gestionar tu relación con nosotros y atenderte mejor cuando estés adquiriendo productos y/o servicios en la plataforma/sitio, personalizando y mejorando tu experiencia. Ejemplos de cómo utilizamos los datos incluyen: Permitirte adquirir productos y/o servicios en la plataforma/sitio; Para confirmar o corregir la información que tenemos sobre ti; Para enviarte información que creemos es de tu interés; Para personalizar tu experiencia de uso de la plataforma/sitio; Para contactarte por número de teléfono y/o dirección de correo electrónico proporcionada. Podemos contactarte personalmente, por mensaje de voz, a través de equipos de marcación automática, por mensajes de texto (SMS), por correo electrónico, o por cualquier otro medio que tu dispositivo sea capaz de recibir, de acuerdo con la ley y para fines comerciales razonables. Además, los Datos Personales proporcionados también pueden ser utilizados de la forma que juzguemos necesaria o adecuada: (a) de acuerdo con las Leyes de Protección de Datos; (b) para atender exigencias de proceso judicial; (c) para cumplir con decisión judicial, decisión regulatoria o decisión de autoridades competentes, incluyendo autoridades fuera del país de residencia; (d) para aplicar nuestros Términos y Condiciones de Uso; (e) para proteger nuestras operaciones; (f) para proteger derechos, privacidad, seguridad nuestros, tuyos o de terceros; (g) para detectar y prevenir fraude; (h) permitirnos usar las acciones disponibles o limitar daños que podamos sufrir; e (i) de otros modos permitidos por ley."
        },
        {
          title: "Sección 3 – No Proporcionamiento de Datos Personales",
          description: "No hay obligación de compartir los Datos Personales que solicitamos. Sin embargo, si optas por no compartirlos, en algunos casos, no podremos proporcionarte acceso completo a la plataforma/sitio, algunas funciones especializadas o ser capaces de prestar la asistencia necesaria, o aún, posibilitar la entrega del producto o prestación del servicio contratado por ti."
        },
        {
          title: "Sección 4 – Datos Recopilados",
          description: "El público en general puede navegar por la plataforma/sitio sin necesidad de ningún registro y envío de Datos Personales. Sin embargo, algunas de las funcionalidades de la plataforma/sitio pueden depender de registro y envío de Datos Personales como concluir la compra/contratación del servicio y/o posibilitar la entrega del producto/prestación del servicio por nosotros. Al contactar la plataforma/sitio, podemos recopilar: Datos de contacto: nombre, apellido, número de teléfono, dirección, ciudad, estado y dirección de correo electrónico; Información enviada: información que envías vía formulario (dudas, quejas, sugerencias, críticas, elogios, etc.). En la navegación general en la plataforma/sitio, podemos recopilar: Datos de ubicación: datos de geolocalización cuando accedes a la plataforma/sitio; Preferencias: información sobre tus preferencias e intereses respecto a productos/servicios (cuando nos dices cuáles son o cuando los deducimos de lo que sabemos sobre ti); Datos de navegación en la plataforma/sitio: información sobre tus visitas y actividades, incluyendo el contenido (y cualquier anuncio) con el que visualizas e interactúas, información sobre el navegador y dispositivo que estás utilizando, tu dirección IP, tu ubicación, la dirección del sitio web desde el cual llegaste. Parte de esta información se recopila utilizando nuestras Herramientas de Recolección Automática de Datos, que incluyen cookies, web beacons y enlaces web incrustados. Para saber más, lee cómo utilizamos Herramientas de Recolección Automática de Datos en la sección 7 a continuación; Datos anónimos o agregados: respuestas anónimas a encuestas o información anónima y agregada sobre cómo se utiliza la plataforma/sitio. Durante nuestras operaciones, en ciertos casos, aplicamos un proceso de desidentificación o pseudonimización a tus datos para que sea razonablemente improbable que te identifiques a ti mismo a través del uso de estos datos con la tecnología disponible; Otra información que podemos recopilar: información que no revele específicamente tu identidad o que no esté directamente relacionada con un individuo, tales como información sobre navegador y dispositivo; datos de uso de la plataforma/sitio; e información recopilada a través de cookies, pixel tags y otras tecnologías. No recopilamos Datos Personales Sensibles."
        },
        {
          title: "Sección 5 – Compartir Datos Personales con Terceros",
          description: "Podemos compartir tus Datos Personales: Con empresas socias que selecciones u optes por enviar tus datos, dudas, preguntas, etc., así como con proveedores de servicios o socios para gestionar o apoyar ciertos aspectos de nuestras operaciones comerciales en nuestro nombre. Estos proveedores de servicios o socios pueden estar ubicados en Estados Unidos, Argentina, Brasil u otros lugares globales, incluyendo servidores para homologación y producción, y proveedores de servicios de alojamiento y almacenamiento de datos, gestión de fraudes, soporte al cliente, ventas en nuestro nombre, cumplimiento de pedidos, personalización de contenido, actividades de publicidad y marketing (incluyendo publicidad digital y personalizada) y servicios de TI, por ejemplo; Con terceros, con el objetivo de ayudarnos a gestionar la plataforma/sitio; Con terceros, en caso de cualquier reorganización, fusión, venta, joint venture, cesión, transmisión o transferencia de toda o parte de nuestra empresa, activo o capital (incluyendo los relativos a quiebra o procesos similares)."
        },
        {
          title: "Sección 6 – Transferencias Internacionales de Datos",
          description: "Datos Personales e información de otras naturalezas recopiladas por nosotros pueden ser transferidos o accedidos por entidades pertenecientes al grupo corporativo de las empresas socias en todo el mundo de acuerdo con esta Política de Privacidad."
        },
        {
          title: "Sección 7 – Recolección Automática de Datos Personales",
          description: "Cuando visitas la plataforma/sitio, puede almacenar o recuperar información en tu navegador, principalmente en forma de cookies, que son archivos de texto que contienen pequeñas cantidades de información. Esta información puede ser sobre ti, tus preferencias o tu dispositivo y se utiliza principalmente para que la plataforma/sitio funcione como esperas. La información generalmente no te identifica directamente, pero puede ofrecer una experiencia en internet más personalizada. De acuerdo con esta Política de Privacidad, nosotros y nuestros proveedores de servicios terceros, con tu consentimiento, podemos recopilar tus Datos Personales de diversas formas, incluyendo, entre otros: A través del navegador o dispositivo: parte de la información se recopila por la mayoría de los navegadores o automáticamente a través de dispositivos de acceso a internet, como tipo de computadora, resolución de pantalla, nombre y versión del sistema operativo, modelo y fabricante del dispositivo, idioma, tipo y versión del navegador de Internet que estás utilizando. Podemos utilizar esta información para asegurar que la plataforma/sitio funcione adecuadamente. Uso de cookies: información sobre tu uso de la plataforma/sitio puede ser recopilada por terceros a partir de cookies. Las cookies son información almacenada directamente en la computadora que estás utilizando. Las cookies permiten la recopilación de información tales como tipo de navegador, tiempo dedicado en la plataforma/sitio, páginas visitadas, preferencias de idioma, y otros datos de tráfico anónimos. Nosotros y nuestros proveedores de servicios utilizamos información para protección de seguridad, para facilitar la navegación, exhibir información de modo más eficiente, y personalizar tu experiencia al utilizar la plataforma/sitio, así como para rastreo online. También recopilamos información estadística sobre el uso de la plataforma/sitio para mejora continua de nuestro diseño y funcionalidad, para entender cómo se utiliza la plataforma/sitio y para ayudarte a resolver cuestiones relativas a la plataforma/sitio. Si no deseas que tu información sea recopilada a través de cookies, hay un procedimiento simple en la mayoría de los navegadores que permite que las cookies sean automáticamente rechazadas, o ofrece la opción de aceptar o rechazar la transferencia de una cookie (o cookies) específica(s) de un sitio determinado a tu computadora. Sin embargo, esto puede generar inconvenientes en el uso de la plataforma/sitio. Las definiciones que elijas pueden afectar tu experiencia de navegación y el funcionamiento que exige el uso de cookies. En este sentido, rechazamos cualquier responsabilidad por las consecuencias resultantes del funcionamiento limitado de la plataforma/sitio provocado por la desactivación de cookies en tu dispositivo (incapacidad de definir o leer una cookie). Uso de pixel tags y otras tecnologías similares: pixel tags (también conocidos como Web beacons y GIFs invisibles) pueden ser utilizados para rastrear acciones de usuarios de la plataforma/sitio (incluyendo destinatarios de correos electrónicos), medir el éxito de nuestras campañas de marketing y recopilar datos estadísticos sobre el uso de la plataforma/sitio y tasas de respuesta, y para otros fines no especificados. Podemos contratar empresas de publicidad comportamental, para obtener reportes sobre los anuncios de la plataforma/sitio en toda la internet. Para esto, estas empresas utilizan cookies, pixel tags y otras tecnologías para recopilar información sobre tu utilización, o la utilización de otros usuarios, de nuestra plataforma/sitio y de sitios de terceros. No somos responsables por pixel tags, cookies y otras tecnologías similares utilizadas por terceros."
        },
        {
          title: "Sección 8 – Categorías de Cookies",
          description: "Las cookies utilizadas en nuestra plataforma/sitio están de acuerdo con los requisitos legales y están enmarcadas en las siguientes categorías: Estrictamente necesarias: estas cookies permiten que navegues por el sitio y disfrutes de funciones esenciales con seguridad. Un ejemplo son las cookies de seguridad, que autentican a los usuarios, protegen tus datos y evitan la creación de inicios de sesión fraudulentos. Rendimiento: las cookies de esta categoría recopilan información de forma codificada y anónima relacionada con nuestra plataforma/sitio virtual, como, por ejemplo, el número de visitantes de una página específica, origen de las visitas al sitio y cuáles páginas accedió el usuario. Todos los datos recopilados se utilizan únicamente para eventuales mejoras en el sitio y para medir la eficacia de nuestra comunicación. Funcionalidad: estas cookies se utilizan para recordar definiciones de preferencias del usuario con el objetivo de mejorar tu visita en nuestro sitio, como, por ejemplo, configuraciones aplicadas en el layout del sitio o tus respuestas para pop-ups de promociones y registros -; de esta forma, no será necesario preguntar innumerables veces. Publicidad: utilizamos cookies con el objetivo de crear campañas segmentadas y entregar anuncios de acuerdo con tu perfil de consumo en nuestra plataforma/sitio virtual."
        },
        {
          title: "Sección 9 – Derechos del Usuario",
          description: "Puedes, en cualquier momento, requerir: (i) confirmación de que tus Datos Personales están siendo tratados; (ii) acceso a tus Datos Personales; (iii) correcciones a datos incompletos, inexactos o desactualizados; (iv) anonimato, bloqueo o eliminación de datos innecesarios, excesivos o tratados en desconformidad con lo dispuesto en ley; (v) portabilidad de Datos Personales a otro prestador de servicios, siempre que no afecte nuestros secretos industriales y comerciales; (vi) eliminación de Datos Personales tratados con tu consentimiento, en la medida del permitido en ley; (vii) información sobre las entidades a las cuales tus Datos Personales han sido compartidos; (viii) información sobre la posibilidad de no proporcionar el consentimiento y sobre las consecuencias de la negativa; e (ix) revocación del consentimiento. Tus pedidos serán tratados con especial cuidado para que podamos asegurar la eficacia de tus derechos. Se te puede pedir que pruebes tu identidad de modo a asegurar que la compartición de Datos Personales sea únicamente hecha con su titular. Debes tener en mente que, en ciertos casos (por ejemplo, debido a requisitos legales), tu pedido puede no ser inmediatamente satisfecho, además de que nosotros podemos no conseguir atenderlo por cuenta de cumplimiento de obligaciones legales."
        },
        {
          title: "Sección 10 – Seguridad de los Datos Personales",
          description: "Buscamos adoptar las medidas técnicas y organizacionales previstas en las Leyes de Protección de Datos adecuadas para la protección de los Datos Personales en nuestra organización. Lamentablemente, ninguna transmisión o sistema de almacenamiento de datos tiene la garantía de ser 100% seguro. Si tienes motivos para creer que tu interacción con nosotros se ha vuelto insegura (por ejemplo, si crees que la seguridad de cualquiera de tus cuentas ha sido comprometida), favor notificarnos inmediatamente."
        },
        {
          title: "Sección 11 – Enlaces de Hipertexto a Otros Sitios y Redes Sociales",
          description: "La plataforma/sitio puede, de tiempos en tiempos, contener enlaces de hipertexto que te redirigirán a sitios de nuestros socios, anunciantes, proveedores, etc. Si haces clic en uno de estos enlaces para cualquiera de estos sitios, recuerda que cada sitio posee sus propias prácticas de privacidad y no somos responsables por estas políticas. Consulta las referidas políticas antes de enviar cualquier Dato Personal a estos sitios. No nos responsabilizamos por las políticas y prácticas de recolección, uso y divulgación (incluyendo prácticas de protección de datos) de otras organizaciones, tales como Facebook, Apple, Google, Microsoft, o cualquier otro desarrollador de software o proveedor de aplicación, plataforma/sitio de medio social, sistema operativo, prestador de servicios de internet inalámbrico o fabricante de dispositivo, incluyendo todos los Datos Personales que divulgas a otras organizaciones a través de las aplicaciones, relacionadas a tales aplicaciones, o publicadas en nuestras páginas en medios sociales. Recomendamos que te informes sobre la política de privacidad de cada sitio visitado o prestador de servicio utilizado."
        },
        {
          title: "Sección 12 – Actualizaciones de esta Política de Privacidad",
          description: "Si modificamos nuestra Política de Privacidad, publicaremos el nuevo texto en la plataforma/sitio, con la fecha de revisión actualizada. Podemos alterar esta Política de Privacidad en cualquier momento. Caso haya alteración significativa en los términos de esta Política de Privacidad, podemos informarte por medio de las informaciones de contacto que tengamos en nuestro banco de datos o por medio de notificación en nuestra plataforma/sitio. Recordamos que tenemos como compromiso no tratar tus Datos Personales de forma incompatible con los objetivos descritos arriba, excepto si de otra forma requerido por ley u orden judicial. Tu utilización de la plataforma/sitio después de las alteraciones significa que aceptaste las Políticas de Privacidad revisadas. Caso, después de la lectura de la versión revisada, no estés de acuerdo con sus términos, favor cesar el acceso a la plataforma/sitio."
        },
        {
          title: "Sección 13 – Encargado del Tratamiento de los Datos Personales",
          description: "Caso pretendas ejercer cualquiera de los derechos previstos, inclusive retirar tu consentimiento, en esta Política de Privacidad y/o en las Leyes de Protección de Datos, o resolver cualquier duda relacionada al Tratamiento de tus Datos Personales, favor contactarnos en contato@untidigital.com.br."
        }
      ]
    },
    businessPolicy: {
      eyebrow: "Gobernanza",
      title: "Política Empresarial",
      description: "Unti Digital, referencia en el escenario de Inteligencia Digital y Web, reafirma su compromiso con la excelencia y la satisfacción del cliente al presentar su política empresarial. Esta política está delineada para establecer estándares claros, promoviendo transparencia, eficiencia e integridad en todas las interacciones comerciales. Con la visión de atender las crecientes demandas del mercado, Unti Digital busca, a través de esta política, crear una base sólida para relaciones comerciales éticas y exitosas.",
      seoTitle: "Política Empresarial | UNTI Digital",
      seoDescription: "Conozca los principios de gobernanza y operación de UNTI Digital.",
      sections: [
        {
          title: "Horario de Funcionamiento",
          description: "La empresa estará disponible para atención de lunes a viernes, en el horario de 9h a 18h."
        },
        {
          title: "Tiempo de Respuesta",
          description: "Mensajes recibidos vía WhatsApp serán tratados con la debida atención y respondidos en hasta dos horas. Correos electrónicos serán analizados cuidadosamente, con respuestas garantizadas en un plazo máximo de 8 horas. La atención exclusiva ocurrirá durante el horario comercial, asegurando una respuesta ágil y especializada."
        },
        {
          title: "Plazos para Entregas",
          description: "Ajustes simples en sitios serán completados en hasta 5 días hábiles, garantizando agilidad y eficacia. Proyectos de creación de sitios tendrán plazos variables, de 5 a 60 días hábiles, dependiendo de la complejidad y alcance. El desarrollo de aplicaciones demandará un plazo superior a 60 días hábiles, considerando la atención a los detalles y la calidad del producto final."
        },
        {
          title: "Pagos",
          description: "Multas e intereses relativos a pagos serán explicitados detalladamente en el contrato, asegurando transparencia en las relaciones comerciales. Proyectos y servicios con más de 3 meses de atraso en el pago serán discontinuados, resguardando la salud financiera de la empresa y manteniendo la calidad de los servicios prestados."
        },
        {
          title: "Ajuste Anual de Pagos",
          description: "El ajuste anual de pagos será realizado anualmente en el mes de marzo, contemplando un incremento de 10% basado en el valor actual. Esta práctica visa acompañar los cambios en el mercado y garantizar la sostenibilidad financiera de Unti Digital."
        },
        {
          title: "Nuevos Servicios a Partir de Junio de 2024",
          description: "A partir de junio de 2024, Unti Digital expandirá su gama de servicios para incluir: Creación de aplicaciones institucionales. Desarrollo de sistemas web. Gestión de aplicaciones y sistemas web. Integraciones para sitios. Integración con ZAPIER. Alojamiento de sitios. Alojamiento de correos electrónicos."
        },
        {
          title: "Servicios Descontinuados a Partir de Junio de 2024",
          description: "Con el objetivo de optimizar nuestros recursos y enfocarnos en áreas estratégicas, a partir de junio de 2024, los siguientes servicios serán descontinuados: Gestión de alojamientos. Gestión de correos electrónicos. Gestión de dominios. Servicios de suscripciones de correos electrónicos. Servicios de gestión de planillas."
        },
        {
          title: "Compromiso con la Excelencia",
          description: "Unti Digital, por medio de esta política, refuerza su compromiso con la excelencia, innovación y atención efectiva. Estamos confiados de que estas directrices no solo fortalecerán nuestra posición en el mercado, sino que también proporcionarán a nuestros clientes la confianza necesaria para establecer asociaciones duraderas. Al adoptar prácticas éticas, transparentes y centradas en el cliente, Unti Digital busca continuar liderando el sector de Inteligencia Digital y Web, proporcionando soluciones de calidad y construyendo relaciones comerciales sólidas y confiables."
        }
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
