export const locales = ["pt", "en", "es"] as const;

export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = "pt";
export const siteUrl = "https://untidigital.com.br";

export const localeToHtmlLang: Record<AppLocale, string> = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-ES"
};

export const localeToOpenGraphLocale: Record<AppLocale, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES"
};

export function isLocale(value: string): value is AppLocale {
  return locales.includes(value as AppLocale);
}

export function normalizeRoutePath(pathname: string) {
  if (!pathname || pathname === "/") {
    return "";
  }

  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

export function getLocalizedPath(locale: AppLocale, pathname = "") {
  const normalizedPath = normalizeRoutePath(pathname);
  return normalizedPath ? `/${locale}${normalizedPath}` : `/${locale}`;
}

export function getLocalizedUrl(locale: AppLocale, pathname = "") {
  return `${siteUrl}${getLocalizedPath(locale, pathname)}`;
}
