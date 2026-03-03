import Link from "next/link";
import { Container } from "@/components/ui/Container";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <div className="border-b border-gray-200 bg-gray-50">
            <Container>
                <div className="py-4">
                    <nav className="flex text-sm text-gray-600">
                        <Link href="/" className="hover:text-gray-900 transition-colors">
                            Home
                        </Link>
                        {items.map((item, index) => (
                            <div key={index} className="flex items-center">
                                <span className="mx-2">/</span>
                                {item.href ? (
                                    <Link href={item.href} className="hover:text-gray-900 transition-colors">
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="text-gray-900 font-medium">{item.label}</span>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            </Container>
        </div>
    );
}
