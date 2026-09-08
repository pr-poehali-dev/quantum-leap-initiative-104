import Icon from "@/components/ui/icon"

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

          <div className="bg-background border border-border p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="Accessibility" size={36} className="text-primary" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-medium mb-3">
                Адаптация жилья под нужды людей с ограниченными возможностями
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Проектируем и строим дома с учётом доступной среды — пандусы, широкие дверные проёмы, продуманная эргономика пространства. Делаем комфортное жильё доступным для каждого.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
