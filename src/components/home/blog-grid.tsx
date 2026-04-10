"use client";

﻿"use client";

import Link from "next-intl/link";
import type { AppLocale } from "@/lib/i18n";
import { useLocale, useTranslations } from "next-intl";
import { getBlogPosts } from "@/data/posts";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function BlogGrid() {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("BlogGrid");
  const posts = getBlogPosts(locale).slice(0, 4);

  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">{t("badge")}</p>
            <h2 className="mt-4 text-3xl font-semibold text-zinc-900 md:text-4xl">{t("title")}</h2>
            <p className="mt-4 text-lg text-brand-muted">{t("subtitle")}</p>
          </div>

          <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-unti-blue no-underline hover:no-underline">
            {t("viewAll")}
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
