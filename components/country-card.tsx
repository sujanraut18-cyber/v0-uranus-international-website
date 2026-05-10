"use client"

import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface CountryCardProps {
  name: string
  image: string
  description: string
  universities: string[]
  appliedCourses?: string[]
  flag: string
  slug: string
  featured?: boolean
}

export default function CountryCard({
  name,
  image,
  description,
  universities,
  appliedCourses,
  flag,
  slug,
  featured = false,
}: CountryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={featured ? "relative z-10 transform scale-105 md:scale-110" : ""}
    >
      <Card
        className={`overflow-hidden border-none shadow-xl h-full country-card ${featured ? "ring-2 ring-red-500" : ""}`}
      >
        {featured && (
          <div className="absolute top-4 right-4 z-20 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Featured
          </div>
        )}
        <div className="relative h-48">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
            <div className="p-6 w-full">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold text-2xl">{name}</h3>
                <div className="relative h-6 w-10">
                  <Image
                    src={flag || "/placeholder.svg"}
                    alt={`${name} flag`}
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-600 mb-4">{description}</p>

          <div className="mb-4">
            <h4 className="font-semibold text-navy-800 mb-2 flex items-center">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
              Top Universities
            </h4>
            <ul className="space-y-1.5 pl-4">
              {universities.slice(0, 3).map((uni, i) => (
                <li key={i} className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{uni}</span>
                </li>
              ))}
            </ul>
          </div>

          {appliedCourses && (
            <div>
              <h4 className="font-semibold text-navy-800 mb-2 flex items-center">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                Popular Applied Courses
              </h4>
              <ul className="space-y-1.5 pl-4">
                {appliedCourses.slice(0, 3).map((course, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="mr-2 h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="px-6 pb-6 mt-auto">
          <Link
            href={`/destinations#${slug}`}
            className="inline-flex items-center text-navy-600 hover:text-navy-800 font-medium text-sm group"
          >
            Learn more about studying in {name}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Card>
    </motion.div>
  )
}
