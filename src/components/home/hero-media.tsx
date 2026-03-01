"use client";

import { Card } from "@/components/ui/Card";
import { Carousel } from "@/components/ui/Carousel";

export function HeroMedia() {
  const slides = [
    {
      title: "Analytics Dashboard",
      description: "Monitoramento em tempo real",
      metrics: [
        { label: "Uptime", value: "99.9%" },
        { label: "Response Time", value: "45ms" },
        { label: "Requests/s", value: "2.4k" }
      ]
    },
    {
      title: "Platform Architecture",
      description: "Infraestrutura escalável",
      metrics: [
        { label: "Microservices", value: "12" },
        { label: "API Endpoints", value: "48" },
        { label: "Integrations", value: "15+" }
      ]
    },
    {
      title: "CRM Integration",
      description: "Automação inteligente",
      metrics: [
        { label: "Leads/month", value: "1.2k" },
        { label: "Conversion", value: "34%" },
        { label: "ROI", value: "+180%" }
      ]
    }
  ];

  return (
    <Carousel>
      {slides.map((slide, index) => (
        <div key={index} className="w-full md:w-[400px]">
          <Card className="bg-gradient-to-br from-unti-pastel to-white border border-unti-light/30">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-unti-light/30">
                <div>
                  <h3 className="font-bold text-unti-dark">{slide.title}</h3>
                  <p className="text-sm text-gray-600">{slide.description}</p>
                </div>
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4">
                {slide.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold text-unti-blue">
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual Bar Chart Placeholder */}
              <div className="flex items-end justify-between gap-2 h-24 pt-4">
                {[65, 80, 55, 90, 70, 85, 75].map((height, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-unti-blue rounded-t transition-all hover:bg-unti-dark"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-unti-light/30 text-xs text-gray-500">
                <span>Last updated: now</span>
                <span className="text-green-600 font-medium">● Live</span>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </Carousel>
  );
}
