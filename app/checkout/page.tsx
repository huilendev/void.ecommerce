"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

interface CartItem {
  id: string
  name: string
  price: number
  size: string
  color: string
  quantity: number
}

interface CheckoutFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  cardNumber: string
  cardExpiry: string
  cardCvc: string
}

export default function Checkout() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartCount, setCartCount] = useState(0)
  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  })
  const [loading, setLoading] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("void-cart") || "[]")
    setCartItems(cart)
    setCartCount(cart.reduce((sum: number, item: CartItem) => sum + item.quantity, 0))
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      localStorage.removeItem("void-cart")
      setOrderComplete(true)
      setCartCount(0)
      setTimeout(() => {
        router.push("/")
      }, 3000)
    }, 1500)
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = total > 100 ? 0 : 10
  const subtotal = total + shipping

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navigation cartCount={cartCount} />
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="text-5xl mb-6">✓</div>
          <h1 className="text-3xl font-light mb-4">Order Confirmed</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your purchase! Your order has been placed successfully.
          </p>
          <p className="text-sm text-muted-foreground mb-8">A confirmation email has been sent to {formData.email}</p>
          <p className="text-xs text-muted-foreground">Redirecting to home page...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation cartCount={cartCount} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-light mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <h2 className="text-lg font-light mb-6">Shipping Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="col-span-1 px-4 py-3 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="col-span-1 px-4 py-3 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="col-span-1 px-4 py-3 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="col-span-1 px-4 py-3 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  />
                </div>
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm mt-4"
                />
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="col-span-1 px-4 py-3 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="col-span-1 px-4 py-3 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  />
                  <input
                    type="text"
                    name="zip"
                    placeholder="ZIP Code"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                    className="col-span-1 px-4 py-3 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-lg font-light mb-6">Payment Information</h2>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm mb-4"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="cardExpiry"
                    placeholder="MM/YY"
                    value={formData.cardExpiry}
                    onChange={handleChange}
                    required
                    className="col-span-1 px-4 py-3 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  />
                  <input
                    type="text"
                    name="cardCvc"
                    placeholder="CVC"
                    value={formData.cardCvc}
                    onChange={handleChange}
                    required
                    className="col-span-1 px-4 py-3 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-primary text-primary-foreground hover:bg-opacity-90 disabled:opacity-50 transition-all text-sm tracking-wider font-light"
              >
                {loading ? "Processing..." : "Complete Purchase"}
              </button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-secondary p-6">
              <h2 className="text-lg font-light mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cartItems.map((item, index) => (
                  <div key={index} className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="font-light">{item.name}</span>
                      <span>x{item.quantity}</span>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>
                        {item.color} / {item.size}
                      </span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pb-6 border-t border-border pt-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{shipping === 0 ? "Shipping (Free)" : "Shipping"}</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between text-lg font-light">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <Link
                href="/cart"
                className="block text-center mt-6 py-2 border border-primary hover:bg-primary hover:text-primary-foreground transition-all text-sm tracking-wider"
              >
                Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
