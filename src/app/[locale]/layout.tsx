import { Ubuntu } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/footer";
import { isLocale } from "@/lib/i18n";
import { getStaticLocaleParams } from "@/lib/metadata";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-ubuntu"
});

export function generateStaticParams() {
  return getStaticLocaleParams();
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className={`${ubuntu.variable} flex min-h-screen flex-col font-sans bg-white text-zinc-900`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Newsletter />
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
