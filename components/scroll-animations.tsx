"use client"

import { useEffect, useRef } from "react"

export default function ScrollAnimations() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
          observerRef.current?.unobserve(entry.target)
        }
      })
    }, options)

    const elements = document.querySelectorAll(".fade-in-up")
    elements.forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => {
      if (observerRef.current) {
        elements.forEach((el) => {
          observerRef.current?.unobserve(el)
        })
      }
    }
  }, [])

  return null
}
