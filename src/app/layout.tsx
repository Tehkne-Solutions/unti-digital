import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Ubuntu } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { defaultLocale, isLocale, localeToHtmlLang, siteUrl } from "@/lib/i18n";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-ubuntu"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/images/unti-digital-favicon.png",
    shortcut: "/images/unti-digital-favicon.png",
    apple: "/images/unti-digital-favicon.png"
  }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const localeCookie = cookies().get("NEXT_LOCALE")?.value ?? defaultLocale;
  const locale = isLocale(localeCookie) ? localeCookie : defaultLocale;

  return (
    <html lang={localeToHtmlLang[locale]}>
      <body className={`${ubuntu.variable} font-sans bg-white text-zinc-900`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
