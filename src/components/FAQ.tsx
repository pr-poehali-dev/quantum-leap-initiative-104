import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "В каких регионах вы работаете?",
    answer:
      "Работаем в Новосибирске и Новосибирской области, Томской области, Красноярском крае, Алтайском крае и Республике Алтай. Выезд и оценка объекта — бесплатно.",
  },
  {
    question: "Сколько стоит строительство дома?",
    answer:
      "Стоимость зависит от площади, материала, сложности проекта и степени готовности (коробка, черновая или чистовая отделка). Мы рассчитываем смету индивидуально — после осмотра участка и согласования проекта. Оставьте заявку, и мы подготовим предварительный расчёт бесплатно.",
  },
  {
    question: "Работаете ли вы под ключ?",
    answer:
      "Да, мы строим под ключ: проектирование, согласование, фундамент, коробка, кровля, инженерные системы, внутренняя и внешняя отделка. Вы получаете готовый объект, в который можно сразу въехать или открыть бизнес.",
  },
  {
    question: "Какие гарантии вы предоставляете?",
    answer:
      "Мы даём письменную гарантию на конструктив здания — 5 лет, на кровлю и инженерные системы — 3 года, на отделочные работы — 1 год. Все обязательства прописаны в договоре.",
  },
  {
    question: "Берётесь ли вы за капитальный ремонт и реконструкцию?",
    answer:
      "Да. Мы занимаемся реконструкцией и капремонтом как жилых, так и коммерческих объектов: меняем планировку, обновляем фасады, кровлю, коммуникации. Можем взяться за объект в любом состоянии.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Оставьте заявку на сайте или позвоните нам. Мы обсудим ваши задачи, выедем на объект, подготовим предварительный расчёт и договор. Работа начинается только после согласования всех условий.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}