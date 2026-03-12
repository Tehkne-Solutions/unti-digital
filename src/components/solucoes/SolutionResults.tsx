"use client";

interface Result {
    metric: string;
    description: string;
}

interface SolutionResultsProps {
    results: Result[];
}

export function SolutionResults({ results }: SolutionResultsProps) {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
                    Resultados esperados
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {results.map((result, index) => (
                        <div key={index} className="text-center">
                            <p className="text-4xl font-bold text-unti-blue mb-3">
                                {result.metric}
                            </p>

                            <p className="text-gray-600">
                                {result.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
