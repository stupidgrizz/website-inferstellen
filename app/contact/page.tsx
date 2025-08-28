"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect, useState } from "react"

export default function ContactPage() {
  const [redirectUrl, setRedirectUrl] = useState("/thank-you")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRedirectUrl(`${window.location.origin}/thank-you`)
    }
  }, [])

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "contact@inferstellen.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+92 334 2229582",
      description: "Call us during business hours",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Pakistan",
      description: "Remote-first with global reach",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9AM - 6PM PKT",
      description: "We'll respond within 24 hours",
    },
  ]

  const services = [
    "3D Visualization",
    "Games & Media",
    "VR Experiences",
    "Automotive & Mechanical Design",
    "Virtual Production",
    "Animation & Movies",
    "Consultation",
    "Other",
  ]

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
                Get In Touch
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Ready to bring your vision to life? Let's discuss your project and explore how we can create
                extraordinary interactive experiences together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="w-full py-20">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="text-center p-6 border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-0">
                      <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mx-auto mb-4">
                        <info.icon className="size-6" />
                      </div>
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      <p className="font-medium mb-1">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="w-full py-20 bg-muted/30">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Start Your Project</h2>
                <p className="text-muted-foreground md:text-lg">
                  Fill out the form below and we'll get back to you within 24 hours to discuss your project
                  requirements.
                </p>
              </div>

              <Card className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                <CardContent className="p-8">
                  <form action="https://formsubmit.co/email@inferstellen.com" method="POST" className="space-y-6">
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value={redirectUrl} />

                    {/* ... existing form content ... */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Your full name"
                          required
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          type="text"
                          name="company"
                          placeholder="Your company name"
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="your.email@example.com"
                          required
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          name="phone"
                          placeholder="+1 (555) 123-4567"
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                          Service Interested In *
                        </label>
                        <Select name="service" required>
                          <SelectTrigger className="rounded-lg">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, "-")}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium mb-2">
                          Project Budget
                        </label>
                        <Select name="budget">
                          <SelectTrigger className="rounded-lg">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-10k">Under $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="over-100k">Over $100,000</SelectItem>
                            <SelectItem value="discuss">Let's discuss</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Project Title *
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Brief title for your project"
                        required
                        className="rounded-lg"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Project Description *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project requirements, goals, timeline, and any specific features you have in mind..."
                        rows={6}
                        required
                        className="rounded-lg"
                      />
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                        Preferred Timeline
                      </label>
                      <Select name="timeline">
                        <SelectTrigger className="rounded-lg">
                          <SelectValue placeholder="When do you need this completed?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="2-3-months">2-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="6-months-plus">6+ months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button type="submit" size="lg" className="w-full rounded-lg">
                      Send Message
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="w-full py-20">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Have Questions?</h2>
              <p className="text-muted-foreground md:text-lg mb-8">
                Check out our frequently asked questions or get in touch directly for more information about our
                services and process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/faq">
                  <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
                    View FAQ
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" className="rounded-full px-8">
                    Explore Services
                    <ArrowRight className="ml-2 size-4" />
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
