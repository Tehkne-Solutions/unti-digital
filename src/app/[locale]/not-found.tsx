"use client";

import { useLocale } from "next-intl";
import { PageShell } from "@/components/page-shell";
import { getStaticPageContent } from "@/data/site-pages";
import type { AppLocale } from "@/lib/i18n";

export default function LocaleNotFound() {
  const locale = useLocale() as AppLocale;
  const content = getStaticPageContent(locale, "notFound");

  return (
    <PageShell
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      actions={content.actions}
    />
  );
}
