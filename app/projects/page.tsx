"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    // Check for category parameter in URL
    const urlParams = new URLSearchParams(window.location.search)
    const category = urlParams.get("category")
    if (category) {
      setSelectedCategory(category)
    }
  }, [])

  // ... existing projects array ...
  const projects = [
    // 3D Visualization (2 projects)
    {
      slug: "architectural-visualization-suite",
      title: "Architectural Visualization Suite",
      description:
        "Unreal Engine powered architectural walkthroughs with real-time lighting and interactive elements for client presentations.",
      thumbnail: "/modern-architecture-visualization.png",
      video: "/project-videos/architectural-viz.mp4",
      category: "3d-visualization",
      technologies: ["Unreal Engine", "Architectural Viz", "Real-time Lighting"],
      year: "2024",
    },
    {
      slug: "interactive-3d-product-showcase",
      title: "Interactive 3D Product Showcase",
      description:
        "Real-time 3D product visualization with RTX rendering for automotive industry presentations and marketing campaigns.",
      thumbnail: "/3d-car-visualization-with-rtx-lighting.png",
      video: "/project-videos/3d-product-showcase.mp4",
      category: "3d-visualization",
      technologies: ["RTX", "3D Modeling", "Real-time Rendering", "Blender"],
      year: "2023",
    },
    // Games & Media (2 projects)
    {
      slug: "interactive-gaming-experience",
      title: "Interactive Gaming Experience",
      description:
        "Immersive gaming environment with advanced physics and real-time rendering for entertainment industry.",
      thumbnail: "/3d-animation-studio.png",
      video: "/project-videos/gaming-experience.mp4",
      category: "games-media",
      technologies: ["Unity", "Game Development", "Physics", "Interactive Design"],
      year: "2024",
    },
    {
      slug: "digital-media-production",
      title: "Digital Media Production",
      description:
        "Comprehensive media production pipeline with real-time effects and interactive storytelling elements.",
      thumbnail: "/interactive-museum-ar.png",
      video: "/project-videos/media-production.mp4",
      category: "games-media",
      technologies: ["Media Production", "Storytelling", "Real-time Effects"],
      year: "2023",
    },
    // VR Experiences (2 projects)
    {
      slug: "vr-city-planning-experience",
      title: "VR City Planning Experience",
      description:
        "Immersive virtual reality environment for showcasing upcoming futuristic city developments at corporate conferences.",
      thumbnail: "/futuristic-city-skyline-in-vr.png",
      video: "/project-videos/vr-city-planning.mp4",
      category: "vr-experiences",
      technologies: ["VR", "Unity", "Interactive Design", "Architectural Viz"],
      year: "2024",
    },
    {
      slug: "industrial-training-simulator",
      title: "Industrial Training Simulator",
      description:
        "VR training environment for industrial equipment operation with haptic feedback and comprehensive safety protocols.",
      thumbnail: "/industrial-vr-training-simulation.png",
      video: "/project-videos/industrial-training.mp4",
      category: "vr-experiences",
      technologies: ["VR", "Training Simulation", "Haptic Feedback", "Safety"],
      year: "2024",
    },
    // Automotive & Mechanical Design (2 projects)
    {
      slug: "automotive-design-visualization",
      title: "Automotive Design Visualization",
      description:
        "Advanced automotive visualization with real-time material rendering and interactive configuration systems.",
      thumbnail: "/3d-car-visualization-with-rtx-lighting.png",
      video: "/project-videos/automotive-design.mp4",
      category: "automotive-mechanical",
      technologies: ["Automotive", "CAD Integration", "Real-time Rendering"],
      year: "2024",
    },
    {
      slug: "smart-factory-digital-twin",
      title: "Smart Factory Digital Twin",
      description:
        "Complete digital replica of manufacturing facility with real-time monitoring, predictive maintenance, and optimization algorithms.",
      thumbnail: "/smart-factory-digital-twin.png",
      video: "/project-videos/smart-factory.mp4",
      category: "automotive-mechanical",
      technologies: ["Digital Twin", "IoT Integration", "Predictive Analytics"],
      year: "2024",
    },
    // Virtual Production (2 projects)
    {
      slug: "real-time-virtual-production",
      title: "Real-time Virtual Production",
      description: "Advanced virtual production pipeline with LED wall integration and real-time camera tracking.",
      thumbnail: "/3d-animation-studio.png",
      video: "/project-videos/virtual-production.mp4",
      category: "virtual-production",
      technologies: ["Virtual Production", "LED Walls", "Real-time Tracking"],
      year: "2024",
    },
    {
      slug: "live-event-virtual-sets",
      title: "Live Event Virtual Sets",
      description:
        "Dynamic virtual set environments for live broadcasting and event production with real-time control systems.",
      thumbnail: "/futuristic-port-with-cranes-and-digital-interface.png",
      video: "/project-videos/live-event-sets.mp4",
      category: "virtual-production",
      technologies: ["Virtual Sets", "Live Broadcasting", "Real-time Control"],
      year: "2023",
    },
    // Animation & Movies (2 projects)
    {
      slug: "cinematic-animation-production",
      title: "Cinematic Animation Production",
      description: "High-quality cinematic animations with advanced character rigging and photorealistic rendering.",
      thumbnail: "/3d-animation-studio.png",
      video: "/project-videos/cinematic-animation.mp4",
      category: "animation-movies",
      technologies: ["Animation", "Character Rigging", "Cinematic Rendering"],
      year: "2024",
    },
    {
      slug: "medical-vr-training-platform",
      title: "Medical VR Training Platform",
      description:
        "Immersive medical training environment for surgical procedures with realistic haptic feedback and assessment tools.",
      thumbnail: "/medical-vr-training.png",
      video: "/project-videos/medical-training.mp4",
      category: "animation-movies",
      technologies: ["Medical Simulation", "Animation", "Educational Content"],
      year: "2023",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "3d-visualization", label: "3D Visualization" },
    { id: "games-media", label: "Games & Media" },
    { id: "vr-experiences", label: "VR Experiences" },
    { id: "automotive-mechanical", label: "Automotive & Mechanical" },
    { id: "virtual-production", label: "Virtual Production" },
    { id: "animation-movies", label: "Animation & Movies" },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container px-4 md:px-6 relative mx-auto max-w-7xl">
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
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
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
                    <div className="aspect-video overflow-hidden relative">
                      <div className="relative w-full h-full">
                        <Image
                          src={project.thumbnail || "/placeholder.svg"}
                          width={600}
                          height={400}
                          alt={project.title}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-110"
                        />
                        <video
                          src={project.video || "/placeholder-video.mp4"}
                          width={600}
                          height={400}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover opacity-0 scale-110 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
                        />
                      </div>
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
                      <Link href={`/projects/${project.slug}`}>
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
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
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
                  <Button size="lg" variant="secondary" className="rounded-full px-8">
                    Contact Now
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 bg-transparent border-white text-white hover:bg-white/10"
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
