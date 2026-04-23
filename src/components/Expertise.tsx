import { useEffect, useRef, useState } from "react"
import { Home, Building, Armchair, Trees } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

const expertiseAreas = [
  {
    title: "Малоэтажное строительство",
    description: "Строим индивидуальные жилые дома под ключ: от фундамента до чистовой отделки. Дома из газобетона, дерева, по каркасной и модульной технологии.",
    icon: Home,
  },
  {
    title: "Коммерческие объекты",
    description:
      "Строительство торговых, офисных и производственных зданий. Работаем с любыми форматами — от небольших магазинов до крупных комплексов.",
    icon: Building,
  },
  {
    title: "Реконструкция",
    description:
      "Полная или частичная реконструкция существующих объектов: перепланировка, надстройка этажей, модернизация фасадов и инженерных систем.",
    icon: Armchair,
  },
  {
    title: "Капитальный ремонт",
    description:
      "Комплексный капремонт зданий и помещений. Восстанавливаем несущие конструкции, кровлю, фасады, коммуникации — с гарантией результата.",
    icon: Trees,
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29 relative">
      <img src="https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/2c465510-4bb0-4999-a218-666f97958796.png" alt="ФорТЭК" className="absolute top-6 left-6 h-10 w-auto object-contain opacity-60 z-10" />
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наши услуги</p>
          <h2 className="text-4xl md:text-5xl font-medium leading-[1.2] tracking-tight mb-6">
            <HighlightedText>Услуги</HighlightedText>, проверенные
            <br />
            объектами
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Весь спектр строительных работ: от проектирования и согласования до сдачи объекта. Работаем под ключ или на отдельных этапах — как удобно Вам.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index) ? "animate-draw-stroke" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Icon className="w-10 h-10 mb-4 text-foreground" strokeWidth={1.25} />
                </div>
                <h3 className="text-xl font-medium mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}