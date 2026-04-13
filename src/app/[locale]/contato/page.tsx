import dynamic from "next/dynamic";
import { getContactContent } from "@/data/contact-content";
import { isLocale, type AppLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const ContactPage = dynamic(
  () => import("@/components/ContactPage").then((mod) => mod.ContactPage),
  {
    loading: () => (
      <div className="min-h-[80vh] flex items-center justify-center px-6 py-16">
        <div className="h-80 w-full max-w-xl animate-pulse rounded-3xl bg-zinc-100" />
      </div>
    ),
    ssr: false
  }
);

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const resolvedLocale: AppLocale = isLocale(locale) ? locale : "pt";
  const content = getContactContent(resolvedLocale);

  return buildMetadata({
    locale: resolvedLocale,
    title: content.seoTitle,
    description: content.seoDescription,
    pathname: "/contato"
  });
}

export default function ContatoPage() {
  return <ContactPage />;
}
