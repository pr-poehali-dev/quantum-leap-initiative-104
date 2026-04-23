import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Андрей Михайлович",
    location: "Новосибирск",
    project: "Каркасный дом, СНТ Лидер",
    text: "Отличная работа! Дом построили точно в срок, качество материалов на высшем уровне. Бригада профессиональная, всегда на связи, все вопросы решали оперативно. Рекомендую ФорТЭК всем, кто планирует строительство.",
    rating: 5,
    year: "2026",
  },
  {
    id: 2,
    name: "Светлана Петрова",
    location: "Бийск",
    project: "Капитальный ремонт помещений",
    text: "Сделали капитальный ремонт производственных помещений завода. Работы выполнены качественно и в установленные сроки. Очень довольны результатом — всё чисто, аккуратно, без лишних вопросов. Будем сотрудничать дальше.",
    rating: 5,
    year: "2026",
  },
  {
    id: 3,
    name: "Виктор Соколов",
    location: "Новосибирская область",
    project: "Строительство под ключ",
    text: "Обратились в ФорТЭК по рекомендации знакомых. Не пожалели ни разу. Грамотный подход к проекту, честные цены, никаких скрытых доплат. Дом сдан в отличном состоянии, въехали сразу после сдачи.",
    rating: 5,
    year: "2025",
  },
  {
    id: 4,
    name: "Ирина Козлова",
    location: "Томская область",
    project: "Реконструкция объекта",
    text: "Сотрудничаем с ФорТЭК уже второй год. Провели реконструкцию коммерческого объекта. Команда — профессионалы своего дела. Всё согласовали заранее, работы шли по плану. Результатом очень довольны.",
    rating: 5,
    year: "2025",
  },
]

export function Reviews() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length)
  const next = () => setCurrent((c) => (c + 1) % reviews.length)

  const review = reviews[current]

  return (
    <section id="reviews" className="py-32 md:py-29 bg-secondary/50 relative">
      <img
        src="https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/2c465510-4bb0-4999-a218-666f97958796.png"
        alt="ФорТЭК"
        className="absolute top-6 left-6 h-10 w-auto object-contain opacity-60 z-10"
      />
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Клиенты о нас</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Обзоры и отзывы</h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors duration-300"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm text-muted-foreground tabular-nums">{current + 1} / {reviews.length}</span>
            <button
              onClick={next}
              className="w-11 h-11 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors duration-300"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div key={review.id} className="transition-all duration-300">
            <div className="flex gap-1 mb-6">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 tracking-tight">
              «{review.text}»
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-lg">
                {review.name[0]}
              </div>
              <div>
                <p className="font-medium">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.location} · {review.year}</p>
              </div>
            </div>
          </div>

          <div className="border border-border p-8 bg-background">
            <p className="text-sm text-muted-foreground tracking-[0.2em] uppercase mb-3">Объект</p>
            <p className="text-lg font-medium mb-6">{review.project}</p>
            <div className="flex flex-col gap-3">
              {reviews.map((r, i) => (
                <button
                  key={r.id}
                  onClick={() => setCurrent(i)}
                  className={`text-left text-sm py-3 px-4 border transition-all duration-300 ${
                    i === current
                      ? "border-primary bg-primary/5 text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                  }`}
                >
                  <span className="font-medium">{r.name}</span>
                  <span className="mx-2 opacity-40">·</span>
                  <span>{r.project}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
