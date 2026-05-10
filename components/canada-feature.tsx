"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Home, GraduationCap, Clock, Briefcase, Plane, BookOpen } from "lucide-react"

export default function CanadaFeature() {
  return (
    <section id="canada" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold border-navy-200 text-navy-800 mb-4">
            Featured Destination
          </div>

          <h2 className="text-4xl font-bold tracking-tight gradient-text section-heading">Study in Canada</h2>

          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
            Canada is increasingly becoming a top choice for international students due to its high-quality education,
            welcoming environment, and excellent post-graduation work and immigration opportunities.
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
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-50 rounded-lg z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-50 rounded-lg z-0"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/canada-destination.jpeg"
                alt="Toronto, Canada"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-lg shadow-lg z-20">
              <div className="flex items-center gap-3">
                <div className="bg-red-50 p-2 rounded-full">
                  <Image
                    src="/images/flags/canada-flag.png"
                    alt="Canada Flag"
                    width={30}
                    height={20}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-navy-800">Canada</div>
                  <div className="text-xs text-gray-500">98% Visa Success Rate</div>
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
                      <div className="bg-red-100 p-2 rounded-full shrink-0">
                        <GraduationCap className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Quality Education System</h3>
                        <p className="text-gray-600">
                          Canadian education combines the best of British and American systems with a focus on research
                          and practical skills. Programs emphasize hands-on learning and real-world applications,
                          preparing students for successful careers.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 p-2 rounded-full shrink-0">
                        <GraduationCap className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Multicultural Environment</h3>
                        <p className="text-gray-600">
                          Canada embraces diversity and multiculturalism, creating a welcoming environment for
                          international students. Campuses are diverse communities where students from around the world
                          share perspectives and build global networks.
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
                      <div className="bg-blue-100 p-2 rounded-full shrink-0">
                        <Home className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Cost of Living</h3>
                        <p className="text-gray-600">Monthly expenses: CAD 1,000-1,500 (varies by city)</p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                          <li>• Accommodation: CAD 600-1,000/month</li>
                          <li>• Food: CAD 300-500/month</li>
                          <li>• Transport: CAD 80-150/month</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-2 rounded-full shrink-0">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Part-time Work Rules</h3>
                        <p className="text-gray-600">
                          International students can work up to 20 hours per week during academic sessions and full-time
                          during scheduled breaks without needing a separate work permit. The minimum wage varies by
                          province, ranging from CAD 13-16 per hour.
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
                          The Study Permit requires a letter of acceptance from a Designated Learning Institution (DLI),
                          proof of funds (tuition plus CAD 10,000 for living expenses), and a clean criminal record. The
                          Student Direct Stream (SDS) offers faster processing for students from certain countries.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-2 rounded-full shrink-0">
                        <Briefcase className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Immigration Pathway</h3>
                        <p className="text-gray-600">
                          The Post-Graduation Work Permit (PGWP) allows graduates to work in Canada for up to 3 years,
                          depending on the length of their study program. This Canadian work experience can
                          significantly improve chances for permanent residency through Express Entry or Provincial
                          Nominee Programs.
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
                      <div className="bg-purple-100 p-2 rounded-full shrink-0">
                        <BookOpen className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Technology & Computing</h3>
                        <ul className="space-y-1 text-gray-600">
                          <li>• Computer Science</li>
                          <li>• Artificial Intelligence</li>
                          <li>• Web Development</li>
                          <li>• Cybersecurity</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-purple-100 p-2 rounded-full shrink-0">
                        <BookOpen className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Business & Management</h3>
                        <ul className="space-y-1 text-gray-600">
                          <li>• Project Management</li>
                          <li>• Business Administration</li>
                          <li>• Supply Chain Management</li>
                          <li>• Digital Marketing</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 p-2 rounded-full shrink-0">
                        <BookOpen className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Healthcare & Engineering</h3>
                        <ul className="space-y-1 text-gray-600">
                          <li>• Nursing</li>
                          <li>• Healthcare Administration</li>
                          <li>• Civil Engineering</li>
                          <li>• Environmental Engineering</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-8">
              <Link href="/destinations#canada">
                <Button className="bg-red-600 hover:bg-red-700 text-white">Explore Study Options in Canada</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
