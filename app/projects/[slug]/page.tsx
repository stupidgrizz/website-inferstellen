"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ArrowRight, Calendar, ExternalLink, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { notFound } from "next/navigation"

const projectsData = [
  {
    slug: "architectural-visualization-suite",
    title: "Architectural Visualization Suite",
    shortDescription:
      "Unreal Engine powered architectural walkthroughs with real-time lighting and interactive elements for client presentations.",
    fullDescription:
      "This comprehensive architectural visualization suite represents the cutting edge of real-time rendering technology. Built entirely in Unreal Engine 5, the project showcases photorealistic architectural walkthroughs that allow clients to experience spaces before they're built. The system features dynamic lighting that changes throughout the day, interactive elements that respond to user input, and seamless transitions between interior and exterior spaces.",
    thumbnail: "/modern-architecture-visualization.png",
    video: "/project-videos/architectural-viz.mp4",
    category: "3d-visualization",
    technologies: ["Unreal Engine 5", "Lumen", "Nanite", "Real-time Ray Tracing", "Architectural Visualization"],
    year: "2024",
    client: "Modern Architecture Studio",
    duration: "4 months",
    challenge:
      "Creating photorealistic architectural visualizations that could run in real-time while maintaining high visual fidelity and interactive capabilities.",
    solution:
      "Leveraged Unreal Engine 5's Lumen global illumination and Nanite virtualized geometry to achieve cinema-quality visuals in real-time. Implemented custom interaction systems for doors, lighting controls, and material swatches.",
    results: [
      "50% reduction in client revision cycles",
      "Real-time visualization at 60fps on standard hardware",
      "Interactive material and lighting customization",
      "Seamless VR compatibility for immersive presentations",
    ],
    gallery: [
      "/project-gallery/arch-viz-1.png",
      "/project-gallery/arch-viz-2.png",
      "/project-gallery/arch-viz-3.png",
      "/project-gallery/arch-viz-4.png",
    ],
  },
  {
    slug: "interactive-3d-product-showcase",
    title: "Interactive 3D Product Showcase",
    shortDescription:
      "Real-time 3D product visualization with RTX rendering for automotive industry presentations and marketing campaigns.",
    fullDescription:
      "A sophisticated product visualization platform that transforms how companies showcase their products to customers and stakeholders. This system features photorealistic RTX rendering, real-time material customization, and interactive product exploration. Users can examine products from every angle, customize materials and colors, and experience detailed technical specifications through immersive 3D interfaces.",
    thumbnail: "/3d-car-visualization-with-rtx-lighting.png",
    video: "/project-videos/3d-product-showcase.mp4",
    category: "3d-visualization",
    technologies: ["RTX", "3D Modeling", "Real-time Rendering", "Blender", "Material Editor"],
    year: "2023",
    client: "Product Design Agency",
    duration: "3 months",
    challenge:
      "Creating interactive product visualizations that could showcase complex materials and technical details while maintaining real-time performance and photorealistic quality.",
    solution:
      "Implemented RTX ray tracing for accurate reflections and materials, developed custom interaction systems for product exploration, and created seamless integration with product databases.",
    results: [
      "Photorealistic product rendering in real-time",
      "Interactive customization with 200+ material options",
      "Reduced physical prototype costs by 40%",
      "Enhanced customer engagement and conversion rates",
    ],
    gallery: [
      "/project-gallery/product-1.png",
      "/project-gallery/product-2.png",
      "/project-gallery/product-3.png",
      "/project-gallery/product-4.png",
    ],
  },
  {
    slug: "smart-factory-digital-twin",
    title: "Smart Factory Digital Twin",
    shortDescription:
      "Complete digital replica of manufacturing facility with real-time monitoring, predictive maintenance, and optimization algorithms.",
    fullDescription:
      "An advanced digital twin solution that creates a comprehensive virtual replica of an entire manufacturing facility. This system integrates real-time IoT data, machine learning algorithms, and 3D visualization to provide unprecedented insights into factory operations. The platform enables predictive maintenance, process optimization, and scenario planning through immersive 3D interfaces and data analytics dashboards.",
    thumbnail: "/smart-factory-digital-twin.png",
    video: "/project-videos/smart-factory.mp4",
    category: "automotive-mechanical",
    technologies: ["Digital Twin", "IoT Integration", "Machine Learning", "Real-time Analytics", "3D Visualization"],
    year: "2024",
    client: "Advanced Manufacturing Corp",
    duration: "12 months",
    challenge:
      "Creating a comprehensive digital twin that could accurately represent complex manufacturing processes while providing actionable insights for optimization and predictive maintenance.",
    solution:
      "Developed a multi-layered digital twin architecture combining IoT sensor data, machine learning models, and immersive 3D visualization. Implemented real-time data processing and predictive analytics for proactive maintenance scheduling.",
    results: [
      "35% reduction in unplanned downtime",
      "Real-time monitoring of 500+ production parameters",
      "Predictive maintenance accuracy of 94%",
      "25% improvement in overall equipment effectiveness",
    ],
    gallery: [
      "/project-gallery/smart-factory-1.png",
      "/project-gallery/smart-factory-2.png",
      "/project-gallery/smart-factory-3.png",
      "/project-gallery/smart-factory-4.png",
    ],
  },
  {
    slug: "interactive-gaming-experience",
    title: "Interactive Gaming Experience",
    shortDescription:
      "Immersive gaming environment with advanced physics and real-time rendering for entertainment industry.",
    fullDescription:
      "An ambitious gaming project that pushes the boundaries of interactive entertainment. This experience combines cutting-edge physics simulation with stunning visual effects to create a truly immersive world. Players navigate through dynamically changing environments where every action has realistic consequences, from destructible environments to complex particle systems that respond to player behavior.",
    thumbnail: "/3d-animation-studio.png",
    video: "/project-videos/gaming-experience.mp4",
    category: "games-media",
    technologies: ["Unity 2023", "HDRP", "Physics Simulation", "Procedural Generation", "AI Behavior Trees"],
    year: "2024",
    client: "Indie Game Studio",
    duration: "8 months",
    challenge:
      "Creating a gaming experience that felt both visually stunning and mechanically innovative while maintaining smooth performance across different hardware configurations.",
    solution:
      "Developed a custom physics-based interaction system with procedural environment generation. Implemented advanced AI behaviors and optimized rendering pipeline for consistent performance.",
    results: [
      "Achieved 120fps on high-end systems, 60fps on mid-range",
      "Dynamic environment system with 1000+ interactive objects",
      "Advanced AI system with emergent behaviors",
      "Modular design allowing for easy content expansion",
    ],
    gallery: [
      "/project-gallery/gaming-1.png",
      "/project-gallery/gaming-2.png",
      "/project-gallery/gaming-3.png",
      "/project-gallery/gaming-4.png",
    ],
  },
  {
    slug: "digital-media-production",
    title: "Digital Media Production",
    shortDescription:
      "Comprehensive media production pipeline with real-time effects and interactive storytelling elements.",
    fullDescription:
      "A cutting-edge media production platform that revolutionizes content creation through real-time effects and interactive storytelling. This comprehensive system integrates advanced visual effects, motion graphics, and interactive elements to create engaging multimedia experiences. The platform supports live streaming, real-time compositing, and dynamic content generation for modern media production workflows.",
    thumbnail: "/interactive-museum-ar.png",
    video: "/project-videos/media-production.mp4",
    category: "games-media",
    technologies: ["Media Production", "Storytelling", "Real-time Effects", "Motion Graphics", "Live Streaming"],
    year: "2023",
    client: "Digital Media Agency",
    duration: "6 months",
    challenge:
      "Creating a unified media production pipeline that could handle complex visual effects and interactive elements while maintaining broadcast quality and real-time performance.",
    solution:
      "Developed a modular production system with real-time effects processing, implemented interactive storytelling tools, and created seamless integration with broadcast equipment.",
    results: [
      "50% reduction in post-production time",
      "Real-time effects processing for live broadcasts",
      "Interactive content engagement increased by 300%",
      "Streamlined workflow for content creators",
    ],
    gallery: [
      "/project-gallery/media-1.png",
      "/project-gallery/media-2.png",
      "/project-gallery/media-3.png",
      "/project-gallery/media-4.png",
    ],
  },
  {
    slug: "vr-city-planning-experience",
    title: "VR City Planning Experience",
    shortDescription:
      "Immersive virtual reality environment for showcasing upcoming futuristic city developments at corporate conferences.",
    fullDescription:
      "A groundbreaking VR application designed for urban planners and city officials to visualize and interact with proposed city developments. This immersive experience allows users to walk through future cityscapes, examine building details, and understand the impact of urban planning decisions. The application features real-time data integration, showing traffic patterns, population density, and environmental impact in an intuitive 3D interface.",
    thumbnail: "/futuristic-city-skyline-in-vr.png",
    video: "/project-videos/vr-city-planning.mp4",
    category: "vr-experiences",
    technologies: ["Unity XR", "Oculus SDK", "SteamVR", "Real-time Data Integration", "Spatial Audio"],
    year: "2024",
    client: "Metropolitan Planning Commission",
    duration: "6 months",
    challenge:
      "Creating an intuitive VR interface that could handle complex urban data while remaining accessible to non-technical users and maintaining immersive visual quality.",
    solution:
      "Developed a gesture-based interaction system with voice commands and implemented LOD (Level of Detail) optimization for large-scale city environments. Created custom data visualization tools for urban metrics.",
    results: [
      "Reduced planning meeting time by 40%",
      "Improved stakeholder engagement and understanding",
      "Real-time collaboration between multiple VR users",
      "Integration with existing city planning databases",
    ],
    gallery: [
      "/project-gallery/vr-city-1.png",
      "/project-gallery/vr-city-2.png",
      "/project-gallery/vr-city-3.png",
      "/project-gallery/vr-city-4.png",
    ],
  },
  {
    slug: "industrial-training-simulator",
    title: "Industrial Training Simulator",
    shortDescription:
      "VR training environment for industrial equipment operation with haptic feedback and comprehensive safety protocols.",
    fullDescription:
      "An advanced VR training platform designed for industrial workers to safely learn complex equipment operation procedures. This immersive simulator features realistic haptic feedback, comprehensive safety protocols, and detailed equipment modeling. The system provides hands-on training experience without the risks and costs associated with real equipment, while tracking performance metrics and providing detailed feedback.",
    thumbnail: "/industrial-vr-training-simulation.png",
    video: "/project-videos/industrial-training.mp4",
    category: "vr-experiences",
    technologies: ["VR", "Training Simulation", "Haptic Feedback", "Safety", "Performance Analytics"],
    year: "2024",
    client: "Industrial Safety Corp",
    duration: "9 months",
    challenge:
      "Creating realistic industrial training scenarios that could provide hands-on experience while ensuring safety and tracking detailed performance metrics for certification purposes.",
    solution:
      "Developed physics-accurate equipment simulations with haptic feedback integration, implemented comprehensive safety protocols, and created detailed analytics dashboard for training progress tracking.",
    results: [
      "90% reduction in training-related accidents",
      "Comprehensive safety certification tracking",
      "Realistic equipment operation simulation",
      "50% faster training completion rates",
    ],
    gallery: [
      "/project-gallery/industrial-1.png",
      "/project-gallery/industrial-2.png",
      "/project-gallery/industrial-3.png",
      "/project-gallery/industrial-4.png",
    ],
  },
  {
    slug: "automotive-design-visualization",
    title: "Automotive Design Visualization",
    shortDescription:
      "Advanced automotive visualization with real-time material rendering and interactive configuration systems.",
    fullDescription:
      "A sophisticated automotive visualization platform that revolutionizes how car manufacturers present their vehicles to customers and stakeholders. This system features photorealistic material rendering, real-time configuration changes, and detailed technical visualizations. Users can explore every aspect of the vehicle, from paint finishes to interior materials, with unprecedented detail and accuracy.",
    thumbnail: "/3d-car-visualization-with-rtx-lighting.png",
    video: "/project-videos/automotive-design.mp4",
    category: "automotive-mechanical",
    technologies: ["Unreal Engine", "RTX Ray Tracing", "CAD Integration", "Material Editor", "Real-time Configurator"],
    year: "2024",
    client: "Luxury Automotive Manufacturer",
    duration: "5 months",
    challenge:
      "Achieving photorealistic automotive visualization that could handle complex material properties and real-time configuration changes while maintaining interactive frame rates.",
    solution:
      "Implemented RTX ray tracing for accurate reflections and lighting, developed a custom material system for automotive paints and fabrics, and created seamless CAD data integration pipeline.",
    results: [
      "Photorealistic quality matching professional photography",
      "Real-time configuration with 500+ customization options",
      "Reduced physical prototype requirements by 60%",
      "Enhanced customer engagement in showrooms",
    ],
    gallery: [
      "/project-gallery/automotive-1.png",
      "/project-gallery/automotive-2.png",
      "/project-gallery/automotive-3.png",
      "/project-gallery/automotive-4.png",
    ],
  },
  {
    slug: "real-time-virtual-production",
    title: "Real-time Virtual Production",
    shortDescription: "Advanced virtual production pipeline with LED wall integration and real-time camera tracking.",
    fullDescription:
      "A comprehensive virtual production solution that brings Hollywood-level technology to content creators. This system combines real-time rendering with LED wall technology and precise camera tracking to create seamless integration between live-action footage and digital environments. The platform supports multiple camera angles, dynamic lighting, and real-time compositing for broadcast-quality output.",
    thumbnail: "/3d-animation-studio.png",
    video: "/project-videos/virtual-production.mp4",
    category: "virtual-production",
    technologies: [
      "Unreal Engine",
      "LED Wall Integration",
      "Camera Tracking",
      "Real-time Compositing",
      "Broadcast Pipeline",
    ],
    year: "2024",
    client: "Film Production Studio",
    duration: "7 months",
    challenge:
      "Creating a virtual production pipeline that could deliver broadcast-quality output in real-time while maintaining perfect synchronization between physical and digital elements.",
    solution:
      "Developed custom camera tracking integration, implemented LED wall calibration system, and created real-time compositing pipeline with color-accurate output for broadcast standards.",
    results: [
      "Reduced post-production time by 70%",
      "Real-time preview of final composite",
      "Support for multiple simultaneous camera feeds",
      "Broadcast-quality output at 4K resolution",
    ],
    gallery: [
      "/project-gallery/virtual-prod-1.png",
      "/project-gallery/virtual-prod-2.png",
      "/project-gallery/virtual-prod-3.png",
      "/project-gallery/virtual-prod-4.png",
    ],
  },
  {
    slug: "live-event-virtual-sets",
    title: "Live Event Virtual Sets",
    shortDescription:
      "Dynamic virtual set environments for live broadcasting and event production with real-time control systems.",
    fullDescription:
      "A revolutionary virtual set system designed for live events and broadcasting that creates dynamic, interactive environments in real-time. This platform enables event producers to create stunning visual backdrops that respond to live performances, audience interaction, and real-time data feeds. The system supports multiple camera angles, dynamic lighting changes, and seamless integration with existing broadcast equipment.",
    thumbnail: "/futuristic-port-with-cranes-and-digital-interface.png",
    video: "/project-videos/live-event-sets.mp4",
    category: "virtual-production",
    technologies: [
      "Virtual Sets",
      "Live Broadcasting",
      "Real-time Control",
      "Interactive Environments",
      "Multi-Camera",
    ],
    year: "2023",
    client: "Live Event Production Company",
    duration: "4 months",
    challenge:
      "Creating dynamic virtual environments that could respond to live performances and audience interaction while maintaining broadcast quality and real-time performance.",
    solution:
      "Developed real-time environment control systems, implemented audience interaction integration, and created seamless multi-camera support with dynamic lighting systems.",
    results: [
      "Dynamic environments responding to live performance",
      "Real-time audience interaction integration",
      "Multi-camera support with seamless switching",
      "Enhanced audience engagement by 250%",
    ],
    gallery: [
      "/project-gallery/live-event-1.png",
      "/project-gallery/live-event-2.png",
      "/project-gallery/live-event-3.png",
      "/project-gallery/live-event-4.png",
    ],
  },
  {
    slug: "cinematic-animation-production",
    title: "Cinematic Animation Production",
    shortDescription: "High-quality cinematic animations with advanced character rigging and photorealistic rendering.",
    fullDescription:
      "A showcase of cinematic animation excellence featuring complex character performances, advanced rigging systems, and photorealistic rendering. This project demonstrates the full pipeline from concept to final render, including character design, rigging, animation, lighting, and post-production. The result is a series of cinematic sequences that rival major studio productions in quality and emotional impact.",
    thumbnail: "/3d-animation-studio.png",
    video: "/project-videos/cinematic-animation.mp4",
    category: "animation-movies",
    technologies: ["Blender", "Maya", "Substance Painter", "Houdini", "DaVinci Resolve"],
    year: "2024",
    client: "Animation Studio",
    duration: "10 months",
    challenge:
      "Achieving feature-film quality animation and rendering while managing complex character performances and maintaining consistent visual style throughout the production.",
    solution:
      "Developed advanced character rigs with facial capture integration, implemented custom lighting setups for each scene, and created efficient rendering pipeline for high-quality output.",
    results: [
      "Feature-film quality character animation",
      "Photorealistic rendering with global illumination",
      "Efficient pipeline reducing render times by 50%",
      "Award-winning visual effects and animation",
    ],
    gallery: [
      "/project-gallery/animation-1.png",
      "/project-gallery/animation-2.png",
      "/project-gallery/animation-3.png",
      "/project-gallery/animation-4.png",
    ],
  },
  {
    slug: "medical-vr-training-platform",
    title: "Medical VR Training Platform",
    shortDescription:
      "Immersive medical training environment for surgical procedures with realistic haptic feedback and assessment tools.",
    fullDescription:
      "An advanced medical training platform that provides immersive VR environments for surgical procedure training. This comprehensive system features realistic haptic feedback, detailed anatomical models, and comprehensive assessment tools. Medical professionals can practice complex procedures in a safe, controlled environment while receiving detailed performance feedback and certification tracking.",
    thumbnail: "/medical-vr-training.png",
    video: "/project-videos/medical-training.mp4",
    category: "animation-movies",
    technologies: ["Medical Simulation", "Animation", "Educational Content", "Haptic Feedback", "Assessment Tools"],
    year: "2023",
    client: "Medical Training Institute",
    duration: "8 months",
    challenge:
      "Creating medically accurate training simulations that could provide realistic haptic feedback while maintaining educational effectiveness and comprehensive assessment capabilities.",
    solution:
      "Developed medically accurate anatomical models with realistic haptic feedback, implemented comprehensive assessment systems, and created detailed progress tracking for certification purposes.",
    results: [
      "Medically accurate surgical simulations",
      "Realistic haptic feedback for procedures",
      "Comprehensive assessment and certification tracking",
      "75% improvement in training effectiveness",
    ],
    gallery: [
      "/project-gallery/medical-1.png",
      "/project-gallery/medical-2.png",
      "/project-gallery/medical-3.png",
      "/project-gallery/medical-4.png",
    ],
  },
]

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0)

  const project = projectsData.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying)
  }

  const nextGalleryImage = () => {
    setCurrentGalleryImage((prev) => (prev + 1) % project.gallery.length)
  }

  const prevGalleryImage = () => {
    setCurrentGalleryImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
  }

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
              >
                <ChevronLeft className="size-4" />
                Back to Projects
              </Link>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary">{project.year}</Badge>
                    <Badge variant="outline">{project.category.replace("-", " ")}</Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{project.title}</h1>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{project.fullDescription}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                      <Button size="lg" className="rounded-full">
                        <Calendar className="mr-2 size-4" />
                        Start Similar Project
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                      <ExternalLink className="mr-2 size-4" />
                      View Live Demo
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20 relative group">
                    {!isVideoPlaying ? (
                      <>
                        <Image
                          src={project.thumbnail || "/placeholder.svg"}
                          width={800}
                          height={450}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={toggleVideo}
                          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                        >
                          <div className="size-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
                            <Play className="size-6 text-black ml-1" />
                          </div>
                        </button>
                      </>
                    ) : (
                      <>
                        <video
                          src={project.video}
                          width={800}
                          height={450}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={toggleVideo}
                          className="absolute top-4 right-4 size-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
                        >
                          <Pause className="size-4 text-white" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Details */}
        <section className="w-full py-20 bg-muted/30">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Client</h3>
                    <p className="text-muted-foreground">{project.client}</p>
                  </CardContent>
                </Card>
                <Card className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Duration</h3>
                    <p className="text-muted-foreground">{project.duration}</p>
                  </CardContent>
                </Card>
                <Card className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 2).map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                    <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                    <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Results</h2>
                  <ul className="space-y-3">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="size-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="w-full py-20">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Project Gallery</h2>

              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-6">
                  <Image
                    src={project.gallery[currentGalleryImage] || "/placeholder.svg"}
                    width={1200}
                    height={675}
                    alt={`${project.title} gallery image ${currentGalleryImage + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex justify-center gap-2 mb-8">
                  {project.gallery.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentGalleryImage(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === currentGalleryImage ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.gallery.map((image, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentGalleryImage(i)}
                      className={`aspect-video rounded-lg overflow-hidden border-2 transition-colors ${
                        i === currentGalleryImage ? "border-primary" : "border-transparent"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        width={300}
                        height={169}
                        alt={`${project.title} thumbnail ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </button>
                  ))}
                </div>
              </div>
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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Ready to Start Your Own Project?</h2>
              <p className="text-primary-foreground/80 md:text-lg mb-8">
                Let's collaborate to create extraordinary interactive experiences that bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="rounded-full px-8">
                    Start Your Project
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 bg-transparent border-white text-white hover:bg-white/10"
                  >
                    View More Projects
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
