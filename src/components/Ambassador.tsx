export function Ambassador() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            {/* Quote mark */}
            <div className="hidden md:block shrink-0">
              <span className="text-[120px] leading-none text-[rgb(251,146,60)] opacity-30 font-serif select-none">"</span>
            </div>

            <div>
              <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Обращение руководства</p>

              <blockquote className="space-y-4 text-base md:text-lg leading-relaxed text-foreground/90">
                <p>От лица Строительного Альянса «ФорТЭК» я приветствую Вас на нашем сайте.</p>
                <p>
                  В современном мире, где требования к качеству, скорости и безопасности строительства постоянно растут,
                  успех проекта определяется не только технологиями, но и людьми, которые стоят за ним. Строительный
                  Альянс «ФорТЭК» — это команда единомышленников и профессионалов, объединённых общей целью: создавать
                  объекты, которые будут служить десятилетиями. Мы подходим к каждому проекту, как к комплексной задаче,
                  где важна каждая деталь: от прочности фундамента до эстетики фасада, от эффективности инженерных
                  систем до комфорта конечного пользователя.
                </p>
                <p>
                  Обращаясь в Строительный альянс «ФорТЭК», Вы получаете надёжного партнёра, который разделяет вашу
                  ответственность за конечный результат.
                </p>
                <p className="font-medium text-foreground">
                  Давайте строить будущее вместе.<br />
                  Давайте создавать объекты, которыми мы все будем гордиться.
                </p>
              </blockquote>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">С уважением,</p>
                <p className="font-medium mt-1">Юлия Судакова</p>
                <p className="text-sm text-muted-foreground">Амбассадор Строительного альянса «ФорТЭК»</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
