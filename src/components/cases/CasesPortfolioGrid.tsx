"use client";

﻿"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import type { CaseStudy } from "@/data/cases";
import CaseCard from "@/components/CaseCard";

const INITIAL_CASES = 9;

interface CasesPortfolioGridProps {
  cases: CaseStudy[];
}

export function CasesPortfolioGrid({ cases }: CasesPortfolioGridProps) {
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations("Cases");

  const casesVisiveis = useMemo(
    () => (mostrarTodos ? cases : cases.slice(0, INITIAL_CASES)),
    [cases, mostrarTodos]
  );

  const restantes = Math.max(cases.length - INITIAL_CASES, 0);

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false}>
          {casesVisiveis.map((caseItem, index) => {
            const novoCard = mostrarTodos && index >= INITIAL_CASES;

            return (
              <motion.div
                key={caseItem.slug}
                layout
                initial={shouldReduceMotion ? false : { opacity: novoCard ? 0 : 1, y: novoCard ? 24 : 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        duration: 0.45,
                        delay: novoCard ? (index - INITIAL_CASES) * 0.06 : index * 0.03,
                        ease: [0.21, 0.47, 0.32, 0.98]
                      }
                }
              >
                <CaseCard caseItem={caseItem} priority={index < 3} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {!mostrarTodos && restantes > 0 ? (
        <div className="mt-12 flex justify-center">
          <motion.button
            type="button"
            onClick={() => setMostrarTodos(true)}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
            className="interactive-btn inline-flex h-12 items-center justify-center rounded-xl border border-unti-blue px-6 text-sm font-semibold text-unti-blue transition-all duration-300 hover:bg-unti-blue hover:text-white"
          >
            {t("loadMore")}
          </motion.button>
        </div>
      ) : null}
    </div>
  );
}
