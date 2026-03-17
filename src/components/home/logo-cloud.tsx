"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useAnimation } from "framer-motion"
import Image from "next/image"
import ClientModal from "@/components/ClientModal"
import { clients } from "@/data/clients"

export default function LogoCloud() {
  const [selectedClient, setSelectedClient] = useState<typeof clients[number] | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  const itemWidth = 140 + 64 // logo width + gap
  const totalWidth = clients.length * itemWidth

  useEffect(() => {
    const autoScroll = async () => {
      await controls.start({
        x: -totalWidth,
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      })
    }

    autoScroll()

    return () => {
      controls.stop()
    }
  }, [controls, totalWidth])

  const handleDragEnd = () => {
    // Resume auto-scroll after drag
    setTimeout(() => {
      controls.start({
        x: -totalWidth,
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      })
    }, 2000)
  }

  const handleBulletClick = (index: number) => {
    const targetX = -index * itemWidth
    controls.start({
      x: targetX,
      transition: { duration: 0.5, ease: "easeInOut" }
    })
    setActiveIndex(index)
  }

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

        <div className="overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex gap-16"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -totalWidth, right: 0 }}
            dragElastic={0.1}
            onDragStart={() => controls.stop()}
            onDragEnd={handleDragEnd}
            animate={controls}
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.button
                key={`${client.id}-${index}`}
                onClick={() => setSelectedClient(client)}
                className="flex-shrink-0 px-6 py-4 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={80}
                  loading="lazy"
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {clients.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleBulletClick(idx)}
              className={`h-2 w-2 rounded-full transition-all ${idx === activeIndex ? "bg-blue-600" : "bg-gray-300"
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
