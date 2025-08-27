"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Menu, X, Moon, Sun, ArrowRight, Star, ChevronLeft, Mail, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTheme } from "next-themes"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [redirectUrl, setRedirectUrl] = useState("")

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

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
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

  const projects = [
    {
      title: "Digital Twin Port Management",
      description:
        "Real-time 3D visualization system for port operations with crane and truck management, featuring AI-powered logistics optimization.",
      thumbnail: "/futuristic-port-with-cranes-and-digital-interface.png",
    },
    {
      title: "VR City Planning Experience",
      description:
        "Immersive virtual reality environment for showcasing upcoming futuristic city developments at corporate conferences.",
      thumbnail: "/futuristic-city-skyline-in-vr.png",
    },
    {
      title: "Interactive 3D Product Showcase",
      description:
        "Real-time 3D product visualization with RTX rendering for automotive industry presentations and marketing.",
      thumbnail: "/3d-car-visualization-with-rtx-lighting.png",
    },
    {
      title: "Architectural Visualization Suite",
      description:
        "Unreal Engine powered architectural walkthroughs with real-time lighting and interactive elements for client presentations.",
      thumbnail: "/modern-architecture-visualization.png",
    },
    {
      title: "Industrial Training Simulator",
      description:
        "VR training environment for industrial equipment operation with haptic feedback and safety protocols.",
      thumbnail: "/industrial-vr-training-simulation.png",
    },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
      >
        <div className="container flex h-16 items-center justify-between">
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
                  <Link href="/services#digital-twins" className="block px-4 py-2 text-sm hover:bg-muted">
                    Digital Twins
                  </Link>
                  <Link href="/services#vr-experiences" className="block px-4 py-2 text-sm hover:bg-muted">
                    VR Experiences
                  </Link>
                  <Link href="/services#3d-visualization" className="block px-4 py-2 text-sm hover:bg-muted">
                    3D Visualization
                  </Link>
                  <Link href="/services#interactive-media" className="block px-4 py-2 text-sm hover:bg-muted">
                    Interactive Media
                  </Link>
                  <Link href="/services#real-time-production" className="block px-4 py-2 text-sm hover:bg-muted">
                    Real-time Production
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
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link href="/about">
              <Button className="rounded-full">
                Learn more
                <ChevronRight className="ml-1 size-4" />
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            </Button>
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
            <div className="container py-4 flex flex-col gap-4">
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
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

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
                      <Button size="lg" className="rounded-full h-12 px-8 text-base">
                        Book an Appointment
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base bg-transparent">
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
              className="relative mx-auto max-w-5xl"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                <Image
                  src="/home.png"
                  width={1280}
                  height={640}
                  alt="INFERSTELLEN showcase"
                  className="w-full h-auto aspect-[2/1] object-cover"
                  priority
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
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

            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <Button variant="outline" size="icon" onClick={prevProject} className="rounded-full bg-transparent">
                  <ChevronLeft className="size-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextProject} className="rounded-full bg-transparent">
                  <ChevronRight className="size-4" />
                </Button>
              </div>

              <div className="overflow-hidden">
                <motion.div
                  className="flex gap-6"
                  animate={{ x: -currentProject * 70 + "%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {projects.map((project, i) => (
                    <div key={i} className="min-w-[70%] md:min-w-[60%] lg:min-w-[50%]">
                      <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                        <div className="aspect-video overflow-hidden">
                          <Image
                            src={project.thumbnail || "/placeholder.svg"}
                            width={640}
                            height={360}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-muted-foreground">{project.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="flex justify-center mt-6 gap-2">
                {projects.map((_, i) => (
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
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <p className="text-sm font-medium text-muted-foreground">Trusted by innovative companies worldwide</p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 mt-8">
                <Image
                  src="/elements-interactive-logo.png"
                  alt="Elements Interactive"
                  width={140}
                  height={70}
                  className="h-10 w-auto opacity-90 rounded-sm transition-all hover:opacity-100"
                />
                <Image
                  src="/hyper-baraaq-logo.png"
                  alt="Hyper Baraaq"
                  width={140}
                  height={70}
                  className="h-10 w-auto opacity-90 rounded-sm transition-all hover:opacity-100"
                />
                <Image
                  src="/wroughtspire-logo.png"
                  alt="Wroughtspire"
                  width={140}
                  height={70}
                  className="h-10 w-auto opacity-90 rounded-sm transition-all hover:opacity-100"
                />
                <Image
                  src="/broonibble-logo.png"
                  alt="Broonibble"
                  width={140}
                  height={70}
                  className="h-10 w-auto opacity-90 rounded-sm transition-all hover:opacity-100"
                />
                <Image
                  src="/zixel-logo.png"
                  alt="Shanghai Zixel Technologies"
                  width={140}
                  height={70}
                  className="h-10 w-auto opacity-90 rounded-sm transition-all hover:opacity-100"
                />
              </div>
            </div>

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

        {/* Contact Information Section */}
        <section id="contact" className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get In Touch</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Ready to bring your vision to life? Contact us to discuss your next project.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="space-y-8">
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

              <form action="https://formsubmit.co/email@inferstellen.com" method="POST" className="space-y-6">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={redirectUrl} />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input type="text" name="name" placeholder="Your Name" required className="rounded-lg" />
                  </div>
                  <div>
                    <Input type="text" name="company" placeholder="Company Name" className="rounded-lg" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input type="email" name="email" placeholder="Email Address" required className="rounded-lg" />
                  </div>
                  <div>
                    <Input type="tel" name="phone" placeholder="Phone Number" className="rounded-lg" />
                  </div>
                </div>

                <div>
                  <Input type="text" name="subject" placeholder="Subject" required className="rounded-lg" />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    className="rounded-lg"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-lg">
                  Send Message
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
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
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
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
                  <Button size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base">
                    Book an Appointment
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
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
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
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
              <p className="text-sm text-muted-foreground">
                Rendering Odd Things into Beautiful Chaos! We create interactive 3D experiences, digital twins, VR
                solutions, and immersive productions.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://linkedin.com/company/inferstellen"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://instagram.com/inferstellen"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="m16 11.37-4-4-4 4"></path>
                    <path d="M12 15V7"></path>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://x.com/inferstellen"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"></path>
                  </svg>
                  <span className="sr-only">Twitter/X</span>
                </Link>
                <Link
                  href="https://youtube.com/@inferstellen"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M2.5 17a24.12 24.12 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"></path>
                  </svg>
                  <span className="sr-only">YouTube</span>
                </Link>
                <Link
                  href="mailto:contact@inferstellen.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span className="sr-only">Email</span>
                </Link>
                <Link
                  href="https://wa.me/923342229582"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"></path>
                  </svg>
                  <span className="sr-only">WhatsApp</span>
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
                    href="/services#digital-twins"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Digital Twins
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
                    href="/services#3d-visualization"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    3D Visualization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#interactive-media"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Interactive Media
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#real-time-production"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Real-time Production
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
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
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
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
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
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
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
