import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/posts";

interface BlogPostCardProps {
  post: BlogPost;
  variant?: "home" | "list" | "related";
}

export function BlogPostCard({ post, variant = "list" }: BlogPostCardProps) {
  const isRelated = variant === "related";
  const isHome = variant === "home";

  return (
    <Link href={`/blog/${post.slug}`} className="group block no-underline hover:no-underline">
      <article
        className={`overflow-hidden rounded-[28px] border border-zinc-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)] ${
          isRelated ? "h-full" : "shadow-[0_14px_50px_rgba(15,23,42,0.05)]"
        }`}
      >
        <div className={`relative overflow-hidden ${isRelated ? "aspect-[16/10]" : "aspect-[16/9]"}`}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes={
              isHome
                ? "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                : "(max-width: 1023px) 100vw, 33vw"
            }
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="space-y-4 px-6 py-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
            <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-unti-blue">
              {post.category}
            </span>
            <span>{post.readingTime}</span>
          </div>

          <div className="space-y-3">
            <h3 className={`${isHome ? "text-xl" : "text-2xl"} font-semibold leading-tight text-zinc-900`}>
              {post.title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-600">
              {isRelated ? post.excerpt : post.description}
            </p>
          </div>

          <div className="inline-flex items-center text-sm font-semibold text-unti-blue">
            Ler materia
          </div>
        </div>
      </article>
    </Link>
  );
}
