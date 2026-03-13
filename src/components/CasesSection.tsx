import { cases } from "@/data/cases";
import CaseCard from "./CaseCard";

export default function CasesSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-4">
                    Projetos que geram impacto real
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                    Resultados mensuráveis em tecnologia e performance digital.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {cases.map((caseItem) => (
                        <CaseCard key={caseItem.slug} caseItem={caseItem} />
                    ))}
                </div>
            </div>
        </section>
    );
}