"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useAnimation } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import ClientModal from "@/components/ClientModal"
import { Button } from "@/components/ui/Button"
import { clients } from "@/data/clients"

export default function LogoCloud() {
  const [selectedClient, setSelectedClient] = useState<typeof clients[number] | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const itemWidth = 140 + 64
  const totalWidth = clients.length * itemWidth

  const startAutoScroll = useCallback(() => {
    controls.start({
      x: -totalWidth,
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }
    })
  }, [controls, totalWidth])

  const pauseAutoScroll = useCallback(() => {
    controls.stop()
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
      resumeTimeoutRef.current = null
    }
  }, [controls])

  const resumeAutoScroll = useCallback((delay = 2000) => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
    }

    resumeTimeoutRef.current = setTimeout(() => {
      startAutoScroll()
    }, delay)
  }, [startAutoScroll])

  useEffect(() => {
    startAutoScroll()

    return () => {
      controls.stop()
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current)
      }
    }
  }, [controls, startAutoScroll])

  useEffect(() => {
    if (!selectedClient) {
      resumeAutoScroll(500)
    }
  }, [selectedClient, resumeAutoScroll])

  const handleDragEnd = () => {
    resumeAutoScroll(2000)
  }

  const handleBulletClick = (index: number) => {
    pauseAutoScroll()

    const targetX = -index * itemWidth
    controls.start({
      x: targetX,
      transition: { duration: 0.5, ease: "easeInOut" }
    })
    setActiveIndex(index)
    resumeAutoScroll(2500)
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-brand-dark md:text-4xl">
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
                onClick={() => {
                  pauseAutoScroll()
                  setSelectedClient(client)
                }}
                className="flex-shrink-0 px-6 py-4 opacity-60 transition hover:opacity-100 hover:grayscale-0 grayscale"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={80}
                  loading="lazy"
                  className="h-16 w-auto object-contain md:h-20"
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
              className={`h-2 w-2 rounded-full transition-all ${idx === activeIndex ? "bg-blue-600" : "bg-gray-300"}`}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">
            Quer alcançar resultados como esses?
          </p>
          <Link href="/contato">
            <Button className="mx-auto" variant="primary">
              Falar com especialista
            </Button>
          </Link>
        </div>

        <ClientModal client={selectedClient} onClose={() => setSelectedClient(null)} />
      </div>
    </section>
  )
}
