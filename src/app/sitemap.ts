import type { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://unti.com.br';
    const blogPosts = getBlogPosts();

    // Static pages
    const staticPages = [
        '',
        '/servicos',
        '/solucoes',
        '/solucoes/agencias',
        '/solucoes/empresas',
        '/solucoes/white-label-agencias',
        '/solucoes/sites-institucionais',
        '/cases',
        '/sobre',
        '/blog',
        '/contato',
        '/clientes',
        '/parceiros',
    ];

    // Static pages sitemap
    const staticSitemap: MetadataRoute.Sitemap = staticPages.map(page => ({
        url: `${baseUrl}${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: page === '' ? 1 : 0.8,
    }));

    // Blog posts sitemap
    const blogSitemap: MetadataRoute.Sitemap = blogPosts.map(post => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticSitemap, ...blogSitemap];
}
