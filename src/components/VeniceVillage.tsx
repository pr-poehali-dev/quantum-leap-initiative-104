export function VeniceVillage() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4 text-center">
            Эксклюзивная продажа
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 leading-tight">
            Коттеджный поселок<br />
            <span className="text-primary">Сибирская Венеция</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Участки с возможностью строительства дома для круглогодичного проживания
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="border border-border p-6 text-center">
              <div className="text-4xl mb-3">🏡</div>
              <h3 className="font-semibold text-lg mb-2">Дом под ключ</h3>
              <p className="text-muted-foreground text-sm">
                Строительство дома для круглогодичного проживания — всё включено
              </p>
            </div>
            <div className="border border-border p-6 text-center">
              <div className="text-4xl mb-3">🌊</div>
              <h3 className="font-semibold text-lg mb-2">Природа рядом</h3>
              <p className="text-muted-foreground text-sm">
                Живописное место с водоёмами — красота сибирской природы у порога
              </p>
            </div>
            <div className="border border-border p-6 text-center">
              <div className="text-4xl mb-3">🔑</div>
              <h3 className="font-semibold text-lg mb-2">Эксклюзивная продажа</h3>
              <p className="text-muted-foreground text-sm">
                Официальный партнёр поселка — лучшие условия и сопровождение сделки
              </p>
            </div>
          </div>

          <div className="bg-muted/30 border border-border p-8 md:p-10 text-center">
            <p className="text-lg md:text-xl font-medium mb-2">
              Хотите узнать подробности и стоимость участков?
            </p>
            <p className="text-muted-foreground mb-6">
              Оставьте заявку — наш менеджер свяжется с вами и расскажет об условиях
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById("catalog-form") || document.querySelector("form")
                el?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-block bg-primary text-primary-foreground px-8 py-3 font-medium hover:bg-primary/90 transition-colors"
            >
              Узнать стоимость участка
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
