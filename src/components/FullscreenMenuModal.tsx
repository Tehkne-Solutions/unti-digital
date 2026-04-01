"use client";

import { type ReactElement, type SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type IconProps = SVGProps<SVGSVGElement>;

type SolutionItem = {
  href: string;
  label: string;
  description: string;
  image: string;
  icon: (props: IconProps) => ReactElement;
};

function IconMonitor(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="4.5" width="18" height="12" rx="2.5" />
      <path d="M8 19.5h8" />
      <path d="M12 16.5v3" />
    </svg>
  );
}

function IconLayers(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 3 8 4.5-8 4.5L4 7.5 12 3Z" />
      <path d="m4 12.5 8 4.5 8-4.5" />
      <path d="m4 17 8 4 8-4" />
    </svg>
  );
}

function IconWorkflow(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 7h4" />
      <path d="M13 7h4" />
      <path d="M17 7v4" />
      <path d="M17 13v4" />
      <path d="M11 7 7 11" />
      <rect x="3" y="3" width="4" height="4" rx="1" />
      <rect x="17" y="3" width="4" height="4" rx="1" />
      <rect x="17" y="17" width="4" height="4" rx="1" />
      <rect x="3" y="17" width="4" height="4" rx="1" />
      <path d="M7 19h10" />
    </svg>
  );
}

function IconShield(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3 5 6v5c0 4.4 2.9 8.4 7 9.7 4.1-1.3 7-5.3 7-9.7V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.6-3.6" />
    </svg>
  );
}

function IconInstagram(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .3 2.5.5.7.2 1.2.5 1.8 1 .5.5.8 1 1 1.8.2.5.4 1.3.5 2.5.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 2-.5 2.5-.2.7-.5 1.2-1 1.8-.5.5-.8 1-1 1.8-.2.5-.4 1.3-.5 2.5C15.6 21.8 15.2 21.8 12 21.8s-3.6 0-4.8-.1c-1.2-.1-2-.3-2.5-.5-.7-.2-1.2-.5-1.8-1-.5-.5-.8-1-1-1.8-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-2 .5-2.5.2-.7.5-1.2 1-1.8.5-.5 1-.8 1.8-1 .5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2Zm0 2.2c-3.1 0-3.4 0-4.7.1-1 .1-1.5.2-1.9.3-.5.2-.8.3-1.1.6-.3.3-.5.6-.6 1.1-.2.4-.3.9-.3 1.9-.1 1.3-.1 1.6-.1 4.7s0 3.4.1 4.7c.1 1 .2 1.5.3 1.9.2.5.3.8.6 1.1.3.3.6.5 1.1.6.4.2.9.3 1.9.3 1.3.1 1.6.1 4.7.1s3.4 0 4.7-.1c1-.1 1.5-.2 1.9-.3.5-.2.8-.3 1.1-.6.3-.3.5-.6.6-1.1.2-.4.3-.9.3-1.9.1-1.3.1-1.6.1-4.7s0-3.4-.1-4.7c-.1-1-.2-1.5-.3-1.9-.2-.5-.3-.8-.6-1.1-.3-.3-.6-.5-1.1-.6-.4-.2-.9-.3-1.9-.3-1.3-.1-1.6-.1-4.7-.1Zm0 3.7A3.9 3.9 0 1 1 8.1 12 3.9 3.9 0 0 1 12 8.1Zm0 5.6A1.7 1.7 0 1 0 10.3 12 1.7 1.7 0 0 0 12 13.7Zm4.9-5.8a.9.9 0 1 0-.9-.9.9.9 0 0 0 .9.9Z" />
    </svg>
  );
}

function IconLinkedin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.02 2.02 0 0 0 3.2 5.02c0 1.1.9 2 2.02 2a2.01 2.01 0 0 0 2.03-2C7.25 3.9 6.37 3 5.25 3ZM20.8 12.68c0-3.44-1.84-5.04-4.3-5.04-1.98 0-2.87 1.1-3.37 1.87V8.5H9.75V20h3.38v-6.4c0-1.68.32-3.3 2.4-3.3 2.05 0 2.08 1.9 2.08 3.4V20H21V12.68h-.2Z" />
    </svg>
  );
}

const solutionItems: SolutionItem[] = [
  {
    href: "/solucoes/sites-institucionais",
    label: "Sites Institucionais",
    description: "Autoridade e Performance",
    image: "/images/solutions/unti-digital-solution-high-performance-websites.png",
    icon: IconMonitor
  },
  {
    href: "/solucoes/plataformas-web",
    label: "Plataformas Web",
    description: "Engenharia de Software",
    image: "/images/solutions/unti-digital-solution-custom-web-platforms.png",
    icon: IconLayers
  },
  {
    href: "/solucoes/integracoes-crm-erp",
    label: "Integrações com CRM e ERP",
    description: "Automação Inteligente",
    image: "/images/solutions/unti-digital-solution-crm-erp-integrations.png",
    icon: IconWorkflow
  },
  {
    href: "/solucoes/governanca-seguranca",
    label: "Governança e Segurança",
    description: "Zero-Trust & Compliance",
    image: "/images/solutions/unti-digital-solution-governance-security.png",
    icon: IconShield
  }
];

export function FullscreenMenuModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Cases", href: "/cases" },
    { label: "Blog", href: "/blog" },
    { label: "Para Empresas", href: "/planos#empresas" },
    { label: "Para Agências", href: "/planos#agencias" },
    { label: "Contato", href: "/contato" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white z-[999] flex flex-col overflow-y-auto"
        >
          {/* Header do Modal */}
          <div className="sticky top-0 z-10 bg-white border-b border-slate-200/50 px-6 md:px-12 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-zinc-900">UNTI</span>
                <span className="text-2xl font-black text-unti-blue">.</span>
              </div>
              <button
                onClick={onClose}
                className="p-3 hover:bg-zinc-100 rounded-full transition-all duration-200"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6 text-zinc-900" />
              </button>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="flex-grow px-6 md:px-12 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-[1400px] mx-auto">
              {/* Coluna de Soluções (70%) */}
              <div className="lg:col-span-8">
                <p className="text-xs font-black text-unti-blue uppercase tracking-[0.2em] mb-12">
                  Nossas Soluções
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {solutionItems.map((solution) => {
                    const Icon = solution.icon;
                    return (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        onClick={onClose}
                        className="group relative h-64 rounded-3xl overflow-hidden block focus:outline-none focus:ring-2 focus:ring-unti-blue"
                      >
                        <Image
                          src={solution.image}
                          alt={solution.label}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent p-6 flex flex-col justify-end">
                          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="text-white text-xl font-bold leading-tight">{solution.label}</h4>
                          <p className="text-unti-blue text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 mt-2">
                            {solution.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Coluna de Navegação (30%) */}
              <div className="lg:col-span-4 lg:border-l lg:border-zinc-200 lg:pl-16">
                <nav className="space-y-1 mb-16">
                  <p className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] mb-6">
                    Navegação
                  </p>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className="block text-2xl md:text-3xl font-bold text-zinc-900 hover:text-unti-blue hover:translate-x-2 transition-all duration-200 py-3"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Seção de Contato */}
                <div className="lg:border-t lg:border-zinc-200 lg:pt-8">
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">
                    Conecte-se
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/untidigital/"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 hover:bg-zinc-100 rounded-full transition-all duration-200"
                      aria-label="Instagram"
                    >
                      <IconInstagram className="w-5 h-5 text-zinc-600 hover:text-unti-blue" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/untidigital/"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 hover:bg-zinc-100 rounded-full transition-all duration-200"
                      aria-label="LinkedIn"
                    >
                      <IconLinkedin className="w-5 h-5 text-zinc-600 hover:text-unti-blue" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
