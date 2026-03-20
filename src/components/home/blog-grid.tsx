import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

interface BlogPost {
  title: string;
  description: string;
  category: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    title: "Estratégia digital para empresas B2B",
    description: "Como estruturar presença digital com foco em geração de leads qualificados e conversão.",
    category: "Estratégia",
    image: "/images/unti-digital-homepage-image-blog-estrategia-digital-para-empresas-b2b.png"
  },
  {
    title: "Integrações que escalam operações",
    description: "Conecte sistemas e automatize processos para crescer sem aumentar complexidade operacional.",
    category: "Tecnologia",
    image: "/images/unti-digital-homepage-image-blog-integracoes-que-escalam-operacoes.png"
  },
  {
    title: "Governança e segurança em plataformas web",
    description: "Boas práticas para garantir estabilidade, segurança e conformidade em ambientes críticos.",
    category: "Segurança",
    image: "/images/unti-digital-homepage-image-blog-governanca-e-seguranca-em-plataformas-web.png"
  },
  {
    title: "UX para ambientes enterprise",
    description: "Design de interfaces que equilibram complexidade funcional com usabilidade e performance.",
    category: "Design",
    image: "/images/unti-digital-homepage-image-blog-ux-para-ambientes-enterprise.png"
  }
];

export function BlogGrid() {
  return (
    <Section>
      <Container>
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Insights sobre tecnologia e performance digital
          </h2>
          <p className="max-w-3xl text-lg text-brand-muted">
            Conteúdos para empresas que buscam clareza, escala e previsibilidade.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-xl border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              <div className="space-y-3 p-6">
                <div className="text-xs font-medium uppercase tracking-wide text-unti-blue">
                  {post.category}
                </div>

                <h3 className="text-lg font-semibold leading-tight">
                  {post.title}
                </h3>

                <p className="text-sm leading-relaxed text-brand-muted">
                  {post.description}
                </p>

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
