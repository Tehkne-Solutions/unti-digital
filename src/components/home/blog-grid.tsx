import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

interface BlogPost {
  title: string;
  description: string;
  category: string;
}

const posts: BlogPost[] = [
  {
    title: "Estratégia digital para empresas B2B",
    description: "Como estruturar presença digital com foco em geração de leads qualificados e conversão.",
    category: "Estratégia"
  },
  {
    title: "Integrações que escalam operações",
    description: "Conecte sistemas e automatize processos para crescer sem aumentar complexidade operacional.",
    category: "Tecnologia"
  },
  {
    title: "Governança e segurança em plataformas web",
    description: "Boas práticas para garantir estabilidade, segurança e conformidade em ambientes críticos.",
    category: "Segurança"
  },
  {
    title: "UX para ambientes enterprise",
    description: "Design de interfaces que equilibram complexidade funcional com usabilidade e performance.",
    category: "Design"
  }
];

export function BlogGrid() {
  return (
    <Section>
      <Container>
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-unti-dark mb-4">
            Insights sobre tecnologia e performance digital
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Conteúdos para empresas que buscam clareza, escala e previsibilidade.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                {/* Category */}
                <div className="text-xs font-medium text-unti-blue uppercase tracking-wide">
                  {post.category}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-unti-dark leading-tight">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {post.description}
                </p>

                {/* CTA */}
                <a
                  href="/blog"
                  className="inline-flex items-center text-sm font-medium text-unti-blue hover:underline"
                >
                  Ler matéria →
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
