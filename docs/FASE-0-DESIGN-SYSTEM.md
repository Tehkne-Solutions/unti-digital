# 🎨 FASE 0 - Design System Base

## 📋 Resumo Executivo

Implementação do sistema de design base para o novo site UNTI v2, inspirado estruturalmente no DigitalOcean, mas com identidade visual UNTI.

**Data:** Janeiro 2025  
**Status:** ✅ Concluído  
**Build:** ✅ Passou  
**Lint:** ✅ Sem erros

---

## 🎯 Objetivos da Fase 0

Criar a fundação técnica e visual do projeto antes de implementar seções específicas:

- Sistema de tokens de cores
- Tipografia global padronizada
- Componentes UI reutilizáveis
- Estrutura de componentes da homepage
- Acessibilidade enterprise-level

---

## 🏗️ Arquitetura Implementada

### Stack Técnico
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (puro, sem shadcn/ui)
- **Tipografia:** Ubuntu (400, 500, 700) via next/font/google
- **Acessibilidade:** Headless UI (apenas Dialog)
- **Carousel:** Implementação custom (sem libs externas)

### Decisões Arquiteturais

| Componente | Decisão | Justificativa |
|------------|---------|---------------|
| CSS Framework | Tailwind puro | Controle total, bundle menor, sem abstrações desnecessárias |
| Carousel | Custom | Evita dependências, scroll-snap nativo, performance superior |
| Modal | Headless UI | Acessibilidade pronta, focus trap, ARIA completo |

---

## 🎨 Sistema de Tokens

### Paleta de Cores

```typescript
colors: {
  unti: {
    blue: "#396cff",    // Azul principal
    dark: "#2d3b93",    // Azul escuro
    light: "#7fa2ff",   // Azul claro
    pastel: "#c3d6fc",  // Azul pastel
    orange: "#ff9900"   // CTA/Ação
  }
}
```

### Tipografia

- **Família:** Ubuntu
- **Pesos:** 400 (regular), 500 (medium), 700 (bold)
- **Aplicação:** Via CSS variable `--font-ubuntu`

---

## 📦 Componentes UI Criados

### 1. Container
**Localização:** `src/components/ui/Container.tsx`

```typescript
- max-w-[1200px]
- mx-auto
- px-6
```

**Uso:** Wrapper para conteúdo centralizado com largura máxima consistente.

---

### 2. Section
**Localização:** `src/components/ui/Section.tsx`

```typescript
- py-20 (mobile)
- md:py-28 (desktop)
- background opcional
```

**Uso:** Wrapper para seções da página com espaçamento vertical consistente.

---

### 3. Button
**Localização:** `src/components/ui/Button.tsx`

**Variantes:**
- `primary`: Fundo laranja, texto branco (CTAs principais)
- `secondary`: Outline azul, fundo transparente (CTAs secundários)
- `link`: Apenas texto azul com underline no hover

**Especificações:**
- Altura: 48px (h-12)
- Border radius: xl
- Transições suaves
- Focus ring para acessibilidade

---

### 4. Card
**Localização:** `src/components/ui/Card.tsx`

```typescript
- rounded-2xl
- shadow-sm
- p-8
- hover: shadow-md + -translate-y-1
```

**Uso:** Container para conteúdo com elevação e hover effects.

---

### 5. Modal
**Localização:** `src/components/ui/Modal.tsx`

**Tecnologia:** Headless UI Dialog

**Features:**
- Backdrop com blur
- Painel centralizado (max-w-3xl)
- Botão fechar (top-right)
- ESC fecha
- Click fora fecha
- Focus trap automático
- Transições suaves

**Acessibilidade:**
- ARIA labels completos
- Navegação por teclado
- Focus management automático

---

### 6. Carousel
**Localização:** `src/components/ui/Carousel.tsx`

**Implementação:** 100% custom (sem bibliotecas)

**Features:**
- Scroll-snap horizontal
- Botões prev/next
- Dots navigation
- Suporte a swipe/touch
- Scrollbar oculta
- Responsivo
- Auto-detecção de limites

**Técnicas:**
- CSS scroll-snap
- Flexbox
- overflow-x-auto
- Transform para animações

---

## 🏠 Estrutura da Homepage

### Componentes Criados

Todos em `src/components/home/`:

1. **hero.tsx** - Seção principal de entrada
2. **segmentation.tsx** - Segmentação Empresas/Agências
3. **services-carousel.tsx** - Carrossel de serviços
4. **logo-cloud.tsx** - Logos de clientes
5. **case-studies.tsx** - Cases de sucesso
6. **feature-blocks.tsx** - Blocos de features alternados
7. **blog-grid.tsx** - Grid de posts do blog
8. **final-cta.tsx** - CTA final de conversão

### Orquestração (page.tsx)

```tsx
<Hero />
<Segmentation />
<ServicesCarousel />
<LogoCloud />
<CaseStudies />
<FeatureBlocks />
<BlogGrid />
<FinalCTA />
```

**Nota:** Todos os componentes são placeholders estruturais nesta fase.

---

## 📁 Estrutura de Arquivos

```
src/
├── components/
│   ├── ui/
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Carousel.tsx
│   │   └── index.ts
│   └── home/
│       ├── hero.tsx
│       ├── segmentation.tsx
│       ├── services-carousel.tsx
│       ├── logo-cloud.tsx
│       ├── case-studies.tsx
│       ├── feature-blocks.tsx
│       ├── blog-grid.tsx
│       └── final-cta.tsx
└── app/
    ├── layout.tsx (Ubuntu aplicado)
    ├── page.tsx (nova estrutura)
    └── globals.css (scrollbar-hide utility)
```

---

## 🔧 Configurações Atualizadas

### tailwind.config.ts
- ✅ Tokens de cores UNTI
- ✅ Font family com CSS variable

### layout.tsx
- ✅ Ubuntu com weights 400, 500, 700
- ✅ CSS variable `--font-ubuntu`

### globals.css
- ✅ Utility `scrollbar-hide` para carousel

### package.json
- ✅ @headlessui/react adicionado

---

## ✅ Validações

### Build
```bash
npm run build
✓ Compiled successfully
✓ Generating static pages (13/13)
```

### Lint
```bash
npm run lint
✔ No ESLint warnings or errors
```

### TypeScript
- ✅ Sem erros de tipo
- ✅ Interfaces bem definidas
- ✅ Props tipadas

---

## 🎯 Princípios Aplicados

### Performance
- Bundle mínimo (sem libs desnecessárias)
- CSS nativo (scroll-snap)
- Tree-shaking otimizado

### Acessibilidade
- ARIA labels
- Focus management
- Navegação por teclado
- Reduced motion support

### Manutenibilidade
- Componentes isolados
- Props bem definidas
- Exports centralizados
- Documentação inline

### Escalabilidade
- Sistema de tokens
- Componentes reutilizáveis
- Estrutura modular
- Fácil extensão

---

## 🚀 Próximas Fases

### Fase 1 - Hero DO-like
- Layout 2 colunas
- CTAs estratégicos
- Hero media carousel
- Header completo

### Fase 2 - Segmentação
- Cards Empresas/Agências
- Layout DO-like
- Conteúdo estratégico

### Fase 3 - Services Carousel
- Carrossel completo
- Modal por serviço
- Conteúdo do site antigo

---

## 📊 Métricas

- **Componentes UI:** 6
- **Componentes Home:** 8
- **Arquivos criados:** 16
- **Arquivos modificados:** 4
- **Dependências adicionadas:** 1 (@headlessui/react)
- **Tempo de build:** ~15s
- **Bundle size:** Otimizado

---

## 👥 Referências

- **Design inspiração:** DigitalOcean
- **Identidade visual:** UNTI Digital
- **Conteúdo base:** Site antigo UNTI
- **Arquitetura:** SaaS enterprise-level

---

**Documentado por:** Amazon Q  
**Revisão:** Fase 0 completa e validada
