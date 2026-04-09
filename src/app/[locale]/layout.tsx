import { Ubuntu } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import "../globals.css";
import { Header } from "@/components/header";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/footer";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-ubuntu"
});

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${ubuntu.variable} font-sans bg-white text-zinc-900`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Newsletter />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}