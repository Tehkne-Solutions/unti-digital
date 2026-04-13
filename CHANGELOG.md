# Changelog

## 2026-04-13 - Integração Vercel Speed Insights para Monitoramento de Performance

- Instalado @vercel/speed-insights para coleta de dados de performance em produção.
- Adicionado componente <SpeedInsights /> no layout principal para rastreamento automático.
- Bundle analisado: First Load JS em 87.6 kB (mantido otimizado).
- Validação concluída com `npm run build` (148 páginas geradas com sucesso).

## 2026-04-13 - Otimizações de Performance para Lighthouse 95+

- Aplicado dynamic import no CookieBanner para reduzir TBT (Total Blocking Time).
- Adicionado atributo `priority` à primeira imagem do HeroCarousel para melhorar LCP (Largest Contentful Paint).
- Corrigidos erros de codificação de caracteres em page.tsx (integrações, técnico, segurança).
- Bundle analisado: First Load JS em 87.3 kB (abaixo do limite de 100 kB).
- Validação concluída com `npm run build` (148 páginas geradas com sucesso).

## 2026-04-13 - Atualização de Páginas de Privacidade e Empresarial + Correções de Grafia

- Atualizadas as páginas de privacidade e política empresarial com conteúdo real em português, inglês e espanhol, substituindo placeholders por textos completos e localizados.
- Corrigidos erros de codificação de caracteres em português (pt.json), incluindo "informações", "você", "não", "retornará", "integrações", "agências", "diagnóstico", "solução", "médias", "operações", "conteúdos", "presença", "operação", "próximos").
- Corrigidos erros de grafia no CHANGELOG.md para português correto.
- Validação concluída com `npm run build` (148 páginas geradas com sucesso).

## 2026-04-10 - Fechamento Multi-idioma PT/EN/ES

- Normalizada a arquitetura de i18n com rotas localizadas em `/[locale]`, metadata por página, `not-found` localizado e navegação padronizada com `next-intl`.
- Concluída a cobertura multi-idioma das páginas institucionais, contato, integrações, soluções, blog, posts, cases e estudos de caso com conteúdo por locale em `src/data`.
- Corrigidos os erros que quebravam o deploy na Vercel, incluindo as rotas dinâmicas de blog/cases, tipagem de locale, componentes compartilhados e compatibilidade do catálogo de serviços.
- Atualizados `robots.ts` e `sitemap.ts` para o domínio canônico `https://untidigital.com.br` com URLs por idioma e alternates.
- Adicionada a auditoria `audit-intl-coverage.mjs` e script `npm run audit:i18n` para validar chaves obrigatórias, arquivos esperados e navegação que perde locale.
- Implementado o `CookieBanner` multilíngue com `Framer Motion`, persistência via `localStorage` e link direto para a página de privacidade.
- Validação concluída com `npm run audit:i18n` e `npm run build`.

---

## 2025-01-XX - FASE 3: Services Carousel + Modal Técnico

### 📦 Seção de Serviços (Preferida do Cliente)

#### Modelo de Dados

- Criado `src/data/services.ts` com interface Service
- 6 serviços completos:
  - Sites Institucionais
  - Plataformas Web
  - Integrações e Automações
  - E-commerce
  - Landing Pages
  - White Label Técnico
- Cada serviço com: slug, título, descrições, bullets, entregáveis, imagem

#### Services Carousel

- Carrossel horizontal grande e fluido
- Cards com largura mínima 360px
- Imagem topo (aspect-video) com gradiente
- Título e descrição curta
- CTA: "Ver detalhes →"
- Scroll-snap habilitado
- Arrows e dots navigation

#### Service Modal

- Layout 2 colunas (desktop) / empilhado (mobile)
- Coluna esquerda:
  - Título do serviço
  - Descrição completa
  - Seção "Diferenciais" (checkmarks azuis)
  - Seção "Entregáveis" (checkmarks laranjas)
  - CTAs: "Falar com especialista" + "Ver cases"
- Coluna direita:
  - Imagem grande (aspect-square)
  - Placeholder com gradiente
- Modal com Headless UI:
  - ESC fecha
  - Click outside fecha
  - Focus trap
  - Transições suaves

#### Conteúdo Real

- 24 bullets de diferenciais
- 30 entregáveis detalhados
- Descrições completas e profissionais
- Baseado em serviços reais da UNTI

#### Estilo Visual DO-like

- Cards robustos com hover sutil
- Modal limpo e espaçoso
- Ícones SVG inline (Heroicons)
- Gradientes consistentes
- Muito espaço negativo

#### Validações

- ✅ Build passa (110 kB)
- ✅ Lint sem erros
- ✅ TypeScript tipado
- ✅ Totalmente responsivo
- ✅ Acessibilidade completa

---

## 2025-01-XX - FASE 2: Segmentação Estratégica

### 🎯 Segmentação de Público

#### Seção de Segmentação

- Implementada logo abaixo do Hero
- Layout DO-like com 2 cards grandes
- Título: "Para quem desenvolvemos soluções digitais"
- Subtítulo explicativo

#### Card Empresas

- Badge com ícone corporativo
- 3 bullets: Performance, Integrações, Governança
- CTA: "Ver soluções para empresas"
- Link: /solucoes/empresas

#### Card Agências

- Badge com ícone de equipe
- 3 bullets: White label, Sob demanda, Parceria
- CTA: "Ver soluções para agências"
- Link: /solucoes/agencias

#### Estilo Visual

- Cards com padding generoso (p-10)
- Badges com background pastel
- Bullets com checkmarks azuis
- CTAs estilo link com seta
- Hover effects sutis
- Muito espaço negativo (DO-like)

#### Estratégia de Funil

- Segmentação natural após Hero
- CTAs específicos por perfil
- Jornada personalizada
- Fluidez do scroll mantida

#### Validações

- ✅ Build passa (90.5 kB)
- ✅ Lint sem erros
- ✅ Totalmente responsivo
- ✅ Acessibilidade completa

---

## 2025-01-XX - FASE 1: Hero DigitalOcean-like

### 🔥 Hero Principal

#### Header Refinado

- Atualizado para layout DO-like limpo e profissional
- Nav centralizado com links principais (Soluções, Cases, Blog, Integrações, Contato)
- CTA primário destacado à direita
- Menu mobile com drawer usando Modal do Design System

#### Hero Section

- Implementado layout 2 colunas (desktop) / empilhado (mobile)
- Conteúdo estratégico com hierarquia clara:
  - Eyebrow: UNTI DIGITAL
  - H1: Soluções em tecnologia para negócios que precisam escalar com segurança
  - Subheadline: Desenvolvemos sites, plataformas e integrações críticas
  - CTAs híbridos: "Falar com especialista" (primary) + "Ver soluções" (secondary)

#### Hero Media

- Carousel visual técnico com 3 slides:
  - Analytics Dashboard (métricas de performance)
  - Platform Architecture (infraestrutura)
  - CRM Integration (conversão e ROI)
- Cada slide com:
  - Grid de métricas
  - Bar chart animado
  - Status live indicator
  - Gradient background

#### Validações

- ✅ Build passa sem erros
- ✅ Lint sem warnings
- ✅ Totalmente responsivo
- ✅ Acessibilidade completa

---

## 2025-01-XX - FASE 0: Design System Base

### 🎨 Design System Foundation

#### Tokens & Tipografia

- Implementado sistema de tokens de cores UNTI (blue, dark, light, pastel, orange)
- Configurado Ubuntu (400, 500, 700) como fonte global via CSS variable
- Atualizado tailwind.config.ts com tokens e fontFamily

#### Componentes UI Base

- **Container**: Wrapper centralizado (max-w-[1200px])
- **Section**: Espaçamento vertical consistente (py-20/md:py-28)
- **Button**: 3 variantes (primary, secondary, link) com acessibilidade
- **Card**: Elevação e hover effects padronizados
- **Modal**: Headless UI Dialog com backdrop blur, focus trap, ESC/click-outside
- **Carousel**: Implementação custom com scroll-snap, arrows, dots, swipe support

#### Estrutura Homepage

- Criados 8 componentes placeholder em `src/components/home/`:
  - hero.tsx
  - segmentation.tsx
  - services-carousel.tsx
  - logo-cloud.tsx
  - case-studies.tsx
  - feature-blocks.tsx
  - blog-grid.tsx
  - final-cta.tsx
- Atualizado page.tsx como orquestrador limpo

#### Dependências

- Adicionado @headlessui/react para Modal acessível

#### Validações

- ✅ Build passa sem erros
- ✅ Lint sem warnings
- ✅ TypeScript validado

---

## 2026-02-26

- Refactored homepage to match Whimsical wireframe with strict palette (#396cff, #2d3b93, #7fa2ff, #c3d6fc, #ff9900).
- Added section components (hero, services carousel, about, clients, numbers with dropdown, integrations, project highlight, testimonials, CTA final, blog).
- Updated header with top bar (telefone, email, CTA) and navigation per wireframe; footer remains with vertical logo and dark background.
- Replaced Tailwind design tokens to official palette and standardized section spacing/container width.
- Adjusted LeadModal to use CTA color; ensured no gradients/heavy shadows and fidelity to structure.
