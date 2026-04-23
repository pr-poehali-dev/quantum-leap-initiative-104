import { useEffect, useRef, useState } from "react"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const [animationComplete, setAnimationComplete] = useState(false)
  const accumulatedScrollRef = useRef(0)
  const lastTouchY = useRef<number>(0)

  const applyProgress = (progress: number) => {
    if (contentRef.current) {
      const translateY = progress * 80
      const opacity = 1 - progress * 1.4
      contentRef.current.style.transform = `translateY(${translateY}px)`
      contentRef.current.style.opacity = String(Math.max(0, opacity))
    }
  }

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const atTopOfPage = window.scrollY === 0

      if (atTopOfPage && !animationComplete) {
        e.preventDefault()

        accumulatedScrollRef.current = Math.max(0, Math.min(500, accumulatedScrollRef.current + e.deltaY))
        const progress = accumulatedScrollRef.current / 500
        applyProgress(progress)

        if (progress >= 1) {
          setAnimationComplete(true)
        }
      } else if (atTopOfPage && animationComplete && e.deltaY < 0) {
        e.preventDefault()

        accumulatedScrollRef.current = Math.max(0, Math.min(500, accumulatedScrollRef.current + e.deltaY))
        const progress = accumulatedScrollRef.current / 500
        applyProgress(progress)

        if (progress < 1) {
          setAnimationComplete(false)
        }
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      lastTouchY.current = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      const atTopOfPage = window.scrollY === 0
      const currentTouchY = e.touches[0].clientY
      const deltaY = lastTouchY.current - currentTouchY

      if (atTopOfPage && !animationComplete) {
        e.preventDefault()

        accumulatedScrollRef.current = Math.max(0, Math.min(500, accumulatedScrollRef.current + deltaY * 3))
        const progress = accumulatedScrollRef.current / 500
        applyProgress(progress)

        if (progress >= 1) setAnimationComplete(true)
      } else if (atTopOfPage && animationComplete && deltaY < 0) {
        e.preventDefault()

        accumulatedScrollRef.current = Math.max(0, Math.min(500, accumulatedScrollRef.current + deltaY * 3))
        const progress = accumulatedScrollRef.current / 500
        applyProgress(progress)

        if (progress < 1) setAnimationComplete(false)
      }

      lastTouchY.current = currentTouchY
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("touchstart", handleTouchStart, { passive: false })
    window.addEventListener("touchmove", handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [animationComplete])

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/fd9d4dac-83f2-403e-997d-ba744e1af9a1.jpg"
          alt="Современный каркасный дом"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div
        ref={contentRef}
        className="container mx-auto px-6 md:px-12 lg:pt-0 relative z-10 pb-0 pl-1 pr-1 pt-8 md:pt-0"
        style={{
          willChange: "transform, opacity",
          transform: "translateY(0px)",
          opacity: 1,
        }}
      >
        <div className="mb-80 md:mb-72 lg:mb-96">
          <div className="flex justify-center mb-1">
            <img src="https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/7c02c37b-0628-48a0-889b-71c9f1738e91.png" alt="ФорТЭК" className="h-28 w-auto object-contain md:h-40 lg:h-48" />
          </div>

          <h1 className="text-7xl font-medium text-balance text-center text-white mb-0 tracking-tight leading-[0.9] lg:text-8xl">
            <span className="text-orange-200">{"Строим надёжно"}</span>
          </h1>
        </div>
      </div>

      {animationComplete && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-30">
          <ArrowDown className="w-5 h-5 text-white/60" />
        </div>
      )}
    </section>
  )
}