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
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
