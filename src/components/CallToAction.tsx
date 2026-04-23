import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

const SEND_LEAD_URL = "https://functions.poehali.dev/a475f918-2ff8-4309-8401-5853428e102a"

export function CallToAction() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch(SEND_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", phone: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-32 md:py-29 bg-foreground text-primary-foreground relative">
      <img src="https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/7c02c37b-0628-48a0-889b-71c9f1738e91.png" alt="ФорТЭК" className="absolute top-6 left-6 h-10 w-auto object-contain opacity-60 z-10" />
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8">Начать проект</p>

          <h2 className="text-4xl md:text-6xl lg:text-8xl font-medium leading-[1.1] tracking-tight mb-8 text-balance">
            Мы <HighlightedText>готовы</HighlightedText>,
            <br />
            а Вы?
          </h2>

          <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Оставьте заявку — мы свяжемся с Вами, предложим варианты, обсудим проект и подготовим расчёт бесплатно.
          </p>

          {status === "success" ? (
            <div className="max-w-md mx-auto py-10 text-center">
              <p className="text-2xl font-medium mb-2">Заявка отправлена!</p>
              <p className="text-primary-foreground/70">Мы свяжемся с Вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4 text-left">
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                required
                value={form.name}
                onChange={handleChange}
                className="bg-transparent border border-primary-foreground/30 px-5 py-4 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/70 transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                required
                value={form.phone}
                onChange={handleChange}
                className="bg-transparent border border-primary-foreground/30 px-5 py-4 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/70 transition-colors"
              />
              <textarea
                name="message"
                placeholder="Расскажите о проекте (необязательно)"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="bg-transparent border border-primary-foreground/30 px-5 py-4 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/70 transition-colors resize-none"
              />
              {status === "error" && (
                <p className="text-red-400 text-sm">Что-то пошло не так. Попробуйте ещё раз.</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors duration-300 group disabled:opacity-60"
              >
                {status === "loading" ? "Отправляем..." : "Отправить заявку"}
                {status !== "loading" && (
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                )}
              </button>
              <a
                href="tel:+79237015317"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors duration-300 text-center"
              >
                Позвонить нам
              </a>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}