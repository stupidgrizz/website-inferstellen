"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const projects = [
    {
      title: "Digital Twin Port Management",
      description:
        "Real-time 3D visualization system for port operations with crane and truck management, featuring AI-powered logistics optimization and predictive analytics.",
      thumbnail: "/futuristic-port-with-cranes-and-digital-interface.png",
      category: "digital-twins",
      technologies: ["Unreal Engine", "AI", "Real-time Data", "3D Visualization"],
      year: "2024",
    },
    {
      title: "VR City Planning Experience",
      description:
        "Immersive virtual reality environment for showcasing upcoming futuristic city developments at corporate conferences with interactive elements.",
      thumbnail: "/futuristic-city-skyline-in-vr.png",
      category: "vr",
      technologies: ["VR", "Unity", "Interactive Design", "Architectural Viz"],
      year: "2024",
    },
    {
      title: "Interactive 3D Product Showcase",
      description:
        "Real-time 3D product visualization with RTX rendering for automotive industry presentations and marketing campaigns.",
      thumbnail: "/3d-car-visualization-with-rtx-lighting.png",
      category: "3d-visualization",
      technologies: ["RTX", "3D Modeling", "Real-time Rendering", "Blender"],
      year: "2023",
    },
    {
      title: "Architectural Visualization Suite",
      description:
        "Unreal Engine powered architectural walkthroughs with real-time lighting and interactive elements for client presentations.",
      thumbnail: "/modern-architecture-visualization.png",
      category: "3d-visualization",
      technologies: ["Unreal Engine", "Architectural Viz", "Real-time Lighting"],
      year: "2023",
    },
    {
      title: "Industrial Training Simulator",
      description:
        "VR training environment for industrial equipment operation with haptic feedback and comprehensive safety protocols.",
      thumbnail: "/industrial-vr-training-simulation.png",
      category: "vr",
      technologies: ["VR", "Training Simulation", "Haptic Feedback", "Safety"],
      year: "2024",
    },
    {
      title: "Smart Factory Digital Twin",
      description:
        "Complete digital replica of manufacturing facility with real-time monitoring, predictive maintenance, and optimization algorithms.",
      thumbnail: "/smart-factory-digital-twin.png",
      category: "digital-twins",
      technologies: ["IoT Integration", "Predictive Analytics", "Real-time Monitoring"],
      year: "2024",
    },
    {
      title: "Medical VR Training Platform",
      description:
        "Immersive medical training environment for surgical procedures with realistic haptic feedback and assessment tools.",
      thumbnail: "/medical-vr-training.png",
      category: "vr",
      technologies: ["Medical Simulation", "Haptic Technology", "Assessment Tools"],
      year: "2023",
    },
    {
      title: "Interactive Museum Experience",
      description:
        "Mixed reality installation for museums featuring historical reconstructions and interactive educational content.",
      thumbnail: "/interactive-museum-ar.png",
      category: "interactive",
      technologies: ["Mixed Reality", "Educational Content", "Historical Reconstruction"],
      year: "2023",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "digital-twins", label: "Digital Twins" },
    { id: "vr", label: "VR Experiences" },
    { id: "3d-visualization", label: "3D Visualization" },
    { id: "interactive", label: "Interactive Media" },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

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
                Our Projects
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Explore our portfolio of cutting-edge interactive 3D experiences, VR applications, digital twins, and
                immersive productions that push the boundaries of what's possible.
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="rounded-full"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="w-full py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg group">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={project.thumbnail || "/placeholder.svg"}
                        width={600}
                        height={400}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {project.year}
                        </Badge>
                        <Button variant="ghost" size="icon" className="size-8">
                          <ExternalLink className="size-4" />
                        </Button>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.map((tech, j) => (
                          <Badge key={j} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Link href="/contact">
                        <Button className="w-full rounded-lg">
                          Learn More
                          <ArrowRight className="ml-2 size-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Ready to Start Your Project?</h2>
              <p className="text-primary-foreground/80 md:text-lg mb-8">
                Let's collaborate to create extraordinary interactive experiences that bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="rounded-full h-12 px-8">
                    Contact Now
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full h-12 px-8 bg-transparent border-white text-white hover:bg-white/10"
                  >
                    Explore Services
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
