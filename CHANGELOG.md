# Changelog

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
