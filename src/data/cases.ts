import { automotivoCases } from "./cases-automotivo";
import { corporativoCases } from "./cases-corporativo";
import { industriaCases } from "./cases-industria";
import { saudeCases } from "./cases-saude";
import { criarCase } from "./cases.shared";

export type { CaseCategory, CaseStudy } from "./cases.shared";
export { caseCategoryThemes } from "./cases.shared";

const caseSeeds = [...automotivoCases, ...saudeCases, ...corporativoCases, ...industriaCases];

export const cases = caseSeeds
  .map(criarCase)
  .sort((caseA, caseB) => caseA.ordemPortfolio - caseB.ordemPortfolio);

export const casesHome = cases
  .filter((caseItem) => caseItem.destaqueHome)
  .sort((caseA, caseB) => (caseA.ordemHome ?? 999) - (caseB.ordemHome ?? 999));

export function getCaseBySlug(slug: string) {
  return cases.find((caseItem) => caseItem.slug === slug);
}
