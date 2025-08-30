import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Mail } from "lucide-react"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-8 text-sm text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">Case Studies</h2>
            <p className="mb-4">
              Our case studies showcase real-world applications of our interactive 3D experiences, VR solutions, and
              digital twin implementations. From architectural visualizations to industrial training simulators,
              discover how we've helped companies transform their vision into reality.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Featured Projects</h3>
            <ul className="space-y-2 ml-4">
              <li>• Architectural visualization for commercial developments</li>
              <li>• Industrial training simulators for manufacturing</li>
              <li>• Interactive product configurators for e-commerce</li>
              <li>• Virtual showrooms and digital twin implementations</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Technical Insights</h3>
            <p>
              We're currently updating our case studies section with detailed project breakdowns, client testimonials,
              and technical insights. Check back soon for comprehensive documentation of our most impactful work.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Contact Us</h3>
            <p>
              For detailed case studies and project examples, contact us at contact@inferstellen.com or +92 334 2229582.
            </p>
          </section>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link href="/">
            <Button size="lg" className="rounded-full">
              <Home className="mr-2 size-4" />
              Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="rounded-full bg-transparent">
              <Mail className="mr-2 size-4" />
              Contact Us
            </Button>
          </Link>
        </div>

        <div className="text-center pt-8 space-y-2">
          <p className="text-sm text-muted-foreground">Have a Great Day!</p>
          <p className="text-sm text-muted-foreground">You're Breathtaking!</p>
        </div>
      </div>
    </div>
  )
}
