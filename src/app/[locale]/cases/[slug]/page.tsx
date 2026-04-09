export { default } from "@/app/cases/[slug]/page";
export * from "@/app/cases/[slug]/page";

import { generateStaticParams as caseStaticParams } from "@/app/cases/[slug]/page";

const locales = ["pt", "en", "es"] as const;

export function generateStaticParams() {
  return caseStaticParams().flatMap(({ slug }) =>
    locales.map((locale) => ({ locale, slug }))
  );
}
