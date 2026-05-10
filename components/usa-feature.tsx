"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Clock, Briefcase, Home, Plane, BookOpen } from "lucide-react"

export default function USAFeature() {
  return (
    <section id="usa" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold border-navy-200 text-navy-800 mb-4">
            Featured Destination
          </div>

          <h2 className="text-4xl font-bold tracking-tight gradient-text section-heading">
            Study in the United States
          </h2>

          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
            The USA offers one of the world's most diverse and flexible education systems, with thousands of
            institutions offering a wide range of programs and unparalleled research opportunities.
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
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-50 rounded-lg z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-50 rounded-lg z-0"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/usa-destination.png"
                alt="United States of America"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-lg shadow-lg z-20">
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-full">
                  <Image
                    src="/images/flags/usa-flag.png"
                    alt="USA Flag"
                    width={30}
                    height={20}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-navy-800">United States</div>
                  <div className="text-xs text-gray-500">90% Visa Success Rate</div>
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
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="practical">Practical Info</TabsTrigger>
                <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
                <TabsTrigger value="courses">In-Demand Courses</TabsTrigger>
              </TabsList>

              <TabsContent value="education" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-blue-100 p-2 rounded-full shrink-0">
                        <GraduationCap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Flexible Education System</h3>
                        <p className="text-gray-600">
                          The US education system is known for its flexibility, allowing students to explore different
                          subjects before choosing a major. This approach encourages interdisciplinary learning and
                          helps students discover their true interests and strengths.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-2 rounded-full shrink-0">
                        <GraduationCap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Research & Innovation</h3>
                        <p className="text-gray-600">
                          US universities are at the forefront of research and innovation, with state-of-the-art
                          facilities and substantial funding. Students have opportunities to participate in
                          groundbreaking research projects and gain hands-on experience in their fields.
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
                          Monthly expenses: $1,200-$2,000 (varies significantly by location)
                        </p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                          <li>• Accommodation: $600-$1,200/month</li>
                          <li>• Food: $300-$500/month</li>
                          <li>• Transport: $50-$100/month</li>
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
                          F-1 visa students can work on-campus up to 20 hours per week during the semester and full-time
                          during breaks. Off-campus work is restricted to Curricular Practical Training (CPT) or
                          Optional Practical Training (OPT) related to your field of study.
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
                      <div className="bg-green-100 p-2 rounded-full shrink-0">
                        <Plane className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Visa Information</h3>
                        <p className="text-gray-600">
                          The F-1 student visa requires an I-20 form from your university, proof of financial resources
                          to cover expenses, and a demonstrated intent to return to your home country after studies. The
                          visa interview is a crucial step, and preparation is key.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-2 rounded-full shrink-0">
                        <Briefcase className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Post-Study Work Options</h3>
                        <p className="text-gray-600">
                          Optional Practical Training (OPT) allows students to work in their field of study for 12
                          months after graduation. STEM degree graduates can extend this to a total of 36 months,
                          providing valuable work experience and potential pathways to H-1B work visas.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="courses" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-yellow-100 p-2 rounded-full shrink-0">
                        <BookOpen className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Technology & Computing</h3>
                        <ul className="space-y-1 text-gray-600">
                          <li>• MS Computer Science</li>
                          <li>• MS Data Science</li>
                          <li>• MS Artificial Intelligence</li>
                          <li>• MS Cybersecurity</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-yellow-100 p-2 rounded-full shrink-0">
                        <BookOpen className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Business & Management</h3>
                        <ul className="space-y-1 text-gray-600">
                          <li>• MBA (various specializations)</li>
                          <li>• MS Business Analytics</li>
                          <li>• MS Finance</li>
                          <li>• MS Marketing</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-yellow-100 p-2 rounded-full shrink-0">
                        <BookOpen className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Engineering & Sciences</h3>
                        <ul className="space-y-1 text-gray-600">
                          <li>• MS Mechanical Engineering</li>
                          <li>• MS Electrical Engineering</li>
                          <li>• MS Biomedical Engineering</li>
                          <li>• MS Environmental Science</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-8">
              <Link href="/destinations#usa">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Explore Study Options in the USA</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
