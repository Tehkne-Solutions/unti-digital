# Plano de Produto (GIP) — Novo Site da Unti

## 1. Visão do produto
Construir o novo site institucional da Unti como um ativo comercial de alto impacto, orientado a geração de leads qualificados, prova de autoridade e conversão de contas enterprise.

## 2. Método GIP adotado
Para este projeto, o **GIP (Gestão Incremental de Produto)** será aplicado em 5 camadas:
1. **G — Goals (Objetivos e métricas)**
2. **I — Inputs (Entradas: negócio, usuário, técnica e compliance)**
3. **P — Plan (Plano incremental: MVP, ondas e prioridades)**
4. **Execução por ritos** (sprints, checkpoints e gates)
5. **Evolução contínua** (aprendizado e otimização)

---

## 3. G — Goals (Objetivos)

### 3.1 Objetivo de negócio
Posicionar a Unti como provedora de serviços de tecnologia para projetos institucionais de escopo fechado, com foco em contratos de maior valor.

### 3.2 Objetivo de produto
Entregar um site que:
- apresente claramente serviços e diferenciais,
- gere demanda qualificada via formulário + WhatsApp,
- sustente conteúdo recorrente via blog/cases,
- permita gestão editorial com baixa fricção.

### 3.3 Objetivos de experiência
- Comunicação de valor já na primeira dobra da Home.
- Jornada de contato curta e sem ruído.
- Clareza de oferta por serviço (LP individual).
- Interface moderna, limpa e confiável.

### 3.4 KPIs iniciais (30/60/90 dias)
- Taxa de conversão visitante → lead.
- Volume de leads qualificados por serviço.
- CTR nos CTAs primários da Home e LPs.
- Tempo médio nas páginas de serviço/cases.
- Origem de tráfego com melhor conversão.

---

## 4. I — Inputs (Entradas do produto)

### 4.1 Entradas de negócio (reunião)
- Stack priorizada: **Next.js + Tailwind + Vercel**.
- Recurso obrigatório: captação com modal de formulário antes do WhatsApp.
- Conteúdos estratégicos: serviços, cases, clientes, blog, parceiros e integrações.
- Diretriz comercial: priorizar percepção enterprise e prova social.

### 4.2 Entradas de usuário
Perfis principais:
1. **Decisor empresarial** (diretor/gestor) — busca confiança e entrega.
2. **Gestor de marketing/operação** — busca fornecedor capaz e previsível.
3. **Parceiro potencial** — busca clareza de atuação e integrações.

### 4.3 Entradas técnicas
- Front-end em Next.js.
- Estilização com Tailwind.
- CMS: decisão pendente entre headless pronto vs Nexus Suite vs WordPress headless.
- Integrações mínimas: WhatsApp, Google Sheets, Analytics/GTM.

### 4.4 Entradas de compliance e segurança
- LGPD desde o MVP.
- Coleta mínima de dados no formulário.
- Política de consentimento e retenção definida antes do go-live.

---

## 5. P — Plan (Plano incremental)

## 5.1 Estrutura de releases

### Release 0 — Descoberta e definição (Semana 1)
**Objetivo:** fechar decisões de arquitetura, UX e conteúdo crítico.

**Entregáveis:**
- Wireframe low-fi validado.
- Design base no Figma (Home + LP de serviço padrão).
- Decisão final de CMS.
- Mapa de conteúdo por página.
- Fluxo técnico do formulário/WhatsApp aprovado.

**Gate de saída:** backlog priorizado + critérios de pronto do MVP assinados.

### Release 1 — MVP funcional (Semanas 2 e 3)
**Objetivo:** publicar versão funcional com jornada comercial completa.

**Escopo MVP:**
- Home, Sobre, Serviços, LP de serviços, Cases/Clientes, Blog, Contato.
- Seções de parceiros/integrações (mínimo viável, se aprovadas no gate).
- Formulário modal + redirecionamento WhatsApp + persistência em Sheets.
- Analytics/GTM e fundamentos de SEO técnico.

**Gate de saída:** homologação funcional + revisão de conteúdo + checklist LGPD.

### Release 2 — Hardening e lançamento (Semana 4)
**Objetivo:** estabilidade, performance, qualidade e publicação.

**Entregáveis:**
- QA funcional completo.
- Ajustes finais de UX/UI.
- Otimização de performance (Core Web Vitals básico).
- Revisão de copy e SEO on-page.
- Go-live + monitoramento de métricas.

**Gate de saída:** aceite final e plano de evolução da fase 2.

### Release 3 — Evolução (pós-MVP)
**Itens candidatos:**
- Dark mode (se não entrar no MVP).
- Seletor de idioma (se não entrar no MVP).
- Dashboard interno/CRM simplificado.
- Automações avançadas com IA/RAG.

---

## 6. Backlog de produto (priorização GIP)

### P0 — Essencial para valor imediato
- Narrativa de valor clara na Home.
- Páginas de serviço com estrutura de conversão.
- Prova social (cases, logos e depoimentos).
- Blog com gestão editorial.
- Fluxo de lead com formulário + WhatsApp + Sheets.
- Consentimento LGPD e política de privacidade.

### P1 — Valor elevado, não bloqueante de go-live
- Parceiros e integrações com conteúdo expandido.
- Melhorias visuais avançadas (animações e microinterações).
- SEO de conteúdo por cluster de serviço.

### P2 — Escala e eficiência operacional
- Painel/CRM próprio.
- Automações de qualificação de lead.
- Internacionalização avançada.

---

## 7. Matriz de decisões pendentes
1. **CMS do MVP**
   - Opções: headless pronto / Nexus Suite / WordPress headless.
   - Critério: velocidade + governança + custo de manutenção.
2. **Dark mode e idioma no lançamento**
   - Entram no MVP apenas se não comprometer prazo crítico.
3. **Parcerias e integrações no MVP**
   - Definir profundidade mínima para não atrasar núcleo de conversão.
4. **Política de dados de lead**
   - Sheets-only vs Sheets + banco dedicado.

---

## 8. Governança GIP (ritos e cadência)
- **Daily assíncrona:** status, bloqueios, próximo passo (curto).
- **Checkpoint semanal (30 min):** progresso por trilha (produto, design, dev, conteúdo).
- **Review quinzenal:** demo do incremento entregue.
- **Gate de release:** checklist técnico + checklist de negócio + checklist LGPD.

---

## 9. Papéis e responsabilidades
- **Rubens (Produto/Negócio):** visão, priorização comercial e aprovação funcional.
- **Marcos (Design):** wireframe → UI high-fi e consistência visual.
- **Thales (Tech Lead):** arquitetura, integrações, qualidade técnica e publicação.
- **Daniel (Operações):** gestão de demandas, prazos, assets e coordenação geral.

---

## 10. Critérios de pronto (Definition of Done do MVP)
Um item só é considerado concluído quando:
1. Está implementado e validado funcionalmente.
2. Está com conteúdo final aprovado.
3. Foi revisado em responsividade (desktop/mobile).
4. Tem rastreamento mínimo de evento (quando aplicável).
5. Está em conformidade com requisitos LGPD definidos.

---

## 11. Próxima reunião (agenda sugerida para fechar GIP)
**Duração:** 90 min
1. Fechar CMS e política de dados (25 min)
2. Fechar escopo do MVP e cortes de fase 2 (20 min)
3. Validar wireframe + padrão de LP de serviço (20 min)
4. Confirmar cronograma e owners por entrega (15 min)
5. Definir KPIs e ritual de acompanhamento pós go-live (10 min)

**Saída esperada:** plano GIP aprovado, backlog fechado da sprint 1 e início imediato da execução.
