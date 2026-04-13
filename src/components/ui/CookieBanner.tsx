"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie } from "lucide-react";

export const CookieBanner = () => {
  const t = useTranslations("Cookies");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("unti-cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("unti-cookie-consent", "true");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("unti-cookie-consent", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100]"
        >
          <div className="bg-white/80 backdrop-blur-xl border border-zinc-200 p-6 rounded-3xl shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600/10 p-3 rounded-2xl">
                <Cookie className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-zinc-600 text-sm leading-relaxed font-medium">
                  {t("message")} 
                  <Link
                    href="/privacidade"
                    className="text-blue-600 underline underline-offset-4 hover:text-blue-700 font-bold"
                  >
                    {t("privacy_link")}
                  </Link>
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <button
                    onClick={acceptCookies}
                    className="flex-1 bg-zinc-900 text-white text-[10px] font-black uppercase tracking-widest py-3 rounded-full hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200"
                  >
                    {t("accept")}
                  </button>
                  <button
                    onClick={declineCookies}
                    className="px-6 text-zinc-500 text-[10px] font-black uppercase tracking-widest hover:text-zinc-900 transition-colors"
                  >
                    {t("decline")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
