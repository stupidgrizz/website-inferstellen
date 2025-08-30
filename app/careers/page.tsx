import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Mail } from "lucide-react"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-8 text-sm text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">Careers</h2>
            <p className="mb-4">
              Join the INFERSTELLEN team and help us render odd things into beautiful chaos! We're always looking for
              talented individuals passionate about interactive 3D experiences, VR development, and cutting-edge
              real-time production.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Open Positions</h3>
            <ul className="space-y-2 ml-4">
              <li>• Senior Unreal Engine Developer</li>
              <li>• 3D Artist & Technical Artist</li>
              <li>• VR Experience Designer</li>
              <li>• Real-time Production Specialist</li>
              <li>• Digital Twin Solutions Engineer</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">What We Offer</h3>
            <p>
              We offer competitive compensation, flexible working arrangements, and the opportunity to work on
              groundbreaking projects with industry-leading clients. Join our team of creative technologists and
              innovators.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Contact Us</h3>
            <p>For career opportunities and applications, contact us at careers@inferstellen.com or +92 334 2229582.</p>
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
