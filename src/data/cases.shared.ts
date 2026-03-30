export type CaseCategory = "saude" | "automotivo" | "corporativo" | "industria";

export interface CaseStudy {
  id: string;
  slug: string;
  cliente: string;
  categoria: CaseCategory;
  segmento: string;
  tagline: string;
  resumoHome: string;
  resumo: string;
  imagemBanner: string;
  imagemPrint: string;
  tecnologias: string[];
  desafio: string;
  entrega: string;
  impacto: string;
  resultados: string[];
  destaqueHome: boolean;
  ordemHome?: number;
  ordemPortfolio: number;
  seoTitle: string;
  metaDescription: string;
  heroSubtitle?: string;
}

export type CaseSeed = Omit<CaseStudy, "imagemBanner" | "imagemPrint" | "seoTitle" | "metaDescription"> & {
  imagemBanner?: string;
  imagemPrint?: string;
  seoTitle?: string;
  metaDescription?: string;
  assetFolder?: string;
  assetBannerFile?: string;
  assetPrintFile?: string;
};

export const caseCategoryThemes: Record<
  CaseCategory,
  {
    label: string;
    placeholder: string;
    badgeClassName: string;
    accentClassName: string;
  }
> = {
  saude: {
    label: "Saude",
    placeholder: "/images/cases/placeholders/saude.svg",
    badgeClassName: "border-sky-200 bg-sky-500/10 text-sky-700",
    accentClassName: "bg-sky-500"
  },
  automotivo: {
    label: "Automotivo",
    placeholder: "/images/cases/placeholders/automotivo.svg",
    badgeClassName: "border-blue-200 bg-blue-500/10 text-blue-700",
    accentClassName: "bg-blue-600"
  },
  corporativo: {
    label: "Corporativo",
    placeholder: "/images/cases/corp.svg",
    badgeClassName: "border-violet-200 bg-violet-500/10 text-violet-700",
    accentClassName: "bg-violet-600"
  },
  industria: {
    label: "Industria & Varejo",
    placeholder: "/images/cases/industria.svg",
    badgeClassName: "border-amber-200 bg-amber-500/10 text-amber-700",
    accentClassName: "bg-amber-500"
  }
};

export function criarCase(caseSeed: CaseSeed): CaseStudy {
  const {
    assetFolder,
    assetBannerFile,
    assetPrintFile,
    imagemBanner,
    imagemPrint,
    seoTitle,
    metaDescription,
    ...caseBase
  } = caseSeed;
  const placeholder = caseCategoryThemes[caseSeed.categoria].placeholder;
  const resolvedBanner =
    assetFolder && assetBannerFile
      ? `/images/cases/${assetFolder}/${assetBannerFile}`
      : imagemBanner ?? placeholder;
  const resolvedPrint =
    assetFolder && assetPrintFile
      ? `/images/cases/${assetFolder}/${assetPrintFile}`
      : imagemPrint ?? resolvedBanner;

  return {
    ...caseBase,
    imagemBanner: resolvedBanner,
    imagemPrint: resolvedPrint,
    seoTitle: seoTitle ?? `${caseBase.cliente} | Case Unti Digital`,
    metaDescription:
      metaDescription ??
      `${caseBase.cliente}: ${caseBase.tagline}. ${caseBase.impacto}`
  };
}
