import { Container } from "@/components/ui/Container";

interface Benefit {
    title: string;
    description: string;
}

interface SolutionBenefitsProps {
    items: Benefit[];
}

export function SolutionBenefits({ items }: SolutionBenefitsProps) {
    return (
        <section className="py-24 md:py-32 bg-gray-50">
            <Container>
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Benefícios principais
                    </h2>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 bg-white"
                            >
                                <h3 className="text-xl font-semibold mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
