import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Mail } from "lucide-react"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground">Have a Great Day!</h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-medium">You're Breathtaking!</p>

        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            Our case studies showcase real-world applications of our interactive 3D experiences, VR solutions, and
            digital twin implementations. From architectural visualizations to industrial training simulators, discover
            how we've helped companies transform their vision into reality.
          </p>

          <p className="text-sm text-muted-foreground">
            We're currently updating our case studies section with detailed project breakdowns, client testimonials, and
            technical insights. Check back soon for comprehensive documentation of our most impactful work.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </div>
    </div>
  )
}
