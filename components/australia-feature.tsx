"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Sun, GraduationCap, Clock, Briefcase, Home, Plane, BookOpen } from "lucide-react"

export default function AustraliaFeature() {
  return (
    <section id="australia" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold border-navy-200 text-navy-800 mb-4">
            Featured Destination
          </div>

          <h2 className="text-4xl font-bold tracking-tight gradient-text section-heading">Study in Australia</h2>

          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
            Experience world-class education in a diverse, welcoming environment with stunning natural landscapes,
            vibrant cities, and excellent post-study work opportunities.
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
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-50 rounded-lg z-0"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/australia-destination.png"
                alt="Australia"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-lg shadow-lg z-20">
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-full">
                  <Image
                    src="/images/flags/australia-flag.png"
                    alt="Australia Flag"
                    width={30}
                    height={20}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-navy-800">Australia</div>
                  <div className="text-xs text-gray-500">Post-Study Work Rights</div>
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
                        <h3 className="font-bold text-lg mb-1">Globally Recognized Education</h3>
                        <p className="text-gray-600">
                          Australia's education system is known for its innovative approach, quality assurance, and
                          global recognition. The Australian Qualifications Framework (AQF) ensures consistent standards
                          across all institutions, making Australian qualifications highly respected by employers
                          worldwide.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-2 rounded-full shrink-0">
                        <Sun className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Lifestyle & Culture</h3>
                        <p className="text-gray-600">
                          Australia offers a relaxed, multicultural environment with a high quality of life. Students
                          enjoy a perfect balance of academic excellence and outdoor lifestyle with beautiful beaches,
                          national parks, and vibrant cities that consistently rank among the world's most livable.
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
                      <div className="bg-green-100 p-2 rounded-full shrink-0">
                        <Home className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Cost of Living</h3>
                        <p className="text-gray-600">
                          Monthly expenses: AUD 1,800-2,500 (varies by city and lifestyle)
                        </p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                          <li>• Accommodation: AUD 600-1,200/month</li>
                          <li>• Food: AUD 400-600/month</li>
                          <li>• Transport: AUD 150-200/month</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-2 rounded-full shrink-0">
                        <Clock className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Part-time Work Rules</h3>
                        <p className="text-gray-600">
                          International students can work up to 48 hours per fortnight during the semester and unlimited
                          hours during scheduled breaks. The minimum wage is approximately AUD 21.38 per hour, one of
                          the highest in the world, making Australia an attractive destination for students who need to
                          support themselves.
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
                      <div className="bg-red-100 p-2 rounded-full shrink-0">
                        <Plane className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Visa Information</h3>
                        <p className="text-gray-600">
                          The Student Visa (Subclass 500) requires a Confirmation of Enrollment (CoE), proof of
                          financial capacity (AUD 21,041 per year), health insurance (OSHC), and English proficiency.
                          Processing times range from 4-6 weeks, and the visa allows multiple entries to Australia for
                          the duration of your course.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 p-2 rounded-full shrink-0">
                        <Briefcase className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Post-Study Work Visa</h3>
                        <p className="text-gray-600">
                          The Post-Study Work visa (Subclass 485) allows graduates to work in Australia for 2-4 years
                          depending on qualification level. This provides valuable international work experience and a
                          potential pathway to permanent residency through skilled migration programs, making Australia
                          an excellent choice for those considering long-term opportunities.
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
                          <li>• Information Technology</li>
                          <li>• Cybersecurity</li>
                          <li>• Data Science & Analytics</li>
                          <li>• Software Engineering</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-yellow-100 p-2 rounded-full shrink-0">
                        <BookOpen className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Healthcare & Sciences</h3>
                        <ul className="space-y-1 text-gray-600">
                          <li>• Nursing</li>
                          <li>• Public Health</li>
                          <li>• Medical Laboratory Science</li>
                          <li>• Pharmacy</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-yellow-100 p-2 rounded-full shrink-0">
                        <BookOpen className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Business & Engineering</h3>
                        <ul className="space-y-1 text-gray-600">
                          <li>• Construction Management</li>
                          <li>• Hospitality Management</li>
                          <li>• Mining Engineering</li>
                          <li>• Agricultural Sciences</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-8">
              <Link href="/destinations#australia">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Explore Study Options in Australia</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
