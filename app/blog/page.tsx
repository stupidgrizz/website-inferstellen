import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Mail } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground">Have a Great Day!</h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-medium">You're Breathtaking!</p>

        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            Welcome to the INFERSTELLEN blog! Here we share insights about the latest trends in interactive 3D
            technology, VR development, digital twin implementation, and real-time production techniques using Unreal
            Engine, Unity, and Blender.
          </p>

          <p className="text-sm text-muted-foreground">
            Our team regularly publishes articles covering technical tutorials, industry best practices, project
            behind-the-scenes content, and thought leadership pieces about the future of immersive experiences.
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
