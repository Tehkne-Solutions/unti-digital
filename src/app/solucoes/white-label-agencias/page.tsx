import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FinalCTA } from '@/components/home/final-cta';

export default function WhiteLabelAgenciasPage() {
    return (
        <>
            {/* Breadcrumb */}
            <Section className="bg-gray-50 py-4">
                <Container>
                    <nav className="flex items-center space-x-2 text-sm text-gray-600">
                        <a href="/" className="hover:text-unti-blue">Início</a>
                        <span>/</span>
                        <a href="/solucoes" className="hover:text-unti-blue">Soluções</a>
                        <span>/</span>
                        <span className="text-unti-dark font-medium">White Label para Agências</span>
                    </nav>
                </Container>
            </Section>

            {/* Hero */}
            <Section className="bg-white">
                <Container>
                    <div className="max-w-3xl">
                        <div className="inline-block px-4 py-2 bg-unti-pastel rounded-full text-sm font-medium text-unti-blue mb-6">
                            White Label
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-unti-dark mb-6">
                            Sua marca, nossa execução técnica
                        </h1>
                        <p className="text-lg text-gray-600 mb-10">
                            Solução white label completa para agências que precisam entregar projetos de alta qualidade sem estrutura técnica interna. Oferecemos transparência, prazos pontuais e excelência técnica sob sua marca.
                        </p>
                        <Button variant="primary">
                            Falar com especialista
                        </Button>
                    </div>
                </Container>
            </Section>

            {/* Benefits */}
            <Section>
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-unti-dark mb-12">
                        Por que escolher UNTI como seu parceiro white label
                    </h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div>
                            <div className="w-12 h-12 rounded-lg bg-unti-blue/10 flex items-center justify-center mb-4">
                                <div className="w-6 h-6 bg-unti-blue rounded" />
                            </div>
                            <h3 className="text-xl font-medium text-unti-dark mb-3">
                                Sua marca, nossa entrega
                            </h3>
                            <p className="text-gray-600">
                                Desenvolvemos sob total confidencialidade com sua marca em primeiro plano. Seu cliente nunca saberá que não foi você quem desenvolveu.
                            </p>
                        </div>
                        <div>
                            <div className="w-12 h-12 rounded-lg bg-unti-blue/10 flex items-center justify-center mb-4">
                                <div className="w-6 h-6 bg-unti-blue rounded" />
                            </div>
                            <h3 className="text-xl font-medium text-unti-dark mb-3">
                                Prazos garantidos
                            </h3>
                            <p className="text-gray-600">
                                Metodologia ágil com sprints estruturadas. Você sempre sabe o que vai receber e quando vai receber.
                            </p>
                        </div>
                        <div>
                            <div className="w-12 h-12 rounded-lg bg-unti-blue/10 flex items-center justify-center mb-4">
                                <div className="w-6 h-6 bg-unti-blue rounded" />
                            </div>
                            <h3 className="text-xl font-medium text-unti-dark mb-3">
                                Qualidade técnica comprovada
                            </h3>
                            <p className="text-gray-600">
                                Experiência em projetos complexos com foco em performance, governança e escalabilidade.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* What we deliver */}
            <Section className="bg-slate-50">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold text-unti-dark mb-12">
                        O que entregamos
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg p-8 border border-slate-200">
                            <h3 className="text-2xl font-bold text-unti-dark mb-4">Desenvolvimento Web</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <span className="text-unti-blue mr-3 font-bold">✓</span>
                                    <span>Sites e plataformas com Next.js/React</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-unti-blue mr-3 font-bold">✓</span>
                                    <span>Otimização de performance e SEO</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-unti-blue mr-3 font-bold">✓</span>
                                    <span>Integração com CMS e ferramentas</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-unti-blue mr-3 font-bold">✓</span>
                                    <span>Segurança e conformidade LGPD</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-lg p-8 border border-slate-200">
                            <h3 className="text-2xl font-bold text-unti-dark mb-4">Suporte Contínuo</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <span className="text-unti-blue mr-3 font-bold">✓</span>
                                    <span>Manutenção técnica e atualizações</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-unti-blue mr-3 font-bold">✓</span>
                                    <span>Hostagem e monitoramento</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-unti-blue mr-3 font-bold">✓</span>
                                    <span>Suporte durante os prazos</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-unti-blue mr-3 font-bold">✓</span>
                                    <span>Documentação técnica completa</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA Final */}
            <FinalCTA />

            {/* Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'White Label para Agências',
                        description: 'Solução white label completa para agências que precisam entregar projetos de alta qualidade',
                        provider: {
                            '@type': 'Organization',
                            name: 'UNTI',
                            url: 'https://unti.com.br'
                        },
                        areaServed: 'BR',
                        serviceType: 'Web Development',
                        offers: {
                            '@type': 'Offer',
                            priceCurrency: 'BRL',
                            description: 'Serviços de desenvolvimento white label'
                        }
                    })
                }}
            />
        </>
    );
}
