import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function LogoCloud() {
  // Placeholder logos - substituir por logos reais depois
  const logos = [
    { name: "Empresa 1", width: 120 },
    { name: "Empresa 2", width: 140 },
    { name: "Empresa 3", width: 100 },
    { name: "Empresa 4", width: 130 },
    { name: "Empresa 5", width: 110 },
    { name: "Empresa 6", width: 120 },
    { name: "Empresa 7", width: 140 },
    { name: "Empresa 8", width: 100 },
    { name: "Empresa 9", width: 130 },
    { name: "Empresa 10", width: 110 }
  ];

  return (
    <Section>
      <Container>
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600">
            Empresas que confiam na Unti Digital
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              {/* Placeholder - substituir por <Image /> com logos reais */}
              <div 
                className="flex items-center justify-center bg-gray-200 rounded px-6 py-4"
                style={{ width: logo.width }}
              >
                <span className="text-xs font-medium text-gray-500">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
