import type { ReactNode } from "react";
import Link from "next-intl/link";

type PageAction = {
  href: string;
  label: string;
};

export function PageShell({
  eyebrow,
  title,
  description,
  actions,
  children
}: {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: PageAction[];
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-bold tracking-tight text-brand-dark">{title}</h1>
      <p className="mt-3 max-w-3xl text-brand-muted">{description}</p>
      {actions?.length ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {actions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="inline-flex items-center justify-center rounded-xl border border-unti-blue px-4 py-2 text-sm font-semibold text-unti-blue no-underline transition-colors hover:bg-unti-blue hover:text-white hover:no-underline"
            >
              {action.label}
            </Link>
          ))}
        </div>
      ) : null}
      {children ? <div className="mt-8">{children}</div> : null}
    </section>
  );
}
