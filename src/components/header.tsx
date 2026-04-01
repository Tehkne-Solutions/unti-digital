"use client";

import { useEffect, useState, type ReactElement, type SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { X } from "lucide-react";

type IconProps = SVGProps<SVGSVGElement>;

type SolutionItem = {
  href: string;
  label: string;
  description: string;
  image: string;
  icon: (props: IconProps) => ReactElement;
};

const contact = {
  email: "contato@untidigital.com.br",
  phone: "+55 19 98280-9717",
  linkedin: "https://www.linkedin.com/company/untidigital/",
  instagram: "https://www.instagram.com/untidigital/"
};

const solutions: SolutionItem[] = [
  {
    href: "/solucoes/sites-institucionais",
    label: "Sites Institucionais",
    description: "Hubs corporativos com foco em conversao, Core Web Vitals e autoridade digital.",
    image: "/images/solutions/unti-digital-solution-high-performance-websites.png",
    icon: IconMonitor
  },
  {
    href: "/solucoes/plataformas-web",
    label: "Plataformas Web",
    description: "Engenharia de software para operações complexas, SaaS e produtos sob medida.",
    image: "/images/solutions/unti-digital-solution-custom-web-platforms.png",
    icon: IconLayers
  },
  {
    href: "/solucoes/integracoes-crm-erp",
    label: "Integracoes com CRM e ERP",
    description: "Automacao inteligente entre marketing, vendas e operacao em tempo real.",
    image: "/images/solutions/unti-digital-solution-crm-erp-integrations.png",
    icon: IconWorkflow
  },
  {
    href: "/solucoes/governanca-seguranca",
    label: "Governanca e Seguranca",
    description: "Arquiteturas Zero-Trust, controle de acessos e compliance digital.",
    image: "/images/solutions/unti-digital-solution-governance-security.png",
    icon: IconShield
  },
  {
    href: "/solucoes/white-label-agencias",
    label: "White Label para Agencias",
    description: "Braco tecnologico invisivel para agencias que precisam escalar com seguranca.",
    image: "/images/solutions/unti-digital-solution-white-label-development.png",
    icon: IconUsers
  }
];

const links = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/planos", label: "Planos" },
  { href: "/planos#empresas", label: "Para Empresas" },
  { href: "/planos#agencias", label: "Para Agências" },
  { href: "/cases", label: "Cases" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" }
];

function IconMail(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 7.5 12 14l9-6.5" />
      <path d="M4.5 5.5h15A1.5 1.5 0 0 1 21 7v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17V7a1.5 1.5 0 0 1 1.5-1.5Z" />
    </svg>
  );
}

function IconPhone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.9v2a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 4.2 2 2 0 0 1 5 2h2a2 2 0 0 1 2 1.7l.5 2.6a2 2 0 0 1-.6 1.8l-1.6 1.6a16 16 0 0 0 6.2 6.2l1.6-1.6a2 2 0 0 1 1.8-.6l2.6.5a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

function IconLinkedIn(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.02 2.02 0 0 0 3.2 5.02c0 1.1.9 2 2.02 2a2.01 2.01 0 0 0 2.03-2C7.25 3.9 6.37 3 5.25 3ZM20.8 12.68c0-3.44-1.84-5.04-4.3-5.04-1.98 0-2.87 1.1-3.37 1.87V8.5H9.75V20h3.38v-6.4c0-1.68.32-3.3 2.4-3.3 2.05 0 2.08 1.9 2.08 3.4V20H21V12.68h-.2Z" />
    </svg>
  );
}

function IconInstagram(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .3 2.5.5.7.2 1.2.5 1.8 1 .5.5.8 1 1 1.8.2.5.4 1.3.5 2.5.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 2-.5 2.5-.2.7-.5 1.2-1 1.8-.5.5-1 .8-1.8 1-.5.2-1.3.4-2.5.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.3-2.5-.5-.7-.2-1.2-.5-1.8-1-.5-.5-.8-1-1-1.8-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-2 .5-2.5.2-.7.5-1.2 1-1.8.5-.5 1-.8 1.8-1 .5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2Zm0 2.2c-3.1 0-3.4 0-4.7.1-1 .1-1.5.2-1.9.3-.5.2-.8.3-1.1.6-.3.3-.5.6-.6 1.1-.2.4-.3.9-.3 1.9-.1 1.3-.1 1.6-.1 4.7s0 3.4.1 4.7c.1 1 .2 1.5.3 1.9.2.5.3.8.6 1.1.3.3.6.5 1.1.6.4.2.9.3 1.9.3 1.3.1 1.6.1 4.7.1s3.4 0 4.7-.1c1-.1 1.5-.2 1.9-.3.5-.2.8-.3 1.1-.6.3-.3.5-.6.6-1.1.2-.4.3-.9.3-1.9.1-1.3.1-1.6.1-4.7s0-3.4-.1-4.7c-.1-1-.2-1.5-.3-1.9-.2-.5-.3-.8-.6-1.1-.3-.3-.6-.5-1.1-.6-.4-.2-.9-.3-1.9-.3-1.3-.1-1.6-.1-4.7-.1Zm0 3.7A3.9 3.9 0 1 1 8.1 12 3.9 3.9 0 0 1 12 8.1Zm0 5.6A1.7 1.7 0 1 0 10.3 12 1.7 1.7 0 0 0 12 13.7Zm4.9-5.8a.9.9 0 1 0-.9-.9.9.9 0 0 0 .9.9Z" />
    </svg>
  );
}

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

function IconUsers(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="8" r="3" />
      <path d="M20 21v-2a4 4 0 0 0-3-3.9" />
      <path d="M15 4.1a3 3 0 0 1 0 5.8" />
    </svg>
  );
}

function IconChevronDown(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MenuLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative inline-flex items-center pb-1 text-sm font-medium text-brand-dark no-underline transition-colors hover:text-unti-blue hover:no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-unti-blue after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
    >
      {label}
    </Link>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!solutionsOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSolutionsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [solutionsOpen]);

  const menuTop = isScrolled ? 92 : 124;
  const menuMaxHeight = isScrolled
    ? "calc(100vh - 116px)"
    : "calc(100vh - 148px)";

  return (
    <header className="sticky top-0 z-[70] border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="bg-[#2563EB] text-white"
      >
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-4 py-[5px] text-xs sm:flex-row sm:items-center sm:justify-between md:px-6">
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 text-white no-underline transition-opacity hover:opacity-85 hover:no-underline"
            >
              <IconMail className="h-3.5 w-3.5 shrink-0 text-white" />
              <span className="text-white">{contact.email}</span>
            </a>
            <a
              href={`tel:${contact.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 text-white no-underline transition-opacity hover:opacity-85 hover:no-underline"
            >
              <IconPhone className="h-3.5 w-3.5 shrink-0 text-white" />
              <span className="text-white">{contact.phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn da UNTI Digital"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/25 text-white no-underline transition-colors hover:bg-white/10 hover:text-white hover:no-underline"
            >
              <IconLinkedIn className="h-3.5 w-3.5" />
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da UNTI Digital"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/25 text-white no-underline transition-colors hover:bg-white/10 hover:text-white hover:no-underline"
            >
              <IconInstagram className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </motion.div>

      <div className="bg-white/95 backdrop-blur">
        <div className={`mx-auto flex max-w-[1280px] items-center justify-between px-4 transition-[height,padding] duration-300 md:px-6 ${isScrolled ? "h-16" : "h-24"}`}>
          <Link href="/" aria-label="UNTI Digital" className="no-underline hover:no-underline">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} transition={{ type: "spring", stiffness: 350, damping: 24 }}>
              <div
                className="transition-[width] duration-300 ease-in-out"
                style={{ width: isScrolled ? "150px" : "250px" }}
              >
                <Image
                  src="/images/logo-horizontal.svg"
                  alt="UNTI Digital"
                  width={250}
                  height={64}
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>
            </motion.div>
          </Link>

          <nav className="hidden items-center gap-8 lg:gap-10">
            <MenuLink href="/" label="Home" />

            <button
              type="button"
              onClick={() => setSolutionsOpen((open) => !open)}
              className={`relative inline-flex items-center gap-2 pb-1 text-sm font-medium transition-colors ${solutionsOpen ? "text-unti-blue" : "text-brand-dark hover:text-unti-blue"} after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-unti-blue after:transition-transform after:duration-300 ${solutionsOpen ? "after:origin-left after:scale-x-100" : "after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100"}`}
              aria-expanded={solutionsOpen}
              aria-controls="solutions-mega-menu"
            >
              <span>Soluções</span>
              <IconChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
            </button>

            {links.slice(1).map((link) => (
              <MenuLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="primary" className="px-5 h-11 rounded-full" onClick={() => (window.location.href = "/contato")}>
              Solicitar Orçamento
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-3 text-brand-dark transition-colors hover:border-unti-blue hover:text-unti-blue"
              aria-label="Abrir menu"
            >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {solutionsOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Fechar mega menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSolutionsOpen(false)}
              className="fixed inset-0 z-[50] bg-black/20"
            />

            <motion.div
              id="solutions-mega-menu"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-4 z-[60] mx-auto w-auto max-w-7xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
              style={{
                top: menuTop,
                maxHeight: menuMaxHeight
              }}
            >
              <div className="max-h-[inherit] overflow-y-auto p-6 md:p-8">
                <div className="mb-6 border-b border-slate-200 pb-6">
                  <div className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">
                      Soluções Digitais
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-brand-dark md:text-3xl">
                      Tecnologia sob medida para empresas e agências
                    </h2>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {solutions.map((solution, index) => {
                    const Icon = solution.icon;

                    return (
                      <motion.div
                        key={solution.href}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.04 }}
                      >
                        <Link
                          href={solution.href}
                          onClick={() => setSolutionsOpen(false)}
                          className="group flex h-full flex-col rounded-2xl border border-slate-200 p-4 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-unti-blue hover:bg-slate-50 hover:no-underline"
                        >
                          <div className="relative mb-4 aspect-video overflow-hidden rounded-2xl">
                            <Image
                              src={solution.image}
                              alt={solution.label}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/95 text-unti-blue shadow-sm">
                              <Icon className="h-5 w-5" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h3 className="text-base font-bold text-brand-dark transition-colors group-hover:text-unti-blue">
                              {solution.label}
                            </h3>
                            <p className="text-sm leading-relaxed text-brand-muted">
                              {solution.description}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-brand-muted">
                    Precisa de uma solução personalizada para o seu cenário?
                  </p>
                  <Link
                    href="/contato"
                    onClick={() => setSolutionsOpen(false)}
                    className="text-sm font-bold text-unti-blue no-underline hover:underline"
                  >
                    Falar com especialista →
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Fechar menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[80] bg-black/50"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 z-[90] h-full w-full max-w-xs bg-white p-6 shadow-2xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-900">Menu</p>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg p-2 text-zinc-800 hover:bg-zinc-100"
                  aria-label="Fechar menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-3 py-2 text-base font-semibold text-zinc-900 hover:bg-zinc-100"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="mt-6 border-t border-zinc-200 pt-4">
                  <p className="mb-2 text-xs uppercase tracking-widest text-zinc-500">Para Agências e Empresas</p>
                  <Link
                    href="/planos#agencias"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
                  >
                    Planos para Agências
                  </Link>
                  <Link
                    href="/planos#empresas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="mt-2 block rounded-lg px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
                  >
                    Planos para Empresas
                  </Link>
                </div>

                <div className="mt-6 border-t border-zinc-200 pt-4">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm font-medium text-zinc-700 hover:text-blue-600"
                  >
                    {contact.email}
                  </a>
                  <a
                    href={`tel:${contact.phone.replace(/\D/g, "")}`}
                    className="mt-2 block text-sm font-medium text-zinc-700 hover:text-blue-600"
                  >
                    {contact.phone}
                  </a>
                </div>

                <Button
                  variant="primary"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.location.href = "/contato";
                  }}
                  className="mt-6"
                >
                  Falar com especialista
                </Button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
