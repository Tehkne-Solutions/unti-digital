"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const solutionCards = [
  {
    t: "Sites Institucionais",
    img: "/images/solutions/unti-digital-solution-high-performance-websites.png",
    h: "/solucoes/sites-institucionais",
  },
  {
    t: "Plataformas Web",
    img: "/images/solutions/unti-digital-solution-custom-web-platforms.png",
    h: "/solucoes/plataformas-web",
  },
  {
    t: "Integrações CRM & ERP",
    img: "/images/solutions/unti-digital-solution-crm-erp-integrations.png",
    h: "/solucoes/integracoes-crm-erp",
  },
  {
    t: "Governança e Segurança",
    img: "/images/solutions/unti-digital-solution-governance-security.png",
    h: "/solucoes/governanca-seguranca",
  },
];

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Cases", href: "/cases" },
  { label: "Conteúdo", href: "/blog" },
  { label: "Sobre a UNTI", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

const subLinks = [
  { label: "Para Empresas", href: "/solucoes" },
  { label: "Para Agências (White Label)", href: "/solucoes/white-label-agencias" },
  { label: "Integrações com APIs", href: "/solucoes/integracoes-crm-erp" },
  { label: "Política de Privacidade", href: "/privacidade" },
  { label: "Política Empresarial", href: "/politica-empresarial" },
];

export const FullscreenMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
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
                Engenharia Digital de Elite
              </p>
              <div className="grid grid-cols-2 gap-6">
                {solutionCards.map((item) => (
                  <Link
                    key={item.t}
                    href={item.h}
                    onClick={onClose}
                    className="group relative h-72 overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-sm"
                  >
                    <Image
                      src={item.img}
                      alt={item.t}
                      fill
                      className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-zinc-900/70 to-transparent p-7">
                      <h4 className="text-xl font-black text-white">{item.t}</h4>
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
                aria-label="Fechar menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Links principais */}
            <nav className="mt-12 flex flex-col gap-3">
              {mainLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-center gap-3 text-4xl font-black text-zinc-900 transition-all hover:translate-x-2 hover:text-unti-blue md:text-5xl"
                >
                  {link.label}
                  <ArrowUpRight className="h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </nav>

            {/* Sub-links: serviços e políticas */}
            <div className="mt-12 border-t border-zinc-100 pt-8">
              <p className="mb-5 text-[10px] font-black uppercase italic tracking-widest text-zinc-400">
                Serviços &amp; Políticas
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {subLinks.map((sub) => (
                  <Link
                    key={sub.label}
                    href={sub.href}
                    onClick={onClose}
                    className="flex items-center gap-2 text-xs font-bold text-zinc-600 transition-colors hover:text-unti-blue"
                  >
                    <ChevronRight className="h-3 w-3 text-unti-blue" />
                    {sub.label}
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
