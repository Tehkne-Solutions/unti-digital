"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useRouter, usePathname } from "next-intl/client";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, Check } from "lucide-react";

export const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const locale = params?.locale ?? "pt";
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: "pt", label: "Português", flag: "BR" },
    { code: "en", label: "English", flag: "US" },
    { code: "es", label: "Español", flag: "ES" },
  ];

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-zinc-100 bg-white hover:bg-zinc-50 transition-all shadow-sm group"
      >
        <Globe className="w-4 h-4 text-zinc-400 group-hover:text-blue-600 transition-colors" />
        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-900">
          {locale}
        </span>
        <ChevronDown className={`w-3 h-3 text-zinc-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 mt-2 w-48 bg-white border border-zinc-100 rounded-2xl shadow-xl z-20 overflow-hidden"
            >
              <div className="py-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-zinc-50 transition-colors group"
                  >
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-zinc-900 uppercase tracking-tight">
                        {lang.label}
                      </span>
                      <span className="text-[9px] text-zinc-400 font-bold uppercase italic">
                        {lang.code === "pt" ? "Padrão" : lang.code}
                      </span>
                    </div>
                    {locale === lang.code && (
                      <Check className="w-4 h-4 text-blue-600" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};