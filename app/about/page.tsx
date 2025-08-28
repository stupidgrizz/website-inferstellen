"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Menu, X, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
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
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container px-4 md:px-6 relative mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                INFERSTELLEN
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Rendering Odd Things into Beautiful Chaos!
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="max-w-4xl mx-auto space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Who We Are</h2>
                <div className="text-lg md:text-xl text-muted-foreground space-y-4 max-w-3xl mx-auto">
                  <p>
                    We make stuff! Cool stuff! Weird stuff! At INFERSTELLEN, we're the studio that turns your wildest
                    digital dreams into stunning reality.
                  </p>
                  <p>
                    Need a game that'll make players forget what day it is? <strong>Done.</strong> A movie that keeps
                    audiences on the edge of their seats? <strong>Absolutely.</strong> That promo that makes your
                    product look like it's from the future? <strong>You bet!</strong>
                  </p>
                  <p>
                    We specialize in the impossible: interactive 3D experiences, mind-bending VR worlds, digital twins
                    that mirror reality so perfectly they're almost scary, and animations that make Pixar jealous.
                    Whether it's for corporate conferences, industrial training, or just because you want something that
                    makes people go "How did they DO that?", we've got you covered.
                  </p>
                </div>
              </motion.div>

              {/* Services Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
              >
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-center">What We Do</h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {services.map((service, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="group"
                    >
                      <Link href={service.link}>
                        <div className="p-6 rounded-lg border border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md hover:border-primary/20 group-hover:scale-105">
                          <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                          <div className="mt-4 flex items-center text-sm text-primary group-hover:translate-x-1 transition-transform">
                            Learn more <ArrowRight className="ml-1 size-3" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Philosophy Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center space-y-6"
              >
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Our Philosophy</h3>
                <div className="text-lg md:text-xl text-muted-foreground space-y-4 max-w-3xl mx-auto">
                  <p>
                    We work primarily in Unreal Engine, Unity, and Blender, wielding RTX rendering like digital wizards
                    and integrating AI because, well, why not make things even more interesting? From port management
                    systems that track every crane and truck in real-time to VR experiences that transport you to
                    futuristic cities, we build the impossible.
                  </p>
                  <p>
                    Our team thrives on challenges that make other studios run away screaming. Interactive media? Check.
                    Real-time production? Double check. Digital twins that sync with live data and make executives weep
                    tears of joy? Triple check.
                  </p>
                </div>
              </motion.div>

              {/* Quote Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center py-12"
              >
                <blockquote className="text-xl md:text-2xl font-medium italic text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  "Led by the uncertain, doing the impossible for the unpredictable! We've done so much with so little
                  for so long, we're now qualified to do anything with nothing!"
                </blockquote>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative mx-auto max-w-7xl">
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
