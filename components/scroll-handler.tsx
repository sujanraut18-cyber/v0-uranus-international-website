"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { scrollToSection } from "@/utils/scroll-to-section"

export default function ScrollHandler() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      const hash = window.location.hash.substring(1)
      scrollToSection(hash)
    }
  }, [pathname, searchParams])

  return null
}
