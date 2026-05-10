"use client"

import { useEffect } from "react"
import { scrollToSection } from "@/utils/scroll-to-section"

export default function AppliedCoursesScrollHandler() {
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      const hash = window.location.hash.substring(1)
      scrollToSection(hash)
    }
  }, [])

  return null
}
