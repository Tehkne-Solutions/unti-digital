"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

interface PricingFormProps {
  defaultPlan?: "empresas" | "agencias";
}

export const PricingForm = ({ defaultPlan }: PricingFormProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Lógica de envio (API/Email) entraria aqui
  };

  const planOptions = defaultPlan === "empresas" 
    ? [
        { value: "sites-institucionais", label: "Sites Institucionais" },
        { value: "lojas-virtuais", label: "Lojas Virtuais (E-commerce)" },
        { value: "portais-custom", label: "Portais / Custom" },
      ]
    : [
        { value: "white-label", label: "Parceiro White Label" },
        { value: "terceirizacao-ti", label: "Terceirização de TI" },
        { value: "projetos-demanda", label: "Projetos Sob Demanda" },
      ];

  if (submitted) {
    return (
      <div className="bg-blue-600 rounded-[32px] p-12 text-center text-white shadow-2xl">
        <CheckCircle2 className="w-16 h-16 mx-auto mb-6 text-blue-200" />
        <h3 className="text-3xl font-bold mb-4">Solicitação Recebida!</h3>
        <p className="text-blue-100 max-w-md mx-auto leading-relaxed">
          O nosso Arquiteto de Software analisará os seus dados e entrará em contacto num prazo máximo de 24 horas úteis.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl shadow-zinc-200/50 border border-zinc-100">
      <div className="mb-10 text-center md:text-left">
        <h3 className="text-3xl font-bold text-zinc-900 mb-4">Solicite uma Proposta</h3>
        <p className="text-zinc-500">Preencha os dados abaixo e receba um diagnóstico técnico preliminar.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nome e Email */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-zinc-700 ml-1">Nome Completo</label>
          <input
            required
            type="text"
            placeholder="Ex: João Silva"
            className="w-full h-14 px-6 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-zinc-700 ml-1">E-mail Corporativo</label>
          <input
            required
            type="email"
            placeholder="joao@empresa.com"
            className="w-full h-14 px-6 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
          />
        </div>

        {/* Plano de Interesse e Telefone */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-zinc-700 ml-1">Plano de Interesse</label>
          <select 
            defaultValue={planOptions[0].value}
            className="w-full h-14 px-6 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all appearance-none cursor-pointer"
          >
            {planOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-zinc-700 ml-1">WhatsApp / Telemóvel</label>
          <input
            required
            type="tel"
            placeholder="(11) 99999-9999"
            className="w-full h-14 px-6 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
          />
        </div>

        {/* Mensagem / Contexto */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm font-bold text-zinc-700 ml-1">Conte-nos sobre o seu desafio</label>
          <textarea
            rows={4}
            placeholder="Qual o objetivo principal do seu novo projeto?"
            className="w-full p-6 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
          ></textarea>
        </div>

        <div className="md:col-span-2 pt-4">
          <button type="submit" className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 flex items-center justify-center gap-3 group transition-all">
            Enviar Solicitação <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-center text-zinc-400 text-xs mt-6 italic">
            * Ao enviar, concorda com a nossa política de privacidade e tratamento de dados.
          </p>
        </div>
      </form>
    </div>
  );
};