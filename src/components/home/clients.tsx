import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { clients } from "@/data/clients";

export function Clients() {
  const t = useTranslations("Clients");

  return (
    <section className="section space-y-6 text-center">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-unti-dark">{t("title")}</h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {clients.map((client) => (
          <Link
            key={client.id}
            href={client.casePage}
            className="flex h-16 items-center justify-center rounded-md border border-unti-border bg-unti-surface p-2 transition-all hover:bg-unti-surface/80 hover:shadow-md"
          >
            <Image
              src={client.logo}
              alt={`Logo ${client.name}`}
              width={120}
              height={40}
              className="h-full w-auto object-contain"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
