import Link from "next/link";
import { blogPosts } from "@/data/posts";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function BlogGrid() {
  const posts = blogPosts.slice(0, 4);

  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Conhecimento e autoridade
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-zinc-900 md:text-4xl">
              Conteudo tecnico para decisores que precisam de previsibilidade
            </h2>
            <p className="mt-4 text-lg text-brand-muted">
              Artigos pensados para educar o mercado, elevar a conversa comercial e sustentar SEO
              semantico em temas de alto valor.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-semibold text-unti-blue no-underline hover:no-underline"
          >
            Ver biblioteca completa
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} variant="home" />
          ))}
        </div>
      </Container>
    </Section>
  );
}
