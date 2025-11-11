import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 items-start">
          {/* Columna 1: Branding */}
          <div className="col-span-1">
            <h3 className="text-xl font-light mb-4 tracking-wide">VOID.</h3>
            <p className="text-sm opacity-75 leading-relaxed">
              Minimalist essentials for the modern wardrobe.
            </p>
          </div>

          {/* Columna 2: Shop */}
          <div className="md:col-span-1 lg:col-start-3">
            <h4 className="text-sm font-light tracking-wider uppercase mb-4">
              Shop
            </h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <Link href="/shop" className="hover:opacity-100 transition-opacity">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?category=tops" className="hover:opacity-100 transition-opacity">
                  Tops
                </Link>
              </li>
              <li>
                <Link href="/shop?category=bottoms" className="hover:opacity-100 transition-opacity">
                  Bottoms
                </Link>
              </li>
              <li>
                <Link href="/shop?category=outerwear" className="hover:opacity-100 transition-opacity">
                  Outerwear
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-primary-foreground/20 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm opacity-75">
          <p>&copy; 2025 VOID. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex gap-6">
            <Link href="/privacy" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:opacity-100 transition-opacity">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
