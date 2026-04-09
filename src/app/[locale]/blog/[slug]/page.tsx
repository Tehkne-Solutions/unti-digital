export { default } from "@/app/blog/[slug]/page";
export * from "@/app/blog/[slug]/page";

import { generateStaticParams as blogStaticParams } from "@/app/blog/[slug]/page";

const locales = ["pt", "en", "es"] as const;

export function generateStaticParams() {
  return blogStaticParams().flatMap(({ slug }) =>
    locales.map((locale) => ({ locale, slug }))
  );
}
