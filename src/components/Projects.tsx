import { useState, useEffect, useRef } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Каркасный дом, СНТ Лидер",
    category: "Классическая каркасная технология",
    location: "Кубовинский сельсовет, Новосибирская область",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/ae49259a-94e3-4d31-816c-7c7bf1bc84d9.jpg",
    gallery: [
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/ae49259a-94e3-4d31-816c-7c7bf1bc84d9.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/28d28392-6d13-46c3-a0f3-972cfb06c1df.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/9d2acd84-76b4-45f9-ad39-2dd5d206c785.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/8aec4346-10d7-4fc4-a034-be6e4ad10472.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/c46cf747-35ed-4c02-8d78-37c06fc6eeef.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/d3b74b55-6c99-48a6-9845-4b43c4e03d96.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/72fd3300-e444-48fb-80b3-4122dfb5d0bb.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/d05c2781-444e-42d7-9aa2-d6c4cb0175f2.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/4f553f11-efdf-4ca0-a234-7cdf6915d3df.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/7387c592-bc83-4ebb-a54f-2b8c36026842.jpg",
    ],
  },
  {
    id: 2,
    title: "Капитальный ремонт Мясоконсервного завода",
    category: "Капитальный ремонт помещений",
    location: "г. Бийск",
    year: "2023",
    image: "/images/hously-2.png",
    gallery: [],
  },
  {
    id: 3,
    title: "Коттедж из газобетона",
    category: "Малоэтажное строительство",
    location: "Тверская область",
    year: "2023",
    image: "/images/hously-3.png",
    gallery: [],
  },
  {
    id: 4,
    title: "Реконструкция бизнес-центра",
    category: "Реконструкция",
    location: "Москва",
    year: "2024",
    image: "/images/hously-4.png",
    gallery: [],
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const [lightbox, setLightbox] = useState<{ projectId: number; index: number } | null>(null)
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightbox) return
      const project = projects.find((p) => p.id === lightbox.projectId)
      if (!project) return
      if (e.key === "Escape") setLightbox(null)
      if (e.key === "ArrowRight") setLightbox({ ...lightbox, index: (lightbox.index + 1) % project.gallery.length })
      if (e.key === "ArrowLeft") setLightbox({ ...lightbox, index: (lightbox.index - 1 + project.gallery.length) % project.gallery.length })
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [lightbox])

  const openLightbox = (projectId: number, index: number) => {
    const project = projects.find((p) => p.id === projectId)
    if (project && project.gallery.length > 0) setLightbox({ projectId, index })
  }

  const lightboxProject = lightbox ? projects.find((p) => p.id === lightbox.projectId) : null

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Реализованные объекты</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Наши проекты</h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Смотреть все проекты
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => openLightbox(project.id, 0)}
            >
              <div ref={(el) => (imageRefs.current[index] = el)} className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? "scale-105" : "scale-100"
                  }`}
                />
                {project.gallery.length > 1 && (
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-sm">
                    {project.gallery.length} фото
                  </div>
                )}
                <div
                  className="absolute inset-0 bg-primary origin-top"
                  style={{
                    transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.category} · {project.location}
                  </p>
                </div>
                <span className="text-muted-foreground/60 text-sm">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && lightboxProject && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-7 h-7" />
          </button>

          <button
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightboxProject.gallery.length) % lightboxProject.gallery.length })
            }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="w-full max-w-4xl px-16 md:px-24" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxProject.gallery[lightbox.index]}
              alt={`${lightboxProject.title} — фото ${lightbox.index + 1}`}
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="mt-4 flex items-center justify-between text-white/60 text-sm">
              <p>{lightboxProject.title}</p>
              <p>{lightbox.index + 1} / {lightboxProject.gallery.length}</p>
            </div>
            <div className="mt-3 flex gap-2 justify-center">
              {lightboxProject.gallery.map((_, i) => (
                <button
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${i === lightbox.index ? "bg-white" : "bg-white/30"}`}
                  onClick={() => setLightbox({ ...lightbox, index: i })}
                />
              ))}
            </div>
          </div>

          <button
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightboxProject.gallery.length })
            }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  )
}