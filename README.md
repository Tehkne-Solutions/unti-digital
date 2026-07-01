# UNTI Digital — atualização de logos com fundo branco/transparente

Pacote para substituir os arquivos no repositório `Tehkne-Solutions/unti-digital`.

## O que mudou

- O carrossel de logos passa a usar fundo branco em todos os cards.
- O modal também usa fundo branco no card da logo.
- As logos que eram brancas sobre fundo escuro foram ajustadas para funcionar em fundo branco/transparente:
  - `dafra.svg`
  - `cb-autos.png`
  - `magrela.png`
  - `savianna.webp`
  - `mg.png`
- `src/data/clients.ts` mantém o contrato antigo do tipo `Client`, mas sem textos artificiais de resultado, descrição, telefone, WhatsApp, e-mail ou case.
- `src/data/logos.ts` continua sincronizado com `src/data/clients.ts`.

## Como aplicar

Copie o conteúdo desta pasta para a raiz do projeto, substituindo os arquivos existentes.
Depois rode:

```bash
npm run build
```

## Atenção

O arquivo `mg.jpeg` foi mantido no pacote por histórico, mas a base de clientes agora aponta para `mg.png`, que possui fundo transparente e melhor contraste em card branco.
