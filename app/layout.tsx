import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "INFERSTELLEN - Rendering Odd Things into Beautiful Chaos",
  description:
    "Interactive 3D experiences, VR solutions, digital twins, and immersive productions using Unreal Engine, Unity, and Blender.",
  generator: "v0.app",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inferstellen-logo.jpg-wsuhc6lixFIyApSRVr1DwpcTPclEBN.jpeg",
    shortcut:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inferstellen-logo.jpg-wsuhc6lixFIyApSRVr1DwpcTPclEBN.jpeg",
    apple:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inferstellen-logo.jpg-wsuhc6lixFIyApSRVr1DwpcTPclEBN.jpeg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
