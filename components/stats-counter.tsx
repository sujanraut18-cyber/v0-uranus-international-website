"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface StatsCounterProps {
  end: number
  duration?: number
  suffix?: string
  title: string
}

export default function StatsCounter({ end, duration = 2000, suffix = "", title }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTime: number
      let animationFrame: number

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step)
        } else {
          setHasAnimated(true)
        }
      }

      animationFrame = requestAnimationFrame(step)

      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration, hasAnimated])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-navy-800">
        {count}
        {suffix}
      </div>
      <div className="text-gray-600 mt-2">{title}</div>
    </div>
  )
}
