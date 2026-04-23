const videos = [
  {
    id: 1,
    url: "https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/11aefd72-fd7b-470b-8489-6baf777c5978.mp4",
    title: "Видеоотзыв",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="py-32 md:py-29 bg-secondary/50 relative">
      <img
        src="https://cdn.poehali.dev/projects/a5534061-e108-4a3e-a7e8-8dd4e55bb3fd/bucket/2c465510-4bb0-4999-a218-666f97958796.png"
        alt="ФорТЭК"
        className="absolute top-6 left-6 h-10 w-auto object-contain opacity-60 z-10"
      />
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Клиенты о нас</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Обзоры и отзывы</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-background border border-border overflow-hidden">
              <video
                src={video.url}
                controls
                preload="metadata"
                className="w-full aspect-video object-cover"
                title={video.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
