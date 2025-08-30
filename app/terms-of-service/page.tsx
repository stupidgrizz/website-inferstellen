import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Mail } from "lucide-react"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-8 text-sm text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">Terms of Service</h2>
            <p className="mb-4">
              Please read these terms carefully before using our services. By accessing and using Inferstellen's
              services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Services Description</h3>
            <p>
              Inferstellen provides web development, mobile app development, and digital consulting services. We reserve
              the right to modify or discontinue any service at any time.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">User Responsibilities</h3>
            <p>
              Users are responsible for providing accurate information and maintaining the confidentiality of their
              account credentials. You agree not to use our services for any unlawful purposes.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Payment Terms</h3>
            <p>
              Payment terms will be specified in individual project agreements. All fees are non-refundable unless
              otherwise stated in writing.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Intellectual Property</h3>
            <p>
              All intellectual property rights in our services and materials remain with Inferstellen unless explicitly
              transferred through a separate agreement.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Limitation of Liability</h3>
            <p>
              Inferstellen shall not be liable for any indirect, incidental, special, or consequential damages arising
              from the use of our services.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Contact Us</h3>
            <p>For questions about these terms, contact us at legal@inferstellen.com or +92 334 2229582.</p>
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
