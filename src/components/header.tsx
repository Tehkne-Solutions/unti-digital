"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { MegaMenuModal } from "@/components/ui/MegaMenuModal";
import { FullscreenMenu } from "@/components/ui/FullscreenMenu";

const contact = {
  email: "contato@untidigital.com.br",
  phone: "+55 19 98280-9717",
  linkedin: "https://www.linkedin.com/company/untidigital/",
  instagram: "https://www.instagram.com/untidigital/",
};

function IconMail() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16v16H4z" /><path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72 12.34 12.34 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L9 10.5a16 16 0 0 0 6.5 6.5l1.85-1.1a2 2 0 0 1 2.11-.45 12.34 12.34 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24V7h5v17H0zm7.5-17h4.8v2.3h.1c.7-1.4 2.5-2.9 5.1-2.9 5.4 0 6.4 3.6 6.4 8.2V24h-5v-7.6c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.7h-5V7z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.5.4.6.2 1.1.4 1.6.9.5.5.7 1.1.9 1.6.2.5.3 1.3.4 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.5-.2.6-.4 1.1-.9 1.6-.5.5-1.1.7-1.6.9-.5.2-1.3.3-2.5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1.1-.4-1.6-.9-.5-.5-.7-1.1-.9-1.6-.2-.5-.3-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.5.2-.6.4-1.1.9-1.6.5-.5 1.1-.7 1.6-.9.5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.1 4.6.3 3.7.6 2.8 1 2 1.6 1.3 2.3c-.7.7-1.3 1.5-1.7 2.4-.3.9-.5 2-.6 3.3C-.1 8.3 0 8.7 0 12c0 3.3 0 3.7.1 5 .1 1.3.3 2.4.6 3.3.4.9 1 1.7 1.7 2.4.7.7 1.5 1.3 2.4 1.7.9.3 2 .5 3.3.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.4-.3 3.3-.6.9-.4 1.7-1 2.4-1.7.7-.7 1.3-1.5 1.7-2.4.3-.9.5-2 .6-3.3.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.4-.6-3.3-.4-.9-1-1.7-1.7-2.4C20.8 1 20 0.4 19.1 0.1 18.2-.3 17.1-.4 15.8-.5 14.5-.6 14.1-.6 12 0z" />
      <path d="M12 5.8A6.2 6.2 0 1 0 18.2 12 6.21 6.21 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" />
      <circle cx="18.4" cy="5.6" r="1.4" />
    </svg>
  );
}

export function Header() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <motion.div
        className="bg-unti-blue text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3 text-xs">
          <div className="flex items-center gap-6">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-white transition-colors hover:text-blue-100">
              <IconMail />
              <span className="hidden sm:inline">{contact.email}</span>
            </a>
            <a href={`tel:${contact.phone.replace(/\D/g, "")}`} className="flex items-center gap-2 text-white transition-colors hover:text-blue-100">
              <IconPhone />
              <span className="hidden sm:inline">{contact.phone}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-white transition-colors hover:text-blue-100">
              <IconLinkedIn />
            </a>
            <a href={contact.instagram} target="_blank" rel="noreferrer" className="text-white transition-colors hover:text-blue-100">
              <IconInstagram />
            </a>
          </div>
        </div>
      </motion.div>

      {/* MAIN NAV */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">

          {/* LOGO */}
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

          {/* DESKTOP NAV — minimalista */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/integracoes"
              className="text-xs font-black uppercase tracking-widest text-zinc-700 transition-colors hover:text-unti-blue"
            >
              Integrações com API&apos;s
            </Link>
            <Link
              href="/contato"
              className="text-xs font-black uppercase tracking-widest text-zinc-700 transition-colors hover:text-unti-blue"
            >
              Contato
            </Link>

            {/* Hambúrguer desktop — abre MegaMenuModal */}
            <button
              onClick={() => setMegaMenuOpen(true)}
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-900 transition-colors hover:text-unti-blue"
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
              Menu
            </button>

            {/* Botão Planos com efeito brilho */}
            <Link
              href="/planos"
              className="interactive-btn group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-xl bg-unti-blue px-5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_8px_24px_rgba(57,108,255,0.35)] transition-all duration-300 hover:scale-[0.97] hover:shadow-[0_4px_12px_rgba(57,108,255,0.25)] active:scale-95"
            >
              <span className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20 transition-transform duration-500 group-hover:translate-x-[200%]" />
              Planos e preços
            </Link>
          </nav>

          {/* MOBILE: hambúrguer — abre FullscreenMenu */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-zinc-700 md:hidden"
            aria-label="Abrir menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* MEGA MENU MODAL — desktop */}
      <MegaMenuModal isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />

      {/* FULLSCREEN MENU — mobile */}
      <FullscreenMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
