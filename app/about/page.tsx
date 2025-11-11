import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation cartCount={0} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-light mb-12">About VOID.</h1>

        <div className="space-y-8 prose prose-invert max-w-none">
          <div>
            <h2 className="text-2xl font-light mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              VOID. is committed to creating timeless, minimalist essentials that transcend trends. We believe that
              great clothing should be versatile, sustainable, and accessible to everyone who values quality and
              simplicity.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-light mb-4">Craftsmanship</h2>
            <p className="text-muted-foreground leading-relaxed">
              Each piece is thoughtfully designed and produced using premium, sustainable materials. We work directly
              with manufacturers who share our commitment to ethical production and environmental responsibility.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-light mb-4">Sustainability</h2>
            <p className="text-muted-foreground leading-relaxed">
              We prioritize sustainable practices throughout our entire supply chain. From organic cotton to recycled
              materials, we're dedicated to minimizing our environmental impact while maintaining the highest quality
              standards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-light mb-4">Community</h2>
            <p className="text-muted-foreground leading-relaxed">
              VOID. exists for those who believe less is more. We're building a community of individuals who appreciate
              the beauty of simplicity and the value of timeless design. Join us in reimagining what essential fashion
              can be.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
