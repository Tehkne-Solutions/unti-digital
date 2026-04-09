"use client";

import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <div className="bg-white text-zinc-900 min-h-screen pt-32">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-zinc-900 mb-6">{t('title')}</h1>
        <p className="text-xl text-zinc-600 mb-8">{t('subtitle')}</p>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-2">{t('pillars.0.t')}</h2>
            <p className="text-zinc-600">{t('pillars.0.d')}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-2">{t('pillars.1.t')}</h2>
            <p className="text-zinc-600">{t('pillars.1.d')}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-2">{t('pillars.2.t')}</h2>
            <p className="text-zinc-600">{t('pillars.2.d')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
