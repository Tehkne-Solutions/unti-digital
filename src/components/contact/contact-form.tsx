"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

type ContactSubject =
  | "sites"
  | "plataformas"
  | "integracoes"
  | "whiteLabel"
  | "consultoria";

type ContactFormState = {
  nome: string;
  email: string;
  telefone: string;
  assunto: ContactSubject;
  mensagem: string;
};

type SubmitFeedback =
  | {
      type: "success" | "error";
      message: string;
    }
  | null;

type ContactFormProps = {
  id?: string;
};

const initialState: ContactFormState = {
  nome: "",
  email: "",
  telefone: "",
  assunto: "sites",
  mensagem: ""
};

const inputStyles =
  "w-full rounded-2xl bg-[#f7faff] px-5 py-4 text-brand-dark placeholder:text-brand-muted/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_0_0_1px_rgba(148,163,184,0.14),0_18px_40px_rgba(15,23,42,0.06)] transition-all duration-300 outline-none focus:bg-white focus:ring-4 focus:ring-unti-blue/10 focus:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(57,108,255,0.34),0_22px_46px_rgba(15,23,42,0.08)]";

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function isEmailValid(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm({ id }: ContactFormProps) {
  const t = useTranslations("Contact");
  const [state, setState] = useState<ContactFormState>(initialState);
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<SubmitFeedback>(null);

  const subjectOptions = [
    { value: "sites", label: t("form.subjectOptions.sites") },
    { value: "plataformas", label: t("form.subjectOptions.platforms") },
    { value: "integracoes", label: t("form.subjectOptions.integrations") },
    { value: "whiteLabel", label: t("form.subjectOptions.whiteLabel") },
    { value: "consultoria", label: t("form.subjectOptions.consulting") }
  ] as const;

  const phoneDigits = state.telefone.replace(/\D/g, "");
  const canSubmit = useMemo(() => {
    return (
      state.nome.trim().length >= 3 &&
      isEmailValid(state.email.trim()) &&
      phoneDigits.length >= 10 &&
      state.mensagem.trim().length >= 10
    );
  }, [phoneDigits.length, state.email, state.mensagem, state.nome]);

  function updateField<K extends keyof ContactFormState>(
    field: K,
    value: ContactFormState[K]
  ) {
    setState((current) => ({ ...current, [field]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit || sending) return;

    try {
      setSending(true);
      setFeedback(null);

      const selectedSubject = subjectOptions.find((option) => option.value === state.assunto)?.label ?? t("form.subjectOptions.sites");
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: state.nome.trim(),
          email: state.email.trim(),
          telefone: state.telefone.trim(),
          assunto: selectedSubject,
          mensagem: state.mensagem.trim(),
          origem: "contact-page"
        })
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error || t("form.error"));
      }

      await response.json();

      setState(initialState);
      setFeedback({
        type: "success",
        message: t("form.success")
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : t("form.error");
      setFeedback({
        type: "error",
        message
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="rounded-[28px] bg-white p-4 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(148,163,184,0.14),0_28px_70px_rgba(15,23,42,0.09)] md:p-5"
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            name="nome"
            autoComplete="name"
            placeholder={t("form.name")}
            value={state.nome}
            onChange={(event) => updateField("nome", event.target.value)}
            className={inputStyles}
            required
          />

          <input
            type="tel"
            name="telefone"
            autoComplete="tel"
            placeholder={t("form.whatsapp")}
            value={state.telefone}
            onChange={(event) => updateField("telefone", formatPhone(event.target.value))}
            className={inputStyles}
            required
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder={t("form.email")}
            value={state.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={inputStyles}
            required
          />

          <select
            name="assunto"
            value={state.assunto}
            onChange={(event) => updateField("assunto", event.target.value as ContactSubject)}
            className={inputStyles}
            required
          >
            {subjectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <textarea
          name="mensagem"
          rows={8}
          placeholder={t("form.messagePlaceholder")}
          value={state.mensagem}
          onChange={(event) => updateField("mensagem", event.target.value)}
          className={`${inputStyles} min-h-[220px] resize-y`}
          required
        />

        <div className="space-y-4 pt-1">
          <p className="text-xs text-brand-muted">{t("form.consent")}</p>

          {feedback ? (
            <p
              aria-live="polite"
              className={`text-sm ${
                feedback.type === "success" ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {feedback.message}
            </p>
          ) : null}

          <Button
            type="submit"
            disabled={!canSubmit || sending}
            className="w-full rounded-2xl !bg-unti-blue !text-white shadow-[0_18px_40px_rgba(57,108,255,0.24)] hover:!bg-[#2f5edc] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending ? t("form.sending") : t("form.send")}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
