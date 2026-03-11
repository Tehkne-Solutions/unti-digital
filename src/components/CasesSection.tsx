import { cases } from "@/data/cases";
import CaseCard from "./CaseCard";

export default function CasesSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-4">Projetos que geram impacto real</h2>
                <p className="text-gray-600 mb-12">
                    Empresas que escalaram sua presença digital com soluções desenvolvidas pela Unti Digital.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {cases.map((caseItem) => (
                        <CaseCard key={caseItem.id} caseItem={caseItem} />
                    ))}
                </div>
            </div>
        </section>
    );
}