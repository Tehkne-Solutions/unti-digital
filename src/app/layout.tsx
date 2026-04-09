import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-ubuntu"
});

export const metadata = {
  metadataBase: new URL("https://untidigital.com.br"),
  title: "UNTI Digital | Soluções de Performance, Segurança e Escala",
  description:
    "Desenvolvimento de alta performance para empresas e agências que buscam resultados reais.",
  openGraph: {
    title: "UNTI Digital | Soluções de Performance, Segurança e Escala",
    description:
      "Desenvolvimento de alta performance para empresas e agências que buscam resultados reais.",
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
    title: "UNTI Digital | Soluções de Performance, Segurança e Escala",
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
      <body className={`${ubuntu.variable} font-sans bg-white text-zinc-900`}>
        {children}
      </body>
    </html>
  );
}
