"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ArrowRight, Check, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect } from "react"

export default function ServicesPage() {
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.querySelector(window.location.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 100)
    }
  }, [])

  const services = [
    {
      title: "3D Visualization",
      description:
        "High-quality 3D rendering and visualization solutions for architecture, products, and complex data representation with photorealistic results.",
      features: [
        "Photorealistic rendering",
        "Real-time ray tracing",
        "Interactive 3D models",
        "Architectural walkthroughs",
        "Product configurators",
        "Data visualization",
      ],
      image: "/3d-car-visualization-with-rtx-lighting.png",
      technologies: ["Blender", "3ds Max", "RTX", "Unreal Engine", "WebGL"],
      category: "3d-visualization",
    },
    {
      title: "Games & Media",
      description:
        "Interactive gaming experiences and digital media production with cutting-edge graphics, physics, and immersive storytelling.",
      features: [
        "Game development",
        "Interactive storytelling",
        "Advanced physics systems",
        "Character animation",
        "Level design",
        "Media production pipeline",
      ],
      image: "/3d-animation-studio.png",
      technologies: ["Unity", "Unreal Engine", "Blender", "Maya", "Substance"],
      category: "games-media",
    },
    {
      title: "VR Experiences",
      description:
        "Immersive virtual reality applications for training, visualization, entertainment, and interactive presentations with full haptic support.",
      features: [
        "Custom VR application development",
        "Multi-platform compatibility",
        "Haptic feedback integration",
        "Collaborative virtual environments",
        "Training simulation modules",
        "Performance analytics",
      ],
      image: "/futuristic-city-skyline-in-vr.png",
      technologies: ["Unity", "Unreal Engine", "Oculus SDK", "SteamVR", "WebXR"],
      category: "vr-experiences",
    },
    {
      title: "Automotive & Mechanical Design",
      description:
        "Specialized visualization and simulation solutions for automotive and mechanical engineering with precise technical accuracy.",
      features: [
        "CAD integration",
        "Technical visualization",
        "Mechanical simulation",
        "Assembly animations",
        "Performance analysis",
        "Interactive configurators",
      ],
      image: "/smart-factory-digital-twin.png",
      technologies: ["SolidWorks", "AutoCAD", "Unreal Engine", "Unity", "Blender"],
      category: "automotive-mechanical",
    },
    {
      title: "Virtual Production",
      description:
        "Live production solutions for events, broadcasts, and presentations using real-time rendering, virtual sets, and LED wall technology.",
      features: [
        "Virtual set design",
        "Live compositing",
        "Motion capture integration",
        "Real-time lighting",
        "Multi-camera support",
        "Broadcast integration",
      ],
      image: "/industrial-vr-training-simulation.png",
      technologies: ["Unreal Engine", "OBS", "NDI", "Motion Capture", "LED Walls"],
      category: "virtual-production",
    },
    {
      title: "Animation & Movies",
      description:
        "Professional animation services for films, commercials, explainer videos, and promotional content with cinematic quality.",
      features: [
        "3D character animation",
        "Motion graphics",
        "Visual effects",
        "Storyboard development",
        "Post-production",
        "Sound design integration",
      ],
      image: "/medical-vr-training.png",
      technologies: ["Blender", "Maya", "After Effects", "Cinema 4D", "Houdini"],
      category: "animation-movies",
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container mx-auto max-w-7xl px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
              >
                <ChevronLeft className="size-4" />
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Our Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                We specialize in creating cutting-edge interactive experiences, digital twins, VR applications, and
                immersive productions using the latest technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="w-full py-20">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-8 lg:gap-16">
              {services.map((service, i) => {
                const serviceId = service.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-+|-+$/g, "")
                const validId = /^[0-9]/.test(serviceId)
                  ? `service-${serviceId}`
                  : serviceId === "automotive-mechanical-design"
                    ? "service-automotive-mechanical-design"
                    : serviceId

                return (
                  <motion.div
                    key={i}
                    id={validId}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                      <div
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                      >
                        <div
                          className={`aspect-video lg:aspect-square overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}
                        >
                          <Image
                            src={service.image || "/placeholder.svg"}
                            width={600}
                            height={400}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className={`p-6 lg:p-8 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                          <CardHeader className="p-0 mb-6">
                            <CardTitle className="text-3xl font-bold mb-4">{service.title}</CardTitle>
                            <p className="text-muted-foreground text-lg">{service.description}</p>
                          </CardHeader>
                          <CardContent className="p-0">
                            <div className="grid gap-3 mb-6">
                              {service.features.map((feature, j) => (
                                <div key={j} className="flex items-center gap-3">
                                  <Check className="size-5 text-primary flex-shrink-0" />
                                  <span className="text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                            <div className="mb-6">
                              <h4 className="font-semibold mb-3">Technologies Used:</h4>
                              <div className="flex flex-wrap gap-2">
                                {service.technologies.map((tech, j) => (
                                  <span key={j} className="px-3 py-1 bg-muted rounded-full text-sm">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                              <Link href="/contact">
                                <Button size="lg" className="rounded-full">
                                  <Calendar className="mr-2 size-4" />
                                  Book an Appointment
                                </Button>
                              </Link>
                              <Link href={`/projects?category=${service.category}`}>
                                <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                                  View Projects
                                  <ArrowRight className="ml-2 size-4" />
                                </Button>
                              </Link>
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Ready to Transform Your Vision?</h2>
              <p className="text-primary-foreground/80 md:text-lg mb-8">
                Let's discuss how our services can bring your ideas to life with cutting-edge technology and creative
                expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="rounded-full px-8">
                    Contact Now
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 bg-transparent border-white text-white hover:bg-white/10"
                  >
                    View Projects
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
