import { Container } from "@/components/ui/Container";

interface Step {
    title: string;
    description: string;
}

interface SolutionProcessProps {
    steps: Step[];
}

export function SolutionProcess({ steps }: SolutionProcessProps) {
    return (
        <section className="py-24 md:py-32">
            <Container>
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Processo estruturado
                    </h2>

                    {/* Timeline */}
                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className="flex gap-8">
                                {/* Number Indicator */}
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-unti-blue text-white font-bold text-lg">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-1">
                                    <h3 className="text-xl font-semibold mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Connector Line */}
                                {index < steps.length - 1 && (
                                    <div className="absolute left-6 top-24 w-0.5 h-24 bg-gray-200 md:block hidden" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
