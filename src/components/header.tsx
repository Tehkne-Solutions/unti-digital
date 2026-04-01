"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FullscreenMenuModal } from "@/components/FullscreenMenuModal";

const contact = {
  email: "contato@untidigital.com.br",
  phone: "+55 19 98280-9717",
  linkedin: "https://www.linkedin.com/company/untidigital/",
  instagram: "https://www.instagram.com/untidigital/"
};

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 7.5 12 14l9-6.5" />
      <path d="M4.5 5.5h15A1.5 1.5 0 0 1 21 7v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17V7a1.5 1.5 0 0 1 1.5-1.5Z" />
    </svg>
  );
}

function IconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.9v2a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 4.2 2 2 0 0 1 5 2h2a2 2 0 0 1 2 1.7l.5 2.6a2 2 0 0 1-.6 1.8l-1.6 1.6a16 16 0 0 0 6.2 6.2l1.6-1.6a2 2 0 0 1 1.8-.6l2.6.5a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.02 2.02 0 0 0 3.2 5.02c0 1.1.9 2 2.02 2a2.01 2.01 0 0 0 2.03-2C7.25 3.9 6.37 3 5.25 3ZM20.8 12.68c0-3.44-1.84-5.04-4.3-5.04-1.98 0-2.87 1.1-3.37 1.87V8.5H9.75V20h3.38v-6.4c0-1.68.32-3.3 2.4-3.3 2.05 0 2.08 1.9 2.08 3.4V20H21V12.68h-.2Z" />
    </svg>
  );
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .3 2.5.5.7.2 1.2.5 1.8 1 .5.5.8 1 1 1.8.2.5.4 1.3.5 2.5.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 2-.5 2.5-.2.7-.5 1.2-1 1.8-.5.5-.8 1-1 1.8-.2.5-.4 1.3-.5 2.5C15.6 21.8 15.2 21.8 12 21.8s-3.6 0-4.8-.1c-1.2-.1-2-.3-2.5-.5-.7-.2-1.2-.5-1.8-1-.5-.5-.8-1-1-1.8-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-2 .5-2.5.2-.7.5-1.2 1-1.8.5-.5 1-.8 1.8-1 .5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2Zm0 2.2c-3.1 0-3.4 0-4.7.1-1 .1-1.5.2-1.9.3-.5.2-.8.3-1.1.6-.3.3-.5.6-.6 1.1-.2.4-.3.9-.3 1.9-.1 1.3-.1 1.6-.1 4.7s0 3.4.1 4.7c.1 1 .2 1.5.3 1.9.2.5.3.8.6 1.1.3.3.6.5 1.1.6.4.2.9.3 1.9.3 1.3.1 1.6.1 4.7.1s3.4 0 4.7-.1c1-.1 1.5-.2 1.9-.3.5-.2.8-.3 1.1-.6.3-.3.5-.6.6-1.1.2-.4.3-.9.3-1.9.1-1.3.1-1.6.1-4.7s0-3.4-.1-4.7c-.1-1-.2-1.5-.3-1.9-.2-.5-.3-.8-.6-1.1-.3-.3-.6-.5-1.1-.6-.4-.2-.9-.3-1.9-.3-1.3-.1-1.6-.1-4.7-.1Zm0 3.7A3.9 3.9 0 1 1 8.1 12 3.9 3.9 0 0 1 12 8.1Zm0 5.6A1.7 1.7 0 1 0 10.3 12 1.7 1.7 0 0 0 12 13.7Zm4.9-5.8a.9.9 0 1 0-.9-.9.9.9 0 0 0 .9.9Z" />
    </svg>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    if (!isMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

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

          <div className="flex items-center gap-3">
            <Button variant="primary" className="px-5 h-11 rounded-full" onClick={() => (window.location.href = "/contato")}>
              Solicitar Orçamento
            </Button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="group flex items-center gap-3 p-2 hover:bg-zinc-100 rounded-2xl transition-all"
              aria-label="Abrir menu"
            >
              <span className="text-sm font-bold text-zinc-900 hidden sm:block">MENU</span>
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-zinc-900 group-hover:w-4 transition-all" />
                <span className="block w-6 h-0.5 bg-zinc-900" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <FullscreenMenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
