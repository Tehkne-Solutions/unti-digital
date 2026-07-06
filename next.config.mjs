/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    images: {
        formats: ["image/avif", "image/webp"],
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
                source: '/lp-services',
                destination: '/en/lp-services',
                permanent: false,
            },
            {
                source: '/lp-servicos',
                destination: '/pt/lp-services',
                permanent: false,
            },
            {
                source: '/lp-serviços',
                destination: '/pt/lp-services',
                permanent: false,
            },
            {
                source: '/planos-e-precos',
                destination: '/planos',
                permanent: true,
            },
            {
                source: '/precos',
                destination: '/planos',
                permanent: true,
            },
            {
                source: '/sites-institucionais',
                destination: '/solucoes/sites-institucionais',
                permanent: true,
            },
            {
                source: '/lojas-virtuais',
                destination: '/solucoes/plataformas-web',
                permanent: true,
            },
            {
                source: '/portais-de-conteudo',
                destination: '/solucoes/governanca-seguranca',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
