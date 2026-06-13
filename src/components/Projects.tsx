import { useState, useEffect, useRef } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Каркасный дом, СНТ Лидер",
    category: "Классическая каркасная технология",
    location: "Кубовинский сельсовет, Новосибирская область",
    year: "2026",
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
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/0abc73d6-be94-4108-846f-15e08d3b27fa.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/433615f9-dd0b-4ead-8562-fb7f06ad1386.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/a102d0bb-9d97-47dd-9251-e91e3c310b1a.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/7fceac0f-1752-4f38-93a3-1d4f882560f6.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/5d5f35f1-cc1c-49d0-928d-224907bbb1c3.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/889f4dc2-461e-4354-8057-a1ba356c2f9c.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/46195ea9-1895-4885-ac1b-dd0f85c63a6a.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/6bf82a1d-7760-435d-8ec5-17f548eef64d.png",
    ],
  },
  {
    id: 7,
    title: "Каркасный 2-х этажный дом, п.Агролес",
    category: "Классическая каркасная технология",
    location: "Искитимский район, Новосибирская область",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/ab31d3f7-dcfa-49bf-a643-1a9ac33dfbf6.jpg",
    gallery: [
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/ab31d3f7-dcfa-49bf-a643-1a9ac33dfbf6.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/0e48a591-3277-477e-8a27-d3e0742551bf.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/5dc5e8e0-b562-49b3-b0f4-2dfbeb313c62.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/87b0cf7f-b989-496d-baac-4191e29630f7.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/529bb2f3-f1ad-40e3-acf6-2f96203302a9.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/b2538f2f-085f-4d8a-96cd-d67c7174911e.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/cb6664b0-ab10-42be-92a8-8f4d9a3fe830.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/fe09d2ba-cbe4-4451-af33-956a5ebd08d1.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/088288a7-2e8b-49bf-9d85-f72a0182b174.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/ee808984-680d-41e4-ad9d-b06971a35c00.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/cf9f2574-d545-4954-a7ca-844742cf437b.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/5749268d-3cb0-4a45-9eb7-5a34e4191a3e.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/e8627063-8f1f-4a20-954c-445960ae8593.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/32819656-7ef2-4a62-9a4e-f037f3e3bf9f.jpg",
    ],
  },
  {
    id: 2,
    title: "Капитальный ремонт Мясоконсервного завода",
    category: "Капитальный ремонт помещений",
    location: "г. Бийск",
    year: "2026",
    image: "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/031b70dc-aa49-48fd-a055-765c9f03d875.jpg",
    gallery: [
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/031b70dc-aa49-48fd-a055-765c9f03d875.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/6f724916-d177-462e-a167-4514292a7c60.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/49912a80-28d1-441a-b0fe-85c7428711fc.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/5745ff81-1780-49f6-aa14-4c5787744e73.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/134ad43a-5460-4599-ba29-bc2f9166544b.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/658980a0-e336-4182-9561-6314f97206ff.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/cc226ce8-e014-477e-9ae0-43019605d94f.jpg",
    ],
  },
  {
    id: 3,
    title: "Каркасный дом в стиле «hi-tech»",
    category: "Классическая каркасная технология",
    location: "Новосибирская область",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/88f3559a-6439-4c29-80f2-0c119c4709c4.jpg",
    gallery: [
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/88f3559a-6439-4c29-80f2-0c119c4709c4.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/39f2e999-a281-45c0-8a8f-4bb05c913bf1.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/efba431f-d081-4936-a927-119f806c91ce.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/14744c3a-8191-4212-b696-1cdba2a0e45f.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/04aceee2-07e7-402c-b6b2-c336c31e627e.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/b487306d-c9d9-4e7d-955b-de9c55ba9021.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/67a8504c-fd80-4f3c-824f-3785795241c4.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/dad911ce-19e3-4171-8a9c-a91d8b6a23c9.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/d168206a-f218-42c5-98d7-09250a4928c2.jpg",
    ],
  },
  {
    id: 4,
    title: "Каркасный дом, СНТ Лазурный берег",
    category: "Классическая каркасная технология",
    location: "Новосибирская область",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/aecb91e9-a0b1-4b9a-a764-c0073fd6ab2d.jpg",
    gallery: [
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/aecb91e9-a0b1-4b9a-a764-c0073fd6ab2d.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/252c5e06-e461-4999-b1f3-08b9fe982816.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/f8a9b7a2-965f-471e-9336-05df9f32f571.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/541ce8f9-161e-4b87-b29c-2bb8d24a0a28.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/16a4c5f8-c2db-4f12-9e0e-6a284f45ca5f.jpg",
    ],
  },
  {
    id: 5,
    title: "Кирпичный 2-х этажный дом",
    category: "Кирпичное строительство",
    location: "с. Ленинское, Новосибирская область",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/f8c59bd9-8c9d-401b-9676-6784e9df99d9.jpg",
    gallery: [
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/f8c59bd9-8c9d-401b-9676-6784e9df99d9.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/4bcf3eea-144f-4fca-99a0-8793f527b396.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/3b2ad557-81f9-45c1-9444-d0fd61a15324.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/d74a6dea-50b0-42c3-9357-09321e1b6d93.jpg",
    ],
  },
  {
    id: 6,
    title: "Каркасный дом, п. Агролес",
    category: "Классическая каркасная технология",
    location: "Искитимский район, Новосибирская область",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/0b9eee0b-d0c3-4915-b987-50449e88825d.jpg",
    gallery: [
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/0b9eee0b-d0c3-4915-b987-50449e88825d.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/0890e890-46d3-4d4b-a544-11aaac279beb.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/b1bb99c1-3a1b-477b-96ca-274ae5ae92b1.png",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/e504944d-e580-424f-a670-eb3b3036a60c.jpg",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/aebd0850-435d-4987-8536-1e01e226ae3a.png",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/50da7c3a-831a-4c55-a904-e816189644f0.png",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/abfbdb8a-b511-4fdc-9f41-065433983c59.png",
      "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/e91eb0d1-38dd-4ab4-b4cd-1f90a1f4baf8.png",
    ],
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
    <section id="projects" className="py-20 md:py-32 bg-secondary/50 relative">
      <img src="https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/2c465510-4bb0-4999-a218-666f97958796.png" alt="ФорТЭК" className="absolute top-6 left-6 h-10 w-auto object-contain opacity-60 z-10" />
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Реализованные объекты</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Наши проекты</h2>
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

              <div>
                <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {project.category} · {project.location}
                </p>
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

          <div className="w-full max-w-4xl px-10 md:px-24" onClick={(e) => e.stopPropagation()}>
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