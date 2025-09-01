"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, ArrowRight, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AutomotiveMechanicalPage() {
  const service = {
    title: "Automotive & Mechanical Design",
    shortDescription:
      "Specialized visualization and simulation solutions for automotive and mechanical engineering with precise technical accuracy.",
    fullDescription:
      "Our automotive and mechanical design service delivers cutting-edge visualization and simulation solutions tailored for engineering excellence. We specialize in CAD integration, technical visualization, and interactive configurators that bring complex mechanical systems to life. From prototype visualization to manufacturing workflows, we provide comprehensive solutions that enhance design validation, reduce development costs, and accelerate time-to-market for automotive and mechanical products.",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_5KG3n1JnX0nD0m1xGcIotuMhJmHB/oMvfTFLUQQU97jTC86anUF/public/services-videos/automotive-mechanical-design.mp4",
    technologies: ["SolidWorks", "AutoCAD", "Unreal Engine", "Unity", "Blender", "CATIA", "Fusion 360", "KeyShot"],
    category: "automotive-mechanical",
    year: "2024",
    specialization: "Technical Engineering Visualization",
    duration: "3-12 weeks",
    challenge:
      "Creating accurate technical visualizations that maintain engineering precision while delivering engaging interactive experiences for complex automotive and mechanical systems across multiple platforms and use cases.",
    solution:
      "We integrate industry-standard CAD tools with advanced visualization engines to create pixel-perfect technical representations. Our workflow combines SolidWorks and AutoCAD data with Unreal Engine rendering capabilities, ensuring both technical accuracy and visual excellence for engineering documentation and client presentations.",
    results: [
      "Precise technical accuracy matching CAD specifications",
      "Interactive 3D configurators for complex assemblies",
      "Reduced prototype development costs by 45%",
      "Enhanced engineering documentation and presentations",
      "Streamlined manufacturing workflow visualization",
    ],
  }

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
              >
                <ChevronLeft className="size-4" />
                Back to Services
              </Link>

              <div className="aspect-[4/1] rounded-xl overflow-hidden shadow-lg border border-border/40 bg-gradient-to-r from-background to-muted/20 mb-12">
                <img
                  src="/automotive-and-mechanical-design-banner-with-engi.png"
                  alt="Automotive & Mechanical Design Service Banner"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary">{service.year}</Badge>
                    <Badge variant="outline">{service.specialization}</Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{service.title}</h1>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{service.fullDescription}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                      <Button size="lg" className="rounded-full">
                        <Calendar className="mr-2 size-4" />
                        Book Consultation
                      </Button>
                    </Link>
                    <Link href={`/projects?category=${service.category}`}>
                      <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                        <ExternalLink className="mr-2 size-4" />
                        View Projects
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                    <iframe
                      src="https://www.youtube.com/embed/UeWhmUmY2_k?si=LJHXqq28Vk8ftVSJ&autoplay=1&mute=1&loop=1&playlist=UeWhmUmY2_k"
                      title="Automotive & Mechanical Design Service Video"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-20 bg-muted/30">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Specialization</h3>
                    <p className="text-muted-foreground">{service.specialization}</p>
                  </CardContent>
                </Card>
                <Card className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Timeline</h3>
                    <p className="text-muted-foreground">{service.duration}</p>
                  </CardContent>
                </Card>
                <Card className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.slice(0, 2).map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {service.technologies.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{service.technologies.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                    <p className="text-muted-foreground leading-relaxed">{service.challenge}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
                    <p className="text-muted-foreground leading-relaxed">{service.solution}</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">What You Get</h2>
                  <ul className="space-y-3">
                    {service.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="size-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Ready to Enhance Your Engineering Projects?
              </h2>
              <p className="text-primary-foreground/80 md:text-lg mb-8">
                Let's create precise technical visualizations that showcase your automotive and mechanical designs with
                engineering accuracy and visual excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="rounded-full px-8">
                    Start Your Project
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href={`/projects?category=${service.category}`}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 bg-transparent border-white text-white hover:bg-white/10"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
