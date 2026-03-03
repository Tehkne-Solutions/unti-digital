import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/blog';
import { PageShell } from '@/components/page-shell';

export function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map(post => ({
        slug: post.slug,
    }));
}

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const post = getBlogPostBySlug(params.slug);

    if (!post) {
        return {
            title: 'Post não encontrado',
        };
    }

    return {
        title: `${post.title} | Blog UNTI`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const post = getBlogPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    const allPosts = getBlogPosts();
    const relatedPosts = allPosts
        .filter(p => p.slug !== post.slug && p.category === post.category)
        .slice(0, 2);

    return (
        <PageShell
            title={post.title}
            description={post.excerpt}
        >
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center space-x-2 text-sm text-slate-600">
                <Link href="/" className="hover:text-unti-blue">Início</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-unti-blue">Blog</Link>
                <span>/</span>
                <span className="text-unti-dark font-medium">{post.title}</span>
            </nav>

            {/* Article Header */}
            <article className="max-w-3xl mx-auto">
                <header className="mb-12 pb-8 border-b border-slate-200">
                    <div className="mb-4 flex items-center space-x-4">
                        <span className="text-sm font-medium text-unti-blue bg-unti-pastel px-3 py-1 rounded-full">
                            {post.category}
                        </span>
                        <time dateTime={post.date} className="text-sm text-slate-600">
                            {new Date(post.date).toLocaleDateString('pt-BR', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </time>
                        <span className="text-sm text-slate-600">Por {post.author}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        {post.title}
                    </h1>
                </header>

                {/* Article Content */}
                <div className="prose prose-slate max-w-none mb-12">
                    {post.content.split('\n\n').map((paragraph, idx) => {
                        if (paragraph.startsWith('## ')) {
                            return (
                                <h2 key={idx} className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                                    {paragraph.replace('## ', '')}
                                </h2>
                            );
                        }
                        if (paragraph.startsWith('- ')) {
                            const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                            return (
                                <ul key={idx} className="list-disc list-inside space-y-2 text-slate-700 mb-4">
                                    {items.map((item, i) => (
                                        <li key={i}>{item.replace('- ', '')}</li>
                                    ))}
                                </ul>
                            );
                        }
                        if (paragraph.startsWith('1. ')) {
                            const items = paragraph.split('\n').filter(line => /^\d+\./.test(line));
                            return (
                                <ol key={idx} className="list-decimal list-inside space-y-2 text-slate-700 mb-4">
                                    {items.map((item, i) => (
                                        <li key={i}>{item.replace(/^\d+\.\s*/, '')}</li>
                                    ))}
                                </ol>
                            );
                        }
                        return (
                            <p key={idx} className="text-slate-700 leading-relaxed mb-4">
                                {paragraph}
                            </p>
                        );
                    })}
                </div>

                {/* Author & CTA */}
                <div className="bg-slate-50 rounded-lg p-6 mb-12 border border-slate-200">
                    <p className="text-slate-700 mb-4">
                        Gostou deste conteúdo? Vamos conversar sobre como aplicar esses conceitos no seu projeto.
                    </p>
                    <Link
                        href="/contato"
                        className="inline-block px-4 py-2 bg-unti-blue text-white rounded-lg font-medium hover:bg-unti-blue/90 transition"
                    >
                        Falar com especialista
                    </Link>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <div className="border-t border-slate-200 pt-12">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Leitura relacionada</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {relatedPosts.map(relatedPost => (
                                <Link
                                    key={relatedPost.slug}
                                    href={`/blog/${relatedPost.slug}`}
                                    className="block p-6 rounded-lg border border-slate-200 hover:border-unti-blue hover:bg-slate-50 transition"
                                >
                                    <span className="text-sm font-medium text-unti-blue">
                                        {relatedPost.category}
                                    </span>
                                    <h4 className="text-lg font-semibold text-slate-900 mt-2 mb-2">
                                        {relatedPost.title}
                                    </h4>
                                    <p className="text-sm text-slate-600">
                                        {relatedPost.excerpt}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </article>

            {/* Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        headline: post.title,
                        description: post.excerpt,
                        datePublished: post.date,
                        author: {
                            '@type': 'Organization',
                            name: post.author,
                        },
                        publisher: {
                            '@type': 'Organization',
                            name: 'UNTI',
                            url: 'https://unti.com.br',
                        },
                    })
                }}
            />
        </PageShell>
    );
}
