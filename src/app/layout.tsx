import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/footer";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-ubuntu"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://untidigital.com.br"),
  title: "UNTI Digital | Solucoes de Performance, Seguranca e Escala",
  description:
    "Desenvolvimento de alta performance para empresas e agencias que buscam resultados reais.",
  openGraph: {
    title: "UNTI Digital | Solucoes de Performance, Seguranca e Escala",
    description:
      "Desenvolvimento de alta performance para empresas e agencias que buscam resultados reais.",
    url: "https://untidigital.com.br",
    siteName: "UNTI Digital",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/unti-digital-homepage-image-hero-bg.jpeg",
        width: 1600,
        height: 900,
        alt: "UNTI Digital"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "UNTI Digital | Solucoes de Performance, Seguranca e Escala",
    description:
      "Desenvolvimento de alta performance para empresas e agencias que buscam resultados reais.",
    images: ["/images/unti-digital-homepage-image-hero-bg.jpeg"]
  },
  icons: {
    icon: "/images/unti-digital-favicon.png",
    shortcut: "/images/unti-digital-favicon.png",
    apple: "/images/unti-digital-favicon.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${ubuntu.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
