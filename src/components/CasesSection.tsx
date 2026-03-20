import { cases } from "@/data/cases";
import CaseCard from "./CaseCard";

export default function CasesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl overflow-x-hidden px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-brand-dark md:text-4xl">
          Projetos que geram impacto real
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-brand-muted">
          Resultados mensuráveis em tecnologia e performance digital.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {cases.map((caseItem) => (
            <CaseCard key={caseItem.slug} caseItem={caseItem} />
          ))}
        </div>
      </div>
    </section>
  );
}
