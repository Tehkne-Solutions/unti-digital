"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Globe, MonitorSmartphone, Share2, ShieldCheck, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    t: "Sites Institucionais",
    d: "Autoridade e engenharia digital de alta performance.",
    icon: Globe,
    h: "/solucoes/sites-institucionais",
  },
  {
    t: "Plataformas Web",
    d: "Ecossistemas e sistemas web sob medida.",
    icon: MonitorSmartphone,
    h: "/solucoes/plataformas-web",
  },
  {
    t: "Integrações com APIs",
    d: "Conectividade entre CRM, ERP e sistemas de terceiros.",
    icon: Share2,
    h: "/solucoes/integracoes-crm-erp",
  },
  {
    t: "Governança e Segurança",
    d: "Conformidade e proteção de dados (LGPD).",
    icon: ShieldCheck,
    h: "/solucoes/governanca-seguranca",
  },
  {
    t: "White Label para Agências",
    d: "Serviços técnicos e desenvolvimento para sua agência.",
    icon: Briefcase,
    h: "/solucoes/white-label-agencias",
  },
];

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Cases", href: "/cases" },
  { label: "Conteúdo", href: "/blog" },
  { label: "Sobre", href: "/sobre" },
];

export function MegaMenuModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-900/50 backdrop-blur-sm"
          />

          {/* Painel */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative z-10 flex w-full max-w-4xl flex-col overflow-hidden rounded-[32px] bg-white shadow-2xl md:flex-row"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-20 rounded-full bg-zinc-100 p-2 transition-colors hover:bg-zinc-200"
              aria-label="Fechar"
            >
              <X className="h-4 w-4 text-zinc-600" />
            </button>

            {/* LADO ESQUERDO */}
            <div className="flex w-full flex-col justify-between border-r border-zinc-100 bg-zinc-50 p-8 md:w-5/12 md:p-10">
              <div>
                <p className="mb-1 text-[10px] font-black uppercase tracking-[0.24em] text-unti-blue">
                  Soluções UNTI
                </p>
                <h3 className="mb-2 text-2xl font-black tracking-tight text-zinc-900">
                  Para sua empresa
                </h3>
                <p className="mb-7 text-sm font-medium text-zinc-500">
                  Pequenas, médias e grandes operações.
                </p>

                <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-zinc-200 shadow-sm md:h-56">
                  <Image
                    src="/images/solutions/unti-digital-solution-high-performance-websites.png"
                    fill
                    className="object-cover"
                    alt="Soluções UNTI Digital"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                  <p className="absolute bottom-4 left-5 text-sm font-bold text-white">
                    Engenharia de Elite
                  </p>
                </div>
              </div>

              {/* Links principais movidos da header */}
              <div className="mt-8 flex flex-wrap gap-5 border-t border-zinc-200 pt-6">
                {mainLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    className="text-xs font-black uppercase tracking-widest text-zinc-700 transition-colors hover:text-unti-blue"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* LADO DIREITO */}
            <div className="flex w-full flex-col justify-center bg-white p-8 md:w-7/12 md:p-10">
              <p className="mb-6 text-[10px] font-black uppercase tracking-[0.24em] text-zinc-400">
                Escolha sua solução
              </p>
              <div className="flex flex-col gap-5">
                {solutions.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.t}
                      href={item.h}
                      onClick={onClose}
                      className="group flex items-start gap-4 transition-transform hover:translate-x-1"
                    >
                      <div className="mt-0.5 rounded-xl bg-blue-50 p-2.5 transition-colors group-hover:bg-blue-100">
                        <Icon className="h-5 w-5 text-unti-blue" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-zinc-900 transition-colors group-hover:text-unti-blue">
                          {item.t}
                        </h4>
                        <p className="mt-0.5 text-xs leading-snug text-zinc-500">{item.d}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
