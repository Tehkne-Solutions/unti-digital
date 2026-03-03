import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin', '/api/private', '/_next'],
        },
        sitemap: 'https://unti.com.br/sitemap.xml',
    };
}
