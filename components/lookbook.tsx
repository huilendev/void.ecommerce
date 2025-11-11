"use client"

import { useState } from "react"

const lookbookImages = [
  {
    id: 1,
    src: "/minimalist-white-oversized-t-shirt-editorial-photo.jpg",
    title: "Essentials",
    description: "Foundational basics in neutral tones",
  },
  {
    id: 2,
    src: "/minimalist-linen-shirt-neutral-beige-editorial-pho.jpg",
    title: "Layering",
    description: "Versatile pieces for every season",
  },
  {
    id: 3,
    src: "/minimalist-trousers-tailored-neutral-editorial-pho.jpg",
    title: "Silhouettes",
    description: "Clean lines and perfect proportions",
  },
  {
    id: 4,
    src: "/minimalist-wool-sweater-cream-editorial-fashion-ph.jpg",
    title: "Textures",
    description: "Natural fabrics and refined details",
  },
]

export default function Lookbook() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <section id="lookbook" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Inspiration</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">The VOID. Lookbook</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {lookbookImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-square overflow-hidden bg-secondary cursor-pointer"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                <p className="text-sm font-light">{image.title}</p>
                <p className="text-xs text-gray-300">{image.description}</p>
              </div>
            </button>
          ))}
        </div>

        {selectedIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="relative max-w-4xl w-full aspect-square overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lookbookImages[selectedIndex].src || "/placeholder.svg"}
                alt={lookbookImages[selectedIndex].title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 text-white text-2xl font-light"
              >
                ×
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8 text-white">
                <h3 className="text-2xl font-light mb-2">{lookbookImages[selectedIndex].title}</h3>
                <p className="text-sm text-gray-300">{lookbookImages[selectedIndex].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
