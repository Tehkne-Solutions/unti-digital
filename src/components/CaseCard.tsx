import Image from "next/image";
import Link from "next/link";

interface CaseItem {
    slug: string;
    name: string;
    segment: string;
    resultHighlight: string;
    heroImage: string;
    image?: string;
    problem: string;
    solution: string;
    technologies: string[];
    results: string[];
    gallery: string[];
}

interface CaseCardProps {
    caseItem: CaseItem;
}

export default function CaseCard({ caseItem }: CaseCardProps) {
    return (
        <Link href={`/cases/${caseItem.slug}`}>
            <div className="w-full min-w-0 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <Image
                    src={caseItem.image ?? caseItem.heroImage}
                    alt={caseItem.name}
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover"
                />
                <div className="p-6">
                    <p className="text-sm text-gray-500 mb-1">{caseItem.segment}</p>
                    <h3 className="font-semibold text-lg mb-2">{caseItem.name}</h3>
                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-semibold mb-4">
                        {caseItem.resultHighlight}
                    </span>
                    <p className="text-gray-600 text-sm mb-4">{caseItem.problem}</p>
                    <div className="flex flex-wrap gap-2">
                        {caseItem.technologies.map((tech) => (
                            <span key={tech} className="bg-gray-100 text-xs px-2 py-1 rounded">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}