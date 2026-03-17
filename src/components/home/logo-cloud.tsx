"use client"

import { useEffect, useRef, useState } from "react"
import ClientModal from "@/components/ClientModal"
import { clients } from "@/data/clients"

export function LogoCloud() {
  const [activeClient, setActiveClient] = useState<typeof clients[number] | null>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let animationFrame: number

    const autoScroll = () => {
      if (!container) return

      container.scrollLeft += 0.3

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0
      }

      animationFrame = requestAnimationFrame(autoScroll)
    }

    animationFrame = requestAnimationFrame(autoScroll)

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-600 mb-4">
            Tecnologia que impulsiona empresas reais
          </h2>
          <p className="text-gray-500">
            Clique em um cliente para ver o projeto e resultados alcançados
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {[...clients, ...clients].map((client, index) => (
            <button
              key={`${client.id}-${index}`}
              onClick={() => setActiveClient(client)}
              className="flex-shrink-0 flex items-center justify-center px-8 py-6 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 md:h-20 w-auto object-contain"
              />
            </button>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            Quer alcançar resultados como esses?
          </p>
          <a
            href="/contato"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Falar com especialista
          </a>
        </div>

        <ClientModal client={activeClient} onClose={() => setActiveClient(null)} />
      </div>
    </section>
  )
}
