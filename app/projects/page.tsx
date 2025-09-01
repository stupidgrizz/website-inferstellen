"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ArrowRight, ExternalLink, Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    const urlParams = new URLSearchParams(window.location.search)
    const category = urlParams.get("category")
    if (category) {
      setSelectedCategory(category)
    }

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      title: "3D Visualization",
      description:
        "Photorealistic 3D rendering and visualization for architecture, products, and industrial applications.",
      link: "/services#service-3d-visualization",
    },
    {
      title: "Games & Media",
      description: "Interactive gaming experiences and digital media production with cutting-edge technology.",
      link: "/services#games-media",
    },
    {
      title: "VR Experiences",
      description: "Immersive virtual reality environments for training, visualization, and interactive presentations.",
      link: "/services#vr-experiences",
    },
    {
      title: "Automotive & Mechanical Design",
      description: "Advanced automotive and mechanical systems visualization with real-time rendering capabilities.",
      link: "/services#service-automotive-mechanical-design",
    },
    {
      title: "Virtual Production",
      description: "Live production workflows using Unreal Engine for broadcasts, events, and virtual productions.",
      link: "/services#virtual-production",
    },
    {
      title: "Animation & Movies",
      description: "High-quality 3D animations, visual effects, and cinematic productions for various media.",
      link: "/services#animation-movies",
    },
  ]

  const projects = [
    {
      slug: "architectural-visualization-suite",
      title: "Architectural Visualization Suite",
      description:
        "Unreal Engine powered architectural walkthroughs with real-time lighting and interactive elements for client presentations.",
      thumbnail: "/modern-architecture-visualization.png",
      video:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_5KG3n1JnX0nD0m1xGcIotuMhJmHB/oMvfTFLUQQU97jTC86anUF/public/project-videos/architectural-viz.mp4",
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
    {
      slug: "interactive-gaming-experience",
      title: "Interactive Gaming Experience",
      description:
        "Immersive gaming environment with advanced physics and real-time rendering for entertainment industry.",
      thumbnail: "/3d-animation-studio.png",
      video:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_5KG3n1JnX0nD0m1xGcIotuMhJmHB/oMvfTFLUQQU97jTC86anUF/public/project-videos/gaming-experience.mp4",
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
    {
      slug: "automotive-design-visualization",
      title: "Automotive Design Visualization",
      description:
        "Advanced automotive visualization with real-time material rendering and interactive configuration systems.",
      thumbnail: "/3d-car-visualization-with-rtx-lighting.png",
      video:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_5KG3n1JnX0nD0m1xGcIotuMhJmHB/oMvfTFLUQQU97jTC86anUF/public/project-videos/automotive-design.mp4",
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
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
      >
        <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold">
            <Image
              src="/inferstellen-logo.png"
              alt="INFERSTELLEN Logo"
              width={32}
              height={32}
              className="size-8 rounded-lg object-cover"
            />
            <span>INFERSTELLEN</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <Link href="/">
              <Button variant="outline" className="rounded-full bg-transparent">
                Home
                <ChevronRight className="ml-1 size-4" />
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container mx-auto max-w-7xl px-4 md:px-6 py-4 flex flex-col gap-4">
              <Link href="/about" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/services" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="/contact" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <Link href="/faq" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Link href="/">
                  <Button
                    variant="outline"
                    className="rounded-full w-full bg-transparent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                    <ChevronRight className="ml-1 size-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-1">
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

      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16 mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <Image
                  src="/inferstellen-logo.png"
                  alt="INFERSTELLEN Logo"
                  width={32}
                  height={32}
                  className="size-8 rounded-lg object-cover"
                />
                <span>INFERSTELLEN</span>
              </div>
              <p className="text-sm text-muted-foreground">Rendering Odd Things into Beautiful Chaos!</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/services#service-3d-visualization"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    3D Visualization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#games-media"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Games & Media
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#vr-experiences"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    VR Experiences
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#service-automotive-mechanical-design"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Automotive & Mechanical Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#virtual-production"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Virtual Production
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#animation-movies"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Animation & Movies
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Connect</h4>
              <div className="flex flex-col gap-2">
                <Link
                  href="https://linkedin.com/company/inferstellen"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://instagram.com/inferstellen"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Instagram
                </Link>
                <Link
                  href="https://x.com/inferstellen"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  X (Twitter)
                </Link>
                <Link
                  href="https://youtube.com/@inferstellen"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  YouTube
                </Link>
                <Link
                  href="mailto:contact@inferstellen.com"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Email
                </Link>
                <Link
                  href="https://wa.me/923342229582"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} INFERSTELLEN. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
