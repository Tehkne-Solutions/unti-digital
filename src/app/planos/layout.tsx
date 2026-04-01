import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planos e Investimentos | UNTI Digital - Engenharia de Performance",
  description: "Escolha o plano ideal para a escala do seu negócio. Soluções em sites institucionais, lojas virtuais e portais de conteúdo com foco em SEO e conversão.",
  openGraph: {
    title: "UNTI Digital | Tabela de Investimentos 2026",
    description: "Transforme sua presença digital com engenharia de software de elite. Conheça nossos planos de Sites Institucionais, Lojas Virtuais e Portais de Conteúdo.",
    url: "https://untidigital.com.br/planos",
    siteName: "UNTI Digital",
    images: [
      {
        url: "/images/og-planos.png", // Recomendo criar esta imagem 1200x630
        width: 1200,
        height: 630,
        alt: "Planos UNTI Digital",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planos e Preços | UNTI Digital",
    description: "Acelere seu crescimento com tecnologia de ponta.",
    images: ["/images/og-planos.png"],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}