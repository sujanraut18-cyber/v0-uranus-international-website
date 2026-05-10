"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  id: number
  name: string
  university: string
  course: string
  image: string
  testimonial: string
  country: string
}

export default function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Aarav Sharma",
      university: "University of Manchester, UK",
      course: "MSc Data Science",
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "Uranus International Education made my dream of studying in the UK a reality. Their counselors guided me through every step of the process, from choosing the right university to securing my visa. The personal statement assistance was particularly helpful.",
      country: "UK",
    },
    {
      id: 2,
      name: "Priya Tamang",
      university: "University of Toronto, Canada",
      course: "Bachelor of Business Administration",
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "I was confused about which country to choose for my studies. The team at Uranus provided detailed information about each destination and helped me make an informed decision. Now I'm happily studying in Canada with excellent career prospects!",
      country: "Canada",
    },
    {
      id: 3,
      name: "Niraj Poudel",
      university: "Technical University of Munich, Germany",
      course: "MSc Mechanical Engineering",
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "The visa process for Germany seemed complicated, but with Uranus International Education's expert guidance, it was smooth sailing. Their pre-departure orientation was incredibly helpful too. I'm now pursuing my dream course at one of Germany's top universities.",
      country: "Germany",
    },
    {
      id: 4,
      name: "Sita Gurung",
      university: "University of Sydney, Australia",
      course: "Bachelor of Nursing",
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "I had a wonderful experience with Uranus International Education. Their counselors were knowledgeable, patient, and always available to answer my questions. They helped me find a nursing program that matched my career goals and guided me through the application process.",
      country: "Australia",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrevious = () => {
    setAutoplay(false)
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative overflow-hidden">
      <div className="flex justify-between absolute top-1/2 left-0 right-0 z-10 px-4 -mt-6">
        <button
          onClick={handlePrevious}
          className="bg-white/80 hover:bg-white text-navy-800 p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="bg-white/80 hover:bg-white text-navy-800 p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="relative h-[400px] md:h-[350px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full"
          >
            <Card className="bg-white shadow-xl rounded-xl overflow-hidden h-full">
              <div className="grid md:grid-cols-5 h-full">
                <div className="md:col-span-2 bg-navy-800 p-6 flex flex-col justify-center items-center text-center">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-white mb-4">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-white font-bold text-xl">{testimonials[currentIndex].name}</h3>
                  <p className="text-gold-400 font-medium">{testimonials[currentIndex].course}</p>
                  <p className="text-gray-300 text-sm mt-1">{testimonials[currentIndex].university}</p>

                  <div className="mt-4 bg-navy-700/50 px-4 py-2 rounded-full">
                    <p className="text-white text-sm">Studying in {testimonials[currentIndex].country}</p>
                  </div>
                </div>

                <div className="md:col-span-3 p-8 flex flex-col justify-center">
                  <Quote className="h-10 w-10 text-navy-200 mb-4" />
                  <p className="text-gray-700 italic text-lg leading-relaxed">
                    {testimonials[currentIndex].testimonial}
                  </p>

                  <div className="mt-6 flex justify-center">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setAutoplay(false)
                          setDirection(index > currentIndex ? 1 : -1)
                          setCurrentIndex(index)
                        }}
                        className={`mx-1 h-2 w-2 rounded-full transition-all duration-300 ${
                          index === currentIndex ? "bg-gold-500 w-6" : "bg-gray-300"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
