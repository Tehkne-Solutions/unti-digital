"use client"

import { useEffect, useRef, useState } from "react"
import ClientModal from "@/components/ClientModal"
import { clients } from "@/data/clients"

export default function LogoCloud() {
  const [selectedClient, setSelectedClient] = useState<typeof clients[number] | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let raf: any

    const speed = 0.5

    const loop = () => {
      el.scrollLeft += speed

      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0
      }

      raf = requestAnimationFrame(loop)
    }

    raf = requestAnimationFrame(loop)

    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Tecnologia que impulsiona empresas reais
          </h2>
          <p className="text-gray-500">
            Clique em um cliente para ver o projeto e resultados alcançados
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-16 overflow-x-scroll no-scrollbar"
        >
          {clients.map((client, index) => (
            <button
              key={client.id}
              onClick={() => setSelectedClient(client)}
              className="flex-shrink-0 px-6 py-4 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition"
            >
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Quer alcançar resultados como esses?
          </p>
          <a
            href="/contato"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700"
          >
            Falar com especialista
          </a>
        </div>

        <ClientModal client={selectedClient} onClose={() => setSelectedClient(null)} />

      </div>
    </section>
  )
}
