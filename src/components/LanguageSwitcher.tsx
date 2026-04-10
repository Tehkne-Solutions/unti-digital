"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Globe } from "lucide-react";

export const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("LanguageSwitcher");
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: "pt", label: t("portuguese") },
    { code: "en", label: t("english") },
    { code: "es", label: t("spanish") }
  ] as const;

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 rounded-full border border-zinc-100 bg-white px-3 py-2 shadow-sm transition-all hover:bg-zinc-50"
      >
        <Globe className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-blue-600" />
        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-900">{locale}</span>
        <ChevronDown
          className={`h-3 w-3 text-zinc-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 z-20 mt-2 w-48 overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-xl"
            >
              <div className="py-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className="group flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-zinc-50"
                  >
                    <div className="flex flex-col">
                      <span className="text-xs font-black uppercase tracking-tight text-zinc-900">
                        {language.label}
                      </span>
                      <span className="text-[9px] font-bold uppercase italic text-zinc-400">
                        {language.code === locale ? t("active") : language.code}
                      </span>
                    </div>
                    {locale === language.code && <Check className="h-4 w-4 text-blue-600" />}
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
