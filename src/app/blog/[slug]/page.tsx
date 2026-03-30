import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogContentRenderer } from "@/components/blog/BlogContentRenderer";
import { BlogHeroParallax } from "@/components/blog/BlogHeroParallax";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { BlogReadingProgress } from "@/components/blog/BlogReadingProgress";
import { blogPosts, getBlogPostBySlug } from "@/data/posts";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post nao encontrado | UNTI Digital"
    };
  }

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [post.image]
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
      images: [post.image]
    }
  };
}

function formatPublishedDate(date: string) {
  return new Date(date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: [post.image],
    mainEntityOfPage: `https://unti.com.br/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: post.author
    },
    publisher: {
      "@type": "Organization",
      name: "UNTI Digital",
      url: "https://unti.com.br"
    },
    articleSection: post.category,
    keywords: post.tags.join(", ")
  };

  return (
    <main className="bg-white">
      <BlogReadingProgress />

      <section className="border-b border-zinc-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <nav className="flex items-center gap-2 text-sm text-zinc-500">
            <Link href="/" className="no-underline hover:text-zinc-900 hover:no-underline">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/blog" className="no-underline hover:text-zinc-900 hover:no-underline">
              Blog
            </Link>
          </nav>

          <div className="mt-8 max-w-4xl">
            <div className="flex flex-wrap items-center gap-4">
              <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-unti-blue">
                {post.category}
              </span>
              <span className="text-sm text-zinc-500">{formatPublishedDate(post.publishedAt)}</span>
              <span className="text-sm text-zinc-500">{post.readingTime}</span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600">
              {post.description}
            </p>
          </div>

          <div className="mt-12">
            <BlogHeroParallax image={post.image} title={post.title} />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[minmax(0,768px)_280px]">
          <article className="min-w-0">
            <div className="rounded-[32px] border border-zinc-100 bg-slate-50/60 px-8 py-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                Insight-chave
              </p>
              <p className="mt-4 text-2xl font-semibold leading-relaxed text-zinc-900">
                {post.keyInsight}
              </p>
            </div>

            <div className="mt-10 max-w-3xl font-serif">
              <BlogContentRenderer blocks={post.body} />
            </div>

            <div className="mt-14 rounded-[32px] border border-zinc-100 bg-zinc-950 px-8 py-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                Proximo passo
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                Solicitar consultoria tecnica
              </h2>
              <p className="mt-4 max-w-2xl text-white/75">
                Se este tema conversa com a sua operacao, podemos transformar o diagnostico em
                arquitetura, interface e implementacao com governanca real.
              </p>
              <div className="mt-8">
                <Link
                  href="/contato"
                  className="interactive-btn inline-flex h-12 items-center justify-center rounded-xl border border-white/30 px-6 text-sm font-semibold text-white no-underline transition-all duration-300 hover:bg-white hover:text-zinc-950 hover:no-underline"
                >
                  Solicitar Consultoria Tecnica
                </Link>
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-[32px] border border-zinc-100 bg-white px-6 py-6 shadow-[0_14px_50px_rgba(15,23,42,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Neste artigo
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 bg-slate-50 px-3 py-2 text-xs font-medium text-zinc-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-[24px] border border-blue-100 bg-blue-50 px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-unti-blue">
                  Conversa executiva
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                  Conteudo desenhado para liderancas que precisam tomar decisoes com menos ruido e
                  mais base tecnica.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50/60 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Materias relacionadas
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-zinc-900 md:text-4xl">
              Continue a leitura em temas complementares
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <BlogPostCard key={relatedPost.slug} post={relatedPost} variant="related" />
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </main>
  );
}
