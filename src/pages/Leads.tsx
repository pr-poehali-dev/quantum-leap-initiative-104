import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

const GET_LEADS_URL = "https://functions.poehali.dev/e4cee555-4ea6-4a85-b4e6-4769188ad6cb"

interface Lead {
  id: number
  name: string
  phone: string
  message: string | null
  telegram_sent: boolean
  created_at: string
}

export default function Leads() {
  const [token, setToken] = useState(() => sessionStorage.getItem("leads_token") || "")
  const [input, setInput] = useState("")
  const [leads, setLeads] = useState<Lead[]>([])
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle")
  const [error, setError] = useState("")

  const fetchLeads = async (pwd: string) => {
    setStatus("loading")
    setError("")
    try {
      const res = await fetch(GET_LEADS_URL, {
        headers: { "X-Auth-Token": pwd },
      })
      if (res.status === 401) {
        setError("Неверный пароль")
        setStatus("idle")
        sessionStorage.removeItem("leads_token")
        setToken("")
        return
      }
      if (!res.ok) {
        setError("Не удалось загрузить заявки")
        setStatus("idle")
        return
      }
      const data = await res.json()
      setLeads(data.leads || [])
      sessionStorage.setItem("leads_token", pwd)
      setToken(pwd)
      setStatus("idle")
    } catch {
      setError("Ошибка соединения")
      setStatus("idle")
    }
  }

  useEffect(() => {
    if (token) fetchLeads(token)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetchLeads(input)
  }

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary/30 px-4">
        <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg max-w-sm w-full space-y-4">
          <h1 className="text-xl font-semibold flex items-center gap-2">
            <Icon name="Lock" size={20} /> Заявки с сайта
          </h1>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Введите пароль"
            className="w-full border px-4 py-2 outline-none focus:border-primary"
            autoFocus
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-primary text-white py-2 font-medium disabled:opacity-50"
          >
            {status === "loading" ? "Проверка..." : "Войти"}
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary/20 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Заявки с сайта</h1>
          <button
            onClick={() => fetchLeads(token)}
            className="flex items-center gap-2 text-sm border px-3 py-2 hover:bg-white"
          >
            <Icon name="RefreshCw" size={16} /> Обновить
          </button>
        </div>

        {status === "loading" && <p>Загрузка...</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="bg-white shadow overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-secondary/40 text-left">
              <tr>
                <th className="p-3">Дата</th>
                <th className="p-3">Имя</th>
                <th className="p-3">Телефон</th>
                <th className="p-3">Сообщение</th>
                <th className="p-3">Telegram</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-t">
                  <td className="p-3 whitespace-nowrap">
                    {new Date(lead.created_at).toLocaleString("ru-RU")}
                  </td>
                  <td className="p-3">{lead.name}</td>
                  <td className="p-3 whitespace-nowrap">{lead.phone}</td>
                  <td className="p-3 max-w-xs whitespace-pre-wrap">{lead.message}</td>
                  <td className="p-3">
                    {lead.telegram_sent ? (
                      <Icon name="Check" size={16} className="text-green-600" />
                    ) : (
                      <Icon name="X" size={16} className="text-red-500" />
                    )}
                  </td>
                </tr>
              ))}
              {leads.length === 0 && status !== "loading" && (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-muted-foreground">
                    Заявок пока нет
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
