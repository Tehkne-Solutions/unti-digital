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

const allLocales: AppLocale[] = ["pt", "en", "es"];
const latinLocales: AppLocale[] = ["pt", "es"];
const logoBasePath = "/images/clients/updated";

export const clients: Client[] = [
  {
    id: "tradicional",
    name: "Tradicional",
    logo: `${logoBasePath}/tradicional.png`,
    surface: "light",
    locales: latinLocales,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    segment: "Marca tradicional",
    result: "Identidade digital preservada",
    description: "Atualização visual mantendo a assinatura original da marca.",
    technologies: ["Identidade visual", "Site institucional", "Performance", "SEO"],
    phone: "",
    email: "",
    whatsapp: "",
    casePage: "/cases/tradicional"
  },
  {
    id: "chilli-beans",
    name: "Chilli Beans",
    logo: `${logoBasePath}/chilli-beans.webp`,
    surface: "light",
    locales: allLocales,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    segment: "Varejo e franquias",
    result: "Experiência digital alinhada à marca",
    description: "Apoio digital para presença online com consistência visual e foco em conversão.",
    technologies: ["UI/UX", "Landing pages", "Performance", "Analytics"],
    phone: "",
    email: "",
    whatsapp: "",
    casePage: "/cases/chilli-beans"
  },
  {
    id: "dafra",
    name: "DAFRA",
    logo: `${logoBasePath}/dafra.svg`,
    surface: "dark",
    locales: allLocales,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    segment: "Motocicletas",
    result: "Presença digital otimizada",
    description: "Suporte técnico para comunicação digital mantendo a identidade oficial da marca.",
    technologies: ["Web", "CRM", "Atendimento", "Integrações"],
    phone: "",
    email: "",
    whatsapp: "",
    casePage: "/cases/dafra"
  },
  {
    id: "sym",
    name: "SYM",
    logo: `${logoBasePath}/sym.webp`,
    surface: "dark",
    locales: allLocales,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    segment: "Motocicletas",
    result: "Comunicação digital consistente",
    description: "Estrutura visual e técnica para ações digitais com qualidade de exibição da marca.",
    technologies: ["Site", "Performance", "SEO", "Suporte"],
    phone: "",
    email: "",
    whatsapp: "",
    casePage: "/cases/sym"
  },
  {
    id: "savol",
    name: "Savol",
    logo: `${logoBasePath}/savol-mini.png`,
    surface: "light",
    locales: latinLocales,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    segment: "Concessionária e veículos",
    result: "Atendimento digital fortalecido",
    description: "Soluções digitais para atendimento, captação de leads e experiência comercial online.",
    technologies: ["WhatsApp", "CRM", "Site", "Automação"],
    phone: "",
    email: "",
    whatsapp: "",
    casePage: "/cases/savol"
  },
  {
    id: "auto-shopping-tiquatira",
    name: "Auto Shopping Tiquatira",
    logo: `${logoBasePath}/auto-shopping-tiquatira.png`,
    surface: "light",
    locales: latinLocales,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    segment: "Auto shopping",
    result: "Comunicação institucional aprimorada",
    description: "Apoio para canais digitais e presença institucional com foco em clareza, autoridade e conversão.",
    technologies: ["Site institucional", "SEO", "Design", "Conteúdo"],
    phone: "",
    email: "",
    whatsapp: "",
    casePage: "/cases/auto-shopping-tiquatira"
  },
  {
    id: "savol-oficial",
    name: "Savol",
    logo: `${logoBasePath}/savol-oficial.png`,
    surface: "light",
    locales: latinLocales,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    segment: "Automotivo",
    result: "Jornada de compra mais clara",
    description: "Atualização de presença digital com foco em atendimento, confiança e relacionamento com o cliente.",
    technologies: ["UI/UX", "WhatsApp", "CRM", "Performance"],
    phone: "",
    email: "",
    whatsapp: "",
    casePage: "/cases/savol-oficial"
  },
  {
    id: "t-service",
    name: "T Service",
    logo: `${logoBasePath}/t-service.svg`,
    surface: "dark",
    locales: allLocales,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    segment: "Serviços automotivos",
    result: "Canal digital padronizado",
    description: "Suporte digital para comunicação de serviços e captação de contatos qualificados.",
    technologies: ["Site", "Atendimento", "SEO", "Integrações"],
    phone: "",
    email: "",
    whatsapp: "",
    casePage: "/cases/t-service"
  },
  {
    id: "clinica-vila-bethania",
    name: "Clínica Vila Bethânia",
    logo: `${logoBasePath}/clinica-vila-bethania.webp`,
    surface: "light",
    locales: latinLocales,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    segment: "Saúde e clínica",
    result: "Presença institucional reforçada",
    description: "Soluções para presença digital, páginas legais, atendimento e comunicação institucional em saúde.",
    technologies: ["WordPress", "LGPD", "Atendimento", "UI/UX"],
    phone: "",
    email: "",
    whatsapp: "",
    casePage: "/cases/clinica-vila-bethania"
  },
  {
    id: "honda",
    name: "Honda",
    logo: `${logoBasePath}/honda.png`,
    surface: "light",
    locales: allLocales,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    segment: "Automotivo",
    result: "Marca exibida com fidelidade",
    description: "Padronização visual para manter clareza e qualidade em diferentes páginas e dispositivos.",
    technologies: ["Design system", "Performance", "Responsivo", "SEO"],
    phone: "",
    email: "",
    whatsapp: "",
    casePage: "/cases/honda"
  },
  {
    id: "cb-autos",
    name: "CB Autos",
    logo: `${logoBasePath}/cb-autos.png`,
    surface: "dark",
    locales: allLocales,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    segment: "Automotivo",
    result: "Identidade digital preservada",
    description: "Exibição de marca otimizada para alto contraste e leitura em componentes responsivos.",
    technologies: ["UI", "Responsivo", "Performance", "Branding"],
    phone: "",
    email: "",
    whatsapp: "",
    casePage: "/cases/cb-autos"
  },
  {
    id: "beg-boutique-distillery",
    name: "BEG Boutique Distillery",
    logo: `${logoBasePath}/beg-boutique-distillery.png`,
    surface: "light",
    locales: allLocales,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    segment: "Boutique distillery",
    result: "Identidade premium destacada",
    description: "Apoio visual e técnico para presença digital com percepção premium e consistência de marca.",
    technologies: ["Branding", "Web", "Conteúdo", "SEO"],
    phone: "",
    email: "",
    whatsapp: "",
    casePage: "/cases/beg-boutique-distillery"
  },
  {
    id: "magrela",
    name: "Magrela",
    logo: `${logoBasePath}/magrela.png`,
    surface: "dark",
    locales: allLocales,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    segment: "Marca e varejo",
    result: "Exibição visual refinada",
    description: "Tratamento de marca em carrossel e áreas institucionais com contraste adequado.",
    technologies: ["UI/UX", "Design", "Responsivo", "Performance"],
    phone: "",
    email: "",
    whatsapp: "",
    casePage: "/cases/magrela"
  },
  {
    id: "toyota-tsusho-group",
    name: "Toyota Tsusho Group",
    logo: `${logoBasePath}/toyota-tsusho-group.png`,
    surface: "light",
    locales: latinLocales,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    segment: "Concessionárias Lexus e Toyota",
    result: "Presença institucional consistente",
    description: "Suporte para comunicação digital de grupos automotivos com foco em padronização e confiança.",
    technologies: ["Site", "Conteúdo", "SEO", "Performance"],
    phone: "",
    email: "",
    whatsapp: "",
    casePage: "/cases/toyota-tsusho-group"
  },
  {
    id: "savianna",
    name: "Savianna",
    logo: `${logoBasePath}/savianna.webp`,
    surface: "dark",
    locales: allLocales,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    segment: "Marca e experiência",
    result: "Assinatura visual preservada",
    description: "Exibição de logo em alto contraste com alinhamento responsivo e fidelidade visual.",
    technologies: ["UI", "Branding", "Responsivo", "Performance"],
    phone: "",
    email: "",
    whatsapp: "",
    casePage: "/cases/savianna"
  },
  {
    id: "coty-odontologia",
    name: "Coty Odontologia",
    logo: `${logoBasePath}/coty-odontologia.jpeg`,
    surface: "light",
    locales: latinLocales,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    segment: "Odontologia",
    result: "Comunicação digital humanizada",
    description: "Presença digital para atendimento, confiança e orientação clara ao paciente.",
    technologies: ["Site", "SEO local", "Atendimento", "Conteúdo"],
    phone: "",
    email: "",
    whatsapp: "",
    casePage: "/cases/coty-odontologia"
  },
  {
    id: "mg",
    name: "MG",
    logo: `${logoBasePath}/mg.jpeg`,
    surface: "light",
    locales: allLocales,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    segment: "Marca corporativa",
    result: "Logo atualizada no ecossistema",
    description: "Padronização de exibição da marca nas áreas de clientes e parceiros digitais.",
    technologies: ["Branding", "Web", "Responsivo", "Performance"],
    phone: "",
    email: "",
    whatsapp: "",
    casePage: "/cases/mg"
  },
];
