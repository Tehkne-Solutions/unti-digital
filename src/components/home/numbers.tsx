const stats = [
  { value: "12+", label: "Setores atendidos" },
  { value: "40+", label: "Projetos entregues" },
  { value: "98%", label: "Satisfação de clientes" },
  { value: "24/7", label: "Suporte e monitoramento" }
];

export function Numbers() {
  return (
    <section className="section">
      <div className="rounded-3xl bg-unti-primary p-10 text-white shadow-lg">
        <div className="mb-8 space-y-2">
          <h2 className="text-3xl font-semibold">Nossos números falam por si</h2>
          <p className="text-white/80">Entrega consistente, governança e previsibilidade.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <div className="text-3xl font-bold">{item.value}</div>
              <div className="mt-1 text-sm text-white/80">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
