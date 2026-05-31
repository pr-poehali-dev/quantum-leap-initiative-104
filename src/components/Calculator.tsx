import { useState } from "react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const SEND_LEAD_URL = "https://functions.poehali.dev/a475f918-2ff8-4309-8401-5853428e102a"

const TECHNOLOGIES = [
  { id: "frame", label: "Каркас", desc: "Быстро, тепло, доступно" },
  { id: "frame-black", label: "Каркас БЛЭК", desc: "Усиленная конструкция" },
  { id: "sibit", label: "Сибит", desc: "Газобетон, энергоэффективность" },
  { id: "timber", label: "Брус", desc: "Природное дерево" },
  { id: "glued", label: "Клееный брус", desc: "Максимальная стабильность" },
  { id: "module", label: "Модуль", desc: "Рекордные сроки" },
]

const AREAS = [
  { id: "50-80", label: "50–80 м²", desc: "Дача или небольшой дом" },
  { id: "80-120", label: "80–120 м²", desc: "Дом для семьи" },
  { id: "120-180", label: "120–180 м²", desc: "Просторный дом" },
  { id: "180+", label: "от 180 м²", desc: "Большой дом или коттедж" },
]

const FLOORS = [
  { id: "1", label: "1 этаж", icon: "Home" },
  { id: "1.5", label: "1,5 этажа", icon: "Home" },
  { id: "2", label: "2 этажа", icon: "Building2" },
]

const PAYMENT = [
  { id: "own", label: "Собственные средства", icon: "Banknote" },
  { id: "mortgage", label: "Ипотека", icon: "CreditCard" },
  { id: "mixed", label: "Комбинированно", icon: "Wallet" },
]

type Step = "tech" | "area" | "floors" | "payment" | "contacts"

const STEPS: Step[] = ["tech", "area", "floors", "payment", "contacts"]

const STEP_LABELS: Record<Step, string> = {
  tech: "Технология",
  area: "Площадь",
  floors: "Этажность",
  payment: "Оплата",
  contacts: "Контакты",
}

export function Calculator() {
  const [step, setStep] = useState<Step>("tech")
  const [selections, setSelections] = useState({
    tech: "",
    area: "",
    floors: "",
    payment: "",
  })
  const [contacts, setContacts] = useState({ name: "", phone: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const stepIndex = STEPS.indexOf(step)

  const select = (field: keyof typeof selections, value: string) => {
    setSelections((prev) => ({ ...prev, [field]: value }))
    const next = STEPS[stepIndex + 1]
    if (next) setTimeout(() => setStep(next), 200)
  }

  const goBack = () => {
    const prev = STEPS[stepIndex - 1]
    if (prev) setStep(prev)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    const techLabel = TECHNOLOGIES.find((t) => t.id === selections.tech)?.label || selections.tech
    const areaLabel = AREAS.find((a) => a.id === selections.area)?.label || selections.area
    const floorsLabel = FLOORS.find((f) => f.id === selections.floors)?.label || selections.floors
    const paymentLabel = PAYMENT.find((p) => p.id === selections.payment)?.label || selections.payment

    const message = `🏠 Калькулятор:\nТехнология: ${techLabel}\nПлощадь: ${areaLabel}\nЭтажность: ${floorsLabel}\nОплата: ${paymentLabel}`

    try {
      const res = await fetch(SEND_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: contacts.name, phone: contacts.phone, message }),
      })
      if (res.ok) {
        setStatus("success")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const progress = ((stepIndex) / (STEPS.length - 1)) * 100

  return (
    <section id="calculator" className="py-20 md:py-32 relative bg-secondary/30">
      <img
        src="https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/2c465510-4bb0-4999-a218-666f97958796.png"
        alt="ФорТЭК"
        className="absolute top-6 left-6 h-10 w-auto object-contain opacity-60 z-10"
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="max-w-3xl mx-auto">

          {/* Заголовок */}
          <div className="mb-10 md:mb-14">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Быстрый расчёт</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-[1.15]">
              Узнайте <HighlightedText>стоимость</HighlightedText> вашего дома
            </h2>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed">
              Ответьте на 4 вопроса — мы подготовим персональный расчёт и свяжемся с вами.
            </p>
          </div>

          {/* Прогресс */}
          <div className="mb-8">
            <div className="flex justify-between mb-3">
              {STEPS.map((s, i) => (
                <button
                  key={s}
                  onClick={() => i < stepIndex && setStep(s)}
                  className={`text-xs transition-colors duration-200 ${
                    i < stepIndex
                      ? "text-[rgb(251,146,60)] cursor-pointer"
                      : i === stepIndex
                      ? "text-foreground font-medium"
                      : "text-muted-foreground/40 cursor-default"
                  }`}
                >
                  {STEP_LABELS[s]}
                </button>
              ))}
            </div>
            <div className="h-0.5 bg-border relative">
              <div
                className="absolute top-0 left-0 h-full bg-[rgb(251,146,60)] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Контент шага */}
          {status === "success" ? (
            <div className="py-16 text-center">
              <div className="w-16 h-16 bg-green-100 flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircle" size={32} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-medium mb-3">Заявка отправлена!</h3>
              <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время и подготовим расчёт.</p>
            </div>
          ) : (
            <div className="min-h-[320px]">

              {/* Шаг 1: Технология */}
              {step === "tech" && (
                <div>
                  <h3 className="text-lg font-medium mb-6">Выберите технологию строительства</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {TECHNOLOGIES.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => select("tech", t.id)}
                        className={`p-4 border text-left transition-all duration-200 hover:border-[rgb(251,146,60)] ${
                          selections.tech === t.id
                            ? "border-[rgb(251,146,60)] bg-orange-50"
                            : "border-border bg-background"
                        }`}
                      >
                        <div className="font-medium text-sm mb-1">{t.label}</div>
                        <div className="text-muted-foreground text-xs">{t.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Шаг 2: Площадь */}
              {step === "area" && (
                <div>
                  <h3 className="text-lg font-medium mb-6">Планируемая площадь дома</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {AREAS.map((a) => (
                      <button
                        key={a.id}
                        onClick={() => select("area", a.id)}
                        className={`p-5 border text-left transition-all duration-200 hover:border-[rgb(251,146,60)] ${
                          selections.area === a.id
                            ? "border-[rgb(251,146,60)] bg-orange-50"
                            : "border-border bg-background"
                        }`}
                      >
                        <div className="text-xl font-medium mb-1">{a.label}</div>
                        <div className="text-muted-foreground text-sm">{a.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Шаг 3: Этажность */}
              {step === "floors" && (
                <div>
                  <h3 className="text-lg font-medium mb-6">Количество этажей</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {FLOORS.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => select("floors", f.id)}
                        className={`p-5 border text-center transition-all duration-200 hover:border-[rgb(251,146,60)] ${
                          selections.floors === f.id
                            ? "border-[rgb(251,146,60)] bg-orange-50"
                            : "border-border bg-background"
                        }`}
                      >
                        <Icon name={f.icon} size={28} className="mx-auto mb-2 text-muted-foreground" />
                        <div className="font-medium text-sm">{f.label}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Шаг 4: Способ оплаты */}
              {step === "payment" && (
                <div>
                  <h3 className="text-lg font-medium mb-6">Способ финансирования</h3>
                  <div className="flex flex-col gap-3">
                    {PAYMENT.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => select("payment", p.id)}
                        className={`p-5 border text-left flex items-center gap-4 transition-all duration-200 hover:border-[rgb(251,146,60)] ${
                          selections.payment === p.id
                            ? "border-[rgb(251,146,60)] bg-orange-50"
                            : "border-border bg-background"
                        }`}
                      >
                        <Icon name={p.icon} size={22} className="text-[rgb(251,146,60)] shrink-0" />
                        <span className="font-medium">{p.label}</span>
                        {selections.payment === p.id && (
                          <Icon name="Check" size={18} className="ml-auto text-[rgb(251,146,60)]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Шаг 5: Контакты */}
              {step === "contacts" && (
                <div>
                  <h3 className="text-lg font-medium mb-2">Куда отправить расчёт?</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Мы подготовим персональный расчёт и свяжемся с вами
                  </p>

                  {/* Сводка выбора */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 p-4 bg-secondary/50">
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">Технология</div>
                      <div className="text-sm font-medium">{TECHNOLOGIES.find((t) => t.id === selections.tech)?.label}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">Площадь</div>
                      <div className="text-sm font-medium">{AREAS.find((a) => a.id === selections.area)?.label}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">Этажей</div>
                      <div className="text-sm font-medium">{FLOORS.find((f) => f.id === selections.floors)?.label}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">Оплата</div>
                      <div className="text-sm font-medium">{PAYMENT.find((p) => p.id === selections.payment)?.label}</div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      required
                      value={contacts.name}
                      onChange={(e) => setContacts((p) => ({ ...p, name: e.target.value }))}
                      className="border border-border px-5 py-4 text-sm focus:outline-none focus:border-foreground/40 transition-colors bg-background"
                    />
                    <input
                      type="tel"
                      placeholder="Телефон"
                      required
                      value={contacts.phone}
                      onChange={(e) => setContacts((p) => ({ ...p, phone: e.target.value }))}
                      className="border border-border px-5 py-4 text-sm focus:outline-none focus:border-foreground/40 transition-colors bg-background"
                    />
                    {status === "error" && (
                      <p className="text-red-500 text-sm">Что-то пошло не так. Попробуйте ещё раз.</p>
                    )}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {status === "loading" ? "Отправляем..." : "Получить расчёт"}
                      {status !== "loading" && <Icon name="ArrowRight" size={16} />}
                    </button>
                  </form>
                </div>
              )}

              {/* Кнопка назад */}
              {stepIndex > 0 && status !== "success" && (
                <button
                  onClick={goBack}
                  className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <Icon name="ArrowLeft" size={14} />
                  Назад
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
