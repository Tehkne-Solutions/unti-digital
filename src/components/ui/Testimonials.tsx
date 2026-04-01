"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    name: "John L. Nascimento",
    role: "CEO - Conect 7G",
    videoId: "nIBcgopxF34",
    thumb: "/images/testimonials/john-nascimento.png",
  },
  {
    name: "Wellington Leite",
    role: "CTO - Criativa Marketing",
    videoId: "mC-6CWCIIT0",
    thumb: "/images/testimonials/wellington-leite.png",
  },
  {
    name: "Andre Luis",
    role: "CEO - Grupo ALJR",
    videoId: "CyDjKwZ0rQ4",
    thumb: "/images/testimonials/andre-luis.png",
  },
];

export const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Depoimentos</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">
            A voz de quem <span className="text-blue-600">escala com a UNTI</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.videoId} className="group relative bg-white rounded-[32px] p-4 shadow-xl shadow-zinc-200/50 hover:shadow-2xl transition-all duration-500">
              {/* Vídeo / Thumbnail Wrapper */}
              <div 
                className="relative aspect-video rounded-2xl overflow-hidden mb-6 cursor-pointer"
                onClick={() => setActiveVideo(item.videoId)}
              >
                <Image 
                  src={item.thumb} 
                  alt={item.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-current" />
                  </div>
                </div>
              </div>

              {/* Informações */}
              <div className="px-4 pb-4">
                <h4 className="text-xl font-bold text-zinc-900">{item.name}</h4>
                <p className="text-zinc-500 font-medium">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Vídeo */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-2xl shadow-2xl"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};