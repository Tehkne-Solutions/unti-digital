"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cards = [
  { t: "Institucional", img: "/images/services/site-inst.jpg", h: "/solucoes" },
  { t: "E-commerce", img: "/images/services/ecommerce.jpg", h: "/solucoes" },
  { t: "Portais", img: "/images/services/portals.jpg", h: "/solucoes" },
  { t: "Agências", img: "/images/services/agencies.jpg", h: "/solucoes" },
];

const links = [
  { label: "Home", href: "/" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Para Empresas", href: "/solucoes/empresas" },
  { label: "Para Agências", href: "/solucoes/agencias" },
  { label: "Cases", href: "/cases" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-white z-[999] overflow-y-auto p-6 md:p-12"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <Link href="/" onClick={onClose} className="text-2xl font-black tracking-tighter text-zinc-900">
                UNTI<span className="text-blue-600">.</span>
              </Link>
              <button
                onClick={onClose}
                className="p-4 bg-zinc-100 rounded-full hover:bg-zinc-900 hover:text-white transition-all"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Cards visuais — desktop only */}
              <div className="hidden lg:grid lg:col-span-8 grid-cols-2 gap-6">
                {cards.map((item) => (
                  <Link
                    key={item.t}
                    href={item.h}
                    onClick={onClose}
                    className="group relative h-64 rounded-[32px] overflow-hidden border border-zinc-100"
                  >
                    <Image
                      src={item.img}
                      alt={item.t}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-end group-hover:bg-blue-600/60 transition-all">
                      <h4 className="text-white text-2xl font-bold">{item.t}</h4>
                      <p className="text-white/80 text-sm">Ver Solução</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Links — visível em todos os tamanhos */}
              <div className="lg:col-span-4 lg:border-l lg:border-zinc-100 lg:pl-12">
                <nav className="flex flex-col gap-5">
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={onClose}
                      className="text-4xl md:text-5xl font-black text-zinc-900 hover:text-blue-600 transition-all hover:translate-x-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
