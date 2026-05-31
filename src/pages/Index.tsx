import { useEffect, useState } from "react"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Philosophy } from "../components/Philosophy"
import { Projects } from "../components/Projects"
import { Expertise } from "../components/Expertise"
import { CatalogForm } from "../components/CatalogForm"
import { Reviews } from "../components/Reviews"
import { Partners } from "../components/Partners"
import { FAQ } from "../components/FAQ"
import { CallToAction } from "../components/CallToAction"
import { Footer } from "../components/Footer"
import { ReadyHomes } from "../components/ReadyHomes"
import { Calculator } from "../components/Calculator"
import Icon from "@/components/ui/icon"

export default function Index() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <Projects />
      <Expertise />
      <CatalogForm />
      <Calculator />
      <ReadyHomes />
      <Reviews />
      <Partners />
      <FAQ />
      <CallToAction />
      <Footer />

      <button
        onClick={scrollToTop}
        className={`md:hidden fixed bottom-6 right-6 z-50 w-12 h-12 bg-primary text-white flex items-center justify-center shadow-lg transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Наверх"
      >
        <Icon name="ArrowUp" size={20} />
      </button>
    </main>
  )
}