import type { AppLocale } from "@/lib/i18n";

export type HeroCarouselSlide = {
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  primaryHref: string;
  secondaryHref: string;
  image: string;
};

type HomeContent = {
  heroCarousel: {
    prevSlideLabel: string;
    nextSlideLabel: string;
    goToSlideLabel: string;
    slides: HeroCarouselSlide[];
  };
  clientModal: {
    closeLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    primaryCta: string;
    secondaryCta: string;
  };
  logoCarousel: {
    cta: string;
  };
};

const homeContent: Record<AppLocale, HomeContent> = {
  pt: {
    heroCarousel: {
      prevSlideLabel: "Slide anterior",
      nextSlideLabel: "Próximo slide",
      goToSlideLabel: "Ir para o slide",
      slides: [
        {
          title: "Sites institucionais de alta performance",
          description:
            "Estruturamos experiências premium para marcas que precisam unir autoridade, velocidade e conversão.",
          ctaPrimary: "Falar com especialista",
          ctaSecondary: "Ver cases",
          primaryHref: "/contato",
          secondaryHref: "/cases",
          image:
            "/images/unti-digital-homepage-image-slider-servicos-sites-e-plataformas-de-alta-performance.png"
        },
        {
          title: "Integrações com CRM e ERP",
          description:
            "Conectamos marketing, vendas e operação para reduzir retrabalho e dar previsibilidade ao fluxo de dados.",
          ctaPrimary: "Solicitar diagnóstico",
          ctaSecondary: "Explorar integrações",
          primaryHref: "/contato",
          secondaryHref: "/integracoes",
          image:
            "/images/unti-digital-homepage-image-slider-servicos-integracoes-e-automacoes-inteligentes.png"
        },
        {
          title: "White label técnico para agências",
          description:
            "Ampliamos a capacidade de entrega da sua agência com confidencialidade, ritmo de produção e padrão enterprise.",
          ctaPrimary: "Falar com especialista",
          ctaSecondary: "Ver soluções",
          primaryHref: "/contato",
          secondaryHref: "/solucoes",
          image:
            "/images/unti-digital-homepage-image-slider-servicos-white-label-tecnico-para-agencias.png"
        }
      ]
    },
    clientModal: {
      closeLabel: "Fechar modal",
      eyebrow: "Autoridade em operação",
      title: "Projeto sob demanda e execução premium",
      description:
        "A UNTI apoia empresas e marcas com engenharia, design e integração para projetos institucionais e operações digitais mais maduras.",
      note:
        "Quer entender como aplicar esse nível de acabamento ao seu contexto? Organizamos o diagnóstico e o próximo passo com clareza.",
      primaryCta: "Explorar cases",
      secondaryCta: "Falar com especialista"
    },
    logoCarousel: {
      cta: "Quero estruturar um projeto com esse nível de entrega"
    }
  },
  en: {
    heroCarousel: {
      prevSlideLabel: "Previous slide",
      nextSlideLabel: "Next slide",
      goToSlideLabel: "Go to slide",
      slides: [
        {
          title: "High-performance institutional websites",
          description:
            "We build premium digital experiences for brands that need authority, speed and conversion in the same asset.",
          ctaPrimary: "Talk to a specialist",
          ctaSecondary: "View case studies",
          primaryHref: "/contato",
          secondaryHref: "/cases",
          image:
            "/images/unti-digital-homepage-image-slider-servicos-sites-e-plataformas-de-alta-performance.png"
        },
        {
          title: "CRM and ERP integrations",
          description:
            "We connect marketing, sales and operations to reduce manual work and create a reliable data flow.",
          ctaPrimary: "Request a diagnostic",
          ctaSecondary: "Explore integrations",
          primaryHref: "/contato",
          secondaryHref: "/integracoes",
          image:
            "/images/unti-digital-homepage-image-slider-servicos-integracoes-e-automacoes-inteligentes.png"
        },
        {
          title: "Technical white-label for agencies",
          description:
            "We expand your agency's delivery capacity with confidentiality, production rhythm and enterprise-grade execution.",
          ctaPrimary: "Talk to a specialist",
          ctaSecondary: "View solutions",
          primaryHref: "/contato",
          secondaryHref: "/solucoes",
          image:
            "/images/unti-digital-homepage-image-slider-servicos-white-label-tecnico-para-agencias.png"
        }
      ]
    },
    clientModal: {
      closeLabel: "Close modal",
      eyebrow: "Operational authority",
      title: "On-demand execution with premium delivery",
      description:
        "UNTI supports companies and brands with engineering, design and integration for stronger institutional projects and digital operations.",
      note:
        "Want to understand how this level of finish can support your context? We can structure the diagnosis and the next step with clarity.",
      primaryCta: "Explore case studies",
      secondaryCta: "Talk to a specialist"
    },
    logoCarousel: {
      cta: "I want a project with this level of execution"
    }
  },
  es: {
    heroCarousel: {
      prevSlideLabel: "Diapositiva anterior",
      nextSlideLabel: "Siguiente diapositiva",
      goToSlideLabel: "Ir a la diapositiva",
      slides: [
        {
          title: "Sitios institucionales de alto rendimiento",
          description:
            "Creamos experiencias digitales premium para marcas que necesitan autoridad, velocidad y conversión en un mismo activo.",
          ctaPrimary: "Hablar con un especialista",
          ctaSecondary: "Ver casos",
          primaryHref: "/contato",
          secondaryHref: "/cases",
          image:
            "/images/unti-digital-homepage-image-slider-servicos-sites-e-plataformas-de-alta-performance.png"
        },
        {
          title: "Integraciones con CRM y ERP",
          description:
            "Conectamos marketing, ventas y operación para reducir retrabajo y mantener un flujo de datos confiable.",
          ctaPrimary: "Solicitar diagnóstico",
          ctaSecondary: "Explorar integraciones",
          primaryHref: "/contato",
          secondaryHref: "/integracoes",
          image:
            "/images/unti-digital-homepage-image-slider-servicos-integracoes-e-automacoes-inteligentes.png"
        },
        {
          title: "White label técnico para agencias",
          description:
            "Ampliamos la capacidad de entrega de tu agencia con confidencialidad, ritmo de producción y ejecución enterprise.",
          ctaPrimary: "Hablar con un especialista",
          ctaSecondary: "Ver soluciones",
          primaryHref: "/contato",
          secondaryHref: "/solucoes",
          image:
            "/images/unti-digital-homepage-image-slider-servicos-white-label-tecnico-para-agencias.png"
        }
      ]
    },
    clientModal: {
      closeLabel: "Cerrar modal",
      eyebrow: "Autoridad operativa",
      title: "Ejecución bajo demanda con entrega premium",
      description:
        "UNTI apoya a empresas y marcas con ingeniería, diseño e integración para proyectos institucionales y operaciones digitales más sólidas.",
      note:
        "¿Quieres entender cómo este nivel de acabado puede apoyar tu contexto? Organizamos el diagnóstico y el próximo paso con claridad.",
      primaryCta: "Explorar casos",
      secondaryCta: "Hablar con un especialista"
    },
    logoCarousel: {
      cta: "Quiero estructurar un proyecto con este nivel de entrega"
    }
  }
};

export function getHomeContent(locale: AppLocale) {
  return homeContent[locale];
}
