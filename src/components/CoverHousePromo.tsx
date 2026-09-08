export function CoverHousePromo() {
  return (
    <div className="relative bg-secondary/40">
      <div className="sticky top-0 z-0">
        <div className="relative overflow-hidden shadow-xl">
          <img
            src="https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/fd9d4dac-83f2-403e-997d-ba744e1af9a1.jpg"
            alt="Дом с обложки сайта"
            className="w-full h-[360px] sm:h-[420px] md:h-[480px] lg:h-[540px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 flex items-start justify-center pt-10 sm:pt-14 md:pt-16">
            <div className="px-4 text-center max-w-2xl">
              <div className="inline-block bg-primary text-white text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-widest px-8 py-3 rounded-full mb-6">
                Супер-акция
              </div>
              <p className="text-white text-2xl md:text-3xl font-bold leading-tight mb-2">
                Хочешь дом с обложки?
              </p>
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-5">
                Тот самый дом со стартовой страницы нашего сайта — теперь по специальной цене
              </p>
              <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 mb-6">
                <span className="text-primary font-semibold text-lg md:text-xl">
                  Дом 90 м²
                </span>
                <span className="text-white text-2xl md:text-3xl font-bold">
                  5 500 000 ₽
                </span>
              </div>
              <p className="text-white/80 text-sm md:text-base border-l-4 border-primary pl-4 inline-block text-left">
                Торопитесь, предложение ограничено!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[360px] sm:h-[420px] md:h-[480px] lg:h-[540px]" />
    </div>
  )
}