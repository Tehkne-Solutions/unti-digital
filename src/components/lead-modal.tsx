"use client";

import { FormEvent, useMemo, useState } from "react";

type FormDataState = {
  nome: string;
  telefone: string;
  email: string;
  empresa: string;
  projeto: string;
};

const initialState: FormDataState = {
  nome: "",
  telefone: "",
  email: "",
  empresa: "",
  projeto: ""
};

export function LeadModal() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<FormDataState>(initialState);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = useMemo(
    () => Object.values(state).every((value) => value.trim().length > 2),
    [state]
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) return;

    try {
      setSending(true);
      setError(null);

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state)
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar formulário");
      }

      const payload = (await response.json()) as { whatsappUrl: string };
      window.open(payload.whatsappUrl, "_blank", "noopener,noreferrer");
      setState(initialState);
      setOpen(false);
    } catch {
      setError("Não foi possível enviar agora. Tente novamente.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-md bg-unti-cta px-4 py-2 text-sm font-semibold text-white transition-colors hover:brightness-95"
      >
        Falar no WhatsApp
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Antes de continuar no WhatsApp</h2>
              <button type="button" onClick={() => setOpen(false)} className="text-sm text-slate-500">
                Fechar
              </button>
            </div>

            <form onSubmit={onSubmit} className="space-y-3">
              {[
                ["nome", "Nome"],
                ["telefone", "Telefone"],
                ["email", "E-mail"],
                ["empresa", "Empresa"],
                ["projeto", "Projeto desejado"]
              ].map(([key, label]) => (
                <label key={key} className="block text-sm">
                  <span className="mb-1 block text-slate-600">{label}</span>
                  <input
                    required
                    value={state[key as keyof FormDataState]}
                    onChange={(event) =>
                      setState((prev) => ({ ...prev, [key]: event.target.value }))
                    }
                    className="w-full rounded-md border border-unti-border px-3 py-2 outline-none ring-unti-primary focus:ring"
                  />
                </label>
              ))}

              <p className="text-xs text-slate-500">
                Ao enviar, você concorda com o uso dos dados para contato comercial conforme a LGPD.
              </p>

              {error ? <p className="text-sm text-red-600">{error}</p> : null}

              <button
                type="submit"
                disabled={!canSubmit || sending}
                className="w-full rounded-md bg-unti-cta px-4 py-2 font-semibold text-white transition-colors hover:brightness-95 disabled:opacity-50"
              >
                {sending ? "Enviando..." : "Enviar e abrir WhatsApp"}
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
