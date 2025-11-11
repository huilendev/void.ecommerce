"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Lookbook from "@/components/lookbook"
import ProductGrid from "@/components/product-grid"
import Footer from "@/components/footer"

export default function Home() {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("void-cart") || "[]")
      setCartCount(cart.reduce((sum: number, item: any) => sum + item.quantity, 0))
    }
    updateCartCount()
    window.addEventListener("storage", updateCartCount)
    return () => window.removeEventListener("storage", updateCartCount)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation cartCount={cartCount} />
      <Hero />
      <Lookbook />
      <ProductGrid />
      <Footer />
    </div>
  )
}
