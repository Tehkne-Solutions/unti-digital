export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    category: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'sites-institucionais-que-vendem',
        title: 'Sites institucionais que vendem: arquitetura de presença digital',
        excerpt: 'Como estruturar sites institucionais que mantêm autoridade e geram resultados de negócio.',
        content: `Sites institucionais precisam de muito mais do que apenas informação. Precisam comunicar valor, credibilidade e capacidade de entrega.

Neste artigo compartilhamos a metodologia que usamos para desenhar presença digital de empresas B2B: desde arquitetura de informação até conversão estratégica.

## Pilares da presença digital

1. **Clareza de posicionamento**: Quem você atende e por que é diferente
2. **Performance técnica**: Sites rápidos convertem mais
3. **Estrutura de entrega**: Como o site comunica sua capacidade
4. **Integrações inteligentes**: De leads até análise de resultados`,
        date: '2024-03-15',
        author: 'Time UNTI',
        category: 'Estratégia Digital'
    },
    {
        slug: 'integrações-que-destravam-crescimento',
        title: 'Integrações que destravam crescimento: CRM + Marketing + Vendas',
        excerpt: 'Casos reais de como integrar sistemas para acelerar o ciclo de vendas e melhorar operação.',
        content: `A maioria das falhas em crescimento não é de marketing ou vendas isoladamente. É o gap entre sistemas que não conversam.

Mostramos casos onde a integração estratégica de CRM, ferramentas de marketing e plataformas de operação destrancou crescimento exponencial.

## Arquitetura de integração

- APIs e webhooks para comunicação em tempo real
- Automação de workflows entre plataformas
- Data warehouse centralizado
- Relatórios unificados para decisão`,
        date: '2024-03-08',
        author: 'Time UNTI',
        category: 'Tecnologia'
    },
    {
        slug: 'lgpd-segurança-sem-entraves',
        title: 'LGPD e segurança sem entraves: como fazer certo desde o início',
        excerpt: 'Guia prático para implementar segurança e conformidade LGPD sem complicar operação.',
        content: `Conformidade LGPD é frequentemente vista como um entrave. Mas quando bem implementada, é uma vantagem competitiva.

Compartilhamos a checklist que usamos em todos os projetos: tecnologia, processos e documentação para estar compliant e seguro.

## Checklist de implementação

1. Inventário de dados pessoais
2. Termos de uso e políticas claras
3. Consentimento explícito
4. Encriptação em trânsito e repouso
5. Backup e plano de recuperação
6. Direitos de usuário (acesso, exclusão)`,
        date: '2024-03-01',
        author: 'Time UNTI',
        category: 'Segurança'
    },
    {
        slug: 'performance-web-metricas-que-importam',
        title: 'Performance web: métricas que realmente importam para negócio',
        excerpt: 'Além de segundos: como medir performance de forma que impacta receita.',
        content: `A velocidade de um site importa, mas o que realmente importa é o impacto na conversão e no negócio.

Neste guia prático mostramos quais métricas rastrear e como correlacionar performance com receita real.

## Métricas que importam

- Core Web Vitals (Google)
- Taxa de conversão por performance
- Custo por aquisição vs. velocidade
- Satisfação de usuário
- ROI de otimização

Com dados reais, você consegue priorizar melhorias que geram impacto financeiro.`,
        date: '2024-02-20',
        author: 'Time UNTI',
        category: 'Performance'
    }
];

export function getBlogPosts(): BlogPost[] {
    return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
    return blogPosts.map(post => post.slug);
}
