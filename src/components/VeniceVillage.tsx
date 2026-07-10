export function VeniceVillage() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/4c8eee7e-241c-4538-b6fb-705490a228b9.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative container mx-auto px-4 sm:px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/80 text-sm tracking-[0.3em] uppercase mb-4 text-center">
            Эксклюзивная продажа
          </p>
          <img
            src="/logo-venice.png"
            alt="Коттеджный поселок Сибирская Венеция"
            className="w-full max-w-2xl mx-auto mb-4 object-contain"
          />
          <p className="text-center text-white/90 text-lg mb-12 max-w-2xl mx-auto">
            Участки с возможностью строительства дома для круглогодичного проживания
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="border border-white/20 bg-black/30 backdrop-blur-sm p-6 text-center">
              <div className="text-4xl mb-3">🏡</div>
              <h3 className="font-semibold text-lg mb-2 text-white">Дом под ключ</h3>
              <p className="text-white/80 text-sm">
                Строительство дома для круглогодичного проживания — всё включено
              </p>
            </div>
            <div className="border border-white/20 bg-black/30 backdrop-blur-sm p-6 text-center">
              <div className="text-4xl mb-3">🌊</div>
              <h3 className="font-semibold text-lg mb-2 text-white">Природа рядом</h3>
              <p className="text-white/80 text-sm">
                Живописное место с водоёмами — красота сибирской природы у порога
              </p>
            </div>
            <div className="border border-white/20 bg-black/30 backdrop-blur-sm p-6 text-center">
              <div className="text-4xl mb-3">🔑</div>
              <h3 className="font-semibold text-lg mb-2 text-white">Эксклюзивная продажа</h3>
              <p className="text-white/80 text-sm">
                Официальный партнёр поселка — лучшие условия и сопровождение сделки
              </p>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-white/20 p-8 md:p-10 text-center">
            <p className="text-lg md:text-xl font-medium mb-2 text-white">
              Хотите узнать подробности и стоимость участков?
            </p>
            <p className="text-white/80 mb-6">
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