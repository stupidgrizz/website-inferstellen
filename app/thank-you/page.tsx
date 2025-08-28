import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft, Mail, Phone } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/inferstellen-logo.png" alt="INFERSTELLEN" className="h-8 w-8 rounded-sm" />
              <span className="text-xl font-bold">INFERSTELLEN</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/projects" className="text-sm font-medium hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/faq" className="text-sm font-medium hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link href="/about">
                <Button variant="outline" size="sm">
                  Learn more
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your message has been successfully submitted. We've received your inquiry and will get back to you within 24
            hours.
          </p>

          {/* Next Steps */}
          <div className="bg-muted/50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">What happens next?</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                  1
                </div>
                <p className="text-sm">We'll review your project requirements and prepare a detailed response</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                  2
                </div>
                <p className="text-sm">Our team will reach out to schedule a consultation call</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                  3
                </div>
                <p className="text-sm">We'll provide you with a customized proposal and timeline</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-card border rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">Need immediate assistance?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">contact@inferstellen.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">+92 (334) 2229582</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link href="/projects">
              <Button className="w-full sm:w-auto">View Our Work</Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t mt-16">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img src="/inferstellen-logo.png" alt="INFERSTELLEN" className="h-6 w-6 rounded-sm" />
              <span className="text-lg font-bold">INFERSTELLEN</span>
            </div>
            <p className="text-sm text-muted-foreground">Rendering Odd Things into Beautiful Chaos!</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
