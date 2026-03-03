import { Container } from "@/components/ui/Container";

interface Case {
    title: string;
    result: string;
}

interface SolutionCasesProps {
    cases: Case[];
}

export function SolutionCases({ cases }: SolutionCasesProps) {
    return (
        <section className="py-24 md:py-32 bg-gray-50">
            <Container>
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <h2 className="text-3xl md:text-4xl font-bold text-unti-dark mb-12 text-center">
                        Casos de sucesso
                    </h2>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {cases.map((caseItem, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 bg-white"
                            >
                                {/* Placeholder for case image/thumbnail */}
                                <div className="w-full h-48 bg-gradient-to-br from-unti-pastel to-unti-light flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-5xl font-bold text-unti-blue opacity-20">
                                            {index + 1}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-3">
                                    <h3 className="text-lg font-semibold text-unti-dark">
                                        {caseItem.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {caseItem.result}
                                    </p>
                                    <a
                                        href="/cases"
                                        className="inline-flex items-center text-sm font-medium text-unti-blue hover:underline"
                                    >
                                        Ver case completo →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
