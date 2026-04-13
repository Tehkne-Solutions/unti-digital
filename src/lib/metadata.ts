import type { Metadata } from "next";
import {
  defaultLocale,
  getLocalizedUrl,
  localeToOpenGraphLocale,
  locales,
  siteUrl,
  type AppLocale
} from "@/lib/i18n";

type RouteMetadataEntry = {
  title: string;
  desc: string;
};

type MessagesWithMetadata = {
  Metadata: Record<string, RouteMetadataEntry>;
};

type BuildMetadataInput = {
  locale: AppLocale;
  title: string;
  description: string;
  pathname?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

async function getMessages(locale: AppLocale) {
  return (await import(`@/messages/${locale}.json`)).default as MessagesWithMetadata;
}

export function getLanguageAlternates(pathname = "") {
  return {
    "pt-BR": getLocalizedUrl("pt", pathname),
    "en-US": getLocalizedUrl("en", pathname),
    "es-ES": getLocalizedUrl("es", pathname)
  };
}

export function buildMetadata({
  locale,
  title,
  description,
  pathname = "",
  image = "/images/unti-digital-homepage-image-hero-bg.jpeg",
  type = "website",
  publishedTime
}: BuildMetadataInput): Metadata {
  const url = getLocalizedUrl(locale, pathname);

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
      languages: {
        ...getLanguageAlternates(pathname),
        "x-default": getLocalizedUrl(defaultLocale, pathname)
      }
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "UNTI Digital",
      locale: localeToOpenGraphLocale[locale],
      type,
      publishedTime,
      images: [
        {
          url: image,
          width: 1600,
          height: 900,
          alt: "UNTI Digital"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}

export async function getRouteMetadata(
  locale: AppLocale,
  metadataKey: string,
  pathname = ""
) {
  const messages = await getMessages(locale);
  const entry = messages.Metadata[metadataKey];

  if (!entry) {
    throw new Error(`Missing metadata entry: ${metadataKey} for locale ${locale}`);
  }

  return buildMetadata({
    locale,
    title: entry.title,
    description: entry.desc,
    pathname
  });
}

export function getStaticLocaleParams() {
  return locales.map((locale) => ({ locale }));
}
