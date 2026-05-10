"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Euro, GraduationCap, Clock, Briefcase, Home, Plane } from "lucide-react"

export default function GermanyFeature() {
  return (
    <section id="germany" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold border-navy-200 text-navy-800 mb-4">
            Featured Destination
          </div>

          <h2 className="text-4xl font-bold tracking-tight gradient-text section-heading">Study in Germany</h2>

          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
            Experience world-class education with minimal tuition fees, strong industry connections, and excellent
            quality of life in one of Europe's most innovative economies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-50 rounded-lg z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-50 rounded-lg z-0"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/germany-destination.png"
                alt="Germany"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-lg shadow-lg z-20">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-50 p-2 rounded-full">
                  <Image
                    src="/images/flags/germany-flag.png"
                    alt="Germany Flag"
                    width={30}
                    height={20}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-navy-800">Germany</div>
                  <div className="text-xs text-gray-500">Free Tuition at Public Universities</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Tabs defaultValue="education" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="practical">Practical Info</TabsTrigger>
                <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
              </TabsList>

              <TabsContent value="education" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-yellow-100 p-2 rounded-full shrink-0">
                        <GraduationCap className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">World-Class Education System</h3>
                        <p className="text-gray-600">
                          Germany's education system is renowned for its high standards, practical approach, and strong
                          research focus. Universities emphasize independent thinking and practical application of
                          knowledge.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-yellow-100 p-2 rounded-full shrink-0">
                        <Euro className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Tuition-Free Education</h3>
                        <p className="text-gray-600">
                          Most public universities in Germany offer tuition-free education for all students, regardless
                          of nationality. You'll only need to pay a small semester fee (€150-€350) that covers
                          administrative costs and public transportation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="practical" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-red-100 p-2 rounded-full shrink-0">
                        <Home className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Cost of Living</h3>
                        <p className="text-gray-600">
                          Monthly expenses: €850-€1,000 (cities like Berlin, Munich may be higher)
                        </p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                          <li>• Accommodation: €300-€600/month</li>
                          <li>• Food: €200-€250/month</li>
                          <li>• Transport: €70-€100/month (often included in semester fee)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 p-2 rounded-full shrink-0">
                        <Clock className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Part-time Work Rules</h3>
                        <p className="text-gray-600">
                          International students can work up to 120 full days or 240 half days per year without
                          requiring additional permits. This helps cover living expenses while studying.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="opportunities" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-blue-100 p-2 rounded-full shrink-0">
                        <Plane className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Visa Information</h3>
                        <p className="text-gray-600">
                          Student visa requirements include proof of university admission, health insurance, and
                          financial resources (€10,332 per year in a blocked account). The visa process typically takes
                          4-6 weeks.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-2 rounded-full shrink-0">
                        <Briefcase className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Post-Study Opportunities</h3>
                        <p className="text-gray-600">
                          After graduation, you can apply for an 18-month job-seeking visa to find employment related to
                          your studies. Once employed, you can apply for an EU Blue Card or other work permits with a
                          pathway to permanent residency.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-8">
              <Link href="/destinations#germany">
                <Button className="bg-red-600 hover:bg-red-700 text-white">Explore Study Options in Germany</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
