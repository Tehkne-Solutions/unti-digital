import { ReactNode } from "react";

export function PageShell({ title, description, children }: { title: string; description: string; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
      <p className="mt-3 max-w-3xl text-slate-600">{description}</p>
      {children ? <div className="mt-8">{children}</div> : null}
    </section>
  );
}
