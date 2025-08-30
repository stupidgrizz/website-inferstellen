import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Mail } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-8 text-sm text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">Support</h2>
            <p className="mb-4">
              Need help with your INFERSTELLEN project? Our dedicated support team is here to assist you with technical
              issues, implementation guidance, and ongoing maintenance of your interactive 3D experiences and VR
              solutions.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Support Services</h3>
            <ul className="space-y-2 ml-4">
              <li>• Technical Support: Get help with integration, troubleshooting, and optimization</li>
              <li>• Project Consultation: Discuss requirements and implementation strategies</li>
              <li>• Training & Onboarding: Learn to effectively use and manage your solutions</li>
              <li>• Maintenance & Updates: Keep your systems running smoothly with regular updates</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Response Times</h3>
            <p>
              We provide timely support responses and work closely with our clients to ensure smooth project delivery
              and ongoing system performance. Our team is experienced in troubleshooting complex technical challenges.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Contact Us</h3>
            <p>For immediate assistance, contact us at support@inferstellen.com or +92 334 2229582.</p>
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
