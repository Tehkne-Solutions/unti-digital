import { ContactPage } from "@/components/ContactPage";
import { getContactContent } from "@/data/contact-content";
import { isLocale, type AppLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

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
