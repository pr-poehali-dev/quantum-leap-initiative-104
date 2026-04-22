import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const buildingTypes = [
  {
    title: "Каркасная технология",
    description: "Классический каркас — скорость монтажа, отличная теплоизоляция и свобода в планировке.",
  },
  {
    title: "Каркас БЛЭК",
    description: "Усиленная каркасная технология с повышенной жёсткостью конструкции и увеличенным сроком службы.",
  },
  {
    title: "Сибит (газобетон)",
    description: "Тёплые, прочные и экономичные стены. Идеальное соотношение цены, скорости и энергоэффективности.",
  },
  {
    title: "Брус профилированный",
    description: "Природная красота дерева, точная геометрия соединений и минимальная усадка — эстетика и надёжность.",
  },
  {
    title: "Брус клееный",
    description: "Максимальная стабильность и минимальная усадка. Дома из клееного бруса не трескаются и не деформируются.",
  },
  {
    title: "Модульное строительство",
    description: "Заводская готовность модулей — рекордные сроки возведения и контролируемое качество каждого элемента.",
  },
]

const philosophyItems = [
  {
    title: "Качество без компромиссов",
    description:
      "Используем только проверенные материалы и технологии. Каждый узел, каждая конструкция проходит контроль — потому что дом строится на десятилетия.",
    icon: "ShieldCheck",
  },
  {
    title: "Сроки — наш приоритет",
    description:
      "Чётко выстроенная система управления проектами позволяет сдавать объекты в срок. Мы не переносим дедлайны и держим слово перед каждым заказчиком.",
    icon: "Clock",
  },
  {
    title: "Прозрачность на каждом этапе",
    description:
      "Вы всегда знаете, что происходит на стройке: отчёты, фото, онлайн-контроль. Никаких сюрпризов в смете и никаких скрытых платежей.",
    icon: "Eye",
  },
  {
    title: "Опыт в каждом проекте",
    description: "За плечами — сотни сданных объектов: от уютных загородных домов до масштабных коммерческих комплексов. Мы знаем строительство изнутри.",
    icon: "Award",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [visibleTypes, setVisibleTypes] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const typeRefs = useRef<(HTMLDivElement | null)[]>([])

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
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    const typeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-type-index"))
          if (entry.isIntersecting) {
            setVisibleTypes((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.15 },
    )

    typeRefs.current.forEach((ref) => {
      if (ref) typeObserver.observe(ref)
    })

    return () => {
      observer.disconnect()
      typeObserver.disconnect()
    }
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Left column - Title and image */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наш подход</p>
            <h2 className="text-6xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              Строим с
              <br />
              <HighlightedText>ответственностью</HighlightedText>
            </h2>

            <div className="relative hidden lg:block">
              <img
                src="/images/exterior.png"
                alt="Архитектурный эскиз рабочего пространства"
                className="opacity-90 relative z-10 w-auto"
              />
            </div>
          </div>

          {/* Right column - Description and Philosophy items */}
          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              Строительство — это не просто стены и кровля. Это дом, в котором будут жить ваши близкие, или объект, в котором будет расти ваш бизнес. Мы относимся к каждому проекту именно так.
            </p>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <Icon name={item.icon} size={22} className="text-[rgb(251,146,60)] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Building technologies block */}
        <div>
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Технологии строительства</p>
          <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">
            Строим из того, что <HighlightedText>подходит вам</HighlightedText>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {buildingTypes.map((type, index) => (
              <div
                key={type.title}
                ref={(el) => { typeRefs.current[index] = el }}
                data-type-index={index}
                className={`pl-6 border-l border-border transition-all duration-700 ${
                  visibleTypes.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h4 className="text-base font-medium mb-2">{type.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}