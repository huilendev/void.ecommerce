"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { products } from "@/lib/products"
import { Check } from "lucide-react"

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const product = products.find((p) => p.id === productId)
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [quantity, setQuantity] = useState(1)
  const [cartCount, setCartCount] = useState(0)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("void-cart") || "[]")
      setCartCount(cart.reduce((sum: number, item: any) => sum + item.quantity, 0))
    }
    updateCartCount()
  }, [])

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation cartCount={cartCount} />
        <div className="flex items-center justify-center py-20">
          <p>Product not found</p>
        </div>
        <Footer />
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color")
      return
    }

    const cart = JSON.parse(localStorage.getItem("void-cart") || "[]")
    const existingItem = cart.find(
      (item: any) => item.id === product.id && item.size === selectedSize && item.color === selectedColor,
    )

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        size: selectedSize,
        color: selectedColor,
        quantity,
        image: product.image,
      })
    }

    localStorage.setItem("void-cart", JSON.stringify(cart))
    setCartCount(cart.reduce((sum: number, item: any) => sum + item.quantity, 0))
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation cartCount={cartCount} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-square overflow-hidden bg-muted">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col justify-start">
            <h1 className="text-4xl font-light mb-4">{product.name}</h1>
            <p className="text-lg text-muted-foreground mb-8">{product.description}</p>

            <p className="text-2xl font-light mb-8">${product.price.toFixed(2)}</p>

            <div className="mb-8">
              <label className="block text-sm font-light mb-4">Color</label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 text-sm border transition-all ${
                      selectedColor === color
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-light mb-4">Size</label>
              <div className="flex gap-3 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 text-sm border transition-all ${
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-light mb-4">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 border border-border hover:border-primary transition-all"
                >
                  −
                </button>
                <span className="text-lg font-light w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 border border-border hover:border-primary transition-all"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-sm tracking-wider font-light transition-all ${
                added
                  ? "bg-primary/50 text-primary-foreground"
                  : "bg-primary text-primary-foreground hover:bg-opacity-90"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                {added && <Check className="w-5 h-5" />}
                {added ? "Added to Cart" : "Add to Cart"}
              </div>
            </button>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-sm font-light mb-4">Details</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Premium quality materials</li>
                <li>Sustainably produced</li>
                <li>Free shipping on orders over $100</li>
                <li>30-day returns</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
