"use client"

import type React from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="border-none shadow-xl h-full service-card overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-600"></div>
        <CardHeader className="pt-8">
          <div className="bg-navy-50 p-3 rounded-lg inline-block mb-4">{icon}</div>
          <h3 className="font-bold text-xl text-navy-800">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
