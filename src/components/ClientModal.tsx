"use client";

import Image from "next/image";

interface Client {
  id: string;
  name: string;
  logo: string;
  cover: string;
  segment: string;
  result: string;
  description: string;
  technologies: string[];
  phone: string;
  email: string;
  whatsapp: string;
  casePage: string;
}

interface ClientModalProps {
  client: Client | null;
  onClose: () => void;
}

export default function ClientModal({ client, onClose }: ClientModalProps) {
  if (!client) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-white/95 p-2 text-slate-600 shadow transition-transform hover:scale-110"
          aria-label="Fechar modal"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 6l12 12" />
            <path d="M18 6 6 18" />
          </svg>
        </button>

        <div className="relative h-52 overflow-hidden">
          <Image
            src={client.cover}
            alt={`Imagem de destaque do projeto ${client.name}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#04070d]/35 via-[#04070d]/55 to-[#04070d]/80" />
        </div>

        <div className="absolute left-8 top-36 rounded-xl bg-white p-2 shadow">
          <Image
            src={client.logo}
            alt={client.name}
            width={120}
            height={60}
            className="object-contain"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 p-6 pt-20 md:grid-cols-2 md:p-8 md:pt-20">
          <div>
            <h3 className="mb-2 text-2xl font-bold text-brand-dark">{client.name}</h3>
            <p className="mb-2 font-medium text-unti-blue">{client.segment}</p>
            <p className="mb-4 text-lg font-semibold text-green-600">{client.result}</p>
            <p className="mb-2 text-brand-muted">{client.phone}</p>
            <p className="mb-6 text-brand-muted">{client.email}</p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-brand-dark">Sobre o projeto</h4>
            <p className="mb-6 text-brand-muted">{client.description}</p>

            <div className="mb-6">
              <h5 className="mb-2 font-semibold text-brand-dark">Tecnologias utilizadas</h5>
              <div className="flex flex-wrap gap-2">
                {client.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm text-brand-dark"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={`https://wa.me/${client.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-unti-blue px-4 py-2 text-white no-underline transition-colors hover:bg-[#2f5edc] hover:no-underline"
              >
                WhatsApp
              </a>
              <a
                href={client.casePage}
                className="rounded-md border border-slate-300 px-4 py-2 text-brand-dark no-underline transition-colors hover:bg-slate-50 hover:no-underline"
              >
                Ver case completo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
