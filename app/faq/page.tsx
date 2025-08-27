"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "What types of projects do you specialize in?",
          answer:
            "We specialize in interactive 3D experiences, VR applications, digital twins, architectural visualization, industrial training simulators, and real-time production using Unreal Engine, Unity, and Blender. Our expertise spans across games, digital twins, interactive media, VR experiences, animation, movies, promos, and real-time production for corporate showcases and conferences.",
        },
        {
          question: "What industries do you work with?",
          answer:
            "We work with a diverse range of industries including manufacturing, automotive, architecture, healthcare, education, entertainment, ports and logistics, urban planning, and corporate events. Our solutions are particularly popular with companies showcasing futuristic technologies at conferences and trade shows.",
        },
        {
          question: "Do you work with international clients?",
          answer:
            "Yes, we work with clients globally. We're a remote-first company based in Pakistan with experience serving clients worldwide. We're comfortable working across different time zones and have established processes for international collaboration.",
        },
      ],
    },
    {
      title: "Project Process",
      faqs: [
        {
          question: "How long does a typical project take?",
          answer:
            "Project timelines vary significantly based on complexity and scope. Simple 3D visualizations can take 2-4 weeks, interactive experiences typically require 1-3 months, while complex digital twin systems or comprehensive VR experiences may take 3-6 months or more. We provide detailed timelines and milestones during the consultation phase.",
        },
        {
          question: "What is your development process?",
          answer:
            "Our process typically includes: 1) Initial consultation and requirements gathering, 2) Concept development and prototyping, 3) Design and technical architecture, 4) Development and iteration, 5) Testing and optimization, 6) Deployment and training, 7) Ongoing support. We maintain regular communication throughout and provide progress updates at each milestone.",
        },
        {
          question: "Do you provide project updates and progress reports?",
          answer:
            "Yes, we believe in transparent communication. We provide regular progress updates, milestone reviews, and are available for scheduled check-ins throughout the project. You'll have access to development builds and can provide feedback at key stages to ensure the final product meets your expectations.",
        },
      ],
    },
    {
      title: "Technical Questions",
      faqs: [
        {
          question: "What platforms and technologies do you use?",
          answer:
            "We primarily work with Unreal Engine, Unity, and Blender as our core platforms. We also utilize RTX rendering, AI integration, real-time visualization technologies, WebGL for web-based experiences, and various VR/AR SDKs. Our technology stack is chosen based on project requirements to ensure optimal performance and compatibility.",
        },
        {
          question: "Can you work with existing systems and data?",
          answer:
            "We excel at integrating with existing systems, databases, and workflows. Our digital twin solutions often require real-time data integration from IoT sensors, databases, and APIs. We have extensive experience with various data sources, enterprise systems, and can work with your existing infrastructure.",
        },
        {
          question: "Do you develop for specific VR headsets or platforms?",
          answer:
            "We develop for all major VR platforms including Oculus/Meta Quest, HTC Vive, Valve Index, Pico, and enterprise solutions like Varjo. We can also create cross-platform experiences that work across multiple devices, or web-based VR experiences that run in browsers without requiring specific hardware.",
        },
        {
          question: "Can you create web-based 3D experiences?",
          answer:
            "Yes, we create web-based 3D experiences using WebGL, Three.js, and Unity WebGL. These can run directly in web browsers without requiring downloads or installations, making them perfect for marketing campaigns, product showcases, and accessible interactive experiences.",
        },
      ],
    },
    {
      title: "Support & Maintenance",
      faqs: [
        {
          question: "Do you provide ongoing support after project completion?",
          answer:
            "Yes, we offer comprehensive post-launch support including maintenance, updates, bug fixes, and technical assistance. We also provide training for your team to effectively use and manage the delivered solutions. Support packages can be customized based on your specific needs and requirements.",
        },
        {
          question: "Can you update or modify projects after delivery?",
          answer:
            "We can update content, add new features, optimize performance, and make modifications to delivered projects. We maintain the source code and assets, making it easy to implement changes or expansions as your needs evolve.",
        },
        {
          question: "Do you provide training for our team?",
          answer:
            "Yes, we provide comprehensive training sessions for your team, including how to use the delivered solution, content management (where applicable), basic troubleshooting, and best practices. Training can be conducted remotely or on-site, depending on your preferences and requirements.",
        },
      ],
    },
    {
      title: "Pricing & Business",
      faqs: [
        {
          question: "How do you price your projects?",
          answer:
            "Our pricing is project-based and depends on factors like complexity, timeline, required features, and ongoing support needs. We provide detailed quotes after understanding your specific requirements. We're transparent about costs and provide clear breakdowns of what's included in each project phase.",
        },
        {
          question: "Do you offer consultation services?",
          answer:
            "Yes, we provide comprehensive consultation services to help you define project requirements, choose the right technology stack, develop implementation strategies, and create roadmaps that align with your business goals. Consultation can be standalone or part of a larger project engagement.",
        },
        {
          question: "What payment terms do you offer?",
          answer:
            "We typically work with milestone-based payments tied to project deliverables. Common structures include 30% upfront, 40% at mid-project milestone, and 30% upon completion. For larger projects, we can arrange more granular payment schedules. We're flexible and can discuss terms that work for both parties.",
        },
        {
          question: "Do you sign NDAs and work with confidential projects?",
          answer:
            "Yes, we regularly work with confidential projects and are happy to sign NDAs and other confidentiality agreements. We understand the sensitive nature of many corporate projects and have established processes to ensure your intellectual property and business information remains secure.",
        },
      ],
    },
  ]

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
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Find answers to common questions about our services, process, and how we can help bring your interactive
                experiences to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="w-full py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{category.title}</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <motion.div
                        key={faqIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: faqIndex * 0.05 }}
                      >
                        <AccordionItem
                          value={`${categoryIndex}-${faqIndex}`}
                          className="border-b border-border/40 py-2"
                        >
                          <AccordionTrigger className="text-left font-medium hover:no-underline text-base md:text-lg">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>
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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Still Have Questions?</h2>
              <p className="text-primary-foreground/80 md:text-lg mb-8">
                Can't find the answer you're looking for? Get in touch with our team and we'll be happy to help you with
                your specific questions and requirements.
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
