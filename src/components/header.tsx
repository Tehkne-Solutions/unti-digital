"use client";

import { useEffect, useState, type ReactElement, type SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

type IconProps = SVGProps<SVGSVGElement>;

type SolutionItem = {
  href: string;
  label: string;
  description: string;
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
    description: "Sites profissionais com performance, SEO e foco em conversão.",
    icon: IconMonitor
  },
  {
    href: "/solucoes/plataformas-web",
    label: "Plataformas Web",
    description: "Produtos digitais sob medida para operações e jornadas complexas.",
    icon: IconLayers
  },
  {
    href: "/solucoes/integracoes-crm-erp",
    label: "Integrações e Automações",
    description: "Conexões robustas entre CRM, ERP, APIs e processos críticos.",
    icon: IconWorkflow
  },
  {
    href: "/solucoes/governanca-seguranca",
    label: "Governança e Segurança",
    description: "Arquitetura segura com previsibilidade técnica e boas práticas.",
    icon: IconShield
  },
  {
    href: "/solucoes/white-label-agencias",
    label: "White Label para Agências",
    description: "Execução técnica confiável para escalar entregas com sua marca.",
    icon: IconUsers
  },
  {
    href: "/solucoes/empresas",
    label: "Projetos para Empresas",
    description: "Estratégia, tecnologia e evolução contínua para negócios digitais.",
    icon: IconBriefcase
  }
];

const links = [
  { href: "/", label: "Home" },
  { href: "/cases", label: "Cases" },
  { href: "/blog", label: "Blog" },
  { href: "/integracoes", label: "Integrações" },
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

function IconBriefcase(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
      <path d="M3 12h18" />
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

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
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

          <nav className="hidden items-center gap-8 lg:gap-10 md:flex">
            <MenuLink href="/" label="Home" />

            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                type="button"
                className={`relative inline-flex items-center gap-2 pb-1 text-sm font-medium transition-colors ${solutionsOpen ? "text-unti-blue" : "text-brand-dark hover:text-unti-blue"} after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-unti-blue after:transition-transform after:duration-300 ${solutionsOpen ? "after:origin-left after:scale-x-100" : "after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100"}`}
              >
                <span>Soluções</span>
                <IconChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full z-50 mt-4 w-[960px] -translate-x-1/2 rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_30px_80px_rgba(15,23,42,0.16)]"
                  >
                    <div className="mb-5 flex items-start justify-between gap-6 border-b border-slate-200 pb-5">
                      <div className="max-w-xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">
                          Soluções Digitais
                        </p>
                        <h2 className="mt-2 text-2xl font-bold text-brand-dark">
                          Tecnologia sob medida para empresas e agências
                        </h2>
                      </div>
                      <p className="max-w-sm text-sm leading-relaxed text-brand-muted">
                        Explore serviços com foco em performance, integrações e entregas robustas para operação digital.
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {solutions.map((solution, index) => {
                        const Icon = solution.icon;

                        return (
                          <motion.div
                            key={solution.href}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.18, delay: index * 0.03 }}
                          >
                            <Link
                              href={solution.href}
                              onClick={() => setSolutionsOpen(false)}
                              className="group flex h-full flex-col gap-4 rounded-2xl border border-slate-200 p-5 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-unti-blue hover:bg-slate-50 hover:no-underline"
                            >
                              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-unti-blue/10 text-unti-blue transition-colors group-hover:bg-unti-blue group-hover:text-white">
                                <Icon className="h-6 w-6" />
                              </div>

                              <div className="space-y-2">
                                <h3 className="text-base font-bold text-brand-dark">
                                  {solution.label}
                                </h3>
                                <p className="text-sm leading-relaxed text-brand-muted">
                                  {solution.description}
                                </p>
                              </div>

                              <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-unti-blue">
                                Ver solução
                                <span aria-hidden="true">→</span>
                              </span>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {links.slice(1).map((link) => (
              <MenuLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="primary" onClick={() => (window.location.href = "/contato")}>
              Falar com especialista
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-3 text-brand-dark transition-colors hover:border-unti-blue hover:text-unti-blue md:hidden"
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

      <Modal isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <nav className="flex flex-col gap-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">
              Soluções
            </p>
            <div className="grid gap-3">
              {solutions.map((solution) => {
                const Icon = solution.icon;

                return (
                  <Link
                    key={solution.href}
                    href={solution.href}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 p-4 no-underline transition-colors hover:border-unti-blue hover:bg-slate-50 hover:no-underline"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-unti-blue/10 text-unti-blue">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-brand-dark">{solution.label}</p>
                      <p className="text-sm leading-relaxed text-brand-muted">{solution.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="space-y-2 border-t border-slate-200 pt-6">
            {links.map((link) => (
              <MenuLink key={link.href} href={link.href} label={link.label} onClick={() => setMobileMenuOpen(false)} />
            ))}
          </div>

          <div className="space-y-3 border-t border-slate-200 pt-6">
            <a
              href={`mailto:${contact.email}`}
              className="block text-sm font-medium text-brand-dark no-underline hover:text-unti-blue hover:no-underline"
            >
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phone.replace(/\D/g, "")}`}
              className="block text-sm font-medium text-brand-dark no-underline hover:text-unti-blue hover:no-underline"
            >
              {contact.phone}
            </a>
            <Button
              variant="primary"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.href = "/contato";
              }}
            >
              Falar com especialista
            </Button>
          </div>
        </nav>
      </Modal>
    </header>
  );
}
