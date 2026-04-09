import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactPage } from "@/components/ContactPage";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Contact");

  return {
    title: t("page.hero.title") + " | UNTI Digital",
    description: t("page.hero.description"),
  };
}

export default function ContatoPage() {
  return <ContactPage />;
}
