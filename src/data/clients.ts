import type { AppLocale } from "@/lib/i18n";

export type ClientLogoSurface = "light" | "dark";

export interface Client {
  id: string;
  name: string;
  logo: string;
  surface: ClientLogoSurface;
  locales: AppLocale[];
  cover: string;
  segment: string;
  result: string;
  description: string;
  technologies: string[];
  phone: string;
  email: string;
  whatsapp: string;
  casePage: string;
}

type ClientLogoEntry = Pick<Client, "id" | "name" | "logo" | "surface" | "locales">;

const allLocales: AppLocale[] = ["pt", "en", "es"];
const latinLocales: AppLocale[] = ["pt", "es"];
const logoBasePath = "/images/clients/updated";

const createClientLogo = (client: ClientLogoEntry): Client => ({
  ...client,
  cover: "",
  segment: "",
  result: "",
  description: "",
  technologies: [],
  phone: "",
  email: "",
  whatsapp: "",
  casePage: ""
});

export const clients: Client[] = [
  createClientLogo({
    id: "tradicional",
    name: "Tradicional",
    logo: `${logoBasePath}/tradicional.png`,
    surface: "light",
    locales: latinLocales
  }),
  createClientLogo({
    id: "chilli-beans",
    name: "Chilli Beans",
    logo: `${logoBasePath}/chilli-beans.webp`,
    surface: "light",
    locales: allLocales
  }),
  createClientLogo({
    id: "dafra",
    name: "DAFRA",
    logo: `${logoBasePath}/dafra.svg`,
    surface: "dark",
    locales: allLocales
  }),
  createClientLogo({
    id: "sym",
    name: "SYM",
    logo: `${logoBasePath}/sym.webp`,
    surface: "dark",
    locales: allLocales
  }),
  createClientLogo({
    id: "savol",
    name: "Savol",
    logo: `${logoBasePath}/savol-mini.png`,
    surface: "light",
    locales: latinLocales
  }),
  createClientLogo({
    id: "auto-shopping-tiquatira",
    name: "Auto Shopping Tiquatira",
    logo: `${logoBasePath}/auto-shopping-tiquatira.png`,
    surface: "light",
    locales: allLocales
  }),
  createClientLogo({
    id: "savol-oficial",
    name: "Savol",
    logo: `${logoBasePath}/savol-oficial.png`,
    surface: "light",
    locales: latinLocales
  }),
  createClientLogo({
    id: "t-service",
    name: "T Service",
    logo: `${logoBasePath}/t-service.svg`,
    surface: "dark",
    locales: allLocales
  }),
  createClientLogo({
    id: "clinica-vila-bethania",
    name: "Clínica Vila Bethânia",
    logo: `${logoBasePath}/clinica-vila-bethania.webp`,
    surface: "light",
    locales: latinLocales
  }),
  createClientLogo({
    id: "honda",
    name: "Honda",
    logo: `${logoBasePath}/honda.png`,
    surface: "light",
    locales: allLocales
  }),
  createClientLogo({
    id: "cb-autos",
    name: "CB Autos",
    logo: `${logoBasePath}/cb-autos.png`,
    surface: "dark",
    locales: allLocales
  }),
  createClientLogo({
    id: "beg-boutique-distillery",
    name: "BEG Boutique Distillery",
    logo: `${logoBasePath}/beg-boutique-distillery.png`,
    surface: "light",
    locales: allLocales
  }),
  createClientLogo({
    id: "magrela",
    name: "Magrela",
    logo: `${logoBasePath}/magrela.png`,
    surface: "dark",
    locales: latinLocales
  }),
  createClientLogo({
    id: "toyota-tsusho-group",
    name: "Toyota Tsusho Group",
    logo: `${logoBasePath}/toyota-tsusho-group.png`,
    surface: "light",
    locales: latinLocales
  }),
  createClientLogo({
    id: "savianna",
    name: "Savianna",
    logo: `${logoBasePath}/savianna.webp`,
    surface: "dark",
    locales: allLocales
  }),
  createClientLogo({
    id: "coty-odontologia",
    name: "Coty Odontologia",
    logo: `${logoBasePath}/coty-odontologia.jpeg`,
    surface: "light",
    locales: latinLocales
  }),
  createClientLogo({
    id: "mg",
    name: "MG",
    logo: `${logoBasePath}/mg.jpeg`,
    surface: "light",
    locales: allLocales
  })
];
