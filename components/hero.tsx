"use client"

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, #f3e5e1 0%, #f0e2dd 40%, #f8ebe7 100%)",
      }}
    >
      {/* Sutiles efectos decorativos */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(255, 192, 203, 0.25), transparent)",
          }}
        />
        <div
          className="absolute bottom-10 left-10 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(250, 214, 195, 0.25), transparent)",
          }}
        />
      </div>

      {/* Contenido del hero */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-8">
          Minimalist Fashion
        </p>
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-foreground">
          Essential Pieces
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 font-light">
          Curated collection of timeless basics and elevated essentials for the modern wardrobe
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="/shop"
            className="px-8 py-3 bg-primary text-primary-foreground hover:bg-opacity-90 transition-all text-sm tracking-wider"
          >
            Explore Collection
          </a>
          <a
            href="#lookbook"
            className="px-8 py-3 border border-primary hover:bg-primary hover:text-primary-foreground transition-all text-sm tracking-wider"
          >
            View Lookbook
          </a>
        </div>
      </div>
    </section>
  )
}

