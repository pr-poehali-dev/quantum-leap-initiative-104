import snowblower from "@/assets/snowblower.png"

export function PromoJune() {
  return (
    <section className="py-12 px-4 bg-secondary/40">
      <div className="container mx-auto max-w-5xl">
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/files/6c94686f-1c3c-4cab-819f-7a86d6172209.jpg"
            alt="Акция Осень — готовимся к зиме"
            className="w-full h-[320px] sm:h-[380px] md:h-[440px] lg:h-[480px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15 md:to-black/20" />
          <img
            src={snowblower}
            alt="Снегоуборщик в подарок"
            className="hidden md:block absolute right-2 lg:right-8 bottom-6 md:bottom-10 lg:bottom-12 w-[46%] lg:w-[42%] max-w-[420px] object-contain drop-shadow-2xl"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="px-4 sm:px-8 md:px-10 md:max-w-[54%] lg:max-w-xl">
              <div className="inline-block bg-primary text-white text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                Акция ОСЕНЬ — готовимся к зиме
              </div>
              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-5">
                При заключении договора подряда на строительство <span className="text-primary font-semibold">индивидуального жилого дома</span>
              </p>
              <p className="text-white text-2xl md:text-3xl font-bold leading-tight mb-2">
                дарим ПОДАРОК!
              </p>
              <p className="text-primary font-semibold text-lg md:text-xl mb-6">
                Снегоуборщик
              </p>
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