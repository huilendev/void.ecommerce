"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { products } from "@/lib/products"
import Link from "next/link"

export default function Shop() {
  const [cartCount, setCartCount] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredProducts = selectedCategory ? products.filter((p) => p.category === selectedCategory) : products

  return (
    <div className="min-h-screen bg-background">
      <Navigation cartCount={cartCount} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-light tracking-tight mb-8">Shop</h1>

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 text-sm tracking-wider transition-all ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              All
            </button>
            {["tops", "bottoms", "outerwear"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm tracking-wider transition-all capitalize ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border border-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group">
              <div className="aspect-square overflow-hidden bg-muted mb-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-light mb-2">{product.name}</h3>
              <p className="text-xs text-muted-foreground mb-2">{product.description}</p>
              <p className="text-sm font-light">${product.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
