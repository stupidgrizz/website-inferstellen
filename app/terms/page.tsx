import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Mail } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">Have a Great Day!</h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-medium">You're Breathtaking!</p>
        </div>

        <div className="space-y-8 text-sm text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">Terms of Service</h2>
            <p className="mb-4">
              These Terms of Service govern your use of INFERSTELLEN's interactive 3D experiences, VR solutions, digital
              twin implementations, and related services.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Service Agreement</h3>
            <p className="mb-2">By engaging with INFERSTELLEN, you agree to the following terms:</p>
            <ul className="space-y-2 ml-4">
              <li>• All projects are subject to detailed specifications and timelines</li>
              <li>• Intellectual property rights are clearly defined in project contracts</li>
              <li>• Payment terms and milestones are established before project commencement</li>
              <li>• Changes to project scope require written approval and may affect pricing</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Intellectual Property</h3>
            <p>
              Custom solutions developed for clients remain the property of the client upon full payment. INFERSTELLEN
              retains rights to general methodologies, tools, and techniques developed during the project.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Limitation of Liability</h3>
            <p>
              INFERSTELLEN provides services "as is" and makes no warranties beyond those explicitly stated in project
              agreements. Our liability is limited to the value of services provided.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Support and Maintenance</h3>
            <p>
              Post-delivery support and maintenance terms are defined in individual project agreements. Standard support
              includes bug fixes and technical assistance for a specified period.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Contact Information</h3>
            <p>For questions about these terms, contact us at contact@inferstellen.com or +92 334 2229582.</p>
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
      </div>
    </div>
  )
}
