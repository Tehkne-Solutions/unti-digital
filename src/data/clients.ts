import type { AppLocale } from "@/lib/i18n";

export type ClientLogoSurface = "light" | "dark";

export interface Client {
  id: string;
  name: string;
  logo: string;
  surface: ClientLogoSurface;
  locales: AppLocale[];
}

const allLocales: AppLocale[] = ["pt", "en", "es"];
const latinLocales: AppLocale[] = ["pt", "es"];
const logoBasePath = "/images/clients/updated";

export const clients: Client[] = [
  {
    id: "tradicional",
    name: "Tradicional",
    logo: `${logoBasePath}/tradicional.png`,
    surface: "light",
    locales: latinLocales
  },
  {
    id: "chilli-beans",
    name: "Chilli Beans",
    logo: `${logoBasePath}/chilli-beans.webp`,
    surface: "light",
    locales: allLocales
  },
  {
    id: "dafra",
    name: "DAFRA",
    logo: `${logoBasePath}/dafra.svg`,
    surface: "dark",
    locales: allLocales
  },
  {
    id: "sym",
    name: "SYM",
    logo: `${logoBasePath}/sym.webp`,
    surface: "dark",
    locales: allLocales
  },
  {
    id: "savol",
    name: "Savol",
    logo: `${logoBasePath}/savol-mini.png`,
    surface: "light",
    locales: latinLocales
  },
  {
    id: "auto-shopping-tiquatira",
    name: "Auto Shopping Tiquatira",
    logo: `${logoBasePath}/auto-shopping-tiquatira.png`,
    surface: "light",
    locales: allLocales
  },
  {
    id: "savol-oficial",
    name: "Savol",
    logo: `${logoBasePath}/savol-oficial.png`,
    surface: "light",
    locales: latinLocales
  },
  {
    id: "t-service",
    name: "T Service",
    logo: `${logoBasePath}/t-service.svg`,
    surface: "dark",
    locales: allLocales
  },
  {
    id: "clinica-vila-bethania",
    name: "Clínica Vila Bethânia",
    logo: `${logoBasePath}/clinica-vila-bethania.webp`,
    surface: "light",
    locales: latinLocales
  },
  {
    id: "honda",
    name: "Honda",
    logo: `${logoBasePath}/honda.png`,
    surface: "light",
    locales: allLocales
  },
  {
    id: "cb-autos",
    name: "CB Autos",
    logo: `${logoBasePath}/cb-autos.png`,
    surface: "dark",
    locales: allLocales
  },
  {
    id: "beg-boutique-distillery",
    name: "BEG Boutique Distillery",
    logo: `${logoBasePath}/beg-boutique-distillery.png`,
    surface: "light",
    locales: allLocales
  },
  {
    id: "magrela",
    name: "Magrela",
    logo: `${logoBasePath}/magrela.png`,
    surface: "dark",
    locales: latinLocales
  },
  {
    id: "toyota-tsusho-group",
    name: "Toyota Tsusho Group",
    logo: `${logoBasePath}/toyota-tsusho-group.png`,
    surface: "light",
    locales: latinLocales
  },
  {
    id: "savianna",
    name: "Savianna",
    logo: `${logoBasePath}/savianna.webp`,
    surface: "dark",
    locales: allLocales
  },
  {
    id: "coty-odontologia",
    name: "Coty Odontologia",
    logo: `${logoBasePath}/coty-odontologia.jpeg`,
    surface: "light",
    locales: latinLocales
  },
  {
    id: "mg",
    name: "MG",
    logo: `${logoBasePath}/mg.jpeg`,
    surface: "light",
    locales: allLocales
  }
];
