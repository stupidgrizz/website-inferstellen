import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Mail } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-8 text-sm text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">Blog</h2>
            <p className="mb-4">
              Welcome to the INFERSTELLEN blog! Here we share insights about the latest trends in interactive 3D
              technology, VR development, digital twin implementation, and real-time production techniques using Unreal
              Engine, Unity, and Blender.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Latest Articles</h3>
            <ul className="space-y-2 ml-4">
              <li>• Technical tutorials and implementation guides</li>
              <li>• Industry best practices and optimization techniques</li>
              <li>• Project behind-the-scenes content and case studies</li>
              <li>• Thought leadership about the future of immersive experiences</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Topics We Cover</h3>
            <p>
              Our team regularly publishes articles covering Unreal Engine development, Unity optimization, Blender
              workflows, VR experience design, and digital twin architecture. Stay updated with the latest industry
              insights and technical innovations.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Contact Us</h3>
            <p>
              For article suggestions or collaboration opportunities, contact us at contact@inferstellen.com or +92 334
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
