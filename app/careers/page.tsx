import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Mail } from "lucide-react"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground">Have a Great Day!</h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-medium">You're Breathtaking!</p>

        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            Join the INFERSTELLEN team and help us render odd things into beautiful chaos! We're always looking for
            talented individuals passionate about interactive 3D experiences, VR development, and cutting-edge real-time
            production.
          </p>

          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              <strong>Open Positions:</strong>
            </p>
            <ul className="space-y-2">
              <li>• Senior Unreal Engine Developer</li>
              <li>• 3D Artist & Technical Artist</li>
              <li>• VR Experience Designer</li>
              <li>• Real-time Production Specialist</li>
              <li>• Digital Twin Solutions Engineer</li>
            </ul>
          </div>

          <p className="text-sm text-muted-foreground">
            We offer competitive compensation, flexible working arrangements, and the opportunity to work on
            groundbreaking projects with industry-leading clients.
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
