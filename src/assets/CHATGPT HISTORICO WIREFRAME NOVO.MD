paleta nova unti digital.pdf
PDF
logo horizontal.svg
Arquivo
logo vertrical.svg
Arquivo
em anexo temos um print do whimscal feito para o novo site da UNTI DIGITAL. Eu já dei inicio ao projeto pelo Codex aqui do chatgpt. Estamos avançados, agora precisamos refatorar a homepage seguindo esse anexo. quero que gere um prompt avançado e detalhado para o codex vscode executar as alterações. lembrando que temos que usar ao maximo a paleta de cores da UNTI e os novos logos vertical para footer e horizontal para header. segue tambem em anexo a paleta de cores e os logos para que possa instruir se ja foi feito a troca de logo, lembrando que nao teremos mais texto na header junto ao logo, mas somente a imagem nova do logo que é a logo-horizontal. obs: todos os anexos estão na pasta assets do projeto feito em Next.js, so vamos atualizar o codigo usando a paleta e o wireframe a risca até os conteudos e componentes, levando como base visual a Digital Ocean.

Perfeito.
Agora vamos agir como [ENGENHEIRO DE PROMPT] + [ARQUITETO FRONT-END] dentro do GIP.

Você quer um prompt avançado para o Codex (VSCode) executar a refatoração completa da homepage do projeto Next.js da UNTI DIGITAL, seguindo:

✅ Wireframe do Whimsical (anexo)

✅ Paleta nova (assets)

✅ Logo horizontal no header (sem texto)

✅ Logo vertical no footer

✅ Estética inspirada na Digital Ocean

✅ Uso máximo da paleta UNTI

✅ Atualização estrutural completa da homepage

Vou te entregar um PROMPT DE EXECUÇÃO TÉCNICA PARA O CODEX pronto para colar no VSCode.

🚀 PROMPT AVANÇADO PARA CODEX – REFATORAÇÃO HOMEPAGE UNTI DIGITAL
You are a Senior Front-End Engineer specialized in Next.js 14+, clean UI architecture, and scalable component systems.

We are refactoring the homepage of a Next.js project called "UNTI DIGITAL".

PROJECT CONTEXT:

- Framework: Next.js (App Router if available)
- Assets folder already contains:
  - /assets/logo-horizontal.svg (to be used in header ONLY)
  - /assets/logo-vertical.svg (to be used in footer ONLY)
  - New color palette file (follow its colors strictly)
- Goal: Refactor the homepage based strictly on the provided wireframe.
- Visual inspiration: Digital Ocean website (clean, professional, strong sections, solid spacing, subtle gradients, strong CTA blocks).

CRITICAL RULES:

1. Remove any text next to the logo in the header. Only display the horizontal logo image.
2. Use the vertical logo exclusively in the footer.
3. Apply the new UNTI color palette consistently across:
   - Backgrounds
   - Buttons
   - CTA sections
   - Cards
   - Numbers section
   - Highlight blocks
4. Do NOT use random colors. Only use palette tokens.
5. Refactor the homepage structure to match the wireframe layout exactly.

---

### HOMEPAGE STRUCTURE (FOLLOW THIS EXACT ORDER)

1. HEADER
   - Sticky navigation
   - Logo (horizontal SVG only)
   - Menu items aligned right
   - Primary CTA button
   - Clean minimal style
   - White or light neutral background
   - Subtle bottom border

2. HERO SECTION
   - Big headline
   - Supporting paragraph
   - Two CTA buttons (primary + secondary)
   - Background subtle gradient using UNTI primary color tones
   - Clean, spacious layout
   - Max width container centered

3. SERVICES GRID (3 columns)
   - Card-based layout
   - Icon placeholder
   - Title
   - Short description
   - CTA link
   - Hover elevation effect
   - Use UNTI accent color for hover states

4. ABOUT SECTION
   - Two-column layout
   - Text on left
   - Image placeholder on right
   - "Saiba mais" button styled with palette primary color

5. CLIENTS / LOGO STRIP
   - Neutral background
   - Grid of grayscale logos
   - Center aligned

6. NUMBERS SECTION ("Nossos números falam por si")
   - Background block using UNTI primary color
   - 4 statistic cards
   - Big numbers
   - Short description
   - High contrast text

7. CTA BLOCK
   - Full width section
   - Strong contrasting background from palette
   - Headline
   - Button centered

8. PROJECT HIGHLIGHT SECTION
   - Two-column layout
   - Image right
   - Text left
   - Button styled primary

9. TESTIMONIALS
   - Card-based layout
   - Play icon placeholders
   - Clean neutral background

10. BLOG SECTION

- Grid of 3-4 blog cards
- Image
- Title
- Short excerpt
- Link

1. FOOTER

- Dark version of UNTI primary color
- Use logo-vertical.svg
- Columns:
  - Institucional
  - Serviços
  - Contato
- Social icons
- Bottom copyright bar

---

### TECHNICAL REQUIREMENTS

- Use component-based structure:
  /components
    Header.tsx
    Hero.tsx
    Services.tsx
    About.tsx
    Clients.tsx
    Numbers.tsx
    CTA.tsx
    Projects.tsx
    Testimonials.tsx
    Blog.tsx
    Footer.tsx

- Use CSS Modules or Tailwind (if project already configured)
- Ensure responsiveness:
  - 3 columns desktop
  - 2 tablet
  - 1 mobile
- Use proper semantic HTML
- Use optimized Image component from next/image
- Maintain SEO best practices
- Avoid inline styles
- Avoid hardcoded colors outside palette variables

---

### PALETTE IMPLEMENTATION

Create a centralized color token system:

If using CSS:
:root {
  --unti-primary: #xxxx;
  --unti-secondary: #xxxx;
  --unti-accent: #xxxx;
  --unti-dark: #xxxx;
  --unti-light: #xxxx;
}

Replace all old colors with palette tokens.

---

### CLEANUP INSTRUCTIONS

- Remove old homepage structure entirely.
- Remove duplicated sections.
- Remove old logo references.
- Ensure no leftover text next to header logo.
- Refactor spacing to consistent 80px vertical sections.
- Standard container width: max-width 1200px; margin: 0 auto;

---

### FINAL STEP

After implementation:

- Verify header uses ONLY logo-horizontal.svg
- Verify footer uses ONLY logo-vertical.svg
- Verify no color outside palette is being used
- Confirm full responsiveness
- Confirm no unused imports

Refactor and return full updated homepage code + all new components.
🔥 O QUE ESSE PROMPT FAZ

Ele:

Força o Codex a agir como Senior Engineer

Impõe estrutura de componentes

Impõe tokens de cor

Impõe layout exato do wireframe

Impede uso de cores fora da paleta

Impede erro no uso do logo

Remove completamente a homepage antiga

Se quiser, posso agora gerar:

📦 Versão otimizada para Tailwind

🎨 Versão com design system estruturado

🧱 Versão com arquitetura Atomic Design

🚀 Versão com animações suaves estilo Digital Ocean

Qual stack você está usando no projeto? CSS Modules ou Tailwind?

tailwind
-----

se conseguir acessar o repo do projeto no github public segue: <https://github.com/Tehkne-Solutions/unti-digital>
o site esta hospedado na vercel no link: <https://unti-digital.vercel.app/>
Pensou por 1m 55s

Beleza — como está em Tailwind e o projeto é Next.js (App Router) (README) , vou te entregar um prompt “Codex VSCode” mais cirúrgico, já considerando o estado atual do repo (src/app/page.tsx e layout.tsx) e o objetivo de refatorar a Home à risca do wireframe (Whimsical) + paleta/logos em /assets (você confirmou).

Também vou ancorar visualmente no site em produção (Vercel) e no repo público que você passou.
E cito a paleta anexada (PDF), mesmo que eu não consiga lê-la aqui:

✅ PROMPT AVANÇADO (Tailwind + Next.js) — PARA COLAR NO CODEX (VSCode)

Cole exatamente como está abaixo no Codex dentro do VSCode.

Você é um Senior Frontend Engineer (:contentReference[oaicite:4]{index=4}Tailwind) atuando como refatorador/arquitetor.
Sua missão: REFATORAR COMPLETAMENTE a HOMEPAGE do projeto UNTI DIGITAL seguindo À RISCA o wireframe do Whimsical anexado pelo usuário e a estética de referência da DigitalOcean (clean, espaçamento amplo, hierarquia forte, CTAs claros, cards leves).

REGRAS CRÍTICAS (NÃO NEGOCIÁVEIS)

1) Não invente layout: replique a ordem, seções, títulos e componentes exatamente como no wireframe (inclusive quantidades de cards e blocos).
2) Paleta: use APENAS as cores da “paleta nova unti digital” (arquivo em /assets).
   - Você deve abrir o arquivo de paleta e extrair os HEX.
   - Crie tokens no Tailwind (tailwind.config.ts) e use SOMENTE esses tokens (sem hex inline, sem cores aleatórias).
3) Logos:
   - Header: usar SOMENTE o logo horizontal (/assets/logo-horizontal.svg).
   - Header NÃO pode ter texto ao lado do logo (remover qualquer “UNTI” textual, etc).
   - Footer: usar SOMENTE o logo vertical (/assets/logo-vertical.svg).
4) Manter compatibilidade com o projeto atual:
   - App Router em src/app.
   - layout.tsx já importa Header e Footer.
   - LeadModal existe e é usado como CTA (“Falar no WhatsApp”) — manter funcionando (não quebrar /api/leads).
5) Responsivo obrigatório: desktop/tablet/mobile com Tailwind (grid: 3→2→1; espaçamentos consistentes).
6) Sem regressão: não remover funcionalidades existentes (LeadModal, links essenciais, estrutura do layout).
7) Sem “placeholders preguiçosos”: onde wireframe indica imagem, use <Image> com placeholder local (ou bloco com aspect-ratio + bg token), mas mantenha a área e hierarquia.

CONTEXTO DO CÓDIGO ATUAL (VOCÊ DEVE OLHAR NO REPO LOCAL)

- Home atual está em: src/app/page.tsx (está “monolítica” e com arrays de conteúdo). Refatorar em componentes.
- Layout: src/app/layout.tsx inclui <Header/> e <Footer/>.
- Tailwind: tailwind.config.ts tem apenas brand 500/700 (precisa trocar para paleta completa).
- globals.css define bg/text slate (precisa alinhar ao design tokens).

OBJETIVO
Refatorar a homepage para ficar IDÊNTICA ao wireframe, usando Tailwind tokens da paleta UNTI, e com visual “DigitalOcean-like”.

PLANO DE EXECUÇÃO (SIGA EM ORDEM)
Fase A — Auditoria rápida (sem alterar nada ainda)
A1) Abra e leia:

- src/app/page.tsx
- src/app/layout.tsx
- src/app/globals.css
- tailwind.config.ts
- componentes Header/Footer atuais (em src/components/*)
- pasta /assets para confirmar caminhos dos logos e paleta
A2) Liste em bullets:
- Quais seções existem hoje na Home
- O que será removido/convertido em componentes
- Onde estão os logos hoje e o que será alterado

Fase B — Design Tokens (obrigatório antes do layout)
B1) Extraia os HEX da paleta em /assets (paleta nova unti digital).
B2) Atualize tailwind.config.ts para criar tokens:

- colors: unti (primary, secondary, accent, dark, light, surface, muted, border, success/warn se existir na paleta)
- inclua variações (ex: primary-50/100/200/500/700/900) se a paleta suportar; se não suportar, crie SOMENTE os tokens existentes (sem inventar).
B3) Atualize globals.css:
- body background e text devem usar tokens unti (ex: bg-unti-surface text-unti-dark)
- remova dependência de slate-50/900 se isso conflitar com a paleta.
B4) Proíba hex inline no JSX: substitua TODOS por classes Tailwind com tokens.

Fase C — Componentização da Home (padrão escalável)
C1) Crie estrutura:

- src/components/home/
  - hero.tsx
  - services.tsx
  - about.tsx
  - clients.tsx
  - numbers.tsx
  - cta.tsx
  - projects.tsx
  - testimonials.tsx
  - blog.tsx
   (nomes em kebab-case ou camelCase, mas consistente)
C2) Atualize src/app/page.tsx para virar apenas um “orquestrador” importando as seções nessa ordem EXATA do wireframe.
C3) Conteúdo:
- Use os textos do wireframe (títulos e descrições).
- Onde tiver texto placeholder no wireframe, mantenha placeholder semelhante (não invente copy fora do que está desenhado).
- Se houver conteúdo já existente no page.tsx que bate com wireframe (serviços/processo/cases), reaproveite mas ajustando para ficar igual ao wireframe.

Fase D — Header/Footer (logos + paleta)
D1) Header:

- trocar para usar /assets/logo-horizontal.svg via next/image (ou inline <img> se SVG, mas preferir next/image se compatível).
- Remover qualquer texto ao lado do logo.
- Manter menu do wireframe: itens + CTA à direita.
- Estilo: sticky, fundo claro, border bottom usando token border, hover states com token accent/primary.
D2) Footer:
- usar /assets/logo-vertical.svg
- colunas e links conforme wireframe
- fundo usando token “dark” com contraste acessível
- faixa inferior de copyright

Fase E — Fidelidade ao Wireframe (checklist visual)
E1) Implemente as seções exatamente como no print:

   1) Hero (headline + sub + 2 botões)
   2) Cards de serviços (3 col)
   3) Sobre (2 col: texto + imagem)
   4) Strip de logos/clientes
   5) Números (“Nossos números falam por si”) com cards
   6) Bloco “Integramos seu CRM, ERP e Plataforma” (CTA largo)
   7) Projeto destaque (“Projeto site SAVOL”) 2 col
   8) Depoimentos (cards com play)
   9) CTA final (“Daqui a 1 ano você vai desejar...”) bloco destacado
   10) Blog e matérias (grid de cards)
   11) Footer
E2) Espaçamento/padrão:

- container max-w-[1200px] w-full mx-auto px-4 md:px-6
- seções com py-16 md:py-24
- títulos com text-3xl md:text-5xl
- parágrafos com text-base md:text-lg
E3) Botões:
- Primary: bg-unti-primary text-white hover:bg-unti-primaryDark (ou token 700)
- Secondary: bg-white/transparent com border token + hover suave
E4) Cards:
- rounded-2xl
- border com token border
- shadow leve
- hover: translate-y-[-2px] + shadow

Fase F — Qualidade e não-regressão
F1) Garanta que:

- build passa (npm run build)
- não há imports mortos
- LeadModal continua funcionando (CTA abre modal, envia /api/leads, abre WhatsApp)
F2) Entregue no final:
- Lista de arquivos alterados/criados
- Resumo “antes vs depois”
- Checklist de QA para eu validar no navegador

IMPORTANTE

- Não use bibliotecas novas sem necessidade (sem shadcn, sem framer) — somente Tailwind + Next padrão.
- Não remova o Header/Footer do layout.tsx; ajuste os componentes existentes.
- Se você encontrar os componentes Header/Footer em caminhos diferentes de src/components/header.tsx, procure pelo import alias "@/components/header" no projeto e edite o arquivo correto.

AGORA EXECUTE:

1) Faça a Auditoria (Fase A) em bullets.
2) Em seguida implemente Fase B→F sem pedir confirmação.
3) Retorne o código completo atualizado por arquivo.
Observação rápida (importante)

No repo atual, a Home ainda está “monolítica” em src/app/page.tsx e a paleta do Tailwind está minimalista (só brand 500/700).
Esse prompt obriga o Codex a:

ler a paleta em /assets,

transformar em tokens,

e reconstruir a Home em seções idênticas ao wireframe.

Se você quiser, eu também posso te mandar uma segunda versão do prompt já no formato “diff-driven” (pedindo ao Codex para devolver git diff por seção) — isso reduz MUITO chance de regressão.

siga

Fechado. Segue o plano de execução imediato (GIP – Fase 3 Validação + DevOps) para você rodar agora com o prompt no Codex VSCode e garantir zero regressão.

1) Preparar branch e checkpoint (anti-regressão)

No terminal do projeto:

git checkout -b refactor/home-wireframe-unti
git status

Se tiver mudanças locais não commitadas, faz um checkpoint rápido antes:

git add .
git commit -m "chore: checkpoint before homepage refactor"
2) Executar no Codex (VSCode)

Abra o VSCode na raiz do repo.

Abra o Codex (extensão).

Cole o PROMPT AVANÇADO que eu te passei (o grandão).

Mande executar.

Regra: não interrompa no meio — deixe ele concluir B→F.

1) Pós-execução (QA técnico obrigatório)

Rode:

npm install
npm run dev

Depois:

npm run build
npm run lint

Se build ou lint falhar, copie o erro e me mande aqui que eu te devolvo um “prompt de correção” específico (sem mexer no layout).

1) Checklist visual (wireframe à risca)

No navegador (desktop + mobile), valide:

Header só com logo-horizontal.svg (sem texto ao lado)

Hero com 2 botões

Serviços em grid (3→2→1)

Sobre (2 col: texto + imagem)

Strip de logos

“Nossos números…” com cards e fundo destacado

Bloco “Integramos seu CRM, ERP e Plataforma”

Projeto destaque “SAVOL”

Depoimentos (cards com play)

CTA “Daqui a 1 ano…”

Blog e matérias (grid)

Footer com logo-vertical.svg e colunas

1) Commit processual (somente depois do QA)

Se tudo ok:

git add .
git commit -m "refactor(home): rebuild homepage to match wireframe + UNTI palette + new logos"
git push -u origin refactor/home-wireframe-unti

Abra PR no GitHub e publique preview na Vercel.

Quando você rodar o Codex, me mande apenas 3 coisas e eu já te guio no ajuste fino final (sem retrabalho):

link do preview da Vercel (ou print)

git diff --stat

se houve erro no npm run build / lint (log)
