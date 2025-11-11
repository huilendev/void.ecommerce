"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, Menu, X } from "lucide-react"

interface NavigationProps {
  cartCount: number
}

export default function Navigation({ cartCount }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-light tracking-wider">
            VOID.
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-sm hover:text-accent transition-colors">
              Shop
            </Link>
            <Link href="/about" className="text-sm hover:text-accent transition-colors">
              About
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link href="/" className="block py-2 text-sm hover:text-accent">
              Home
            </Link>
            <Link href="/shop" className="block py-2 text-sm hover:text-accent">
              Shop
            </Link>
            <Link href="/about" className="block py-2 text-sm hover:text-accent">
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
