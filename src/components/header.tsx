"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { motion, AnimatePresence } from "framer-motion";

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

const links = [
  { href: "/cases", label: "Cases" },
  { href: "/blog", label: "Blog" },
  { href: "/integracoes", label: "Integrações" },
  { href: "/contato", label: "Contato" }
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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/images/logo-horizontal.svg"
                alt="Unti Digital"
                width={240}
                height={60}
                className="h-16 w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center gap-12">
            <MenuLink href="/" label="Home" />

            {/* MEGA MENU - SOLUÇÕES */}
            <div
              className="relative group"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className="relative text-sm font-medium text-unti-heading transition-colors hover:text-unti-blue after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-unti-blue after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                Soluções
              </button>

              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-2 w-full min-w-max bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 p-8 z-50"
                  >
                    <div className="grid grid-cols-2 gap-6 min-w-[800px]">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.href}
                          href={solution.href}
                          onClick={() => setSolutionsOpen(false)}
                          className="group flex gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-gray-50"
                        >
                          <div className="relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                            <Image
                              src={solution.image}
                              alt={solution.label}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h3 className="font-bold text-unti-heading mb-1 text-sm">{solution.label}</h3>
                            <p className="text-xs text-gray-600 line-clamp-2">{solution.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <MenuLink href="/cases" label="Cases" />
            <MenuLink href="/blog" label="Blog" />
            <MenuLink href="/integracoes" label="Integrações" />
            <MenuLink href="/contato" label="Contato" />
          </nav>

          <div className="hidden md:block">
            <Link href="/contato">
              <Button variant="primary" className="interactive-btn">Falar com especialista</Button>
            </Link>
          </div>

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

      {/* MOBILE MENU */}
      <Modal isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <nav className="flex flex-col gap-4">
          <div className="space-y-2">
            <div className="text-sm font-semibold text-unti-dark">Soluções</div>
            <div className="grid gap-2">
              {solutions.map((solution) => (
                <Link
                  key={solution.href}
                  href={solution.href}
                  className="block rounded-lg px-4 py-2 text-base font-medium text-unti-heading hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {solution.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <Link href="/" className="block rounded-lg px-4 py-2 text-base font-medium text-unti-heading hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            {["cases", "blog", "integracoes", "contato"].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className="block rounded-lg px-4 py-2 text-base font-medium text-unti-heading hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>

          <div className="mt-4">
            <Link href="/contato">
              <Button variant="primary" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                Falar com especialista
              </Button>
            </Link>
          </div>
        </nav>
      </Modal>
    </header>
  );
}

