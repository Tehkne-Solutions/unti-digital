"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FullscreenMenu } from "@/components/ui/FullscreenMenu";

const contact = {
  email: "contato@untidigital.com.br",
  phone: "+55 19 98280-9717",
  whatsapp: "https://wa.me/5519982809717",
  linkedin: "https://www.linkedin.com/company/untidigital/",
  instagram: "https://www.instagram.com/untidigital/"
};

const solutions = [
  {
    href: "/solucoes/sites-institucionais",
    label: "Sites Institucionais",
    description: "Plataformas web profissionais com performance e relevância digital",
    image: "/images/solutions/unti-digital-solution-high-performance-websites.png"
  },
  {
    href: "/solucoes/plataformas-web",
    label: "Plataformas Web",
    description: "Soluções customizadas para ampliar sua presença online",
    image: "/images/solutions/unti-digital-solution-custom-web-platforms.png"
  },
  {
    href: "/solucoes/integracoes-crm-erp",
    label: "Integrações com CRM e ERP",
    description: "Automações inteligentes para otimizar seus processos",
    image: "/images/solutions/unti-digital-solution-crm-erp-integrations.png"
  },
  {
    href: "/solucoes/governanca-seguranca",
    label: "Governança e Segurança",
    description: "Conformidade regulatória e proteção de dados empresariais",
    image: "/images/solutions/unti-digital-solution-governance-security.png"
  },
  {
    href: "/solucoes/white-label-agencias",
    label: "White Label para Agências",
    description: "Serviços técnicos personalizados para sua agência",
    image: "/images/solutions/unti-digital-solution-white-label-development.png"
  }
];



function IconMail() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16v16H4z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72 12.34 12.34 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L9 10.5a16 16 0 0 0 6.5 6.5l1.85-1.1a2 2 0 0 1 2.11-.45 12.34 12.34 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24V7h5v17H0zm7.5-17h4.8v2.3h.1c.7-1.4 2.5-2.9 5.1-2.9 5.4 0 6.4 3.6 6.4 8.2V24h-5v-7.6c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.7h-5V7z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.5.4.6.2 1.1.4 1.6.9.5.5.7 1.1.9 1.6.2.5.3 1.3.4 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.5-.2.6-.4 1.1-.9 1.6-.5.5-1.1.7-1.6.9-.5.2-1.3.3-2.5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1.1-.4-1.6-.9-.5-.5-.7-1.1-.9-1.6-.2-.5-.3-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.5.2-.6.4-1.1.9-1.6.5-.5 1.1-.7 1.6-.9.5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.1 4.6.3 3.7.6 2.8 1 2 1.6 1.3 2.3c-.7.7-1.3 1.5-1.7 2.4-.3.9-.5 2-.6 3.3C-.1 8.3 0 8.7 0 12c0 3.3 0 3.7.1 5 .1 1.3.3 2.4.6 3.3.4.9 1 1.7 1.7 2.4.7.7 1.5 1.3 2.4 1.7.9.3 2 .5 3.3.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.4-.3 3.3-.6.9-.4 1.7-1 2.4-1.7.7-.7 1.3-1.5 1.7-2.4.3-.9.5-2 .6-3.3.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.4-.6-3.3-.4-.9-1-1.7-1.7-2.4C20.8 1 20 0.4 19.1 0.1 18.2-.3 17.1-.4 15.8-.5 14.5-.6 14.1-.6 12 0z" />
      <path d="M12 5.8A6.2 6.2 0 1 0 18.2 12 6.21 6.21 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" />
      <circle cx="18.4" cy="5.6" r="1.4" />
    </svg>
  );
}

// Menu link com subline animada
function MenuLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="relative text-sm font-medium text-unti-heading transition-colors hover:text-unti-blue after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-unti-blue after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
    >
      {label}
    </Link>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* TOP BAR */}
      <motion.div
        className="bg-unti-blue text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3 text-xs">
          <div className="flex items-center gap-6">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-white hover:text-blue-100 transition-colors">
              <IconMail />
              <span className="hidden sm:inline">{contact.email}</span>
            </a>
            <a href={`tel:${contact.phone.replace(/\D/g, "")}`} className="flex items-center gap-2 text-white hover:text-blue-100 transition-colors">
              <IconPhone />
              <span className="hidden sm:inline">{contact.phone}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-white hover:text-blue-100 transition-colors">
              <IconLinkedIn />
            </a>
            <a href={contact.instagram} target="_blank" rel="noreferrer" className="text-white hover:text-blue-100 transition-colors">
              <IconInstagram />
            </a>
          </div>
        </div>
      </motion.div>

      {/* MAIN NAV */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 h-20">
          <Link href="/" className="flex items-center" aria-label="UNTI Digital">
            <motion.div
              animate={{ width: scrolled ? 150 : 240 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <Image
                src="/images/logo-horizontal.svg"
                alt="Unti Digital"
                width={240}
                height={60}
                className="h-12 w-full object-contain object-left"
                priority
              />
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <MenuLink href="/" label="Home" />

            {/* MEGA MENU - SOLUÇÕES */}
            <div className="relative">
              <button
                onClick={() => setSolutionsOpen(true)}
                className="relative flex items-center gap-1 text-sm font-medium text-unti-heading transition-colors hover:text-unti-blue after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-unti-blue after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                Soluções <ChevronDown className="w-3 h-3 text-blue-500" />
              </button>
            </div>

            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 top-0 z-[200] bg-white overflow-y-auto"
                >
                  <div className="mx-auto max-w-[1200px] px-6 py-10">
                    <div className="flex items-center justify-between mb-12">
                      <span className="text-xs font-bold uppercase tracking-widest text-unti-blue">Nossas Soluções</span>
                      <button
                        onClick={() => setSolutionsOpen(false)}
                        className="p-3 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors"
                        aria-label="Fechar"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.href}
                          href={solution.href}
                          onClick={() => setSolutionsOpen(false)}
                          className="group relative h-64 rounded-[28px] overflow-hidden border border-zinc-100 shadow-md"
                        >
                          <Image
                            src={solution.image}
                            alt={solution.label}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent p-6 flex flex-col justify-end">
                            <h3 className="text-white text-xl font-bold">{solution.label}</h3>
                            <p className="text-zinc-300 text-sm mt-1">{solution.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <MenuLink href="/cases" label="Cases" />
            <MenuLink href="/blog" label="Conteúdo" />
            <MenuLink href="/integracoes" label="Integrações com API’s" />
            <MenuLink href="/contato" label="Contato" />
          </nav>

          {/* DESKTOP RIGHT: hamburguer + botão Planos */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl text-zinc-700 hover:bg-zinc-100 transition-colors"
              aria-label="Menu completo"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link href="/planos" className="interactive-btn relative overflow-hidden inline-flex h-10 items-center justify-center rounded-xl bg-unti-blue px-5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_8px_24px_rgba(57,108,255,0.35)] transition-all duration-300 hover:scale-[0.97] hover:shadow-[0_4px_12px_rgba(57,108,255,0.25)] active:scale-95 group">
              <span className="absolute inset-0 translate-x-[-100%] bg-white/20 skew-x-[-20deg] transition-transform duration-500 group-hover:translate-x-[200%]" />
              Planos e preços
            </Link>
          </div>

          {/* MOBILE: apenas hamburguer */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-unti-heading"
            aria-label="Abrir menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <FullscreenMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}

