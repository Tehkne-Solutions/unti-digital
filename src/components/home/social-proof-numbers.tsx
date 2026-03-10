import { Section } from "@/components/ui/Section";

export function SocialProofNumbers() {
    return (
        <Section>
            <div className="grid grid-cols-3 text-center max-w-4xl mx-auto py-16">
                <div>
                    <p className="text-3xl font-bold text-unti-blue">+50</p>
                    <p className="text-gray-600 text-sm">projetos entregues</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-unti-blue">10+</p>
                    <p className="text-gray-600 text-sm">anos de experiência</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-unti-blue">99.9%</p>
                    <p className="text-gray-600 text-sm">uptime em plataformas</p>
                </div>
            </div>
        </Section>
    );
}
