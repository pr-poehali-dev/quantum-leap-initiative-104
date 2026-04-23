import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

const SEND_LEAD_URL = "https://functions.poehali.dev/a475f918-2ff8-4309-8401-5853428e102a"

const MATERIALS = [
  { id: "frame", label: "Каркас" },
  { id: "frame-black", label: "Каркас БЛЭК" },
  { id: "sibit", label: "Сибит" },
  { id: "timber", label: "Брус" },
  { id: "module", label: "Модуль" },
]

export function CatalogForm() {
  const [selected, setSelected] = useState<string[]>([])
  const [form, setForm] = useState({ name: "", phone: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const toggleMaterial = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (selected.length === 0) return

    setStatus("loading")

    const materials = selected
      .map((id) => MATERIALS.find((m) => m.id === id)?.label)
      .join(", ")

    try {
      const res = await fetch(SEND_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          message: `📦 Запрос каталога типовых домов\nМатериалы: ${materials}`,
        }),
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

  return (
    <section id="catalog" className="py-32 md:py-29 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/26514fa2-c594-4e25-b50f-96f695061f85.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>
      <img src="https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/2c465510-4bb0-4999-a218-666f97958796.png" alt="ФорТЭК" className="absolute top-6 left-6 h-10 w-auto object-contain opacity-60 z-10" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/70 text-sm tracking-[0.3em] uppercase mb-6 font-medium">Каталог</p>
          <h2 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight mb-6 text-balance text-white drop-shadow-sm">
            Получите <HighlightedText>каталог</HighlightedText>
            <br />
            типовых домов
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-12 max-w-2xl font-medium">
            Выберите интересующий материал — мы пришлём подборку готовых проектов с планировками и ценами.
          </p>

          {status === "success" ? (
            <div className="py-10">
              <p className="text-2xl font-medium mb-2">Заявка отправлена!</p>
              <p className="text-muted-foreground">Мы свяжемся с Вами и пришлём каталог в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div>
                <p className="text-sm font-medium mb-4 tracking-wide text-white">Выберите материал (можно несколько)</p>
                <div className="flex flex-wrap gap-3">
                  {MATERIALS.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => toggleMaterial(m.id)}
                      className={`px-6 py-3 text-sm border-2 font-medium transition-colors duration-200 ${
                        selected.includes(m.id)
                          ? "bg-white text-black border-white"
                          : "bg-white/10 text-white border-white/60 hover:border-white"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
                {selected.length === 0 && status === "error" && (
                  <p className="text-sm text-destructive mt-2">Выберите хотя бы один материал</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="flex-1 border-2 border-white/50 px-5 py-4 text-sm bg-white/10 text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/50 font-medium"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="flex-1 border-2 border-white/50 px-5 py-4 text-sm bg-white/10 text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/50 font-medium"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-destructive -mt-4">Что-то пошло не так. Попробуйте ещё раз.</p>
              )}

              <button
                type="submit"
                disabled={status === "loading" || selected.length === 0}
                className="inline-flex items-center gap-3 bg-foreground text-primary-foreground px-8 py-4 text-sm tracking-wide hover:bg-foreground/90 transition-colors duration-300 group disabled:opacity-50 w-fit"
              >
                {status === "loading" ? "Отправляем..." : "Получить каталог"}
                {status !== "loading" && (
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}