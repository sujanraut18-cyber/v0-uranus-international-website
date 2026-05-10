import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Plane, Users, Wallet, Globe, GraduationCap, Briefcase } from "lucide-react"

export default function DestinationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=300&width=1920"
            alt="Study Destinations"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Study Destinations</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Explore top study destinations with comprehensive information to help you make informed decisions about your
            international education journey.
          </p>
        </div>
      </section>

      {/* Destinations Overview */}
      <section className="py-16 bg-black text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white">Your Global Education Options</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Each destination offers unique educational experiences, cultural opportunities, and career pathways.
              Explore the practical information below to find the perfect fit for your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* UK */}
            <div id="uk" className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800">
              <div className="relative h-64">
                <Image src="/images/uk-destination.jpeg" alt="United Kingdom" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 flex items-center gap-4">
                  <div className="h-16 w-24 relative">
                    <Image
                      src="/images/flags/uk-flag.png"
                      alt="UK Flag"
                      fill
                      className="object-cover rounded-md shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">United Kingdom</h3>
                    <p className="text-gray-300">World-class education with global recognition</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2 text-red-400">Key Highlights</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Prestigious universities with centuries of academic excellence</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Shorter degree programs (3 years Bachelor's, 1 year Master's)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>2-year post-study work visa for all graduates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Diverse, multicultural environment with rich history</span>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-red-400">Tuition Fees</h4>
                    <p className="text-gray-300">£15,000 - £25,000/year</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-red-400">Living Costs</h4>
                    <p className="text-gray-300">£1,000 - £1,500/month</p>
                  </div>
                </div>
                <Link href="/destinations/uk">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Explore UK Study Options</Button>
                </Link>
              </div>
            </div>

            {/* USA */}
            <div id="usa" className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800">
              <div className="relative h-64">
                <Image src="/images/usa-destination.png" alt="United States" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 flex items-center gap-4">
                  <div className="h-16 w-24 relative">
                    <Image
                      src="/images/flags/usa-flag.png"
                      alt="USA Flag"
                      fill
                      className="object-cover rounded-md shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">United States</h3>
                    <p className="text-gray-300">Flexible education with research excellence</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2 text-blue-400">Key Highlights</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Diverse range of institutions and specialized programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Cutting-edge research facilities and innovation hubs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>OPT allows 1-3 years of work experience after graduation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Vibrant campus life with extensive extracurricular options</span>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">Tuition Fees</h4>
                    <p className="text-gray-300">$20,000 - $50,000/year</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">Living Costs</h4>
                    <p className="text-gray-300">$1,200 - $2,000/month</p>
                  </div>
                </div>
                <Link href="/destinations/usa">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Explore USA Study Options</Button>
                </Link>
              </div>
            </div>

            {/* Canada */}
            <div id="canada" className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800">
              <div className="relative h-64">
                <Image src="/images/canada-destination.jpeg" alt="Canada" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 flex items-center gap-4">
                  <div className="h-16 w-24 relative">
                    <Image
                      src="/images/flags/canada-flag.png"
                      alt="Canada Flag"
                      fill
                      className="object-cover rounded-md shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Canada</h3>
                    <p className="text-gray-300">Quality education with immigration pathways</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2 text-red-400">Key Highlights</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>High-quality education with practical learning approach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Post-Graduation Work Permit for up to 3 years</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Clear pathway to permanent residency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Safe, multicultural environment with high quality of life</span>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-red-400">Tuition Fees</h4>
                    <p className="text-gray-300">CAD 15,000 - 30,000/year</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-red-400">Living Costs</h4>
                    <p className="text-gray-300">CAD 1,000 - 1,500/month</p>
                  </div>
                </div>
                <Link href="/destinations/canada">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Explore Canada Study Options
                  </Button>
                </Link>
              </div>
            </div>

            {/* Germany */}
            <div id="germany" className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800">
              <div className="relative h-64">
                <Image src="/images/germany-destination.png" alt="Germany" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 flex items-center gap-4">
                  <div className="h-16 w-24 relative">
                    <Image
                      src="/images/flags/germany-flag.png"
                      alt="Germany Flag"
                      fill
                      className="object-cover rounded-md shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Germany</h3>
                    <p className="text-gray-300">Tuition-free education with strong economy</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2 text-yellow-400">Key Highlights</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>No tuition fees at public universities (only semester fees)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Strong industry connections and practical education</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>18-month job-seeking visa after graduation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>High standard of living and central European location</span>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-yellow-400">Tuition Fees</h4>
                    <p className="text-gray-300">€0 - €3,000/year</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-yellow-400">Living Costs</h4>
                    <p className="text-gray-300">€850 - €1,000/month</p>
                  </div>
                </div>
                <Link href="/destinations/germany">
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                    Explore Germany Study Options
                  </Button>
                </Link>
              </div>
            </div>

            {/* Australia */}
            <div id="australia" className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800">
              <div className="relative h-64">
                <Image src="/images/australia-destination.png" alt="Australia" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 flex items-center gap-4">
                  <div className="h-16 w-24 relative">
                    <Image
                      src="/images/flags/australia-flag.png"
                      alt="Australia Flag"
                      fill
                      className="object-cover rounded-md shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Australia</h3>
                    <p className="text-gray-300">Quality education in a stunning environment</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2 text-blue-400">Key Highlights</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Globally recognized qualifications with innovative approach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Post-Study Work visa for 2-4 years</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>High minimum wage for part-time work</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Excellent quality of life with beautiful landscapes</span>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">Tuition Fees</h4>
                    <p className="text-gray-300">AUD 20,000 - 45,000/year</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-blue-400">Living Costs</h4>
                    <p className="text-gray-300">AUD 1,800 - 2,500/month</p>
                  </div>
                </div>
                <Link href="/destinations/australia">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Explore Australia Study Options
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white">Destination Comparison</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Compare key factors across our featured study destinations to help you make an informed decision.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-black text-white">
                  <th className="p-4 text-left border-b border-gray-700">Factor</th>
                  <th className="p-4 text-center border-b border-gray-700">
                    <div className="flex flex-col items-center">
                      <Image src="/images/flags/uk-flag.png" alt="UK" width={30} height={20} className="mb-2" />
                      United Kingdom
                    </div>
                  </th>
                  <th className="p-4 text-center border-b border-gray-700">
                    <div className="flex flex-col items-center">
                      <Image src="/images/flags/usa-flag.png" alt="USA" width={30} height={20} className="mb-2" />
                      United States
                    </div>
                  </th>
                  <th className="p-4 text-center border-b border-gray-700">
                    <div className="flex flex-col items-center">
                      <Image src="/images/flags/canada-flag.png" alt="Canada" width={30} height={20} className="mb-2" />
                      Canada
                    </div>
                  </th>
                  <th className="p-4 text-center border-b border-gray-700">
                    <div className="flex flex-col items-center">
                      <Image
                        src="/images/flags/germany-flag.png"
                        alt="Germany"
                        width={30}
                        height={20}
                        className="mb-2"
                      />
                      Germany
                    </div>
                  </th>
                  <th className="p-4 text-center border-b border-gray-700">
                    <div className="flex flex-col items-center">
                      <Image
                        src="/images/flags/australia-flag.png"
                        alt="Australia"
                        width={30}
                        height={20}
                        className="mb-2"
                      />
                      Australia
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800 bg-gray-900">
                  <td className="p-4 font-medium">Average Tuition (Annual)</td>
                  <td className="p-4 text-center">£15,000 - £25,000</td>
                  <td className="p-4 text-center">$20,000 - $50,000</td>
                  <td className="p-4 text-center">CAD 15,000 - 30,000</td>
                  <td className="p-4 text-center">€0 - €3,000</td>
                  <td className="p-4 text-center">AUD 20,000 - 45,000</td>
                </tr>
                <tr className="border-b border-gray-800 bg-gray-800">
                  <td className="p-4 font-medium">Work During Studies</td>
                  <td className="p-4 text-center">20 hrs/week</td>
                  <td className="p-4 text-center">20 hrs/week (on-campus)</td>
                  <td className="p-4 text-center">20 hrs/week</td>
                  <td className="p-4 text-center">120 full days/year</td>
                  <td className="p-4 text-center">48 hrs/fortnight</td>
                </tr>
                <tr className="border-b border-gray-800 bg-gray-900">
                  <td className="p-4 font-medium">Post-Study Work Rights</td>
                  <td className="p-4 text-center">2 years (3 for PhD)</td>
                  <td className="p-4 text-center">1 year (3 for STEM)</td>
                  <td className="p-4 text-center">Up to 3 years</td>
                  <td className="p-4 text-center">18 months</td>
                  <td className="p-4 text-center">2-4 years</td>
                </tr>
                <tr className="border-b border-gray-800 bg-gray-800">
                  <td className="p-4 font-medium">Path to Residency</td>
                  <td className="p-4 text-center">Moderate</td>
                  <td className="p-4 text-center">Challenging</td>
                  <td className="p-4 text-center">Excellent</td>
                  <td className="p-4 text-center">Good</td>
                  <td className="p-4 text-center">Good</td>
                </tr>
                <tr className="border-b border-gray-800 bg-gray-900">
                  <td className="p-4 font-medium">Average Living Costs (Monthly)</td>
                  <td className="p-4 text-center">£1,000 - £1,500</td>
                  <td className="p-4 text-center">$1,200 - $2,000</td>
                  <td className="p-4 text-center">CAD 1,000 - 1,500</td>
                  <td className="p-4 text-center">€850 - €1,000</td>
                  <td className="p-4 text-center">AUD 1,800 - 2,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Decision Factors */}
      <section className="py-16 bg-black text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white">Choosing Your Ideal Destination</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Consider these key factors when deciding which study destination is right for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Goals",
                description:
                  "Consider the reputation of institutions in your field of study, research opportunities, and teaching approaches that match your learning style.",
                icon: <GraduationCap className="h-10 w-10 text-red-400" />,
              },
              {
                title: "Budget Considerations",
                description:
                  "Factor in tuition fees, living costs, scholarship opportunities, and potential part-time work income when planning your finances.",
                icon: <Wallet className="h-10 w-10 text-red-400" />,
              },
              {
                title: "Lifestyle Preferences",
                description:
                  "Think about your preferred climate, urban vs. rural settings, cultural interests, and how comfortable you'll be with the local language and customs.",
                icon: <Globe className="h-10 w-10 text-red-400" />,
              },
              {
                title: "Career Aspirations",
                description:
                  "Research industry connections, internship opportunities, and how valued a qualification from your chosen destination is in your target job market.",
                icon: <Briefcase className="h-10 w-10 text-red-400" />,
              },
              {
                title: "Immigration Pathways",
                description:
                  "If long-term migration is your goal, compare post-study work rights and pathways to permanent residency across different destinations.",
                icon: <Plane className="h-10 w-10 text-red-400" />,
              },
              {
                title: "Support Networks",
                description:
                  "Consider where you might have existing connections, the presence of communities from your home country, and the support services available for international students.",
                icon: <Users className="h-10 w-10 text-red-400" />,
              },
            ].map((factor, i) => (
              <Card key={i} className="border-none bg-gray-900 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4">{factor.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{factor.title}</h3>
                  <p className="text-gray-300">{factor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Services Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white">Our Visa Support Services</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              We provide comprehensive visa guidance for all our study destinations, ensuring a smooth application
              process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Visa Requirement Analysis",
                description:
                  "We assess your profile and provide detailed information about visa requirements for your chosen destination.",
                icon: <FileText className="h-10 w-10 text-red-400" />,
              },
              {
                title: "Documentation Support",
                description:
                  "Our experts help you prepare all necessary documents, ensuring they meet the specific requirements of the embassy or consulate.",
                icon: <FileText className="h-10 w-10 text-red-400" />,
              },
              {
                title: "Interview Preparation",
                description:
                  "We conduct mock interviews and provide guidance on how to confidently answer visa interview questions.",
                icon: <Users className="h-10 w-10 text-red-400" />,
              },
              {
                title: "Application Review",
                description:
                  "Our team thoroughly reviews your visa application before submission to minimize the chance of rejection.",
                icon: <FileText className="h-10 w-10 text-red-400" />,
              },
              {
                title: "Visa Tracking",
                description: "We help you track your visa application status and provide guidance on next steps.",
                icon: <Plane className="h-10 w-10 text-red-400" />,
              },
              {
                title: "Pre-Departure Guidance",
                description:
                  "Once your visa is approved, we provide comprehensive pre-departure orientation to prepare you for your journey.",
                icon: <Plane className="h-10 w-10 text-red-400" />,
              },
            ].map((service, i) => (
              <Card key={i} className="border-none bg-black shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-2">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Start Your Global Education Journey?</h2>
          <p className="max-w-2xl mx-auto text-gray-200 mb-8">
            Contact us today to discuss your study abroad options and get personalized guidance from our expert
            counselors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold w-full sm:w-auto">
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 w-full sm:w-auto"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
