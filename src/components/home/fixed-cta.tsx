"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function FixedCTA() {
    const t = useTranslations("FixedCTA");

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <a
                href="https://wa.me/5519982809717?text=Olá%20UNTI!%20Gostaria%20de%20conversar%20sobre%20as%20soluções%20de%20tecnologia%20para%20empresa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg hover:scale-110 transition flex items-center justify-center"
                aria-label={t("ariaLabel")}
            >
                <Image
                    src="/images/icone-whatsapp.svg"
                    alt="WhatsApp"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                />
            </a>
        </div>
    );
}
