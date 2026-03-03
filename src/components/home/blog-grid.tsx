import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import Image, { StaticImageData } from "next/image";
import blogEstrategiaImg from "@/assets/unti-digital-homepage-image-blog-estrategia-digital-para-empresas-b2b.png";
import blogIntegracoesImg from "@/assets/unti-digital-homepage-image-blog-integracoes-que-escalam-operacoes.png";
import blogGovernancaImg from "@/assets/unti-digital-homepage-image-blog-governanca-e-seguranca-em-plataformas-web.png";
import blogUxImg from "@/assets/unti-digital-homepage-image-blog-ux-para-ambientes-enterprise.png";

interface BlogPost {
  title: string;
  description: string;
  category: string;
  image: StaticImageData;
}

const posts: BlogPost[] = [
  {
    title: "Estratégia digital para empresas B2B",
    description: "Como estruturar presença digital com foco em geração de leads qualificados e conversão.",
    category: "Estratégia",
    image: blogEstrategiaImg
  },
  {
    title: "Integrações que escalam operações",
    description: "Conecte sistemas e automatize processos para crescer sem aumentar complexidade operacional.",
    category: "Tecnologia",
    image: blogIntegracoesImg
  },
  {
    title: "Governança e segurança em plataformas web",
    description: "Boas práticas para garantir estabilidade, segurança e conformidade em ambientes críticos.",
    category: "Segurança",
    image: blogGovernancaImg
  },
  {
    title: "UX para ambientes enterprise",
    description: "Design de interfaces que equilibram complexidade funcional com usabilidade e performance.",
    category: "Design",
    image: blogUxImg
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
              className="rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
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
