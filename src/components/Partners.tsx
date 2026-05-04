const partners = [
  { id: 1, name: "Партнёр 1" },
  { id: 2, name: "Партнёр 2" },
  { id: 3, name: "Партнёр 3" },
  { id: 4, name: "Партнёр 4" },
  { id: 5, name: "Партнёр 5" },
  { id: 6, name: "Партнёр 6" },
]

export function Partners() {
  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Работаем вместе</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Наши партнёры</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="border border-border bg-secondary/30 aspect-[3/2] flex items-center justify-center"
            >
              <span className="text-muted-foreground text-sm text-center px-2">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
