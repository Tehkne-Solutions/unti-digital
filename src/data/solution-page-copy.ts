import type { AppLocale } from "@/lib/i18n";

export function getSolutionDetailLabels(locale: AppLocale) {
  if (locale === "en") {
    return {
      eyebrow: "Solution",
      contact: "Contact",
      cases: "Cases",
      overview: "Overview",
      differentials: "Differentials",
      deliverables: "Deliverables",
      nextStep: "Next step",
      nextDescription: "If this solution is close to what your operation needs, the next move is to align scope through a direct briefing.",
      briefing: "Request briefing"
    };
  }

  if (locale === "es") {
    return {
      eyebrow: "Solución",
      contact: "Contacto",
      cases: "Casos",
      overview: "Visión general",
      differentials: "Diferenciales",
      deliverables: "Entregables",
      nextStep: "Siguiente paso",
      nextDescription: "Si esta solución está cerca de lo que tu operación necesita, el siguiente paso es alinear el alcance mediante un briefing directo.",
      briefing: "Solicitar briefing"
    };
  }

  return {
    eyebrow: "Solução",
    contact: "Contato",
    cases: "Cases",
    overview: "Visão geral",
    differentials: "Diferenciais",
    deliverables: "Entregáveis",
    nextStep: "Próximo passo",
    nextDescription: "Se esta solução está próxima do que sua operação precisa, o próximo passo é alinhar o escopo com um briefing direto.",
    briefing: "Solicitar briefing"
  };
}

export function getSolutionsPageCopy(locale: AppLocale) {
  if (locale === "en") {
    return {
      eyebrow: "Solutions",
      title: "Digital solutions designed for authority, operation, and scale",
      description: "Explore how UNTI structures websites, platforms, integrations, and technical support for companies and agencies.",
      cta: "Talk to a specialist",
      explore: "Explore solution"
    };
  }

  if (locale === "es") {
    return {
      eyebrow: "Soluciones",
      title: "Soluciones digitales pensadas para autoridad, operación y escala",
      description: "Explore cómo UNTI estructura sitios, plataformas, integraciones y apoyo técnico para empresas y agencias.",
      cta: "Hablar con un especialista",
      explore: "Explorar solución"
    };
  }

  return {
    eyebrow: "Soluções",
    title: "Soluções digitais pensadas para autoridade, operação e escala",
    description: "Explore como a UNTI estrutura sites, plataformas, integrações e apoio técnico para empresas e agências.",
    cta: "Falar com especialista",
    explore: "Explorar solução"
  };
}
