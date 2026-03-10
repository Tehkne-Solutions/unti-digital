import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function HowWeWork() {
    return (
        <Section className="bg-white py-24">
            <Container>
                <h2 className="text-3xl font-bold text-unti-dark text-center mb-16">
                    Como trabalhamos
                </h2>

                <div className="grid md:grid-cols-4 gap-10">
                    <div className="text-center space-y-4">
                        <div className="w-14 h-14 rounded-xl bg-unti-pastel flex items-center justify-center mx-auto text-unti-blue font-bold text-lg">
                            1
                        </div>
                        <h3 className="font-semibold text-unti-dark">Diagnóstico</h3>
                        <p className="text-gray-600 text-sm">
                            Entendemos o contexto do negócio e os desafios técnicos do projeto.
                        </p>
                    </div>

                    <div className="text-center space-y-4">
                        <div className="w-14 h-14 rounded-xl bg-unti-pastel flex items-center justify-center mx-auto text-unti-blue font-bold text-lg">
                            2
                        </div>
                        <h3 className="font-semibold text-unti-dark">Arquitetura</h3>
                        <p className="text-gray-600 text-sm">
                            Definimos arquitetura, integrações e estrutura da solução digital.
                        </p>
                    </div>

                    <div className="text-center space-y-4">
                        <div className="w-14 h-14 rounded-xl bg-unti-pastel flex items-center justify-center mx-auto text-unti-blue font-bold text-lg">
                            3
                        </div>
                        <h3 className="font-semibold text-unti-dark">Desenvolvimento</h3>
                        <p className="text-gray-600 text-sm">
                            Implementação com boas práticas de engenharia e foco em performance.
                        </p>
                    </div>

                    <div className="text-center space-y-4">
                        <div className="w-14 h-14 rounded-xl bg-unti-pastel flex items-center justify-center mx-auto text-unti-blue font-bold text-lg">
                            4
                        </div>
                        <h3 className="font-semibold text-unti-dark">Evolução contínua</h3>
                        <p className="text-gray-600 text-sm">
                            Acompanhamento e evolução da plataforma conforme o crescimento do negócio.
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
