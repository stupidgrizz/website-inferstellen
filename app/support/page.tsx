import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Mail } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground">Have a Great Day!</h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-medium">You're Breathtaking!</p>

        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            Need help with your INFERSTELLEN project? Our dedicated support team is here to assist you with technical
            issues, implementation guidance, and ongoing maintenance of your interactive 3D experiences and VR
            solutions.
          </p>

          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              <strong>Technical Support:</strong> Get help with integration, troubleshooting, and optimization
            </p>
            <p>
              <strong>Project Consultation:</strong> Discuss requirements and implementation strategies
            </p>
            <p>
              <strong>Training & Onboarding:</strong> Learn to effectively use and manage your solutions
            </p>
            <p>
              <strong>Maintenance & Updates:</strong> Keep your systems running smoothly with regular updates
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            Contact us at <strong>contact@inferstellen.com</strong> or call <strong>+92 334 2229582</strong>
            for immediate assistance.
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
