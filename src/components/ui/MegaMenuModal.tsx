"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { AppLocale } from "@/lib/i18n";
import {
  X,
  Globe,
  MonitorSmartphone,
  Share2,
  ShieldCheck,
  Briefcase
} from "lucide-react";
import Image from "next/image";
import Link from "next-intl/link";
import { useLocale, useTranslations } from "next-intl";
import { getServices } from "@/data/services";

const solutionIcons = {
  "sites-institucionais": Globe,
  "plataformas-web": MonitorSmartphone,
  "integracoes-crm-erp": Share2,
  "governanca-seguranca": ShieldCheck,
  "white-label-agencias": Briefcase
} as const;

const orderedSolutionSlugs = [
  "sites-institucionais",
  "plataformas-web",
  "integracoes-crm-erp",
  "governanca-seguranca",
  "white-label-agencias"
] as const;

const mainLinks = [
  { key: "home", href: "/" },
  { key: "cases", href: "/cases" },
  { key: "content", href: "/blog" },
  { key: "about", href: "/sobre" },
  { key: "contact", href: "/contato" }
] as const;

export function MegaMenuModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("Menu");
  const services = getServices(locale);
  const orderedSolutions = orderedSolutionSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-[999] flex items-center justify-center sm:p-6 md:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative z-10 flex h-full w-full flex-col overflow-hidden bg-white sm:h-auto sm:max-h-[90vh] sm:max-w-5xl sm:rounded-[32px] sm:shadow-2xl md:flex-row"
          >
            <div className="flex shrink-0 items-center justify-between border-b border-zinc-100 bg-white p-6 md:hidden">
              <span className="text-xl font-black tracking-tighter text-zinc-900">
                UNTI<span className="text-unti-blue">.</span>
              </span>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full bg-zinc-100 p-3 transition-colors hover:bg-zinc-200"
                aria-label={t("close")}
              >
                <X className="h-5 w-5 text-zinc-900" />
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 z-20 hidden rounded-full bg-zinc-100 p-2 transition-colors hover:bg-zinc-200 md:flex"
              aria-label={t("close")}
            >
              <X className="h-4 w-4 text-zinc-600" />
            </button>

            <div className="flex flex-1 flex-col overflow-y-auto md:flex-row">
              <div className="order-1 w-full bg-white p-8 md:order-2 md:w-7/12 md:p-10 md:py-12">
                <p className="mb-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 md:hidden">
                  {t("solutions")}
                </p>
                <p className="mb-6 hidden text-[10px] font-black uppercase tracking-widest text-zinc-400 md:block">
                  {t("solutions")}
                </p>
                <div className="flex flex-col gap-6 md:gap-5">
                  {orderedSolutions.map((service) => {
                    const Icon = solutionIcons[service.slug as keyof typeof solutionIcons];

                    return (
                      <Link
                        key={service.slug}
                        href={`/solucoes/${service.slug}`}
                        onClick={onClose}
                        className="group flex items-start gap-4 transition-transform hover:translate-x-1"
                      >
                        <div className="mt-0.5 shrink-0 rounded-xl bg-blue-50 p-3 transition-colors group-hover:bg-blue-100 md:p-2.5">
                          <Icon className="h-5 w-5 text-unti-blue" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-zinc-900 transition-colors group-hover:text-unti-blue md:text-sm">
                            {service.title}
                          </h4>
                          <p className="mt-0.5 text-sm leading-snug text-zinc-500 md:text-xs">
                            {service.shortDescription}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="order-2 flex w-full flex-col justify-between border-t border-zinc-100 bg-zinc-50 p-8 md:order-1 md:w-5/12 md:border-r md:border-t-0 md:p-10">
                <div>
                  <h3 className="mb-2 hidden text-2xl font-black tracking-tight text-zinc-900 md:block">
                    {t("forYourCompany")}
                  </h3>
                  <p className="mb-7 hidden text-sm font-medium text-zinc-500 md:block">
                    {t("companyScope")}
                  </p>

                  <p className="mb-4 text-[10px] font-black uppercase tracking-widest text-zinc-400 md:hidden">
                    {t("quickAccess")}
                  </p>
                  <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-5">
                    {mainLinks.map((link) => (
                      <Link
                        key={link.key}
                        href={link.href}
                        onClick={onClose}
                        className="text-2xl font-black uppercase tracking-widest text-zinc-900 transition-colors hover:text-unti-blue md:text-xs"
                      >
                        {t(link.key)}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="relative mt-8 h-32 w-full shrink-0 overflow-hidden rounded-2xl border border-zinc-200 shadow-sm md:mt-10 md:h-56">
                  <Image
                    src="/images/solutions/unti-digital-solution-high-performance-websites.png"
                    fill
                    className="object-cover"
                    alt={t("solutionsImageAlt")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                  <p className="absolute bottom-4 left-5 text-sm font-bold text-white">
                    {t("eliteDigitalEngineering")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
