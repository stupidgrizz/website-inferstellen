"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ArrowRight, Check, Calendar, Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
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

    return () => window.removeEventListener("scroll", handleScroll)
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
      image: "/services-gallery/3d-visualization.png",
      video:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_5KG3n1JnX0nD0m1xGcIotuMhJmHB/oMvfTFLUQQU97jTC86anUF/public/services-videos/3d-visualization.mp4",
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
      image: "/services-gallery/games-media.png",
      video:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_5KG3n1JnX0nD0m1xGcIotuMhJmHB/oMvfTFLUQQU97jTC86anUF/public/services-videos/games-media.mp4",
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
      image: "/services-gallery/vr-experiences.png",
      video:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_5KG3n1JnX0nD0m1xGcIotuMhJmHB/oMvfTFLUQQU97jTC86anUF/public/services-videos/vr-experiences.mp4",
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
      image: "/services-gallery/automotive-mechanical-design.png",
      video:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_5KG3n1JnX0nD0m1xGcIotuMhJmHB/oMvfTFLUQQU97jTC86anUF/public/services-videos/automotive-mechanical-design.mp4",
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
      image: "/services-gallery/virtual-production.png",
      video:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_5KG3n1JnX0nD0m1xGcIotuMhJmHB/oMvfTFLUQQU97jTC86anUF/public/services-videos/virtual-production.mp4",
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
      image: "/services-gallery/animation-movies.png",
      video:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_5KG3n1JnX0nD0m1xGcIotuMhJmHB/oMvfTFLUQQU97jTC86anUF/public/services-videos/animation-movies.mp4",
      technologies: ["Blender", "Maya", "After Effects", "Cinema 4D", "Houdini"],
      category: "animation-movies",
    },
  ]

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
              href="/projects"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
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
              <Link href="/projects" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </Link>
              <Link href="/about" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                About
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
                          className={`aspect-video lg:aspect-square overflow-hidden relative group ${i % 2 === 1 ? "lg:order-2" : ""}`}
                        >
                          <Image
                            src={service.image || "/placeholder.svg"}
                            width={600}
                            height={400}
                            alt={service.title}
                            className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-110"
                          />
                          <video
                            src={service.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover opacity-0 scale-110 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
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
                              <Link href={`/services/${service.category}`}>
                                <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                                  View More Details
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

        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto max-w-7xl px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Let's Build Something Extraordinary Together!
              </h2>
              <p className="text-primary-foreground/80 md:text-xl mb-8">
                Let's collaborate to create extraordinary interactive experiences that push the boundaries of what's
                possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="rounded-full px-8 text-base">
                    Book an Appointment
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="/projects">
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
