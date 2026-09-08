export function CSRProgram() {
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4 text-center">
            Бизнес с программой КСО
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-[1.15] tracking-tight mb-6 text-center">
            Корпоративная социальная ответственность
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
            Наша деятельность — это не просто стремление к прибыли, а осознанная стратегия, которая помогает сбалансировать коммерческие цели с пользой для общества.
          </p>

          <h3 className="text-xl md:text-2xl font-medium mb-6 text-center">
            Адаптация жилья под нужды людей с ограниченными возможностями
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background border border-border overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/files/35b1e9bf-7b1d-402f-afe8-e32ca44a7429.jpg"
                alt="Дом с пандусом для людей с ограниченными возможностями"
                className="w-full h-56 md:h-64 object-cover"
              />
              <div className="p-6 md:p-8 text-center">
                <h4 className="text-lg md:text-xl font-medium mb-3">
                  Строительство нового жилья
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Проектируем и строим дома с учётом доступной среды — пандусы, широкие дверные проёмы, продуманная эргономика пространства.
                </p>
              </div>
            </div>

            <div className="bg-background border border-border overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/files/fa0b162b-c352-457f-b39d-c89ff6245cbd.jpg"
                alt="Адаптированный интерьер квартиры для маломобильных людей"
                className="w-full h-56 md:h-64 object-cover"
              />
              <div className="p-6 md:p-8 text-center">
                <h4 className="text-lg md:text-xl font-medium mb-3">
                  Ремонт существующего жилья
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Адаптируем построенные дома или квартиры под нужды людей с ограниченными возможностями — делаем комфортное жильё доступным для каждого.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}