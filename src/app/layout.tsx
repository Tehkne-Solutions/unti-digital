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
  title: "UNTI — Serviços de Tecnologia",
  description: "Site institucional da UNTI com foco em serviços de tecnologia, plataformas web e integrações."
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
