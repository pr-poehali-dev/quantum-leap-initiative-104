import { useState } from "react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const benefits = [
  {
    icon: "CalendarCheck",
    title: "Въезд в ближайшие недели",
    description: "Дом уже построен и готов к заселению. Не нужно ждать месяцы или годы — переезжайте в своё время.",
  },
  {
    icon: "MapPin",
    title: "Участок уже в составе",
    description: "Земля подобрана, оформлена и входит в стоимость. Никакого поиска, торгов и бюрократии.",
  },
  {
    icon: "ShieldCheck",
    title: "Качество проверено нами",
    description: "Каждый дом построен нашей командой по тем же стандартам, что и объекты под заказ.",
  },
  {
    icon: "Banknote",
    title: "Прозрачная цена",
    description: "Фиксированная стоимость без скрытых доплат. Что видите — то и платите.",
  },
]

const readyHomes: {
  id: number
  title: string
  location: string
  area: string
  price: string
  status: "available" | "reserved"
  image: string
  features: string[]
}[] = []

export function ReadyHomes() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="ready-homes" className="py-20 md:py-32 relative">
      <img
        src="https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/2c465510-4bb0-4999-a218-666f97958796.png"
        alt="ФорТЭК"
        className="absolute top-6 left-6 h-10 w-auto object-contain opacity-60 z-10"
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-12">

        {/* Заголовок и вводная статья */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-16 md:mb-24">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Доступно сейчас</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
              Готовые дома <HighlightedText>для продажи</HighlightedText>
            </h2>
          </div>

          <div className="lg:self-center">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              Мечтаете о собственном доме, но устали от долгого ожидания? У нас есть уникальная возможность —
              переехать в новый дом значительно быстрее, чем при строительстве с нуля.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Не нужно искать подходящий участок, месяцами согласовывать проект и ждать окончания стройки.
              Готовый дом от ФорТЭК — это уже построенный, проверенный объект с земельным участком,
              в который можно заехать в ближайшее время.
            </p>
          </div>
        </div>

        {/* Преимущества */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 md:mb-24">
          {benefits.map((item) => (
            <div key={item.title} className="pl-6 border-l border-border">
              <Icon name={item.icon} size={24} className="text-[rgb(251,146,60)] mb-4" />
              <h3 className="text-base font-medium mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Объекты */}
        {readyHomes.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {readyHomes.map((home) => (
              <article
                key={home.id}
                className="group border border-border overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredId(home.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={home.image || "/placeholder.svg"}
                    alt={home.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredId === home.id ? "scale-105" : "scale-100"
                    }`}
                  />
                  <div className={`absolute top-3 left-3 text-xs px-3 py-1 font-medium ${
                    home.status === "available"
                      ? "bg-green-600 text-white"
                      : "bg-amber-500 text-white"
                  }`}>
                    {home.status === "available" ? "Свободен" : "Забронирован"}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-medium mb-1 group-hover:underline underline-offset-4">{home.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{home.location}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {home.features.map((f) => (
                      <span key={f} className="text-xs bg-secondary px-2 py-1">{f}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{home.area}</span>
                    <span className="text-lg font-medium">{home.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-border py-20 text-center">
            <Icon name="Home" size={40} className="text-muted-foreground/40 mx-auto mb-4" />
            <p className="text-muted-foreground text-lg mb-2">Объекты скоро появятся</p>
            <p className="text-muted-foreground/60 text-sm max-w-sm mx-auto">
              Сейчас раздел пополняется. Оставьте заявку — мы свяжемся, как только появится подходящий вариант.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-6 text-sm px-5 py-2.5 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Оставить заявку
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
