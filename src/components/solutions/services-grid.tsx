import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { services } from '@/data/services';
import Link from 'next/link';

export function ServicesGrid() {
  return (
    <Section>
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-unti-dark mb-4">
            Nossas soluções
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Serviços estruturados para empresas que buscam performance, escalabilidade e governança técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-lg bg-unti-blue/10 flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-unti-blue rounded" />
              </div>
              
              <h3 className="text-xl font-medium text-unti-dark mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 line-clamp-3">
                {service.description}
              </p>
              
              <Link 
                href="#"
                className="text-unti-blue font-medium hover:underline inline-flex items-center gap-2"
              >
                Ver detalhes →
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
