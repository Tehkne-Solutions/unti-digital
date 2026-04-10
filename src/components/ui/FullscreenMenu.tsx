"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const solutionCards = [
  {
    key: "institutionalSites",
    img: "/images/solutions/unti-digital-solution-high-performance-websites.png",
    h: "/solucoes/sites-institucionais",
  },
  {
    key: "webPlatforms",
    img: "/images/solutions/unti-digital-solution-custom-web-platforms.png",
    h: "/solucoes/plataformas-web",
  },
  {
    key: "crmErpIntegrations",
    img: "/images/solutions/unti-digital-solution-crm-erp-integrations.png",
    h: "/solucoes/integracoes-crm-erp",
  },
  {
    key: "governanceSecurity",
    img: "/images/solutions/unti-digital-solution-governance-security.png",
    h: "/solucoes/governanca-seguranca",
  },
];

const mainLinks = [
  { key: "home", href: "/" },
  { key: "solutions", href: "/solucoes" },
  { key: "cases", href: "/cases" },
  { key: "content", href: "/blog" },
  { key: "about", href: "/sobre" },
  { key: "contact", href: "/contato" },
];

const subLinks = [
  { key: "forCompanies", href: "/solucoes" },
  { key: "forAgencies", href: "/solucoes/white-label-agencias" },
  { key: "apiIntegrations", href: "/solucoes/integracoes-crm-erp" },
  { key: "privacyPolicy", href: "/privacidade" },
  { key: "businessPolicy", href: "/politica-empresarial" },
];

export const FullscreenMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const t = useTranslations('Menu');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 220 }}
          className="fixed inset-0 z-[999] flex flex-col overflow-hidden bg-white lg:grid lg:grid-cols-12"
        >
          {/* LADO ESQUERDO: cards visuais — desktop only */}
          <div className="hidden lg:flex lg:col-span-7 flex-col justify-between border-r border-zinc-100 bg-zinc-50 p-16">
            <div>
              <p className="mb-12 text-[10px] font-black uppercase italic tracking-[0.3em] text-unti-blue">
                {t("eliteDigitalEngineering")}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {solutionCards.map((item) => (
                  <Link
                    key={item.key}
                    href={item.h}
                    onClick={onClose}
                    className="group relative h-72 overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-sm"
                  >
                    <Image
                      src={item.img}
                      alt={t(item.key)}
                      fill
                      className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-zinc-900/70 to-transparent p-7">
                      <h4 className="text-xl font-black text-white">{t(item.key)}</h4>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/60">
                        Ver solução
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              UNTI Digital // Performance &amp; Autoridade
            </p>
          </div>

          {/* LADO DIREITO: navegação */}
          <div className="flex flex-1 flex-col justify-between overflow-y-auto p-8 md:p-16 lg:col-span-5">
            {/* Header do menu */}
            <div className="flex items-center justify-between">
              <Link href="/" onClick={onClose} className="text-2xl font-black tracking-tighter text-zinc-900">
                UNTI<span className="text-unti-blue">.</span>
              </Link>
              <button
                onClick={onClose}
                className="rounded-full bg-zinc-900 p-4 text-white shadow-xl transition-all hover:bg-unti-blue"
                aria-label={t("close")}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Links principais */}
            <nav className="mt-12 flex flex-col gap-3">
              {mainLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-center gap-3 text-4xl font-black text-zinc-900 transition-all hover:translate-x-2 hover:text-unti-blue md:text-5xl"
                >
                  {t(link.key)}
                  <ArrowUpRight className="h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </nav>

            {/* Sub-links: serviços e políticas */}
            <div className="mt-12 border-t border-zinc-100 pt-8">
              <p className="mb-5 text-[10px] font-black uppercase italic tracking-widest text-zinc-400">
                {t("servicesAndPolicies")}
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {subLinks.map((sub) => (
                  <Link
                    key={sub.key}
                    href={sub.href}
                    onClick={onClose}
                    className="flex items-center gap-2 text-xs font-bold text-zinc-600 transition-colors hover:text-unti-blue"
                  >
                    <ChevronRight className="h-3 w-3 text-unti-blue" />
                    {t(sub.key)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
