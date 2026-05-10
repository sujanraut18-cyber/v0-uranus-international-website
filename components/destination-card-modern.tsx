"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Globe, Wallet, Clock, GraduationCap, Briefcase } from "lucide-react"

interface DestinationCardProps {
  name: string
  slug: string
  image: string
  flag: string
  summary: string
  education: string
  lifestyle: string
  costOfLiving: {
    accommodation: string
    food: string
    transport: string
  }
  workRules: string
  visaInfo: string
  postStudyOptions: string
  accentColor: string
}

export default function DestinationCardModern({
  name,
  slug,
  image,
  flag,
  summary,
  education,
  lifestyle,
  costOfLiving,
  workRules,
  visaInfo,
  postStudyOptions,
  accentColor,
}: DestinationCardProps) {
  const [activeTab, setActiveTab] = useState<string | null>(null)

  const toggleTab = (tab: string) => {
    if (activeTab === tab) {
      setActiveTab(null)
    } else {
      setActiveTab(tab)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const tabs = [
    {
      id: "education",
      label: "Education System",
      icon: <GraduationCap className="h-4 w-4" />,
      content: education,
    },
    {
      id: "lifestyle",
      label: "Lifestyle & Culture",
      icon: <Globe className="h-4 w-4" />,
      content: lifestyle,
    },
    {
      id: "cost",
      label: "Cost of Living",
      icon: <Wallet className="h-4 w-4" />,
      content: (
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Accommodation:</span>
            <span>{costOfLiving.accommodation}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Food:</span>
            <span>{costOfLiving.food}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Transport:</span>
            <span>{costOfLiving.transport}</span>
          </div>
        </div>
      ),
    },
    {
      id: "work",
      label: "Part-time Work",
      icon: <Clock className="h-4 w-4" />,
      content: workRules,
    },
    {
      id: "visa",
      label: "Visa Information",
      icon: <GraduationCap className="h-4 w-4" />,
      content: visaInfo,
    },
    {
      id: "poststudy",
      label: "Post-Study Options",
      icon: <Briefcase className="h-4 w-4" />,
      content: postStudyOptions,
    },
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-48 md:h-56">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 w-full flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-bold text-white">{name}</h3>
            </div>
            <div className="relative h-8 w-12">
              <Image src={flag || "/placeholder.svg"} alt={`${name} flag`} fill className="object-cover rounded-sm" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-700 mb-6">{summary}</p>

        <div className="space-y-3">
          {tabs.map((tab) => (
            <div key={tab.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleTab(tab.id)}
                className={`w-full p-4 flex items-center justify-between text-left transition-colors ${
                  activeTab === tab.id ? `bg-${accentColor}-50 text-${accentColor}-700` : "bg-white"
                }`}
                style={
                  activeTab === tab.id
                    ? { backgroundColor: `rgba(var(--${accentColor}-50), 0.2)`, color: `var(--${accentColor}-700)` }
                    : {}
                }
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-full ${activeTab === tab.id ? `bg-${accentColor}-100` : "bg-gray-100"}`}
                    style={
                      activeTab === tab.id
                        ? { backgroundColor: `rgba(var(--${accentColor}-100), 0.3)` }
                        : { backgroundColor: "var(--gray-100)" }
                    }
                  >
                    {tab.icon}
                  </div>
                  <span className="font-medium">{tab.label}</span>
                </div>
                <ChevronDown className={`h-5 w-5 transition-transform ${activeTab === tab.id ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {activeTab === tab.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 border-t border-gray-200 text-gray-700">{tab.content}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Button
            className="w-full"
            style={{ backgroundColor: `var(--${accentColor}-600)`, color: "white" }}
            onClick={() => scrollToSection(slug)}
          >
            Learn More About {name}
          </Button>
        </div>
      </div>
    </div>
  )
}
