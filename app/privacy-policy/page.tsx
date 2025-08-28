import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Mail } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">Have a Great Day!</h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-medium">You're Breathtaking!</p>
        </div>

        <div className="space-y-8 text-sm text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">Privacy Policy</h2>
            <p className="mb-4">
              At INFERSTELLEN, we are committed to protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact
              with our services.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Information We Collect</h3>
            <ul className="space-y-2 ml-4">
              <li>• Contact information (name, email, phone number)</li>
              <li>• Company information and project requirements</li>
              <li>• Technical specifications and system requirements</li>
              <li>• Communication records and project documentation</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">How We Use Your Information</h3>
            <ul className="space-y-2 ml-4">
              <li>• To provide and improve our interactive 3D and VR services</li>
              <li>• To communicate about projects and technical support</li>
              <li>• To develop customized solutions for your requirements</li>
              <li>• To maintain and enhance our service quality</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Data Protection</h3>
            <p>
              We implement industry-standard security measures to protect your information and ensure confidentiality
              throughout our collaboration. Your data is never shared with third parties without explicit consent.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Contact Us</h3>
            <p>For questions about this Privacy Policy, contact us at contact@inferstellen.com or +92 334 2229582.</p>
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
