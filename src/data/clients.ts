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

type ClientLogoEntry = Pick<Client, "id" | "name" | "logo" | "locales">;

const allLocales: AppLocale[] = ["pt", "en", "es"];
const latinLocales: AppLocale[] = ["pt", "es"];
const logoBasePath = "/images/clients/updated";

const createClientLogo = (client: ClientLogoEntry): Client => ({
  ...client,
  surface: "light",
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
    locales: latinLocales
  }),
  createClientLogo({
    id: "chilli-beans",
    name: "Chilli Beans",
    logo: `${logoBasePath}/chilli-beans.webp`,
    locales: allLocales
  }),
  createClientLogo({
    id: "dafra",
    name: "DAFRA",
    logo: `${logoBasePath}/dafra.svg`,
    locales: allLocales
  }),
  createClientLogo({
    id: "sym",
    name: "SYM",
    logo: `${logoBasePath}/sym.webp`,
    locales: allLocales
  }),
  createClientLogo({
    id: "savol",
    name: "Savol",
    logo: `${logoBasePath}/savol-mini.png`,
    locales: latinLocales
  }),
  createClientLogo({
    id: "auto-shopping-tiquatira",
    name: "Auto Shopping Tiquatira",
    logo: `${logoBasePath}/auto-shopping-tiquatira.png`,
    locales: allLocales
  }),
  createClientLogo({
    id: "savol-oficial",
    name: "Savol",
    logo: `${logoBasePath}/savol-oficial.png`,
    locales: latinLocales
  }),
  createClientLogo({
    id: "t-service",
    name: "T Service",
    logo: `${logoBasePath}/t-service.svg`,
    locales: allLocales
  }),
  createClientLogo({
    id: "clinica-vila-bethania",
    name: "Clínica Vila Bethânia",
    logo: `${logoBasePath}/clinica-vila-bethania.webp`,
    locales: latinLocales
  }),
  createClientLogo({
    id: "honda",
    name: "Honda",
    logo: `${logoBasePath}/honda.png`,
    locales: allLocales
  }),
  createClientLogo({
    id: "cb-autos",
    name: "CB Autos",
    logo: `${logoBasePath}/cb-autos.png`,
    locales: allLocales
  }),
  createClientLogo({
    id: "beg-boutique-distillery",
    name: "BEG Boutique Distillery",
    logo: `${logoBasePath}/beg-boutique-distillery.png`,
    locales: allLocales
  }),
  createClientLogo({
    id: "magrela",
    name: "Magrela",
    logo: `${logoBasePath}/magrela.png`,
    locales: latinLocales
  }),
  createClientLogo({
    id: "toyota-tsusho-group",
    name: "Toyota Tsusho Group",
    logo: `${logoBasePath}/toyota-tsusho-group.png`,
    locales: latinLocales
  }),
  createClientLogo({
    id: "savianna",
    name: "Savianna",
    logo: `${logoBasePath}/savianna.webp`,
    locales: allLocales
  }),
  createClientLogo({
    id: "coty-odontologia",
    name: "Coty Odontologia",
    logo: `${logoBasePath}/coty-odontologia.jpeg`,
    locales: latinLocales
  }),
  createClientLogo({
    id: "mg",
    name: "MG",
    logo: `${logoBasePath}/mg.png`,
    locales: allLocales
  }),
  createClientLogo({
    id: "jetour",
    name: "JETOUR",
    logo: `${logoBasePath}/jetour.png`,
    locales: allLocales
  }),
  createClientLogo({
    id: "idea-cia",
    name: "IDEA & CIA",
    logo: `${logoBasePath}/idea-cia.png`,
    locales: latinLocales
  }),
  createClientLogo({
    id: "thereza-mussi-hospital",
    name: "Thereza Mussi Hospital",
    logo: `${logoBasePath}/thereza-mussi-hospital.png`,
    locales: allLocales
  }),
  createClientLogo({
    id: "inovar-implementos-rodoviarios",
    name: "Inovar Implementos Rodoviários",
    logo: `${logoBasePath}/inovar-implementos-rodoviarios.png`,
    locales: latinLocales
  }),
  createClientLogo({
    id: "ange360-comunicacao",
    name: "ange360 Comunicação",
    logo: `${logoBasePath}/ange360-comunicacao.png`,
    locales: latinLocales
  }),
  createClientLogo({
    id: "jesus-e-bom",
    name: "Jesus é Bom",
    logo: `${logoBasePath}/jesus-e-bom.png`,
    locales: latinLocales
  }),
  createClientLogo({
    id: "toyota-symbol",
    name: "Toyota",
    logo: `${logoBasePath}/toyota-symbol.png`,
    locales: allLocales
  }),
  createClientLogo({
    id: "citroen",
    name: "Citroën",
    logo: `${logoBasePath}/citroen.png`,
    locales: allLocales
  })
];
