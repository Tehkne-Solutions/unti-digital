# Planejamento Estruturado — Novo Site Institucional da Unti

## 1) Objetivo do documento
Organizar a conversa completa da reunião em um plano acionável para execução do novo site da Unti, com foco em:
- decisões já tomadas,
- decisões pendentes,
- escopo do MVP,
- responsabilidades,
- e próximos passos com prazo.

## 2) Contexto estratégico consolidado
- A Unti está reposicionando sua atuação de “agência de marketing + outsourcing” para **provedora de serviços de tecnologia**.
- O site passa a ser ativo central de vendas e autoridade da marca.
- O objetivo comercial declarado é atingir contas enterprise (ex.: Savana, Toyota, Chilli Beans) com escopos fechados e tickets mais altos.
- O site deve refletir um perfil institucional robusto, sem parecer portfólio de freelancer.

## 3) Decisões já confirmadas na conversa

### 3.1 Stack principal
- **Framework:** Next.js
- **Estilização:** Tailwind CSS
- **Hospedagem/deploy:** Vercel
- **WordPress tradicional:** descartado como front principal

### 3.2 Diretrizes de UX/UI
- Referências aprovadas: DigitalOcean (organização/robustez) e elementos de hero no estilo visto em referências de benchmark.
- Home deve comunicar serviço/produto já na primeira dobra.
- Preferência por layout limpo, robusto e com animações sutis.
- Funcionalidades desejadas desde o início:
  - modo escuro,
  - seletor de idioma.

### 3.3 Diretriz de conteúdo e posicionamento
- Blog com viés editorial mais “entrevista e autoridade de setor” (com foco automobilístico/tecnologia), não apenas conteúdo genérico automatizado.
- Serviços devem ser apresentados com profundidade, incluindo:
  - escopo,
  - proposta de valor,
  - possíveis faixas de investimento,
  - prova social (logos/cases/depoimentos),
  - FAQ.

## 4) Escopo funcional consolidado

### 4.1 Páginas e seções esperadas
1. Home
2. Sobre
3. Serviços (listagem)
4. Página individual de serviço (estilo LP)
5. Cases e projetos
6. Clientes
7. Blog
8. Contato
9. Parceiros
10. Integrações

### 4.2 Gestão de conteúdo (CMS)
- Necessidade explícita: não gastar tempo com construção de CMS do zero.
- Opções consideradas:
  - CMS existente integrado ao Next,
  - WordPress headless (API),
  - Nexus Suite (proposta apresentada na reunião).
- Necessidade central: editar/remover/adicionar conteúdos de blog, serviços, cases, parceiros e integrações com autonomia.

## 5) Fluxo de captação (WhatsApp + formulário)

### 5.1 Comportamento esperado
1. Usuário clica no botão de WhatsApp.
2. Em vez de redirecionar direto, abre modal/formulário.
3. Usuário preenche os dados.
4. Ao enviar:
   - inicia conversa no WhatsApp,
   - salva dados em Google Sheets,
   - opcionalmente replica para banco (conforme decisão de segurança).

### 5.2 Campos mínimos citados
- Nome
- Telefone
- E-mail
- Empresa
- Tipo de projeto desejado

## 6) Segurança, dados e LGPD
- Preocupação explícita com não centralizar dados sensíveis sem necessidade.
- Requisito mínimo: conformidade LGPD no fluxo de captação.
- Definir na próxima reunião:
  - base oficial de armazenamento (somente planilha vs planilha + banco dedicado),
  - prazo de retenção,
  - política de consentimento,
  - anonimização/mascaração quando houver uso de IA.

## 7) MVP técnico (fase 1)

### 7.1 Entregáveis obrigatórios
- Projeto base Next.js + Tailwind no ar.
- Estrutura institucional completa publicada.
- Blog funcional com gestão editorial.
- Serviços com páginas de detalhe em formato de venda consultiva.
- Cases/clientes com prova social.
- Formulário de captação integrado ao WhatsApp + Google Sheets.
- Integrações mínimas de Analytics/GTM.
- Banner e textos de consentimento LGPD.

### 7.2 Fora do MVP (fase 2, se necessário)
- Dashboard interno/CRM completo dentro do projeto.
- Relatórios avançados no painel administrativo.
- Automações avançadas de IA e enriquecimento de lead.

## 8) Papéis e responsabilidades definidos
- **Rubens:** wireframe/protótipo de baixa fidelidade e visão de negócio.
- **Marcos:** transformar wireframe em design de alta fidelidade no Figma.
- **Thales:** arquitetura técnica, integrações, implementação e decisões de backend.
- **Daniel:** coordenação operacional, prazos, coleta de assets (textos/imagens) e acompanhamento.

## 9) Decisões pendentes (abrir e fechar na próxima reunião)
1. CMS final (qual ferramenta será adotada no MVP).
2. Serviços que terão LP própria já no lançamento.
3. Se “parceiros” e “integrações” entram no MVP ou em wave seguinte.
4. Banco de dados do fluxo de leads (somente Sheets ou também Supabase).
5. Se dark mode e idioma entram no go-live ou ficam para sprint subsequente.

## 10) Agenda recomendada da próxima reunião de execução (90 min)

### Bloco A — Fechamento técnico (25 min)
- Bater martelo do CMS.
- Definir modelagem mínima de conteúdo (posts, serviço, case, parceiro, integração).
- Definir política de dados do formulário.

### Bloco B — Fechamento de produto (25 min)
- Priorizar páginas do lançamento (MVP estrito).
- Definir estrutura da Home e de 1 LP de serviço como padrão.
- Definir prova social inicial (logos, depoimentos, cases âncora).

### Bloco C — Design e conteúdo (20 min)
- Validar guia visual inicial (tipografia, cores, componentes).
- Validar tom de voz e narrativa da marca.
- Aprovar checklist de conteúdo por página.

### Bloco D — Planejamento operacional (20 min)
- Fechar cronograma de 4 semanas.
- Definir entregáveis semanais por responsável.
- Definir ritual de acompanhamento (checkpoint semanal de 30 min).

## 11) Cronograma sugerido (4 semanas)
- **Semana 1:** wireframe, decisão de CMS, arquitetura e design base.
- **Semana 2:** implementação Home, Sobre, Serviços e Contato.
- **Semana 3:** blog, cases/clientes, parceiros/integrações (se estiverem no MVP).
- **Semana 4:** integrações finais (WhatsApp/Sheets/Analytics), QA, LGPD, homologação e publicação.

## 12) Checklist pré-reunião (cada dono)

### Rubens
- Entregar wireframe low-fi com jornada principal.
- Lista final de serviços prioritários.

### Marcos
- Moodboard e direção visual inicial.
- Protótipo de 1 página-chave (Home ou LP de serviço).

### Thales
- Proposta técnica curta com 2 opções de CMS (prós/contras).
- Fluxo técnico do formulário WhatsApp + Sheets + política de dados.

### Daniel
- Board com tarefas e prazos.
- Lista de conteúdos pendentes por página e responsável.

---

## Convite pronto de calendário
**Título:** Reunião de Execução — Novo Site da Unti (Fechamento MVP)  
**Duração:** 90 min  
**Objetivo:** Fechar CMS, escopo de lançamento, cronograma e donos por entrega.  
**Saída esperada:** plano fechado com backlog priorizado, decisões técnicas registradas e início imediato da sprint 1.
