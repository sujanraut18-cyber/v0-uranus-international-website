"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { PoundSterlingIcon as Pound, GraduationCap, Clock, Briefcase, Home, Plane, BookOpen } from "lucide-react"

export default function UKFeature() {
  return (
    <section id="uk" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold border-navy-200 text-navy-800 mb-4">
            Featured Destination
          </div>

          <h2 className="text-4xl font-bold tracking-tight gradient-text section-heading">
            Study in the United Kingdom
          </h2>

          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
            The UK is home to some of the world's oldest and most prestigious universities, offering high-quality
            education with globally recognized qualifications.
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
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-navy-50 rounded-lg z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-50 rounded-lg z-0"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/uk-destination.jpeg"
                alt="London, United Kingdom"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-lg shadow-lg z-20">
              <div className="flex items-center gap-3">
                <div className="bg-red-50 p-2 rounded-full">
                  <Image
                    src="/images/flags/uk-flag.png"
                    alt="UK Flag"
                    width={30}
                    height={20}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-navy-800">United Kingdom</div>
                  <div className="text-xs text-gray-500">Study Destination</div>
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
                        <h3 className="font-bold text-lg mb-1">World-Class Education System</h3>
                        <p className="text-gray-600">
                          The UK education system emphasizes critical thinking, independent research, and specialized
                          knowledge. Universities follow rigorous quality standards, ensuring globally recognized
                          qualifications that employers value worldwide.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 p-2 rounded-full shrink-0">
                        <Clock className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Time-Efficient Programs</h3>
                        <p className="text-gray-600">
                          UK degrees are notably shorter than many international counterparts: 3 years for Bachelor's
                          and just 1 year for most Master's programs. This means less time studying and faster entry
                          into the job market, with significant tuition and living cost savings.
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
                        <p className="text-gray-600">Monthly expenses: £1,000-£1,500 (London costs are higher)</p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                          <li>• Accommodation: £500-£800/month</li>
                          <li>• Food: £200-£300/month</li>
                          <li>• Transport: £50-£100/month</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-2 rounded-full shrink-0">
                        <Pound className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Part-time Work Rules</h3>
                        <p className="text-gray-600">
                          International students can work up to 20 hours per week during term time and full-time during
                          holidays. The National Minimum Wage is age-dependent, starting at £7.49/hour for 18-20
                          year-olds and £10.42/hour for those 21 and over.
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
                          The Student visa (formerly Tier 4) requires a Confirmation of Acceptance for Studies (CAS)
                          from your university, proof of funds for tuition and living costs (approximately £1,334 per
                          month for living expenses in London, £1,023 outside London), and English language proficiency.
                          Apply up to 6 months before your course starts.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-2 rounded-full shrink-0">
                        <Briefcase className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Post-Study Work Opportunities</h3>
                        <p className="text-gray-600">
                          The Graduate Route allows international students to stay and work in the UK for 2 years after
                          completing a degree (3 years for PhD graduates), with no minimum salary requirement or job
                          sponsorship needed. This provides valuable international work experience and potential
                          pathways to longer-term work visas.
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
                        <h3 className="font-bold text-lg mb-1">Technology & Data</h3>
                        <ul className="space-y-1 text-gray-600">
                          <li>• MSc Data Science and Analytics</li>
                          <li>• MSc Artificial Intelligence</li>
                          <li>• MSc Cyber Security</li>
                          <li>• MSc Financial Technology</li>
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
                          <li>• MSc International Business</li>
                          <li>• MSc Project Management</li>
                          <li>• MSc Digital Marketing</li>
                          <li>• MSc Supply Chain Management</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 p-2 rounded-full shrink-0">
                        <BookOpen className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Engineering & Healthcare</h3>
                        <ul className="space-y-1 text-gray-600">
                          <li>• MSc Engineering Management</li>
                          <li>• MSc Renewable Energy Systems</li>
                          <li>• MSc Public Health</li>
                          <li>• MSc Healthcare Management</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-8">
              <Link href="/destinations#uk">
                <Button className="bg-red-600 hover:bg-red-700 text-white">Explore Study Options in the UK</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
