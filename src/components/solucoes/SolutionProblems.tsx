"use client";

interface Problem {
    title: string;
    description: string;
}

interface SolutionProblemsProps {
    problems: Problem[];
}

export function SolutionProblems({ problems }: SolutionProblemsProps) {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
                    O problema que resolvemos
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <div key={index} className="bg-white rounded-xl p-6">
                            <h3 className="font-semibold text-lg mb-3 text-gray-900">
                                {problem.title}
                            </h3>

                            <p className="text-gray-600">
                                {problem.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
