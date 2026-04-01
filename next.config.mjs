/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    async redirects() {
        return [
            {
                // URL antiga do WordPress conforme o seu ficheiro HTML
                source: '/planos-e-precos',
                // Nova rota otimizada
                destination: '/planos',
                permanent: true, // Erro 301 (Movido permanentemente - Essencial para SEO)
            },
            {
                // Caso o utilizador tente o plural ou variações comuns
                source: '/precos',
                destination: '/planos',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
