import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Mail } from "lucide-react"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-8 text-sm text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">Documentation</h2>
            <p className="mb-4">
              Our comprehensive documentation covers technical specifications, API references, implementation guides,
              and best practices for working with our interactive 3D solutions, VR experiences, and digital twin
              platforms.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Available Resources</h3>
            <ul className="space-y-2 ml-4">
              <li>• Technical specifications and system requirements</li>
              <li>• API references and integration guides</li>
              <li>• Implementation best practices and workflows</li>
              <li>• Troubleshooting guides and common solutions</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Integration Support</h3>
            <p>
              Find detailed guides for integrating our solutions with your existing systems, troubleshooting common
              issues, and maximizing the potential of your immersive experiences. Our documentation is continuously
              updated with the latest features and improvements.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Contact Us</h3>
            <p>
              For technical documentation requests or support, contact us at contact@inferstellen.com or +92 334
              2229582.
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
