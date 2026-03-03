Perfeito. Vamos elevar a página /solucoes para o mesmo nível visual da nova Home — seguindo a lógica híbrida:

Estrutura e componentes inspirados na DigitalOcean
Conteúdo real da Unti
Ilustrações no padrão já criado
Funil claro (Segmentação → Autoridade → Conversão)

🚀 FASE SOLUÇÕES — ARQUITETURA COMPLETA

Vamos construir a página como uma landing estruturada, não apenas listagem.

🧱 ESTRUTURA ESTRATÉGICA DA PÁGINA /SOLUCOES
🔷 SEÇÃO 1 — HERO EDITORIAL

Estilo: DigitalOcean product page

Layout:

H1 forte

Subheadline

2 CTAs

Ilustração lateral (estilo DO)

Conteúdo sugerido:

H1:
Soluções digitais para empresas que precisam escalar com segurança

Sub:
Desenvolvimento, integrações e governança para negócios que não podem falhar.

CTAs:
[ Falar com especialista ]
[ Ver cases ]

🔷 SEÇÃO 2 — GRID DE SOLUÇÕES (ESTILO DIGITALOCEAN PRODUCTS)

Cards grandes com:

Ilustração

Título

Descrição

Link

Soluções:

Sites Institucionais de Alta Performance

Plataformas Web Sob Medida

Integrações com CRM e ERP

Governança e Segurança

Projetos White Label para Agências

Layout:
2 colunas desktop
1 coluna mobile

🔷 SEÇÃO 3 — SEGMENTAÇÃO (EMPRESAS / AGÊNCIAS)

Inspirado na Home, mas mais aprofundado.

Dois blocos com:

Empresas

Performance

Governança

Integração

Escalabilidade

Agências

White label

Execução técnica

Arquitetura robusta

Suporte contínuo

🔷 SEÇÃO 4 — DIFERENCIAL ESTRUTURAL (AUTORIDADE)

Blocos horizontais alternados (imagem + texto)

Metodologia estruturada

Arquitetura escalável

Times enxutos e especialistas

Mesmo padrão visual dos feature blocks da Home.

🔷 SEÇÃO 5 — CASES (MINI SHOWCASE)

Cards estilo DO:

Thumbnail

Título

Resultado

Link

3 cases principais.

🔷 SEÇÃO 6 — CTA FINAL

Bloco forte com fundo azul vibrante:

“Vamos estruturar sua próxima fase digital?”

Botão:
Falar com especialista

🎯 FLUXO DE CONVERSÃO

Hero
↓
Clareza de soluções
↓
Segmentação
↓
Autoridade
↓
Prova
↓
Conversão

Isso cria narrativa.

📦 PROMPT COMPLETO PARA CODEX (GERAR PÁGINA INTEIRA)

Cole no VSCode:

CREATE SOLUCOES PAGE — DO-STYLE STRUCTURE

Create a new page:

src/app/solucoes/page.tsx

Follow the same layout pattern used in homepage.

---------------------------------------------------------

SECTION 1 — HERO
---------------------------------------------------------

- Centered headline
- Subheadline
- Two buttons:
  Primary: Falar com especialista
  Secondary: Ver cases
- Use container max-w-6xl
- Spacing py-24

---------------------------------------------------------

SECTION 2 — SOLUTIONS GRID
---------------------------------------------------------

Create responsive grid:
grid-cols-1 md:grid-cols-2 gap-12

Each card:

- rounded-2xl
- border border-neutral-200
- p-8
- hover:shadow-lg
- transition-all duration-300

Solutions:

1) Sites Institucionais de Alta Performance
2) Plataformas Web Sob Medida
3) Integrações com CRM e ERP
4) Governança e Segurança
5) Projetos White Label para Agências

---------------------------------------------------------

SECTION 3 — SEGMENTATION
---------------------------------------------------------

Two large cards side by side:
Empresas
Agências

Use soft background (bg-blue-50 equivalent using brand palette)

---------------------------------------------------------

SECTION 4 — FEATURE BLOCKS
---------------------------------------------------------

Alternating layout:
grid-cols-1 md:grid-cols-2
gap-20
items-center

Three blocks:

- Metodologia estruturada
- Arquitetura escalável
- Time especializado

---------------------------------------------------------

SECTION 5 — CASES
---------------------------------------------------------

3 case cards
grid-cols-1 md:grid-cols-3
rounded-xl
overflow-hidden
hover:shadow-lg

---------------------------------------------------------

SECTION 6 — FINAL CTA
---------------------------------------------------------

Full width block
bg-primary
text-white
rounded-2xl
py-20
centered content

CTA button:
Falar com especialista

---------------------------------------------------------

CONSTRAINTS
---------------------------------------------------------

- Use Ubuntu font system
- Maintain brand palette
- No inline styles
- Clean spacing
- Professional SaaS style
- No lorem ipsum
- Ready for production

Return complete page.tsx
🔥 PRÓXIMA DECISÃO IMPORTANTE

Queremos que /solucoes seja:

A) Página mãe que detalha tudo
B) Página hub que leva para subpáginas (ex: /solucoes/sites, /solucoes/integracoes etc.)

Minha recomendação estratégica?

👉 Modelo B (hub + páginas dedicadas)

Melhora SEO
Melhora posicionamento
Melhora autoridade

Quer seguir como Hub estruturado?

siga com sua recomendação

Perfeito. Vamos estruturar /solucoes como HUB estratégica, exatamente como empresas SaaS maduras fazem.

Isso posiciona a Unti como:

Estruturada

Especializada

Escalável

SEO-ready

🏗 ARQUITETURA FINAL — MODELO HUB
📍 /solucoes → Página mãe estratégica

Ela:

Apresenta visão geral

Mostra todos os pilares

Direciona para páginas específicas

Converte

🌐 ESTRUTURA COMPLETA DO SITE (NOVA)
/solucoes
  ├── /solucoes/sites-institucionais
  ├── /solucoes/plataformas-web
  ├── /solucoes/integracoes-crm-erp
  ├── /solucoes/governanca-seguranca
  ├── /solucoes/white-label-agencias

Isso já eleva o site para padrão enterprise.

🧠 ESTRUTURA DA PÁGINA HUB (/solucoes)
🔷 1. HERO (estratégico)

Título forte.
Subheadline.
2 CTAs.

🔷 2. GRID DE SOLUÇÕES (cards clicáveis)

Cada card leva para a subpágina correspondente.

Estilo DigitalOcean Products Grid.

Cada card:

Ilustração

Título

Descrição curta

Link → “Explorar solução”

🔷 3. DIFERENCIAL ESTRUTURAL

Bloco editorial explicando:

Arquitetura

Metodologia

Governança

🔷 4. SEGMENTAÇÃO (Empresas / Agências)

Reforça posicionamento.

🔷 5. CTA FINAL

Conversão direta.

🚀 PROMPT PARA CRIAR A PÁGINA HUB

Cole no VSCode:

CREATE SOLUCOES HUB PAGE

Create:

src/app/solucoes/page.tsx

---------------------------------------------------------

SECTION 1 — HERO
---------------------------------------------------------

Centered hero:

- H1 large bold
- Subtitle medium
- Buttons:
  Primary → Falar com especialista
  Secondary → Ver cases

Spacing:
py-24
max-w-5xl
mx-auto
text-center

---------------------------------------------------------

SECTION 2 — SOLUTIONS GRID
---------------------------------------------------------

Responsive grid:
grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12

Each card:

- rounded-2xl
- border border-neutral-200
- p-8
- transition-all duration-300
- hover:shadow-lg hover:-translate-y-1
- cursor-pointer

Each card links to:

/solucoes/sites-institucionais
/solucoes/plataformas-web
/solucoes/integracoes-crm-erp
/solucoes/governanca-seguranca
/solucoes/white-label-agencias

---------------------------------------------------------

SECTION 3 — DIFFERENTIAL BLOCK
---------------------------------------------------------

Editorial block:
Two column layout
Text left
Illustration right
gap-20
py-24

Explain methodology, architecture, governance.

---------------------------------------------------------

SECTION 4 — SEGMENTATION
---------------------------------------------------------

Two large cards:
Empresas
Agências

Soft background section.

---------------------------------------------------------

SECTION 5 — FINAL CTA
---------------------------------------------------------

Full width section
bg-primary
text-white
rounded-2xl
py-20
centered

CTA:
Falar com especialista

---------------------------------------------------------

CONSTRAINTS
---------------------------------------------------------

- Ubuntu font
- Brand palette
- Clean DO-style spacing
- No inline styles
- Production ready

Return full page.tsx
🔥 AGORA — VAMOS CRIAR A PRIMEIRA SUBPÁGINA

Recomendação estratégica:

Começar por:

👉 /solucoes/sites-institucionais

Porque:

Maior volume de busca

Maior conversão

Porta de entrada comercial

📐 ESTRUTURA PADRÃO PARA TODAS AS SUBPÁGINAS

Cada subpágina terá:

Hero específico

Problema → Solução

Benefícios claros

Processo

Cases relacionados

CTA

🚀 PRÓXIMO PASSO

Quer que eu:

A) Gere a estrutura completa da subpágina "Sites Institucionais"
B) Crie um template reutilizável para todas as subpáginas
C) Faça ambos (modelo + primeira pronta)

Minha recomendação estratégica?

👉 C (criar template + primeira já pronta)

Assim padronizamos tudo desde o início.

Qual seguimos?

c

Excelente. Vamos estruturar isso de forma profissional e escalável.

Vamos criar:

1️⃣ Um template reutilizável padrão para todas as páginas de solução
2️⃣ A primeira página completa:
/solucoes/sites-institucionais

Tudo já no padrão SaaS inspirado na DigitalOcean.

🏗 PARTE 1 — TEMPLATE REUTILIZÁVEL

Criaremos um layout base que poderá ser usado para:

sites-institucionais

plataformas-web

integracoes-crm-erp

governanca-seguranca

white-label-agencias

📁 Estrutura
src/components/solucoes/
  SolutionHero.tsx
  SolutionBenefits.tsx
  SolutionProcess.tsx
  SolutionCases.tsx
  SolutionCTA.tsx
🚀 PROMPT PARA CRIAR O TEMPLATE BASE

Cole no VSCode:

CREATE SOLUTION TEMPLATE SYSTEM

Create reusable components inside:

src/components/solucoes/

---------------------------------------------------------

1) SolutionHero.tsx

---------------------------------------------------------

Props:

- title: string
- subtitle: string
- primaryCTA: string
- secondaryCTA?: string

Layout:

- max-w-5xl
- mx-auto
- text-center
- py-24
- spacing-y-6

Primary button:
bg-primary
text-white

Secondary:
border border-primary
text-primary

---------------------------------------------------------

1) SolutionBenefits.tsx

---------------------------------------------------------

Props:

- items: Array<{ title: string; description: string }>

Layout:
grid-cols-1 md:grid-cols-3
gap-12
py-24

Each item:

- rounded-xl
- p-8
- border border-neutral-200
- hover:shadow-lg
- transition-all

---------------------------------------------------------

1) SolutionProcess.tsx

---------------------------------------------------------

Props:

- steps: Array<{ title: string; description: string }>

Layout:
vertical timeline style
max-w-4xl
mx-auto
py-24
space-y-12

Each step:

- number indicator
- title bold
- description muted

---------------------------------------------------------

1) SolutionCases.tsx

---------------------------------------------------------

Props:

- cases: Array<{ title: string; result: string }>

Layout:
grid-cols-1 md:grid-cols-3
gap-12
py-24

Card:
rounded-xl
border
p-6
hover:shadow-lg

---------------------------------------------------------

1) SolutionCTA.tsx

---------------------------------------------------------

Props:

- title: string
- buttonText: string

Layout:
bg-primary
text-white
rounded-2xl
py-20
text-center
max-w-6xl
mx-auto

---------------------------------------------------------
Constraints:

- Ubuntu font
- Brand palette
- No inline styles
- Clean SaaS spacing
- Production ready

Return all component files.
🏗 PARTE 2 — PRIMEIRA SUBPÁGINA COMPLETA

Agora vamos montar:

/solucoes/sites-institucionais
🎯 ESTRUTURA DA PÁGINA — SITES INSTITUCIONAIS
🔷 HERO

Título:

Sites institucionais de alta performance para empresas que precisam gerar resultados

Sub:

Desenvolvemos plataformas corporativas focadas em conversão, integração e governança digital.

CTA:
Falar com especialista
Ver cases

🔷 BENEFÍCIOS

Performance e SEO estruturado

Arquitetura escalável

Integração com CRM e ERP

🔷 PROCESSO

Diagnóstico estratégico

Arquitetura e UX

Desenvolvimento estruturado

Integração e testes

Governança e evolução contínua

🔷 CASES

3 cases principais reais (podemos usar SAVOL como um deles).

🔷 CTA FINAL

Vamos estruturar o próximo passo digital da sua empresa?

Botão:
Falar com especialista

🚀 PROMPT PARA CRIAR A SUBPÁGINA COMPLETA

Cole no VSCode:

CREATE PAGE: /solucoes/sites-institucionais

Create:

src/app/solucoes/sites-institucionais/page.tsx

Import reusable components from:
@/components/solucoes/

---------------------------------------------------------

USE COMPONENTS
---------------------------------------------------------

<SolutionHero />
<SolutionBenefits />
<SolutionProcess />
<SolutionCases />
<SolutionCTA />

---------------------------------------------------------
CONTENT:

HERO
Title:
Sites institucionais de alta performance para empresas que precisam gerar resultados

Subtitle:
Desenvolvemos plataformas corporativas focadas em conversão, integração e governança digital.

Primary CTA:
Falar com especialista

Secondary CTA:
Ver cases

---------------------------------------------------------
BENEFITS

1) Performance e SEO estruturado
Estrutura otimizada para velocidade, indexação e geração de leads qualificados.

2) Arquitetura escalável
Projetos preparados para crescer junto com a operação da empresa.

3) Integração com CRM e ERP
Conectamos marketing, vendas e operação em um único ecossistema digital.

---------------------------------------------------------
PROCESS

1) Diagnóstico estratégico
2) Arquitetura e UX
3) Desenvolvimento estruturado
4) Integração e testes
5) Governança contínua

---------------------------------------------------------
CASES

Case 1:
Projeto SAVOL
Resultado: Plataforma institucional integrada com sistemas internos.

Case 2:
Projeto corporativo B2B
Resultado: Estrutura orientada para geração de leads qualificados.

Case 3:
Projeto multiunidade
Resultado: Padronização digital com governança centralizada.

---------------------------------------------------------
CTA FINAL

Title:
Vamos estruturar o próximo passo digital da sua empresa?

Button:
Falar com especialista

---------------------------------------------------------
Constraints:

- Use consistent spacing
- No inline styles
- Ubuntu font
- Brand colors
- Clean SaaS layout
- Production ready

Return full page.tsx
🔥 RESULTADO

Após isso teremos:

✔ Arquitetura escalável
✔ Página pronta para SEO
✔ Padrão replicável
✔ Estrutura profissional
✔ Base para todas as outras soluções

🧠 PRÓXIMA ETAPA ESTRATÉGICA

Depois de finalizar essa página, sugiro:

1️⃣ Criar /solucoes/plataformas-web
2️⃣ Ajustar schema markup para SEO
3️⃣ Criar estrutura de breadcrumb
4️⃣ Melhorar metadata dinâmica

Qual seguimos após concluir essa?

TODOS

Perfeito.

Agora entramos em modo expansão estrutural completa.

Você pediu TODOS.
Então vamos executar:

1️⃣ Criar todas as subpáginas de solução
2️⃣ Implementar Schema Markup SEO
3️⃣ Implementar Breadcrumb estruturado
4️⃣ Melhorar metadata dinâmica (Next.js App Router)

Vou estruturar isso de forma profissional e escalável.

🔥 PARTE 1 — CRIAR TODAS AS SUBPÁGINAS

Vamos criar:

/solucoes/plataformas-web
/solucoes/integracoes-crm-erp
/solucoes/governanca-seguranca
/solucoes/white-label-agencias

Todas usando o template já criado.

🚀 PROMPT — GERAR TODAS AS SUBPÁGINAS

Cole no VSCode:

CREATE ALL SOLUTION SUBPAGES USING TEMPLATE SYSTEM

Create the following routes:

1) src/app/solucoes/plataformas-web/page.tsx
2) src/app/solucoes/integracoes-crm-erp/page.tsx
3) src/app/solucoes/governanca-seguranca/page.tsx
4) src/app/solucoes/white-label-agencias/page.tsx

All must use:

<SolutionHero />
<SolutionBenefits />
<SolutionProcess />
<SolutionCases />
<SolutionCTA />

Maintain identical layout structure to sites-institucionais page.

---------------------------------------------------------

CONTENT DEFINITIONS
---------------------------------------------------------

PLATAFORMAS WEB

Hero:
Plataformas web sob medida para operações complexas

Benefits:

- Arquitetura personalizada
- Integrações avançadas
- Performance em alta escala

Process:

- Levantamento técnico
- Arquitetura
- Desenvolvimento
- Integrações
- Governança

CTA:
Vamos estruturar sua plataforma digital?

---------------------------------------------------------

INTEGRACOES CRM ERP

Hero:
Integrações que conectam marketing, vendas e operação

Benefits:

- Conexão entre sistemas
- Automação de processos
- Redução de retrabalho

Process:

- Mapeamento de sistemas
- Arquitetura de integração
- Implementação
- Testes
- Monitoramento

CTA:
Vamos integrar sua operação digital?

---------------------------------------------------------

GOVERNANCA E SEGURANCA

Hero:
Governança e segurança para ambientes digitais críticos

Benefits:

- Arquitetura segura
- Controle de acessos
- Monitoramento contínuo

Process:

- Auditoria
- Planejamento
- Implementação
- Testes
- Evolução

CTA:
Proteja sua operação digital com estrutura profissional

---------------------------------------------------------

WHITE LABEL AGENCIAS

Hero:
White label técnico para agências que precisam escalar

Benefits:

- Execução sob demanda
- Entrega confidencial
- Arquitetura robusta

Process:

- Alinhamento estratégico
- Planejamento técnico
- Desenvolvimento
- Entrega
- Suporte contínuo

CTA:
Seja nosso parceiro técnico estratégico

---------------------------------------------------------

Constraints:

- Maintain design consistency
- Use brand palette
- Ubuntu font
- Clean SaaS spacing
- Production ready
- No inline styles

Return all 4 page files.
🔥 PARTE 2 — IMPLEMENTAR BREADCRUMB

Agora vamos adicionar navegação estruturada.

🚀 PROMPT — BREADCRUMB COMPONENT
CREATE BREADCRUMB COMPONENT

Create:

src/components/ui/Breadcrumb.tsx

Features:

- Show hierarchical navigation
- Example:
  Home / Soluções / Sites Institucionais
- Use Next.js Link
- Small text
- Text neutral-500
- Current page bold
- Spacing mb-8

Then add breadcrumb to all solution subpages below header.
🔥 PARTE 3 — SCHEMA MARKUP (SEO AVANÇADO)

Agora elevamos para nível profissional.

Vamos adicionar JSON-LD.

🚀 PROMPT — SCHEMA MARKUP
ADD SCHEMA MARKUP TO SOLUTION PAGES

Inside each solution page:

Add JSON-LD structured data:

Type:
Service

Include:

- @context: <https://schema.org>
- @type: Service
- name
- description
- provider: Unti Digital
- areaServed: Brazil

Insert using:

<script type="application/ld+json">
  JSON.stringify(schema)
</script>

Ensure valid JSON.
No errors.
🔥 PARTE 4 — METADATA DINÂMICA (APP ROUTER)

Vamos melhorar SEO técnico.

🚀 PROMPT — METADATA
ADD METADATA TO EACH SOLUTION PAGE

Use Next.js metadata export:

export const metadata = {
  title: "... | Unti Digital",
  description: "...",
  openGraph: {
    title: "...",
    description: "...",
    type: "website",
  },
};

Ensure each page has unique metadata.
🎯 RESULTADO FINAL

Depois disso você terá:

✔ Estrutura SEO real
✔ Arquitetura escalável
✔ Hub + subpáginas
✔ Breadcrumb
✔ Schema
✔ Metadata dinâmica
✔ Site nível enterprise real

🔥 PRÓXIMA EVOLUÇÃO

Depois de finalizar tudo:

Podemos:

1️⃣ Criar página /cases completa
2️⃣ Implementar tracking GA4 estruturado
3️⃣ Criar sitemap.xml automático
4️⃣ Implementar estratégia SEO programática

Qual próximo movimento estratégico após concluir essas implementações?

3

Perfeito.

Vamos implementar sitemap.xml automático profissional no padrão Next.js App Router (SEO enterprise real).

Isso melhora:

Indexação

Crawl budget

Organização de URLs

Autoridade estrutural

🔥 ESTRATÉGIA CORRETA (NEXT 13+ APP ROUTER)

Usaremos o recurso nativo:

app/sitemap.ts

Sem plugin.
Sem dependência externa.
Totalmente automático.

🚀 PROMPT — CRIAR SITEMAP AUTOMÁTICO

Cole no VSCode:

CREATE DYNAMIC SITEMAP FOR NEXT.JS APP ROUTER

Create file:

src/app/sitemap.ts

---------------------------------------------------------

IMPLEMENTATION
---------------------------------------------------------

Use Next.js MetadataRoute.Sitemap type.

Import:

import { MetadataRoute } from 'next'

---------------------------------------------------------

BASE URL
---------------------------------------------------------

const baseUrl = "<https://unti-digital.vercel.app>"

---------------------------------------------------------

STATIC ROUTES
---------------------------------------------------------

Include the following routes:

/
 /solucoes
 /solucoes/sites-institucionais
 /solucoes/plataformas-web
 /solucoes/integracoes-crm-erp
 /solucoes/governanca-seguranca
 /solucoes/white-label-agencias
 /cases (if exists)
 /blog (if exists)

---------------------------------------------------------

IMPLEMENT FUNCTION
---------------------------------------------------------

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/solucoes",
    "/solucoes/sites-institucionais",
    "/solucoes/plataformas-web",
    "/solucoes/integracoes-crm-erp",
    "/solucoes/governanca-seguranca",
    "/solucoes/white-label-agencias",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}

---------------------------------------------------------

CONSTRAINTS
---------------------------------------------------------

- Ensure types are correct
- No TypeScript errors
- Production ready
- No hardcoded localhost

Return full sitemap.ts
🔥 EXTRA PROFISSIONAL (RECOMENDADO)

Também criar:

src/app/robots.ts
🚀 PROMPT — ROBOTS.TS
CREATE ROBOTS CONFIG

Create:

src/app/robots.ts

Use:

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: '<https://unti-digital.vercel.app/sitemap.xml>',
  }
}

Ensure valid TypeScript.
Return full robots.ts
🎯 RESULTADO FINAL

Depois disso você terá:

✔ Sitemap automático
✔ Atualiza sozinho
✔ Compatível com Vercel
✔ SEO técnico sólido
✔ Pronto para Google Search Console

🚀 PRÓXIMO PASSO (APÓS DEPLOY)

1️⃣ Submeter sitemap no Google Search Console
2️⃣ Validar no:
<https://unti-digital.vercel.app/sitemap.xml>

3️⃣ Rodar auditoria técnica no Lighthouse

Agora pergunta estratégica:

Queremos agora:

1️⃣ Implementar Open Graph Images automáticas
2️⃣ Implementar sitemap dinâmico para blog futuro
3️⃣ Criar página /cases estruturada
4️⃣ Implementar GA4 + eventos de conversão

Qual próximo movimento?

2

Perfeito.

Agora vamos elevar o SEO para nível SaaS profissional escalável:

👉 Sitemap dinâmico preparado para blog futuro.

Isso significa:

Quando você criar posts → entram automaticamente no sitemap

Sem editar código manualmente

SEO preparado para escalar conteúdo

🔥 ESTRATÉGIA CORRETA

Vamos estruturar:

1️⃣ Preparar rota /blog/[slug]
2️⃣ Criar função getBlogPosts()
3️⃣ Atualizar sitemap.ts para incluir posts dinamicamente

Mesmo que ainda não exista CMS, já deixamos pronto.

🏗 PASSO 1 — PREPARAR ESTRUTURA DE BLOG

Crie:

src/lib/blog.ts
🚀 PROMPT — BLOG DATA STRUCTURE

Cole no VSCode:

CREATE BLOG DATA STRUCTURE FOR FUTURE DYNAMIC SITEMAP

Create file:

src/lib/blog.ts

---------------------------------------------------------

IMPLEMENT MOCK BLOG DATA (FOR NOW)
---------------------------------------------------------

export interface BlogPost {
  slug: string
  title: string
  date: string
}

const posts: BlogPost[] = [
  {
    slug: "estrategia-digital-b2b",
    title: "Estratégia digital para empresas B2B",
    date: "2025-01-10",
  },
  {
    slug: "integracoes-escalaveis",
    title: "Integrações que escalam operações",
    date: "2025-01-15",
  },
  {
    slug: "governanca-seguranca-web",
    title: "Governança e segurança em plataformas web",
    date: "2025-01-20",
  },
  {
    slug: "ux-enterprise",
    title: "UX para ambientes enterprise",
    date: "2025-01-25",
  },
]

export function getBlogPosts(): BlogPost[] {
  return posts
}

Ensure no TypeScript errors.
Return full file.
🔥 PASSO 2 — ATUALIZAR SITEMAP PARA BLOG DINÂMICO

Agora vamos modificar sitemap.ts.

🚀 PROMPT — SITEMAP DINÂMICO

Cole no VSCode:

UPDATE SITEMAP TO INCLUDE DYNAMIC BLOG POSTS

Modify:

src/app/sitemap.ts

---------------------------------------------------------

IMPORT BLOG POSTS
---------------------------------------------------------

import { getBlogPosts } from "@/lib/blog"

---------------------------------------------------------

UPDATE FUNCTION
---------------------------------------------------------

Inside sitemap() function:

1) Get blog posts:

const posts = getBlogPosts()

1) Map them:

const blogRoutes = posts.map((post) => ({
  url: `${baseUrl}/blog/${post.slug}`,
  lastModified: new Date(post.date),
  changeFrequency: "monthly",
  priority: 0.7,
}))

1) Merge with static routes:

return [
  ...staticRoutes,
  ...blogRoutes,
]

---------------------------------------------------------

FINAL STRUCTURE
---------------------------------------------------------

Ensure function returns:

MetadataRoute.Sitemap

Ensure no TS errors.
Production ready.

Return updated sitemap.ts
🔥 PASSO 3 — CRIAR ROTA DINÂMICA DO BLOG

Mesmo que simples por enquanto:

🚀 PROMPT — BLOG DYNAMIC ROUTE
CREATE DYNAMIC BLOG ROUTE

Create folder:

src/app/blog/[slug]/page.tsx

---------------------------------------------------------

IMPLEMENT
---------------------------------------------------------

Import getBlogPosts()

Use generateStaticParams()

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({
    slug: post.slug,
  }))
}

Render simple page:

- Title
- Placeholder content
- Back link to /blog

Ensure TypeScript valid.
Production ready.
Return full page.tsx
🎯 RESULTADO FINAL

Depois disso você terá:

✔ Sitemap automático para blog
✔ Preparado para CMS futuro
✔ SEO escalável
✔ Estrutura dinâmica
✔ Pronto para crescer
