"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Trash2 } from "lucide-react"

interface CartItem {
  id: string
  name: string
  price: number
  size: string
  color: string
  quantity: number
  image: string
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("void-cart") || "[]")
    setCartItems(cart)
    setCartCount(cart.reduce((sum: number, item: CartItem) => sum + item.quantity, 0))
  }, [])

  const updateQuantity = (index: number, newQuantity: number) => {
    const updatedCart = [...cartItems]
    if (newQuantity <= 0) {
      updatedCart.splice(index, 1)
    } else {
      updatedCart[index].quantity = newQuantity
    }
    setCartItems(updatedCart)
    localStorage.setItem("void-cart", JSON.stringify(updatedCart))
    setCartCount(updatedCart.reduce((sum: number, item: CartItem) => sum + item.quantity, 0))
  }

  const removeItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index)
    setCartItems(updatedCart)
    localStorage.setItem("void-cart", JSON.stringify(updatedCart))
    setCartCount(updatedCart.reduce((sum: number, item: CartItem) => sum + item.quantity, 0))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const shipping = total > 100 ? 0 : 10
  const subtotal = total + shipping

  return (
    <div className="min-h-screen bg-background">
      <Navigation cartCount={cartCount} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-light mb-12">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-8">Your cart is empty</p>
            <Link
              href="/shop"
              className="px-8 py-3 bg-primary text-primary-foreground hover:bg-opacity-90 transition-all text-sm tracking-wider inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex gap-6 pb-6 border-b border-border">
                    <div className="w-24 h-24 bg-muted flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-sm font-light mb-2">{item.name}</h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        {item.color} / {item.size}
                      </p>
                      <p className="text-sm font-light">${item.price.toFixed(2)}</p>
                    </div>

                    <div className="flex flex-col items-end gap-4">
                      <button
                        onClick={() => removeItem(index)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="px-2 py-1 border border-border hover:border-primary transition-all text-xs"
                        >
                          −
                        </button>
                        <span className="text-sm font-light w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="px-2 py-1 border border-border hover:border-primary transition-all text-xs"
                        >
                          +
                        </button>
                      </div>

                      <p className="text-sm font-light">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-20 bg-secondary p-6">
                <h2 className="text-lg font-light mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{shipping === 0 ? "Shipping (Free)" : "Shipping"}</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between mb-8 text-lg font-light">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <Link
                  href="/checkout"
                  className="w-full block text-center py-3 bg-primary text-primary-foreground hover:bg-opacity-90 transition-all text-sm tracking-wider mb-3"
                >
                  Proceed to Checkout
                </Link>

                <Link
                  href="/shop"
                  className="w-full block text-center py-3 border border-primary hover:bg-primary hover:text-primary-foreground transition-all text-sm tracking-wider"
                >
                  Continue Shopping
                </Link>

                {shipping === 0 && (
                  <p className="text-xs text-muted-foreground text-center mt-4">Free shipping applied!</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
