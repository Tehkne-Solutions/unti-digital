import Image from "next/image";

interface CaseItem {
    id: string;
    title: string;
    segment: string;
    result: string;
    image: string;
    description: string;
    technologies: string[];
}

interface CaseCardProps {
    caseItem: CaseItem;
}

export default function CaseCard({ caseItem }: CaseCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <Image
                src={caseItem.image}
                alt={caseItem.title}
                width={400}
                height={160}
                className="w-full h-40 object-cover"
            />
            <div className="p-6">
                <p className="text-sm text-gray-500 mb-1">{caseItem.segment}</p>
                <h3 className="font-semibold text-lg mb-2">{caseItem.title}</h3>
                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-semibold mb-4">
                    {caseItem.result}
                </span>
                <p className="text-gray-600 text-sm mb-4">{caseItem.description}</p>
                <div className="flex flex-wrap gap-2">
                    {caseItem.technologies.map((tech) => (
                        <span key={tech} className="bg-gray-100 text-xs px-2 py-1 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}