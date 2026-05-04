const partners = [
  { id: 1, logo: "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/d164aa8d-a9c9-47c0-8552-5c5d01c125b2.jpg", name: "Партнёр 1", contain: false },
  { id: 2, logo: "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/69d297f7-06f1-4fac-b6a9-9db92ccab68c.jpg", name: "DBA", contain: false },
  { id: 3, logo: "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/a9e11c9e-6cc6-4ca8-8bf1-b19f42f63c1d.png", name: "Лад Дерево", contain: false },
  { id: 4, logo: "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/f717aa74-f07b-42eb-8883-bfecaa263fec.png", name: "ZIP Монтаж", contain: false },
  { id: 5, logo: "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/0a318e09-9208-414c-a455-04c2e4246100.png", name: "FOGEL", contain: true },
  { id: 6, logo: "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/d8ffd38d-6cbd-4a73-9645-da408e4bb7b9.png", name: "Строй-Групп", contain: true },
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
              className="border border-border bg-secondary/30 aspect-[3/2] flex items-center justify-center overflow-hidden"
            >
              {partner.logo ? (
                <img src={partner.logo} alt={partner.name} className={`w-full h-full ${partner.contain ? "object-contain p-3" : "object-cover"}`} />
              ) : (
                <span className="text-muted-foreground text-sm text-center px-2">{partner.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}