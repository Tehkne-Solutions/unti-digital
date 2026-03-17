"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import ClientModal from "@/components/ClientModal"
import { clients } from "@/data/clients"

export default function LogoCloud() {
  const [selectedClient, setSelectedClient] = useState<typeof clients[number] | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let raf: number
    let isHovering = false
    const speed = 0.15

    const updateActiveIndex = () => {
      const item = el.querySelector<HTMLButtonElement>("button")
      if (!item) return
      const itemWidth = item.getBoundingClientRect().width
      const gap = 64 // gap-16 em pixels
      const total = itemWidth + gap
      const index = Math.round(el.scrollLeft / total) % clients.length
      setActiveIndex(index)
    }

    const loop = () => {
      if (!isHovering) {
        el.scrollLeft += speed
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0
        }
        updateActiveIndex()
      }

      raf = requestAnimationFrame(loop)
    }

    const handleEnter = () => {
      isHovering = true
    }

    const handleLeave = () => {
      isHovering = false
    }

    el.addEventListener("mouseenter", handleEnter)
    el.addEventListener("mouseleave", handleLeave)
    el.addEventListener("pointerdown", handleEnter)
    el.addEventListener("pointerup", handleLeave)
    el.addEventListener("scroll", updateActiveIndex)

    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener("mouseenter", handleEnter)
      el.removeEventListener("mouseleave", handleLeave)
      el.removeEventListener("pointerdown", handleEnter)
      el.removeEventListener("pointerup", handleLeave)
      el.removeEventListener("scroll", updateActiveIndex)
    }
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
          className="flex gap-16 overflow-x-auto no-scrollbar"
        >
          {[...clients, ...clients].map((client, index) => (
            <button
              key={`${client.id}-${index}`}
              onClick={() => setSelectedClient(client)}
              className="flex-shrink-0 px-6 py-4 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={140}
                height={80}
                loading="lazy"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </button>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {clients.map((_, idx) => (
            <span
              key={idx}
              className={`h-2 w-2 rounded-full transition-all ${
                idx === activeIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
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
