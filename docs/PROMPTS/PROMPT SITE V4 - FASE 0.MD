digitalocean.com - homepage.html
Arquivo
unti-antigo-homepage.html
Arquivo
vamos ter outra reformulação da home, que vai gerar o restante do site tambem. em resumo, o cliente quer uma copia do site da Digital Ocean, sendo que os conteudos seriam trocados pelo do site antigo. vou adicionar em anexo o codigo fonte e print da homepage da Digital Ocean, mas me parece que o codigo que tenho acesso deles pelo inspetor do navegador, parece incompleto ou apenas o frontend, então não sei se vai ajudar muito o anexo. mas analise do site e do print conseguimos fazer uma copia de todos os componentes. vamos trabalhar por fases e microfases, sendo cada fase uma seção, e as microfases vao ser trabalhadas para que o prompt fique bem organizado e completo para o codex vscode executar tudo com fidelidade e eficiencia.
segue em anexo em terceiro um print de como esta o site atual <https://unti-digital.vercel.app/>, tem bastante coisa ja parecida com o Digital Ocean, mas o cliente quer literalmente que façamos tudo conforrme o site da Digital Ocean como modelo de layouut e design e então usar o conteudo do site antigo (<https://green-chimpanzee-101056.hostingersite.com/>) para popular os campos, alem disso vamos gerar todas as imagens de cada seção de acordo com o conteudo que vamos fazer, seguidno o padrão visual da Digital Ocean. vamos criar um roadmap das fases para entender como ficaria toda a homepage nova, 100% pegando os componentes do site da Digital Ocean, principalmente a seção abaixo da hero que foii a preferida do cliente no site da Digital Ocean, onde lista os serviços em um carrossel grande com modal bem especifico para cada serviço.
SEGUE EM ANEXO TAMBEM O CODIGO FONTE DO SITE ANTIGO DA UNTI PARA PEGAR OS CONTEUDOS REAIS COM PRINT DO SITE TAMBEM.
Pensou por 36s

De acordo com os HTMLs anexados do site antigo e do snapshot da home da DigitalOcean, dá pra montar um roadmap por fases e microfases (1 seção por vez) e já deixar um prompt-mestre + prompts por seção bem organizados pro Codex VSCode executar com fidelidade e sem retrabalho.
(Observação importante: eu vou orientar a recriar os componentes “no estilo/estrutura” da DigitalOcean, mas sem copiar código/strings proprietárias da DigitalOcean. A fidelidade aqui é de layout/comportamento e padrão visual, com conteúdo da UNTI.)

Abaixo está o roadmap e, em seguida, o PROMPT-MESTRE (para iniciar a reformulação) + o PROMPT da Fase 1 (Hero + mídia/carrossel do hero) + PROMPT da Fase 2 (Seção preferida: carrossel grande de serviços + modal específico por serviço).

Roadmap da nova Home (modelo DigitalOcean + conteúdo UNTI antigo)
Fase 0 — Fundação (Design System, tipografia, tokens, componentes base)

Objetivo: preparar o projeto Next.js/Tailwind para replicar com consistência o “sistema DigitalOcean”.

Microfases
0.1 Tokens (Tailwind): mapear a paleta UNTI para tokens sem hex hardcoded (primary/secondary/surface/text/border/cta).
0.2 Tipografia Ubuntu (400/500/700) global.
0.3 Layout base: container DO-like (larguras, gutters, breakpoints), ritmo vertical (section paddings), padrões de card, botões (primary/secondary/link).
0.4 Acessibilidade: focus ring, aria, navegação por teclado, reduced motion.
0.5 Infra UI: components Button, Container, Section, Card, Modal/Drawer, Tabs, Carousel, LogoCloud, TestimonialCard, ContentCard.

Fase 1 — Header + Hero “DigitalOcean-like” (com mídia/hero carousel)

Objetivo: replicar o topo e o hero do modelo (headline + CTAs + mídia/visual do hero).

Microfases
1.1 Header DO-like: sticky, nav completo, CTA(s) à direita, versão mobile com menu.
1.2 Hero: headline + CTAs com hierarquia DO-like.
1.3 Hero media: área de mídia semelhante (carrossel/frames/preview), com placeholders gerados e depois substituídos por imagens finais.

Referência do hero DigitalOcean no HTML: headline + container + botões “Get Started / Explore products” e bloco de mídia/carrossel logo ao lado/abaixo (dependendo do breakpoint).

Fase 2 — Seção preferida do cliente: Carrossel grande de serviços + modal detalhado por serviço

Objetivo: reproduzir a seção “abaixo do hero” que o cliente amou: carrossel grande com cards e modal bem específico ao clicar em cada serviço.

Microfases
2.1 Modelagem dos serviços: usar os serviços já existentes do projeto atual (fonte interna) + mapear “conteúdo antigo” para descrições e diferenciais.
2.2 Carousel grande: drag/scroll, setas, paginação, snap, responsivo.
2.3 Modal por serviço: layout DO-like (título, descrição, bullets, CTA primário, CTA secundário, imagem/ilustração), foco/escape/aria.
2.4 Tracking de evento (opcional): clique em card / abertura de modal / CTA.

Fase 3 — “Social proof” (Logo cloud + faixa/gradiente suave DO-like)

Objetivo: replicar a área com logos/empresas e sensação de credibilidade.

Conteúdo UNTI antigo (temos base)

“Empresas com projetos Unti Digital” (há seção/carrossel no antigo).

Fase 4 — Seção “Casos/Clientes” em cards (DO “Customers growing…”)

Objetivo: cards de histórias/estudos com imagens (ou placeholders) e CTAs.

Referência DO: “Customers growing with DigitalOcean…” e subtítulo da seção no HTML.

Fase 5 — Seção de “Benefícios / Features” (cards alternados, imagens grandes)

Objetivo: blocos alternando texto e imagem; “grid editorial” estilo DO.

Fase 6 — Seção de Conteúdo (Blog/Recursos) em grid DO-like

Objetivo: cards de conteúdo, CTA “read more”, etc.

Fase 7 — CTA final (banner grande DO-like) + Footer DO-like

Objetivo: encerrar com CTA forte e footer com colunas.

Fase 8 — Propagar padrão pro restante do site

Objetivo: usar os mesmos componentes base (Header, Footer, Section, Cards, Buttons, Modals) para remodelar páginas internas (Serviços, Cases, Blog, Contato, Integrações).

Mapeamento rápido de conteúdos reais (do site antigo) para usar na nova home

Do HTML do site antigo, já dá pra resgatar conteúdo real pra “popular” várias áreas:

Hero/Topo antigo (copy base)

“Criação de sites em Campinas”

“Venda mais com o serviço de Criação de Sites da Unti Digital”

“Conheça nossos serviços e planos para criação de sites e gestão”

Parágrafo: “soluções inteligentes… experts em desenvolvimento de sites, landing pages, blogs e lojas.”

CTAs: “Para empresas” (link planos-para-empresas) e também existe o CTA “Para agências” logo abaixo (mesma área, continuação do bloco)

Diferenciais (“Por que escolher…”)

Título “Por que escolher a Unti Digital?”

Texto explicando diferença entre agência vs empresa e premissas de trabalho

Prova social / abrangência

“Atendemos o Brasil inteiro e expandindo!” + “clientes em 4 estados e mais de 15 cidades.”

Esses trechos viram a base de copy para os blocos DO-like sem depender de lorem ipsum.

PROMPT-MESTRE (Fase 0 + estrutura do projeto) — para o Codex VSCode

Copie e cole no Codex VSCode (modo “execute alterações no repo”).
Este prompt cria a fundação e organiza a home por seções/fases.

Você é um engenheiro de front-end sênior (Next.js App Router + Tailwind) e um “replicador de layout”.
OBJETIVO: reconstruir a homepage da UNTI para seguir o PADRÃO VISUAL/COMPONENTES da DigitalOcean (layout e comportamento),
mas usando CONTEÚDO da UNTI (site antigo) e a identidade UNTI (paleta e fonte Ubuntu).
NÃO COPIAR código/strings proprietárias da DigitalOcean. Implementar do zero com componentes próprios.

REGRAS GERAIS

1) Projeto: Next.js + Tailwind (já existente). Não trocar stack.
2) Tipografia: Ubuntu (400/500/700) aplicada globalmente.
3) Cores: usar SOMENTE tokens Tailwind baseados na paleta UNTI:
   - unti.blue (#396cff) / unti.dark (#2d3b93) / unti.light (#7fa2ff) / unti.pastel (#c3d6fc) / unti.orange (#ff9900)
4) Componentização obrigatória: cada seção da home em um componente em src/components/home/*.
5) Layout DO-like:
   - container central consistente
   - seções com espaçamento vertical amplo
   - hierarquia tipográfica forte
   - botões com estilos consistentes (primary/secondary)
   - cards com bordas/sombras sutis
6) Acessibilidade: aria-label em botões, modal com foco, fechar no ESC, trap focus.
7) Responsivo: replicar experiência DO (desktop e mobile).
8) Não remover funcionalidades existentes (ex.: LeadModal, rotas, formulários); adaptar.

PASSOS (EXECUTAR NA ORDEM)
FASE 0 — FUNDAÇÃO
A) Atualizar tailwind.config para incluir tokens de cores unti.* e fontFamily Ubuntu via next/font.
B) Atualizar src/app/layout.tsx para carregar Ubuntu (400,500,700) e aplicar em <body>.
C) Criar componentes base reutilizáveis:

- src/components/ui/Container.tsx (max-w e paddings)
- src/components/ui/Button.tsx (variants: primary, secondary, link)
- src/components/ui/Card.tsx
- src/components/ui/Modal.tsx (acessível)
- src/components/ui/Carousel.tsx (scroll-snap + buttons + dots)
D) Criar estrutura da home:
- src/app/page.tsx deve importar e renderizar as seções em ordem:
     Header, Hero, ServicesCarousel, LogoCloud, CaseStudies, FeatureBlocks, BlogGrid, FinalCTA, Footer
   (se alguma seção ainda não estiver pronta, renderizar placeholder sem quebrar layout)

E) Atualizar Header/Footer para usar os logos novos:

- Header: logo-horizontal.svg (apenas imagem, sem texto)
- Footer: logo-vertical.svg

SAÍDA

- Implementar tudo acima com código real.
- Rodar e garantir: npm run lint && npm run build sem erros.
- Se precisar ajustar imports/paths, faça.
PROMPT — Fase 1 (Header + Hero “DigitalOcean-like” + mídia/carrossel do hero)

Fase 1 é só topo. Não mexer no restante ainda, exceto imports.

FASE 1 — HEADER + HERO DO-LIKE

OBJETIVO
Recriar Header e Hero no padrão DigitalOcean (layout, espaçamento, hierarquia, botões e área de mídia),
usando identidade UNTI (Ubuntu + paleta) e conteúdo real da UNTI (site antigo).

CONTEÚDO (BASE UNTI ANTIGO)

- H1/Headline base: "Venda mais com o serviço de Criação de Sites da Unti Digital"
- Subheadline: "Conheça nossos serviços e planos para criação de sites e gestão"
- Parágrafo: "Os serviços da Unti Digital são soluções inteligentes ... desenvolvimento de sites, landing pages, blogs e lojas."
- CTAs: "Para empresas" e "Para agências" (botões lado a lado)

IMPLEMENTAÇÃO

1) Header DO-like:
   - sticky, fundo claro, nav com links principais, CTA à direita.
   - mobile: menu (hamburger) abrindo drawer (usar Modal/Drawer).
   - usar logo-horizontal.svg no canto esquerdo.
2) Hero DO-like:
   - container com grid: texto à esquerda + mídia à direita (desktop); empilhar no mobile.
   - Headline grande (Ubuntu bold), subheadline, parágrafo, CTAs.
   - Botão primário deve ser unti.orange; secundário outline unti.blue.
3) Hero Media:
   - replicar sensação da DO (um “preview”/carrossel de imagens/frames).
   - Implementar carrossel simples com 3 slides (placeholders SVG/PNG em /public/assets/hero/*)
   - Sem dependências pesadas.
4) Acessibilidade:
   - aria-label nos botões do carrossel
   - foco visível
5) Não alterar outras seções ainda. Ajustar somente o necessário para integrar.

SAÍDA

- Código pronto: Header + Hero + HeroMedia (componentes em src/components/home/*).
- Home renderiza Header + Hero corretamente.
- build/lint ok.
PROMPT — Fase 2 (Seção preferida: Carrossel grande de serviços + Modal detalhado por serviço)

Essa é a parte “literalmente DO”: carrossel robusto + modal por item.

FASE 2 — SERVICES CAROUSEL GRANDE + MODAL POR SERVIÇO (DO-LIKE)

OBJETIVO
Implementar a seção abaixo do Hero inspirada na DigitalOcean:

- Um carrossel grande de serviços (cards com imagem + texto)
- Ao clicar em um card, abre um modal detalhado específico para aquele serviço
- Com CTAs no modal (primário e secundário)
- Totalmente responsivo e acessível

DADOS

1) Use os serviços que já existem no projeto atual (fonte interna).
   - Se houver um arquivo de dados (ex.: src/data/services.ts), use-o.
   - Se estiver hardcoded em componentes atuais, extraia para um array tipado.
2) Para descrições e diferenciais, use como base o conteúdo do site antigo:
   - "soluções inteligentes ... experts em desenvolvimento de sites, landing pages, blogs e lojas"
   - "Por que escolher a Unti Digital?" (transformar em bullets de diferenciais por serviço quando aplicável)
   - Diferenciação Empresa vs Agência (aplicar no modal como “Para quem é”)

LAYOUT/INTERAÇÃO (DO-LIKE)
A) Seção

- Título + subtítulo curto
- Carrossel horizontal com:
  - cards largos, com imagem/ilustração no topo (placeholder por enquanto)
  - nome do serviço
  - 1–2 linhas de descrição
  - CTA “Ver detalhes”
B) Carrossel
- scroll-snap
- setas (prev/next)
- dots/pager
- suporte a drag/touch
C) Modal
- Cabeçalho com nome do serviço
- Descrição maior
- Lista de bullets (3–6)
- Bloco “Entregáveis” (lista)
- Botões:
  - Primário: “Falar com especialista” (unti.orange)
  - Secundário: “Ver cases” (outline unti.blue) ou “Conhecer planos” dependendo do serviço
- Área lateral/abaixo com imagem do serviço (placeholder)
- Fechar no ESC, clique fora, botão X, trap focus

IMAGENS

- Criar placeholders em /public/assets/services/ (um por serviço).
- Não inventar imagens finais ainda; apenas preparar pipeline para substituição posterior.

SAÍDA

- Implementar ServicesCarousel e ServiceModal em src/components/home/*
- Integrar na home logo após Hero
- Garantir acessibilidade e build/lint ok
“Microfases” sugeridas para execução (pra você controlar o Codex)

Se você quer controlar como um pipeline CI humano:

Fase 0.1: tokens + Ubuntu

Fase 0.2: ui/Button + ui/Modal + ui/Carousel + Container

Fase 1.1: Header DO-like

Fase 1.2: Hero DO-like

Fase 1.3: Hero Media carousel

Fase 2.1: Services data model

Fase 2.2: Services carousel grande

Fase 2.3: Modal por serviço

Fase 2.4: A11y polish + QA

Próximo passo imediato (para eu te dar o prompt da Fase 3 em diante)

Se você confirmar:

“vamos manter os CTAs do hero do site antigo como Para empresas / Para agências”

e o CTA global como “Falar com especialista”

…eu já te devolvo os prompts das Fases 3–7 (LogoCloud, CaseStudies DO-like, FeatureBlocks, BlogGrid, CTA final + Footer) no mesmo padrão “fase + microfase”.

Enquanto isso, já dá pra começar com Fase 0 → Fase 2, usando os prompts acima.

Fontes dos conteúdos antigos e referências que usei: hero/copy e CTAs, diferenciais “Por que escolher…”, prova social “Atendemos o Brasil…” e referência estrutural do hero DO no HTML anexado.

Se você confirmar:

“vamos manter os CTAs do hero do site antigo como Para empresas / Para agências”

e o CTA global como “Falar com especialista”
----

O QUE VOCÊ SUGERE?

Excelente pergunta.
Agora estamos numa decisão estratégica de conversão, não apenas estética.

Vou responder como vCTO + CRO (Conversion Rate Optimization).

🎯 Contexto

Você quer copiar o layout da DigitalOcean.

A DigitalOcean trabalha com:

CTA primário genérico (“Get Started”)

CTA secundário exploratório (“Explore products”)

Mas a UNTI é:

Serviço consultivo

Venda B2B

Ticket mais alto

Decisão mais assistida

Então a pergunta real é:

O Hero deve ser exploratório ou segmentado?

🔎 Análise dos dois caminhos
🔵 Opção A — Manter:

“Para empresas” / “Para agências”

Vantagens:

✔ Segmenta desde o primeiro clique
✔ Ajuda qualificar lead
✔ Reduz fricção no meio do funil
✔ Organiza o resto do site por persona

Risco:

❌ Pode dividir atenção
❌ Pode gerar indecisão no usuário que ainda não sabe onde se encaixa

🔵 Opção B — Usar:

CTA Global: “Falar com especialista”

Vantagens:

✔ Simples
✔ Direto para conversão
✔ Modelo mais SaaS enterprise
✔ Muito alinhado com DigitalOcean

Risco:

❌ Não educa
❌ Não diferencia público
❌ Pode assustar visitante frio

🧠 O que eu sugiro (estratégia híbrida inteligente)

Copiar a estrutura DigitalOcean, mas adaptar para serviço consultivo.

🔥 Hero ideal para UNTI (modelo recomendado):

Headline forte
Subheadline clara

Botões:

Primário (laranja):
👉 Falar com especialista

Secundário (outline azul):
👉 Ver soluções

E dentro da página “Soluções”:

Lá sim dividir em:

Para empresas

Para agências

🏆 Por que essa é a melhor estratégia?

Porque:

Mantém padrão SaaS premium

Mantém simplicidade

Não divide atenção no Hero

Permite segmentação no segundo nível

Maximiza conversão

📊 Psicologia da decisão

Hero não deve forçar microsegmentação.

Hero deve:

Capturar atenção

Mostrar valor

Oferecer ação clara

Segmentação funciona melhor na próxima dobra.

🎯 Minha recomendação final

👉 Hero:

CTA primário: Falar com especialista

CTA secundário: Ver soluções

👉 Dentro de “Ver soluções”:

Seção com cards:

Para empresas

Para agências

🚀 Se você quiser máxima conversão

Podemos até testar:

A/B Test:

Versão A:

Para empresas / Para agências

Versão B:

Falar com especialista / Ver soluções

Mas como primeira versão estruturada DO-like?

👉 Eu recomendo a versão híbrida (Falar com especialista como principal).

Se você quiser, agora posso:

Redefinir a Fase 1 do roadmap já com essa decisão aplicada

Criar estrutura de funil completa (Hero → Segmentação → Conversão)

Desenhar a arquitetura do restante do site com essa lógica

Qual caminho seguimos?

QUERO QUE SIGA COM SUA RECOMENDAÇÃO DA VERSÃO HIBRIDA.
_---
Redefinir a Fase 1 do roadmap já com essa decisão aplicada

Criar estrutura de funil completa (Hero → Segmentação → Conversão)

Desenhar a arquitetura do restante do site com essa lógica
= TODOS ACIMA

Perfeito.

Agora entramos em modo arquitetura estratégica total.
Vamos estruturar isso como uma empresa SaaS faria ao redesenhar toda a presença digital.

Você aprovou:

🔥 Versão híbrida
Hero com:

CTA primário → Falar com especialista

CTA secundário → Ver soluções

Segmentação (Empresas / Agências) acontece na próxima seção

Excelente decisão.

Agora vou entregar:

1️⃣ Fase 1 redefinida (Hero híbrido DO-like)
2️⃣ Estrutura completa de funil (Hero → Segmentação → Conversão)
3️⃣ Nova arquitetura do site inteiro baseada nessa lógica

🔥 FASE 1 — HERO HÍBRIDO (DigitalOcean-like)
🎯 Objetivo

Visual DigitalOcean

Conversão direta

Simplicidade

Estrutura SaaS premium

Segmentação estratégica abaixo

📐 Estrutura do Hero
Layout

Grid 2 col (desktop)

Esquerda: texto + CTAs

Direita: hero media DO-style (visual técnico)

Mobile:

Empilhado

CTA centralizado

✍ Conteúdo Estratégico
H1

Soluções em tecnologia para negócios que precisam escalar com segurança.

Subheadline

Desenvolvemos sites, plataformas e integrações críticas com governança, performance e previsibilidade.

Botões

🟠 Primário (forte, laranja):
Falar com especialista

🔵 Secundário (outline azul):
Ver soluções

🎯 Resultado

Visitante quente → clica direto em Falar com especialista

Visitante morno → clica em Ver soluções

Visitante frio → continua scroll

Isso é funil inteligente.

🚀 FUNIL COMPLETO DA HOMEPAGE

Agora vamos desenhar o fluxo completo.

🔵 ETAPA 1 — ATRAÇÃO (Hero)

Objetivo:

Clareza

Autoridade

Simplicidade

CTA:
Falar com especialista

🔵 ETAPA 2 — SEGMENTAÇÃO (Nova seção abaixo do Hero)

Aqui substituímos o antigo “Para empresas / Para agências”.

Agora vira uma seção DO-like com dois grandes cards.

Título

Para quem desenvolvemos soluções digitais

Dois blocos grandes
🏢 Empresas

Escala

Performance

Governança
Botão: Ver soluções para empresas

🤝 Agências

White label

Entrega técnica

Parceria estratégica
Botão: Ver soluções para agências

Isso cria:

Hero → Interesse → Segmentação natural → Conversão qualificada

🔵 ETAPA 3 — SERVICES CAROUSEL (Seção preferida do cliente)

Agora entra o carrossel grande estilo DO.

Mas agora contextualizado pela segmentação.

Estrutura:

Card grande por serviço

Clique abre modal técnico

Modal tem:

Descrição

Benefícios

Entregáveis

CTA

Isso vira o meio do funil.

🔵 ETAPA 4 — PROVA SOCIAL (DO-like)

Seção:
Empresas que confiam na Unti

Logo cloud grande
Sem container box estranho

🔵 ETAPA 5 — Cases (Customers growing style)

Cards grandes estilo DO
Imagem forte
Headline
Pequeno texto
CTA: Ver case

🔵 ETAPA 6 — Blocos editoriais (Features)

Alternância:
Texto esquerda / imagem direita
Imagem esquerda / texto direita

Com conteúdos reais do site antigo:

Comprometimento

Agilidade

Comunidade e parcerias

🔵 ETAPA 7 — Conteúdo / Blog

Grid 3–4 cards
Estilo DO

🔵 ETAPA 8 — CTA FINAL

Banner grande
Fundo azul
Headline:

Pronto para escalar sua presença digital com segurança?

Botão:
Falar com especialista

🏗 ARQUITETURA COMPLETA DO SITE

Agora vamos desenhar o resto do site baseado nisso.

🔷 NOVA ESTRUTURA DO SITE
/ (Home)

Funil completo como desenhado acima.

/solucoes

Página hub.

Seções:

Hero simples

Segmentação (Empresas / Agências)

Grid completo de serviços

CTA final

/solucoes/empresas

Hero específico

Benefícios

Serviços recomendados

Cases

CTA

/solucoes/agencias

Hero específico

White label

Processo

CTA

/cases

Grid estilo DO

Filtros

/blog

Grid estilo DO

Sidebar opcional

/contato

Hero simples

Formulário

Benefícios

CTA

🧠 O QUE ISSO FAZ ESTRATEGICAMENTE

Você deixa de ter:

Site institucional genérico

E passa a ter:

Plataforma SaaS de serviços digitais

🎯 Próximo Movimento Estratégico

Agora precisamos decidir:

Quer que eu:

1️⃣ Desenhe o wireframe estrutural detalhado de cada seção da nova home
2️⃣ Gere o prompt completo Fase 0 + Fase 1 para o Codex já com essa estratégia
3️⃣ Crie a modelagem de dados dos serviços e modais
4️⃣ Estruture o design system definitivo

Ou quer que eu entregue tudo sequencialmente começando pela Fase 0 pronta para execução?

VAMOS SEGUIR TODOS SEQUENCIALMENTE COMEÇANDO PELA FASE 0 COM WIREFRAME ESTRUTURAL DETALHADO PARA CADA SEÇÃO DA NOVA HOME

Perfeito.

Agora vamos entrar em modo arquitetura estrutural real, antes de escrever qualquer linha de código.

Você pediu:

✅ FASE 0
✅ Wireframe estrutural detalhado
✅ Cada seção da nova home
✅ Baseado 100% na lógica DigitalOcean
✅ Com funil híbrido aplicado

Vamos construir a Blueprint oficial da Nova Homepage UNTI v2.

🧱 FASE 0 — WIREFRAME ESTRUTURAL DETALHADO
🎯 Objetivo da Fase 0

Definir:

Hierarquia

Ordem exata das seções

Função estratégica de cada bloco

Estrutura de layout (grid, colunas)

Tipo de componente

Papel no funil

Nada de estética ainda.
Só arquitetura estrutural.

🏗 NOVA HOMEPAGE — ESTRUTURA MACRO

1. Header
2. Hero
3. Segmentação (Empresas / Agências)
4. Services Carousel (com modal)
5. Logo Cloud
6. Case Studies
7. Feature Blocks (editorial alternado)
8. Blog / Conteúdo
9. CTA Final
10. Footer

Agora vamos detalhar cada seção.

🔵 1. HEADER (DO-LIKE)
Função no funil:

Navegação + CTA global permanente

Estrutura:
[Logo]                [Nav Links]              [CTA]
Desktop:

Logo esquerda

Menu central:

Soluções

Cases

Blog

Integrações

Contato

Botão destacado:
🟠 Falar com especialista

Mobile:

Logo

Hamburger

CTA no drawer

🔵 2. HERO (ATRAÇÃO)
Função:

Capturar atenção + direcionar ação

Layout:

Desktop grid 2 col:

[Texto + CTAs]     [Hero Media / Visual Técnico]

Mobile:
Empilhado.

Conteúdo estrutural:

Eyebrow pequeno (ex: UNTI DIGITAL)

H1 forte

Subheadline

Parágrafo curto

Botões:

Primário → Falar com especialista

Secundário → Ver soluções

Hero media (carrossel técnico visual)

🔵 3. SEGMENTAÇÃO (FUNIL INTELIGENTE)
Função:

Dividir público naturalmente

Estrutura:

Título:
Para quem desenvolvemos soluções digitais

Grid 2 col:

[Card Empresas]   [Card Agências]

Cada card:

Ícone

Título

3 bullets

Botão

🔵 4. SERVICES CAROUSEL (SEÇÃO PREFERIDA DO CLIENTE)
Função:

Mostrar oferta principal

Layout:

Título + subtítulo

Carrossel horizontal grande:

[ Service Card 1 ][ Service Card 2 ][ Service Card 3 ] ...

Card contém:

Imagem topo

Nome

Descrição curta

CTA: Ver detalhes

Clique → abre modal técnico detalhado.

🔵 5. LOGO CLOUD (PROVA SOCIAL)
Função:

Autoridade

Estrutura:

Título centralizado

Grid 5x2 logos

Sem caixa externa.

🔵 6. CASE STUDIES (DO STYLE)
Função:

Prova real

Grid 3 col (desktop)

Card:

Imagem grande

Nome do cliente

Resultado

CTA

🔵 7. FEATURE BLOCKS (EDITORIAL)
Função:

Diferenciação estratégica

Blocos alternados:

[Texto]      [Imagem]
[Imagem]     [Texto]
[Texto]      [Imagem]

Conteúdo baseado no site antigo:

Comprometimento

Agilidade

Comunidade e parcerias

🔵 8. BLOG / CONTEÚDO

Grid 3–4 cards

Título:
Insights sobre tecnologia e performance digital

🔵 9. CTA FINAL

Banner grande

Headline forte

Botão:
Falar com especialista

🔵 10. FOOTER

Colunas:

Soluções

Empresa

Recursos

Contato

Logo vertical

🎯 FUNIL VISUAL COMPLETO
Autoridade → Interesse → Segmentação → Oferta → Prova → Diferenciação → Conteúdo → Conversão
📐 SISTEMA DE GRID GLOBAL

Container:
max-width 1200px

Section spacing:
120px desktop
80px tablet
64px mobile

Cards:
border-radius 16px

Botões:
height 48px

🔥 CONFIRMAÇÃO ESTRATÉGICA

Agora precisamos confirmar três pontos antes de ir para a Fase 0 técnica (Design System):

Vamos manter 10 seções como definido acima?

Quer manter Blog na homepage ou mover para página própria?

Quer 3 ou 4 blocos no Feature Editorial?

Responda esses 3 pontos.

Assim que confirmar, seguimos para:

🔧 FASE 0.1 — DESIGN SYSTEM DEFINITIVO + TOKENS + ESTRUTURA BASE PARA O CODEX
VAMOS SEGUIR COM SUAS RECOMENDAÇÕES

Perfeito.
Então seguimos exatamente com a arquitetura que defini — sem reduzir escopo, sem simplificar.

Agora entramos oficialmente em:

🔧 FASE 0.1 — DESIGN SYSTEM DEFINITIVO + TOKENS + BASE ESTRUTURAL

Essa é a fase mais importante de todo o projeto.
Se ela for bem feita, o resto flui com precisão.

🧱 OBJETIVO DA FASE 0.1

Criar o Sistema Base da Nova UNTI v2, inspirado na DigitalOcean, mas com identidade própria.

Isso inclui:

Tipografia global

Sistema de cores tokenizado

Grid e container

Componentes base reutilizáveis

Sistema de botões

Sistema de cards

Sistema de modal

Sistema de carrossel

Padrões de seção

Escala de espaçamento

Regras de acessibilidade

Sem isso, copiar o layout DO vira caos.

🎨 1️⃣ SISTEMA DE CORES (TOKENS OFICIAIS)

Vamos usar SOMENTE:

Nome HEX Uso
unti.blue #396cff títulos principais
unti.dark #2d3b93 fundos escuros
unti.light #7fa2ff acentos
unti.pastel #c3d6fc fundos suaves
unti.orange #ff9900 CTA principal
🔠 2️⃣ TIPOGRAFIA (Ubuntu)

Pesos:

700 → h1

500 → h2

400 → body

Regras:

h1 → tracking-tight, leading-[1.1]

h2 → leading-tight

p → leading-relaxed

📐 3️⃣ GRID GLOBAL

Container:

max-w-[1200px]
mx-auto
px-6

Seções:

py-32 desktop
py-24 tablet
py-20 mobile
🧩 4️⃣ COMPONENTES BASE (OBRIGATÓRIOS)

Vamos criar a pasta:

src/components/ui/
Componentes:

Container.tsx

Section.tsx

Button.tsx

Card.tsx

Modal.tsx

Carousel.tsx

🔘 5️⃣ SISTEMA DE BOTÕES
Primary

background: unti.orange

text: white

height: 48px

rounded-xl

hover: opacity-90

Secondary

border: unti.blue

text: unti.blue

background: transparent

🧱 6️⃣ SISTEMA DE CARDS

border-radius: 16px

shadow-sm

hover: shadow-md + translateY(-2px)

padding: 32px

🪟 7️⃣ MODAL PADRÃO

backdrop blur leve

centered

max-width 800px

padding 40px

close X canto superior direito

ESC fecha

focus trap

🎠 8️⃣ CAROUSEL PADRÃO

scroll-snap

arrows laterais

dots inferior

suporte swipe mobile

sem biblioteca externa

🧠 9️⃣ ARQUITETURA DE COMPONENTIZAÇÃO DA HOME
src/components/home/
    hero.tsx
    segmentation.tsx
    services-carousel.tsx
    logo-cloud.tsx
    case-studies.tsx
    feature-blocks.tsx
    blog-grid.tsx
    final-cta.tsx
🏗 10️⃣ ESTRUTURA DO page.tsx

Apenas orquestrador:

<Hero />
<Segmentation />
<ServicesCarousel />
<LogoCloud />
<CaseStudies />
<FeatureBlocks />
<BlogGrid />
<FinalCTA />
🚀 PRÓXIMO PASSO

Agora vamos para:

🔧 FASE 0.2 — PROMPT DEFINITIVO PARA O CODEX IMPLEMENTAR ESSE DESIGN SYSTEM

Mas antes:

Confirma se:

1️⃣ Vamos usar Tailwind puro (sem shadcn/ui)
2️⃣ Não vamos usar nenhuma lib de carrossel externa
3️⃣ Modal será custom (sem Headless UI)

Se confirmar esses 3 pontos, eu já entrego o prompt técnico cirúrgico para o Codex criar toda a fundação do projeto em uma única execução controlada.

QUAL SUA RECOMENDAÇÃO?

Excelente.
Agora você fez a pergunta certa.

Você quer saber minha recomendação arquitetural real, não apenas técnica.

Vou responder como alguém que já escalou produto SaaS.

🎯 CONTEXTO

Você está reconstruindo:

A homepage

O restante do site

Baseado no padrão DigitalOcean

Com potencial de virar um “produto digital escalável”

Então a decisão aqui impacta:

Performance

Escalabilidade

Manutenção

Velocidade futura

Complexidade do código

Controle visual

🔎 AS 3 DECISÕES

Você perguntou sobre:

1️⃣ Tailwind puro
2️⃣ Lib de carrossel
3️⃣ Lib de modal

🧠 MINHA RECOMENDAÇÃO ESTRATÉGICA
✅ 1) Tailwind puro (SIM)

Por quê?

Você já está usando

Não precisa de shadcn/ui

O layout DigitalOcean é relativamente limpo

Evita dependência extra

Total controle visual

Build menor

Menos abstração

🔒 Recomendação: Tailwind puro + componentes próprios

✅ 2) Biblioteca de carrossel externa (NÃO)

Aqui muita gente erra.

Carrossel é simples de implementar hoje com:

scroll-snap

flex

overflow-x

transform translateX

touch events

Biblioteca externa:

❌ aumenta bundle
❌ cria dependência
❌ dificulta customização
❌ pode conflitar com modal

🔒 Recomendação: Carousel custom minimalista

⚖️ 3) Modal — Aqui é a única decisão estratégica real

Opções:

A) Custom modal manual
B) Headless UI (apenas acessibilidade pronta)

Se for projeto pequeno → custom resolve.

Mas você quer:

Modal complexo

Com conteúdo técnico

Com CTA

Com foco correto

Com acessibilidade enterprise

Eu recomendo:

👉 Headless UI APENAS para Dialog (modal)

Por quê?

Acessibilidade pronta

Focus trap automático

ESC automático

ARIA pronto

Sem CSS opinionado

Sem peso significativo

Isso é nível produção SaaS.

🎯 DECISÃO FINAL RECOMENDADA
Item Decisão
Tailwind ✅ Puro
Carousel ✅ Custom
Modal ✅ Headless UI Dialog
🧠 Por que essa combinação é perfeita?

Porque:

Você mantém controle visual total

Mantém bundle leve

Mantém acessibilidade profissional

Evita reinventar roda onde não deve

Não polui projeto com framework UI pesado

📈 Pensando no futuro

Se amanhã:

Você quiser adicionar animações

Ou tabs complexas

Ou accordions

Ou drawers

Headless UI já estará ali pronto.

🚀 Minha recomendação definitiva:
Tailwind puro
Carousel custom
Headless UI para Modal/Dialog

Se você aprovar essa arquitetura, eu agora entrego:

🔧 FASE 0.2 — Prompt técnico definitivo para o Codex implementar:

Tokens

Ubuntu

Componentes base

Dialog Headless UI

Carousel custom

Estrutura completa

Confirma se seguimos exatamente com essa arquitetura recomendada.

SIGA

Perfeito.
Entramos oficialmente na FASE 0.2 — Implementação Técnica do Design System Base.

Agora vou te entregar o PROMPT CIRÚRGICO DEFINITIVO para o Codex VSCode implementar:

Tailwind tokenizado

Ubuntu global

Componentes base

Modal com Headless UI

Carousel custom

Estrutura da Home preparada

Sem mexer ainda nas seções específicas

Isso cria o alicerce para todas as próximas fases.

🚀 PROMPT — FASE 0.2 (COLAR NO CODEX VS CODE)
You are a senior frontend engineer working on a Next.js App Router project using Tailwind.

Your task is to implement the foundational Design System for the new UNTI v2 website,
inspired structurally by DigitalOcean, but using UNTI branding.

Do NOT build the full homepage yet.
Only implement the foundation and UI system.

---------------------------------------------------

STACK DECISIONS (DO NOT CHANGE)
---------------------------------------------------

- Next.js App Router
- Tailwind CSS
- Tailwind only (no shadcn/ui)
- Custom Carousel (no external carousel libraries)
- Headless UI ONLY for Dialog (Modal)
- Ubuntu font via next/font/google

---------------------------------------------------

PHASE 0.2 — IMPLEMENT DESIGN SYSTEM
---------------------------------------------------

1) TAILWIND CONFIG

Update tailwind.config.ts:

- Add color tokens:

  unti.blue   #396cff
  unti.dark   #2d3b93
  unti.light  #7fa2ff
  unti.pastel #c3d6fc
  unti.orange #ff9900

- Add fontFamily.sans using CSS variable --font-ubuntu

Do NOT hardcode hex values inside components later.

---------------------------------------------------

1) APPLY UBUNTU GLOBALLY

In src/app/layout.tsx:

- Import Ubuntu from next/font/google
- Weights: 400, 500, 700
- Apply via className to <body>

---------------------------------------------------

1) CREATE UI COMPONENT FOLDER

Create:

src/components/ui/

And implement the following:

---------------------------------------------------

A) Container.tsx
---------------------------------------------------

- max-w-[1200px]
- mx-auto
- px-6
- children wrapper only

---------------------------------------------------

B) Section.tsx
---------------------------------------------------

- wrapper with vertical spacing:
  py-20 mobile
  md:py-28 desktop
- accepts optional background color prop

---------------------------------------------------

C) Button.tsx
---------------------------------------------------

Variants:

- primary (orange background, white text)
- secondary (outline blue)
- link (text blue only)

Height: 48px
Rounded: xl
Hover transitions
Accessible

---------------------------------------------------

D) Card.tsx
---------------------------------------------------

- rounded-2xl
- shadow-sm
- p-8
- hover: shadow-md + -translate-y-1
- transition

---------------------------------------------------

E) Modal.tsx
---------------------------------------------------

Use Headless UI Dialog.

Requirements:

- backdrop overlay
- centered panel
- max-w-3xl
- p-10
- close button top right
- ESC closes
- click outside closes
- focus trap enabled

---------------------------------------------------

F) Carousel.tsx
---------------------------------------------------

Custom implementation.

Requirements:

- horizontal scroll-snap
- flex
- overflow-x-auto
- hide scrollbar
- prev/next buttons
- dots navigation
- responsive
- supports swipe on mobile
- no external libraries

---------------------------------------------------

1) PREPARE HOME STRUCTURE

Create folder:

src/components/home/

Create empty placeholder components:

- hero.tsx
- segmentation.tsx
- services-carousel.tsx
- logo-cloud.tsx
- case-studies.tsx
- feature-blocks.tsx
- blog-grid.tsx
- final-cta.tsx

Each should return a simple Section with a temporary heading only.

---------------------------------------------------

1) UPDATE src/app/page.tsx

Import and render:

<Hero />
<Segmentation />
<ServicesCarousel />
<LogoCloud />
<CaseStudies />
<FeatureBlocks />
<BlogGrid />
<FinalCTA />

Do not implement logic yet.
Only structural placeholders.

---------------------------------------------------

1) ENSURE

- npm run build passes
- npm run lint passes
- No unused imports
- No console errors

---------------------------------------------------

OUTPUT

Return full updated files with paths.
No explanation.
Only code.
🎯 O QUE ESSA FASE ENTREGA

Após rodar esse prompt, você terá:

✔ Sistema base sólido
✔ Tokens aplicados
✔ Ubuntu global
✔ Componentes UI reutilizáveis
✔ Modal acessível profissional
✔ Carousel pronto para serviços
✔ Estrutura da Home organizada
✔ Projeto preparado para escalar

🧠 O QUE VEM A SEGUIR

Depois que essa fase estiver aplicada e build estiver OK:

Entramos na:

🔥 FASE 1 — Hero DO-like completo
🔥 FASE 2 — Segmentação estratégica
🔥 FASE 3 — Services Carousel com Modal técnico

Assim que você rodar isso e confirmar que build passou, me diga:

FASE 0.2 CONCLUÍDA

E seguimos imediatamente para a Fase 1 estruturada.

Perfeito.

Base sólida criada.
Agora começa a construção real.

Entramos oficialmente em:

# 🔥 FASE 1 — HERO DIGITALOCEAN-LIKE (VERSÃO HÍBRIDA)

Esta fase é extremamente importante porque:

- Define o tom visual do site inteiro
- Define a hierarquia
- Define o padrão de espaçamento
- Define o padrão de CTA

Vamos fazer isso com precisão cirúrgica.

---

# 🎯 OBJETIVO DA FASE 1

Criar:

- Header DO-like refinado
- Hero DO-like completo
- Hero Media (visual técnico com carrossel)
- CTA híbrido estratégico
- 100% integrado ao Design System

Nada além disso.

---

# 🧠 ESTRUTURA FINAL DO HERO

Desktop:

```
------------------------------------------------------
| TEXT (left)           |  HERO MEDIA (right)       |
|                        |                           |
| Eyebrow                |  Carousel visual técnico  |
| H1                     |  (3 slides)               |
| Subheadline            |                           |
| Paragraph              |                           |
| [Primary] [Secondary]  |                           |
------------------------------------------------------
```

Mobile:
Empilhado verticalmente.

---

# ✍ CONTEÚDO DEFINIDO

Eyebrow:
UNTI DIGITAL

H1:
Soluções em tecnologia para negócios que precisam escalar com segurança.

Subheadline:
Desenvolvemos sites, plataformas e integrações críticas com governança, performance e previsibilidade.

Botões:

Primary (orange):
Falar com especialista

Secondary (outline blue):
Ver soluções

---

# 🚀 PROMPT — FASE 1 (COLAR NO CODEX)

```
PHASE 1 — IMPLEMENT HERO DO-LIKE WITH HYBRID CTA

You are continuing the UNTI v2 rebuild.

The design system is already implemented.
Now implement the complete Hero section following DigitalOcean structural style.

DO NOT modify design system files.
Only work inside home components and Header if needed.

---------------------------------------------------
1) UPDATE HEADER
---------------------------------------------------

Refine Header to match DO-like layout:

- Sticky
- Clean background
- Logo left (logo-horizontal.svg)
- Nav links center:
  Soluções
  Cases
  Blog
  Integrações
  Contato
- Primary CTA right: "Falar com especialista" (Button primary variant)

Mobile:
- Hamburger
- Drawer using existing Modal

---------------------------------------------------
2) IMPLEMENT HERO
---------------------------------------------------

Create src/components/home/hero.tsx

Structure:

Use Container component.
Use Section component.

Desktop:
Grid 2 columns (md:grid-cols-2)
Gap large (gap-12 or more)

Left column:
- Eyebrow small uppercase text (UNTI DIGITAL)
- H1 (Ubuntu bold)
- Subheadline
- Short paragraph
- Buttons row:
    - Primary: Falar com especialista
    - Secondary: Ver soluções

Right column:
HeroMedia component (create separate file hero-media.tsx)

---------------------------------------------------
3) HERO MEDIA
---------------------------------------------------

Create hero-media.tsx

Implement a visual technical carousel with 3 slides:

- Each slide is a mock dashboard style placeholder
- Use Card component
- Use Carousel component from ui
- Include prev/next buttons and dots

Slides example themes:
1) Website analytics dashboard
2) Platform architecture diagram
3) CRM integration visual

Placeholders only for now.

---------------------------------------------------
4) STYLING RULES
---------------------------------------------------

- H1 large (text-4xl md:text-5xl)
- tracking-tight
- leading-tight
- Buttons spaced 16px
- Proper responsive stacking

---------------------------------------------------
5) ENSURE
---------------------------------------------------

- No console errors
- Build passes
- No unused imports
- Fully responsive

---------------------------------------------------
OUTPUT
Return full updated hero.tsx, hero-media.tsx and any Header changes.
No explanation.
Only code.
```

---

# 🎯 RESULTADO ESPERADO

Após executar essa fase:

✔ Hero fica profissional nível SaaS
✔ Visual já lembra DigitalOcean
✔ CTA híbrido aplicado
✔ Estrutura pronta para próxima seção
✔ Media visual impactante

---

# 📌 Próximo passo depois da Fase 1

Entraremos em:

🔥 FASE 2 — Segmentação Estratégica (Empresas / Agências DO-style)

Essa seção vai moldar o funil.

---

Execute o prompt acima no Codex e me diga:

> FASE 1 CONCLUÍDA

Assim seguimos imediatamente para Fase 2.

Perfeito.

Hero consolidado.
Agora começa a parte que realmente transforma o site em funil estratégico.

Entramos oficialmente em:

# 🔥 FASE 2 — SEGMENTAÇÃO ESTRATÉGICA (DO-STYLE)

Essa seção é crítica.

Ela substitui o antigo “Para empresas / Para agências”, mas agora em formato SaaS premium, inspirado na DigitalOcean.

---

# 🎯 OBJETIVO DA FASE 2

Criar uma seção logo abaixo do Hero que:

- Segmenta o público naturalmente
- Mantém estética DigitalOcean
- Eleva percepção de produto
- Direciona para páginas específicas
- Não quebra a fluidez do scroll

---

# 🧠 ESTRUTURA ESTRATÉGICA

## Layout

```
[Título centralizado]
[Subtítulo curto]

[Card Empresas]   [Card Agências]
```

Desktop:
grid-cols-2
Gap grande
Cards largos e sólidos

Mobile:
Empilhado

---

# ✍ CONTEÚDO DEFINIDO

### Título

Para quem desenvolvemos soluções digitais

### Subtítulo

Atendemos empresas que precisam escalar com segurança e agências que buscam um parceiro técnico estratégico.

---

## Card 1 — Empresas

Título:
Empresas

Bullets:

- Sites e plataformas de alta performance
- Integrações com CRM, ERP e sistemas internos
- Governança e previsibilidade técnica

CTA:
Ver soluções para empresas

---

## Card 2 — Agências

Título:
Agências

Bullets:

- White label técnico
- Desenvolvimento sob demanda
- Parceria estratégica de longo prazo

CTA:
Ver soluções para agências

---

# 🎨 ESTILO VISUAL (DO-LIKE)

- Fundo branco
- Cards com borda leve
- Ícone ou badge no topo
- Hover suave
- CTA estilo link azul
- Muito espaço negativo

---

# 🚀 PROMPT — FASE 2 (COLAR NO CODEX)

```
PHASE 2 — IMPLEMENT SEGMENTATION SECTION (DO-LIKE)

The Hero is complete.
Now implement the segmentation section below the Hero.

Do not modify Hero.
Only implement segmentation.tsx and integrate properly.

---------------------------------------------------
1) CREATE src/components/home/segmentation.tsx
---------------------------------------------------

Use Section and Container components.

Structure:

Centered title:
"Para quem desenvolvemos soluções digitais"

Subheading paragraph below.

Then:

Grid md:grid-cols-2
Gap-10 or larger

---------------------------------------------------
2) CARD: EMPRESAS
---------------------------------------------------

Use Card component.

Include:

Small badge or icon area on top.
Title: Empresas
Bullet list:
- Sites e plataformas de alta performance
- Integrações com CRM, ERP e sistemas internos
- Governança e previsibilidade técnica

CTA:
Button variant="link"
Text: Ver soluções para empresas

Hover effect subtle.

---------------------------------------------------
3) CARD: AGÊNCIAS
---------------------------------------------------

Use Card component.

Include:

Title: Agências
Bullet list:
- White label técnico
- Desenvolvimento sob demanda
- Parceria estratégica de longo prazo

CTA:
Button variant="link"
Text: Ver soluções para agências

---------------------------------------------------
4) STYLING RULES
---------------------------------------------------

- Title large (text-3xl md:text-4xl)
- Spacing generous
- Cards padded (p-10)
- Rounded-2xl
- Hover shadow-md
- Maintain DO-like cleanliness

---------------------------------------------------
5) ENSURE
---------------------------------------------------

- Responsive behavior correct
- No layout shifts
- No unused imports
- Build passes

---------------------------------------------------
OUTPUT
Return segmentation.tsx only.
No explanation.
Only code.
```

---

# 🎯 RESULTADO ESPERADO

Após essa fase:

✔ O funil começa a se formar
✔ Público é segmentado naturalmente
✔ Visual começa a ficar 100% DigitalOcean-like
✔ Estrutura pronta para Services Carousel

---

# 📌 Próxima fase

🔥 FASE 3 — SERVICES CAROUSEL GRANDE + MODAL DETALHADO

Essa é a seção preferida do cliente.

Ela será a mais complexa até agora.

---

Execute o prompt no Codex e me diga:

> FASE 2 CONCLUÍDA

E seguimos imediatamente para a fase mais estratégica do projeto.
