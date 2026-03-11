import { cases } from "@/data/cases";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
    params: {
        slug: string;
    };
}

export default function CasePage({ params }: PageProps) {
    const caseItem = cases.find(c => c.slug === params.slug);

    if (!caseItem) return notFound();

    return (
        <div className="max-w-5xl mx-auto px-6 py-20">
            <Image
                src={caseItem.heroImage}
                alt={caseItem.name}
                width={1200}
                height={600}
                className="w-full rounded-xl mb-10"
            />

            <h1 className="text-4xl font-bold mb-4">
                {caseItem.name}
            </h1>

            <p className="text-blue-600 font-semibold text-xl mb-10">
                {caseItem.resultHighlight}
            </p>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    O problema
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    {caseItem.problem}
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    A solução
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    {caseItem.solution}
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                    Tecnologias utilizadas
                </h2>
                <div className="flex flex-wrap gap-3">
                    {caseItem.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-4">
                    Resultados alcançados
                </h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    {caseItem.results.map((result) => (
                        <li key={result} className="text-lg">
                            {result}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="grid md:grid-cols-3 gap-6 mb-16">
                {caseItem.gallery.map((img, index) => (
                    <Image
                        key={index}
                        src={img}
                        alt={`${caseItem.name} - imagem ${index + 1}`}
                        width={400}
                        height={300}
                        className="rounded-lg w-full h-48 object-cover"
                    />
                ))}
            </section>

            <div className="text-center bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">
                    Quer alcançar resultados como esses?
                </h3>
                <p className="text-gray-600 mb-6">
                    Entre em contato e descubra como podemos ajudar seu negócio a crescer.
                </p>
                <a
                    href="/contato"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                    Falar com especialista
                </a>
            </div>
        </div>
    );
}