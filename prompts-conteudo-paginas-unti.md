# Prompts de Conteúdo — Site da Unti

Este arquivo reúne prompts prontos para gerar conteúdo das páginas do site da Unti com consistência de tom, foco comercial e estrutura orientada a conversão.

---

## 1) Prompt-mestre (usar antes de qualquer página)

```txt
Você é um estrategista de conteúdo B2B para empresas de tecnologia.

Contexto da marca:
- Empresa: Unti
- Posicionamento: provedora de serviços de tecnologia para projetos institucionais e escopos fechados
- Público-alvo: decisores e gestores de médias/grandes empresas
- Perfil desejado de clientes: contas enterprise
- Tom de voz: claro, consultivo, seguro, sem exagero, sem promessas irreais
- Objetivo do site: gerar leads qualificados e fortalecer autoridade

Regras de escrita:
1) Português-BR.
2) Evitar jargão vazio e frases genéricas.
3) Frases objetivas, com foco em valor de negócio.
4) Inserir prova de capacidade (metodologia, processo, governança, resultado esperado).
5) Sempre incluir CTA final orientado a diagnóstico/projeto.
6) Não inventar números, cases ou clientes que não foram confirmados.

Formato de saída:
- Entregue em Markdown.
- Inclua títulos e subtítulos prontos para página web.
- Inclua versão curta (resumo executivo de 3-5 linhas) ao final.
```

---

## 2) Prompt — Home

```txt
Com base no contexto da Unti, escreva o conteúdo completo da Home do site com estrutura de conversão para B2B.

Estrutura obrigatória:
1) Hero
   - Eyebrow
   - Headline principal
   - Subheadline
   - CTA primário e CTA secundário
2) Bloco “O que entregamos” (4 a 6 cards de serviços)
3) Bloco “Como trabalhamos” (processo em 4 etapas)
4) Bloco “Para quem é” (tipos de empresa/projetos)
5) Bloco “Diferenciais da Unti”
6) Bloco “FAQ rápido” (5 perguntas)
7) Bloco final de CTA

Regras:
- Falar com decisor de negócio.
- Enfatizar escopo fechado, previsibilidade e execução.
- Não usar clichês como “soluções inovadoras” sem detalhar.
- Linguagem profissional e direta.

Saída:
- Markdown com H1, H2 e bullets quando necessário.
- Incluir uma versão “Hero alternativa” (2ª opção de headline + subheadline).
```

---

## 3) Prompt — Sobre

```txt
Crie a página “Sobre a Unti” com narrativa institucional forte para transmitir confiança em clientes enterprise.

Estrutura obrigatória:
1) Abertura: quem somos
2) Nossa evolução de posicionamento
3) Nossa forma de operar (governança, processo, comunicação)
4) Princípios de trabalho (3 a 5)
5) Tipos de projetos que aceitamos e que não aceitamos
6) CTA final para conversa estratégica

Regras:
- Posicionar a Unti como parceira de execução, não apenas “fábrica de site”.
- Deixar claro foco em escopos fechados e sustentabilidade de operação.
- Texto confiante, sem arrogância.

Saída:
- Markdown pronto para CMS.
- Inclua versão curta para meta description (até 155 caracteres).
```

---

## 4) Prompt — Serviços (página de listagem)

```txt
Escreva a página de listagem de serviços da Unti com foco comercial.

Serviços base para estruturar:
- Sites institucionais
- Plataformas web sob medida
- Integrações e automações
- Aplicativos para operações internas
- Projetos especiais de tecnologia sob escopo fechado

Para cada serviço, gerar:
1) Nome
2) Descrição curta (1-2 linhas)
3) Problema de negócio que resolve
4) Entrega típica
5) CTA para página detalhada

Adicionar:
- Seção “Como escolher o serviço ideal”
- Seção “Quando NÃO contratar cada serviço”
- CTA final: diagnóstico

Saída:
- Markdown com blocos bem separados por serviço.
```

---

## 5) Prompt — LP de Serviço (template reutilizável)

```txt
Crie uma landing page de serviço B2B da Unti.

Parâmetros de entrada (substitua antes de gerar):
- [NOME_DO_SERVICO]
- [ICP_ALVO]
- [PROBLEMA_PRINCIPAL]
- [ENTREGA_PRINCIPAL]
- [PRAZO_MEDIO]

Estrutura obrigatória:
1) Hero (headline + subheadline + CTA)
2) Dor de negócio
3) O que entregamos (escopo)
4) O que está incluído / não incluído
5) Processo de execução (etapas)
6) Critérios de sucesso
7) FAQ (mínimo 6)
8) CTA final

Regras:
- Linguagem de proposta comercial clara.
- Evitar promessas absolutas.
- Deixar explícito o escopo fechado.

Saída:
- Markdown pronto para publicação.
```

---

## 6) Prompt — Cases e Projetos

```txt
Gere a estrutura editorial da página “Cases e Projetos” da Unti.

Objetivo:
- Demonstrar capacidade de execução e confiança para contas enterprise.

Estrutura obrigatória:
1) Introdução da página
2) Bloco de filtros sugeridos (segmento, tipo de projeto, objetivo)
3) Template de card de case
4) Template de case completo com seções:
   - Contexto
   - Desafio
   - Estratégia
   - Execução
   - Resultado esperado/observado
   - Próximos passos
5) Bloco de CTA final

Regras:
- Não inventar dados numéricos.
- Usar placeholders explícitos quando faltar informação real.

Saída:
- Markdown com um exemplo completo de case fictício marcado como “EXEMPLO ESTRUTURAL”.
```

---

## 7) Prompt — Clientes

```txt
Crie o conteúdo da página de clientes para a Unti com foco em prova social e confiança.

Estrutura:
1) Headline da página
2) Como trabalhamos com clientes
3) Segmentos atendidos
4) O que clientes valorizam no nosso modelo
5) Depoimentos (formato-modelo com placeholders)
6) CTA final

Regras:
- Não citar clientes não autorizados.
- Se não houver autorização pública, usar placeholders e orientar coleta de depoimentos.

Saída:
- Markdown com seção “Checklist de prova social pendente”.
```

---

## 8) Prompt — Blog (linha editorial + templates)

```txt
Monte a estratégia de conteúdo do blog da Unti para 90 dias.

Objetivo do blog:
- Aumentar autoridade técnica e gerar demanda qualificada.

Entregar:
1) 4 pilares editoriais
2) 12 pautas (3 por mês)
3) Para cada pauta:
   - Título SEO
   - Palavra-chave foco
   - Intenção de busca
   - Outline em H2/H3
   - CTA sugerido
4) Template de artigo padrão da Unti
5) Checklist de qualidade editorial antes de publicar

Regras:
- Evitar conteúdo raso.
- Foco em dores reais de decisores.
- Misturar conteúdo estratégico, técnico e de operação.

Saída:
- Markdown em formato de calendário editorial.
```

---

## 9) Prompt — Parceiros

```txt
Escreva a página de parceiros da Unti para atrair colaborações estratégicas.

Estrutura:
1) Quem buscamos como parceiro
2) Modelos de parceria possíveis
3) Critérios de elegibilidade
4) Processo de onboarding
5) FAQ de parceiros
6) CTA para candidatura

Regras:
- Linguagem profissional e objetiva.
- Deixar claro ganho mútuo e critérios de qualidade.

Saída:
- Markdown pronto para página institucional.
```

---

## 10) Prompt — Integrações

```txt
Crie a página de integrações da Unti destacando capacidades técnicas sem excesso de jargão.

Estrutura:
1) Introdução
2) Tipos de integrações que fazemos
3) Fluxo de integração (descoberta → implementação → validação)
4) Requisitos para iniciar um projeto de integração
5) Perguntas frequentes
6) CTA final

Regras:
- Priorizar clareza para público não técnico.
- Equilibrar visão executiva e profundidade técnica.

Saída:
- Markdown com tabelas quando útil.
```

---

## 11) Prompt — Contato (texto da página + formulário)

```txt
Escreva o conteúdo da página de contato da Unti para aumentar conversão de leads qualificados.

Entregar:
1) Headline e subheadline
2) Texto de orientação para preenchimento do formulário
3) Microcopys dos campos:
   - Nome
   - Telefone
   - E-mail
   - Empresa
   - Tipo de projeto
4) Texto curto de consentimento LGPD (linguagem clara)
5) Mensagens de sucesso, erro e fallback
6) CTA final

Regras:
- Tom consultivo e transparente.
- Reduzir fricção sem perder qualidade de qualificação.

Saída:
- Markdown com bloco final “versão curta para modal”.
```

---

## 12) Prompt — Revisão final de consistência (rodar após gerar todas as páginas)

```txt
Revise os conteúdos gerados para todas as páginas do site da Unti e faça uma auditoria de consistência.

Checklist obrigatório:
1) Tom de voz consistente entre páginas
2) Clareza de proposta de valor
3) Coerência entre serviços, cases e CTAs
4) Ausência de promessas exageradas
5) Linguagem adequada para decisor B2B
6) Conformidade básica de LGPD no texto de captação
7) SEO on-page básico (títulos e descrições)

Saída:
- Tabela com: Página | Status | Problema | Ajuste sugerido
- Versão final consolidada por página (somente trechos ajustados)
```

---

## 13) Ordem recomendada de uso dos prompts
1. Prompt-mestre
2. Home
3. Serviços
4. LP de Serviço (template para cada serviço)
5. Sobre
6. Cases
7. Clientes
8. Blog
9. Parceiros
10. Integrações
11. Contato
12. Revisão final de consistência
