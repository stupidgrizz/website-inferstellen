"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Star,
  ChevronLeft,
  Mail,
  Phone,
  ChevronDown,
  Volume2,
  VolumeX,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [redirectUrl, setRedirectUrl] = useState("")
  const [isMuted, setIsMuted] = useState(true)
  const [showUnmuteButton, setShowUnmuteButton] = useState(true)

  useEffect(() => {
    setMounted(true)
    setRedirectUrl(`${window.location.origin}/thank-you`)

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleUnmute = () => {
    setIsMuted(false)
    setShowUnmuteButton(false)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const featuredProjects = [
    {
      title: "Architectural Visualization Suite",
      description:
        "Unreal Engine powered architectural walkthroughs with real-time lighting and interactive elements for client presentations.",
      thumbnail: "/modern-architecture-visualization.png",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_5KG3n1JnX0nD0m1xGcIotuMhJmHB/oMvfTFLUQQU97jTC86anUF/public/project-videos/architectural-viz.mp4",
      category: "3d-visualization",
      slug: "architectural-visualization-suite",
    },
    {
      title: "Interactive Gaming Experience",
      description:
        "Immersive gaming environment with advanced physics and real-time rendering for entertainment industry.",
      thumbnail: "/3d-animation-studio.png",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_5KG3n1JnX0nD0m1xGcIotuMhJmHB/oMvfTFLUQQU97jTC86anUF/public/project-videos/gaming-experience.mp4",
      category: "games-media",
      slug: "interactive-gaming-experience",
    },
    {
      title: "VR City Planning Experience",
      description:
        "Immersive virtual reality environment for showcasing upcoming futuristic city developments at corporate conferences.",
      thumbnail: "/futuristic-city-skyline-in-vr.png",
      video: "/project-videos/vr-city-planning.mp4",
      category: "vr-experiences",
      slug: "vr-city-planning-experience",
    },
    {
      title: "Automotive Design Visualization",
      description:
        "Advanced automotive visualization with real-time material rendering and interactive configuration systems.",
      thumbnail: "/3d-car-visualization-with-rtx-lighting.png",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_5KG3n1JnX0nD0m1xGcIotuMhJmHB/oMvfTFLUQQU97jTC86anUF/public/project-videos/automotive-design.mp4",
      category: "automotive-mechanical",
      slug: "automotive-design-visualization",
    },
    {
      title: "Real-time Virtual Production",
      description: "Advanced virtual production pipeline with LED wall integration and real-time camera tracking.",
      thumbnail: "/3d-animation-studio.png",
      video: "/project-videoshttps://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_5KG3n1JnX0nD0m1xGcIotuMhJmHB/oMvfTFLUQQU97jTC86anUF/public/virtual-production.mp4",
      category: "virtual-production",
      slug: "real-time-virtual-production",
    },
    {
      title: "Cinematic Animation Production",
      description: "High-quality cinematic animations with advanced character rigging and photorealistic rendering.",
      thumbnail: "/3d-animation-studio.png",
      video: "/project-videos/cinematic-animation.mp4",
      category: "animation-movies",
      slug: "cinematic-animation-production",
    },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Header */}
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
              href="/projects"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Projects
            </Link>
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Services
                <ChevronDown className="size-3" />
              </button>
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                  <Link href="/services#service-3d-visualization" className="block px-4 py-2 text-sm hover:bg-muted">
                    3D Visualization
                  </Link>
                  <Link href="/services#games-media" className="block px-4 py-2 text-sm hover:bg-muted">
                    Games & Media
                  </Link>
                  <Link href="/services#vr-experiences" className="block px-4 py-2 text-sm hover:bg-muted">
                    VR Experiences
                  </Link>
                  <Link
                    href="/services#service-automotive-mechanical-design"
                    className="block px-4 py-2 text-sm hover:bg-muted"
                  >
                    Automotive & Mechanical Design
                  </Link>
                  <Link href="/services#virtual-production" className="block px-4 py-2 text-sm hover:bg-muted">
                    Virtual Production
                  </Link>
                  <Link href="/services#animation-movies" className="block px-4 py-2 text-sm hover:bg-muted">
                    Animation & Movies
                  </Link>
                </div>
              )}
            </div>
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
            <Link href="/about">
              <Button className="rounded-full">
                Learn more
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
              <Link href="/projects" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Projects
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
                <Link href="/about">
                  <Button className="rounded-full w-full" onClick={() => setMobileMenuOpen(false)}>
                    Learn more
                    <ChevronRight className="ml-1 size-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container mx-auto max-w-7xl px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <div className="pt-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  INFERSTELLEN
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Rendering Odd Things into Beautiful Chaos!
                </p>
                <div className="pb-12">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button size="lg" className="rounded-full px-8 text-base">
                        Book an Appointment
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button size="lg" variant="outline" className="rounded-full px-8 text-base bg-transparent">
                        Explore
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl lg:max-w-7xl"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20 relative">
                <video autoPlay loop muted={isMuted} playsInline className="w-full h-auto aspect-video object-cover">
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_6vBAlfNlZb2nskPmth0t9mUPuvsH/nXfoh6XRwWNhvJbf0NaJDq/public/landing-page.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {showUnmuteButton && (
                  <button
                    onClick={handleUnmute}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                  >
                    {isMuted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
                  </button>
                )}

                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-20">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Services</h2>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
                Discover our comprehensive range of cutting-edge solutions
              </p>
            </motion.div>

            <div className="grid gap-8 lg:gap-16">
              {[
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
                  image: "/3d-visualization.png",
                  video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_5KG3n1JnX0nD0m1xGcIotuMhJmHB/oMvfTFLUQQU97jTC86anUF/public/3d-visualization.mp4",
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
                  image: "/games-media.png",
                  video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_5KG3n1JnX0nD0m1xGcIotuMhJmHB/oMvfTFLUQQU97jTC86anUF/public/games-media.mp4",
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
                  image: "/vr-experiences.png",
                  video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_5KG3n1JnX0nD0m1xGcIotuMhJmHB/oMvfTFLUQQU97jTC86anUF/public/vr-experiences.mp4",
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
                  image: "/automotive-mechanical-design.png",
                  video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_5KG3n1JnX0nD0m1xGcIotuMhJmHB/oMvfTFLUQQU97jTC86anUF/public/automotive-mechanical-design.mp4",
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
                  image: "/virtual-production.png",
                  video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_5KG3n1JnX0nD0m1xGcIotuMhJmHB/oMvfTFLUQQU97jTC86anUF/public/virtual-production.mp4",
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
                  image: "/animation-movies.png",
                  video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_5KG3n1JnX0nD0m1xGcIotuMhJmHB/oMvfTFLUQQU97jTC86anUF/public/animation-movies.mp4",
                  technologies: ["Blender", "Maya", "After Effects", "Cinema 4D", "Houdini"],
                  category: "animation-movies",
                },
              ].map((service, i) => {
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
                          className={`aspect-video lg:aspect-square overflow-hidden relative ${i % 2 === 1 ? "lg:order-2" : ""}`}
                        >
                          <video
                            src={service.video}
                            autoPlay
                            loop
                            muted
                            playsInline
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

            <div className="flex justify-center mt-8">
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                  View All Services
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Latest Projects */}
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Latest Projects</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Explore our cutting-edge work in interactive 3D, VR, digital twins, and immersive experiences.
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-x-auto scrollbar-hide md:hidden px-4">
                <div className="flex gap-4 pb-4">
                  {featuredProjects.map((project, i) => (
                    <div key={i} className="min-w-[280px] max-w-[280px] flex-shrink-0">
                      <Card className="w-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md group">
                        <Link href={`/projects/${project.slug}`}>
                          <div className="aspect-video overflow-hidden relative cursor-pointer">
                            <div className="relative w-full h-full">
                              <Image
                                src={project.thumbnail || "/placeholder.svg"}
                                width={640}
                                height={360}
                                alt={project.title}
                                className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-0"
                              />
                              <video
                                src={project.video || "/placeholder-video.mp4"}
                                width={640}
                                height={360}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-300 group-hover:opacity-100"
                              />
                            </div>
                          </div>
                        </Link>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-muted-foreground mb-4">{project.description}</p>
                          <Link href={`/projects/${project.slug}`}>
                            <Button className="w-full rounded-lg">
                              View Project Details
                              <ArrowRight className="ml-2 size-4" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:block">
                <div className="overflow-hidden">
                  <motion.div
                    className="flex gap-4 sm:gap-0"
                    animate={{ x: -currentProject * 100 + "%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {featuredProjects.map((project, i) => (
                      <div key={i} className="min-w-full flex justify-center px-2 sm:px-0">
                        <Card className="w-full max-w-2xl overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md group">
                          <Link href={`/projects/${project.slug}`}>
                            <div className="aspect-video overflow-hidden relative cursor-pointer">
                              <div className="relative w-full h-full">
                                <Image
                                  src={project.thumbnail || "/placeholder.svg"}
                                  width={640}
                                  height={360}
                                  alt={project.title}
                                  className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-0"
                                />
                                <video
                                  src={project.video || "/placeholder-video.mp4"}
                                  width={640}
                                  height={360}
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-300 group-hover:opacity-100"
                                />
                              </div>
                            </div>
                          </Link>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-muted-foreground mb-4">{project.description}</p>
                            <Link href={`/projects/${project.slug}`}>
                              <Button className="w-full rounded-lg">
                                View Project Details
                                <ArrowRight className="ml-2 size-4" />
                              </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </motion.div>
                </div>

                <div className="flex items-center justify-center mt-6 gap-2">
                  <Button variant="outline" size="icon" onClick={prevProject} className="rounded-full bg-transparent">
                    <ChevronLeft className="size-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={nextProject} className="rounded-full bg-transparent">
                    <ChevronRight className="size-4" />
                  </Button>
                </div>
              </div>

              <div className="flex justify-center mt-6 gap-2">
                {featuredProjects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentProject(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentProject ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/projects">
                <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                  View All Projects
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What Our Clients Say */}
        <section className="w-full py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Loved by Teams Worldwide</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Don't just take our word for it. See what our clients have to say about their experience.
              </p>
            </motion.div>

            {/* ... existing testimonials grid code ... */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "INFERSTELLEN's digital twin solution revolutionized our creative workflow. The real-time visualization capabilities exceeded all our expectations.",
                  author: "Matthew E.",
                  role: "Creative Director, Elephrates",
                  rating: 5,
                },
                {
                  quote:
                    "Working with INFERSTELLEN transformed our business operations. Their VR solutions provided exactly what we needed for our corporate presentations.",
                  author: "Mubashir R.",
                  role: "CEO, Hyper Baraaq",
                  rating: 5,
                },
                {
                  quote:
                    "The interactive 3D experiences they created for us were phenomenal. INFERSTELLEN delivered beyond our wildest expectations.",
                  author: "Iftekhar Y.",
                  role: "Product Manager, Elements Interactive",
                  rating: 5,
                },
                {
                  quote:
                    "INFERSTELLEN's technical expertise in real-time production is unmatched. They brought our vision to life with incredible precision.",
                  author: "XuJi",
                  role: "Project Manager, Zixel Technologies",
                  rating: 5,
                },
                {
                  quote:
                    "The digital twin implementation exceeded our requirements. INFERSTELLEN's innovative approach solved complex challenges seamlessly.",
                  author: "Uzair J.",
                  role: "Chief Executive, Tech Vision",
                  rating: 5,
                },
                {
                  quote:
                    "From concept to delivery, INFERSTELLEN demonstrated exceptional creativity and technical mastery. Their work truly renders chaos into beauty.",
                  author: "Bernhard H.",
                  role: "Technical Artist, Malao GmbH",
                  rating: 5,
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, j) => (
                            <Star key={j} className="size-4 text-yellow-500 fill-yellow-500" />
                          ))}
                      </div>
                      <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                        <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Let's Build Something Extraordinary Together!
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Ready to bring your vision to life? Contact us to discuss your next project.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <form action="https://formsubmit.co/email@inferstellen.com" method="POST" className="space-y-6 mb-12">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={redirectUrl} />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input type="text" name="name" placeholder="Your Name" required className="rounded-md" />
                  </div>
                  <div>
                    <Input type="text" name="company" placeholder="Company Name" className="rounded-md" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input type="email" name="email" placeholder="Email Address" required className="rounded-md" />
                  </div>
                  <div>
                    <Input type="tel" name="phone" placeholder="Phone Number" className="rounded-md" />
                  </div>
                </div>

                <div>
                  <Input type="text" name="subject" placeholder="Subject" required className="rounded-md" />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    className="rounded-md"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-md">
                  Send Message
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </form>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">contact@inferstellen.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+92 334 2229582</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Find answers to common questions about our services and process.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "What types of projects do you specialize in?",
                    answer:
                      "We specialize in interactive 3D experiences, VR applications, digital twins, architectural visualization, industrial training simulators, real-time production using Unreal Engine, Unity, and Blender, and Animation & Movies.",
                  },
                  {
                    question: "How long does a typical project take?",
                    answer:
                      "Project timelines vary depending on complexity and scope. Simple visualizations can take 2-4 weeks, while complex digital twin systems or VR experiences may take 3-6 months. We provide detailed timelines during the consultation phase.",
                  },
                  {
                    question: "Do you provide ongoing support after project completion?",
                    answer:
                      "Yes, we offer comprehensive post-launch support including maintenance, updates, and technical assistance. We also provide training for your team to effectively use and manage the delivered solutions.",
                  },
                  {
                    question: "Can you work with existing systems and data?",
                    answer:
                      "We excel at integrating with existing systems, databases, and workflows. Our digital twin solutions often require real-time data integration, and we have extensive experience with various APIs and data sources.",
                  },
                  {
                    question: "What platforms and technologies do you use?",
                    answer:
                      "We primarily work with Unreal Engine, Unity, Blender, and various 3D technologies. We also utilize RTX rendering, AI integration, and real-time visualization technologies to create cutting-edge experiences.",
                  },
                  {
                    question: "Do you offer consultation services?",
                    answer:
                      "Yes, we provide comprehensive consultation services to help you define project requirements, choose the right technology stack, and develop implementation strategies that align with your business goals.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          {/* ... existing code ... */}
          <div className="container mx-auto max-w-7xl px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Ready to Transform Your Vision?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Let's collaborate to create extraordinary interactive experiences that push the boundaries of what's
                possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="rounded-full px-8 text-base">
                    Book an Appointment
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
                  >
                    Explore
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
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
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                  </Link>
                </li>
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
              <h4 className="text-sm font-bold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/documentation" className="text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
                    Support
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
                  <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} INFERSTELLEN. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/privacy-policy"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
