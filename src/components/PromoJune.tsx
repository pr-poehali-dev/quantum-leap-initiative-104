export function PromoJune() {
  return (
    <section className="py-12 px-4 bg-secondary/40">
      <div className="container mx-auto max-w-5xl">
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/8fd31823-f786-44ef-a3b8-e71c037c1d40.png"
            alt="Комплект садовой мебели"
            className="w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/10" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-4 sm:px-8 md:px-14 max-w-xl">
              <div className="inline-block bg-primary text-white text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                Супер-акция — ИЮНЬ
              </div>
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-5">
                Только в <span className="text-primary font-semibold">июне 2026 г.</span> при заключении договора подряда на строительство индивидуального жилого дома
              </p>
              <p className="text-white text-2xl md:text-3xl font-bold leading-tight mb-2">
                дарим ПОДАРОК!
              </p>
              <p className="text-primary font-semibold text-lg md:text-xl mb-6">
                Комплект садовой мебели для отдыха!
              </p>
              <p className="text-white/80 text-sm md:text-base border-l-4 border-primary pl-4">
                Успейте воспользоваться отличным предложением!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}