"use client"

import Link from "next/link"
import { products } from "@/lib/products"

export default function ProductGrid() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Featured Collection</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">New Arrivals</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
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

        <div className="flex justify-center mt-16">
          <Link
            href="/shop"
            className="px-8 py-3 border border-primary hover:bg-primary hover:text-primary-foreground transition-all text-sm tracking-wider"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
