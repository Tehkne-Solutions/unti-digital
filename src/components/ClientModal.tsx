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

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={handleOverlayClick}
        >
            <div className="bg-white rounded-xl overflow-hidden max-w-3xl w-full shadow-xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg z-10"
                >
                    ✕
                </button>

                {/* COVER */}
                <div
                    className="h-52 bg-cover bg-center relative"
                    style={{
                        backgroundImage: `linear-gradient(rgba(4,7,13,0.5), rgba(4,7,13,0.8)), url(${client.cover})`
                    }}
                />

                {/* LOGO */}
                <div className="absolute left-8 top-36 bg-white p-2 rounded shadow">
                    <Image
                        src={client.logo}
                        alt={client.name}
                        width={120}
                        height={60}
                        className="object-contain"
                    />
                </div>

                {/* CONTENT */}
                <div className="grid md:grid-cols-2 gap-8 p-8 pt-20">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">{client.name}</h3>
                        <p className="text-blue-600 font-medium mb-2">{client.segment}</p>
                        <p className="text-green-600 font-semibold text-lg mb-4">{client.result}</p>
                        <p className="text-gray-500 mb-2">{client.phone}</p>
                        <p className="text-gray-500 mb-6">{client.email}</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Sobre o projeto</h4>
                        <p className="text-gray-600 mb-6">{client.description}</p>

                        <div className="mb-6">
                            <h5 className="font-semibold mb-2">Tecnologias utilizadas</h5>
                            <div className="flex flex-wrap gap-2">
                                {client.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-sm bg-gray-100 px-3 py-1 rounded-full"
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
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                            >
                                WhatsApp
                            </a>
                            <a
                                href={client.casePage}
                                className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
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