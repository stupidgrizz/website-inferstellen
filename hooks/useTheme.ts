"use client"

import { useState, useEffect } from "react"

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    // Always use dark theme as requested
    const root = window.document.documentElement
    root.classList.remove("light")
    root.classList.add("dark")
  }, [])

  const handleSetTheme = (newTheme: "light" | "dark") => {
    // Since we're removing light mode completely, always keep dark
    setTheme("dark")
    const root = window.document.documentElement
    root.classList.remove("light")
    root.classList.add("dark")
  }

  return {
    theme: "dark" as const,
    setTheme: handleSetTheme,
  }
}
