"use client";

interface SolutionTechStackProps {
    technologies: string[];
}

export function SolutionTechStack({ technologies }: SolutionTechStackProps) {
    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-10 text-gray-900">
                    Tecnologia utilizada
                </h2>

                <div className="flex flex-wrap justify-center gap-3">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
