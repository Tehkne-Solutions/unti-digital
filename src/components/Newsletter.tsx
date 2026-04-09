"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
  const t = useTranslations("Newsletter");
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (pathname.includes("/contato")) {
    return null;
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-brand-muted">{t("description")}</p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="sr-only" htmlFor="newsletter-email">
              {t("inputLabel")}
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={t("inputPlaceholder")}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-brand-dark placeholder:text-slate-400 focus:border-unti-blue focus:outline-none focus:ring-2 focus:ring-unti-blue/20"
            />
            <Button
              type="submit"
              variant="primary"
              className="w-full !bg-unti-blue !text-white hover:!bg-[#2f5edc] sm:w-auto"
            >
              {t("button")}
            </Button>
          </form>

          {submitted && <p className="mt-4 text-brand-muted">{t("success")}</p>}
        </div>
      </div>
    </section>
  );
}
