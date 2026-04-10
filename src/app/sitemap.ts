import type { MetadataRoute } from "next";
import { getCases } from "@/data/cases";
import { getBlogPosts } from "@/data/posts";
import { getLanguageAlternates } from "@/lib/metadata";
import { getLocalizedUrl, locales, type AppLocale } from "@/lib/i18n";

const staticPaths = [
  "",
  "/sobre",
  "/solucoes",
  "/solucoes/empresas",
  "/solucoes/agencias",
  "/solucoes/sites-institucionais",
  "/solucoes/plataformas-web",
  "/solucoes/integracoes-crm-erp",
  "/solucoes/governanca-seguranca",
  "/integracoes",
  "/cases",
  "/blog",
  "/contato",
  "/clientes",
  "/parceiros",
  "/planos",
  "/privacidade",
  "/politica-empresarial",
  "/servicos"
] as const;

function buildStaticEntries(locale: AppLocale): MetadataRoute.Sitemap {
  return staticPaths.map((pathname) => ({
    url: getLocalizedUrl(locale, pathname),
    lastModified: new Date(),
    changeFrequency: pathname === "" ? "weekly" : "monthly",
    priority: pathname === "" ? 1 : 0.8,
    alternates: {
      languages: getLanguageAlternates(pathname)
    }
  }));
}

function buildBlogEntries(locale: AppLocale): MetadataRoute.Sitemap {
  return getBlogPosts(locale).map((post) => ({
    url: getLocalizedUrl(locale, `/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
    alternates: {
      languages: getLanguageAlternates(`/blog/${post.slug}`)
    }
  }));
}

function buildCaseEntries(locale: AppLocale): MetadataRoute.Sitemap {
  return getCases(locale).map((caseItem) => ({
    url: getLocalizedUrl(locale, `/cases/${caseItem.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
    alternates: {
      languages: getLanguageAlternates(`/cases/${caseItem.slug}`)
    }
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => [
    ...buildStaticEntries(locale),
    ...buildBlogEntries(locale),
    ...buildCaseEntries(locale)
  ]);
}
