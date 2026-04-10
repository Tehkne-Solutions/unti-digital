"use client";

import Image from "next/image";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  const institucional = [
    ["/sobre", t("institucional.sobre")],
    ["/cases", t("institucional.cases")],
    ["/clientes", t("institucional.clientes")]
  ] as const;

  const servicos = [
    ["/solucoes", t("servicos.solucoes")],
    ["/integracoes", t("servicos.integracoes")],
    ["/planos", t("servicos.planos")]
  ] as const;

  const legal = [
    ["/privacidade", t("legal.privacidade")],
    ["/politica-empresarial", t("legal.politicaEmpresarial")],
    ["/contato", t("legal.contato")]
  ] as const;

  return (
    <footer className="bg-[#173c8b] text-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link href="/" aria-label="UNTI Digital" className="inline-block no-underline hover:no-underline">
              <Image
                src="/images/logo-branco.png"
                alt="UNTI Digital"
                width={400}
                height={214}
                className="h-auto w-full max-w-[240px] object-contain"
              />
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-white">{t("description")}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <FooterColumn title={t("institucionalTitle")} items={institucional} />
            <FooterColumn title={t("servicosTitle")} items={servicos} />
            <FooterColumn title={t("legalTitle")} items={legal} />
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 bg-[#123172] px-4 py-4 text-center text-sm text-white">
        {t("rights", { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items
}: {
  title: string;
  items: readonly (readonly [string, string])[];
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="space-y-2 text-sm">
        {items.map(([href, label]) => (
          <li key={href}>
            <Link
              href={href}
              className="text-white no-underline transition-opacity hover:opacity-80 hover:no-underline"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
