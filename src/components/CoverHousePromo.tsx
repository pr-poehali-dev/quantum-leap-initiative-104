export function CoverHousePromo() {
  return (
    <section className="py-12 px-4 bg-secondary/40">
      <div className="container mx-auto max-w-5xl">
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/fd9d4dac-83f2-403e-997d-ba744e1af9a1.jpg"
            alt="Дом с обложки сайта"
            className="w-full h-[320px] sm:h-[380px] md:h-[440px] lg:h-[480px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15 md:to-black/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-4 sm:px-8 md:px-10 max-w-xl">
              <div className="inline-block bg-primary text-white text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                Супер-акция
              </div>
              <p className="text-white text-2xl md:text-3xl font-bold leading-tight mb-2">
                Хочешь дом с обложки?
              </p>
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-5">
                Тот самый дом со стартовой страницы нашего сайта — теперь по специальной цене
              </p>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-6">
                <span className="text-primary font-semibold text-lg md:text-xl">
                  Дом 90 м²
                </span>
                <span className="text-white text-2xl md:text-3xl font-bold">
                  5 500 000 ₽
                </span>
              </div>
              <p className="text-white/80 text-sm md:text-base border-l-4 border-primary pl-4">
                Торопитесь, предложение ограничено!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
