import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, GraduationCap, FileText, Plane, BookOpen, ArrowRight, Users, Award, Globe } from "lucide-react"
import ServiceCard from "@/components/service-card"
import WhatsAppButton from "@/components/whatsapp-button"
import StatsCounter from "@/components/stats-counter"
import ScrollAnimations from "@/components/scroll-animations"
import UKFeature from "@/components/uk-feature"
import USAFeature from "@/components/usa-feature"
import CanadaFeature from "@/components/canada-feature"
import GermanyFeature from "@/components/germany-feature"
import AustraliaFeature from "@/components/australia-feature"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollAnimations />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="International education and global opportunities"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-navy-700/70"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-4xl space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold border-gold-400 text-white bg-navy-800/80 backdrop-blur-sm">
              <Award className="h-4 w-4 mr-2 text-gold-400" />
              <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
              Trusted by 500+ Students • 95% Visa Success Rate
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Your Dream,
                <br />
                <span className="text-red-400">Our Direction</span>
              </h1>
              <p className="text-xl md:text-2xl text-red-300 font-semibold">Expert Guidance for Global Education</p>
            </div>

            {/* Value Proposition */}
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Based in Kathmandu, we guide ambitious Nepali students to achieve their dreams of studying in the
              <span className="text-white font-semibold"> UK, USA, Canada, Germany, and Australia</span>. With honest
              guidance, proven results, and lifelong support.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="h-6 w-6 text-green-400" />
                <div>
                  <div className="text-white font-semibold">500+ Students</div>
                  <div className="text-gray-300 text-sm">Successfully Placed</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Award className="h-6 w-6 text-blue-400" />
                <div>
                  <div className="text-white font-semibold">95% Success</div>
                  <div className="text-gray-300 text-sm">Visa Approval Rate</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Globe className="h-6 w-6 text-yellow-400" />
                <div>
                  <div className="text-white font-semibold">5 Countries</div>
                  <div className="text-gray-300 text-sm">Study Destinations</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold text-base px-8 py-6 shadow-lg"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/destinations">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 text-base px-8 py-6 backdrop-blur-sm"
                >
                  Explore Study Destinations
                  <Globe className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="pt-8">
              <p className="text-gray-300 text-sm mb-4">Trusted by students from leading colleges:</p>
              <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                <span>• Tribhuvan University</span>
                <span>• Kathmandu University</span>
                <span>• Pokhara University</span>
                <span>• And many more...</span>
              </div>
            </div>
          </div>

          {/* Floating Stats Card - Desktop Only */}
          <div className="absolute bottom-0 right-0 transform translate-y-1/2 hidden xl:block">
            <div className="bg-white rounded-lg shadow-2xl p-8 grid grid-cols-2 gap-6 w-[400px]">
              <div className="text-center">
                <StatsCounter end={500} suffix="+" title="Students Placed" />
              </div>
              <div className="text-center">
                <StatsCounter end={95} suffix="%" title="Visa Success Rate" />
              </div>
              <div className="text-center">
                <StatsCounter end={100} suffix="+" title="Partner Universities" />
              </div>
              <div className="text-center">
                <StatsCounter end={5} title="Study Destinations" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Stats Section (visible on mobile only) */}
      <section className="py-16 bg-white xl:hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <StatsCounter end={500} suffix="+" title="Students Placed" />
            </div>
            <div className="text-center">
              <StatsCounter end={95} suffix="%" title="Visa Success Rate" />
            </div>
            <div className="text-center">
              <StatsCounter end={100} suffix="+" title="Partner Universities" />
            </div>
            <div className="text-center">
              <StatsCounter end={5} title="Study Destinations" />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Preview Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-navy-50 rounded-lg z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold-50 rounded-lg z-0"></div>
                <div className="relative z-10">
                  <Image
                    src="/images/graduate-freedom.png"
                    alt="Graduate celebrating success"
                    width={600}
                    height={600}
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-lg z-20">
                  <div className="flex items-center gap-3">
                    <div className="bg-navy-50 p-2 rounded-full">
                      <GraduationCap className="h-8 w-8 text-navy-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Established</div>
                      <div className="font-bold text-navy-800">2025</div>
                      <div className="text-xs text-gray-500">Kathmandu, Nepal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 fade-in-up">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold border-navy-200 text-navy-800">
                About Us
              </div>

              <h2 className="text-4xl font-bold tracking-tight gradient-text">Your Partner in Global Education</h2>

              <p className="text-gray-600 text-lg">
                Based in Kathmandu, we guide Nepali students who dream of studying in the UK, USA, Canada, Germany, and
                Australia. Our mission goes beyond applications—we prepare you to thrive abroad with honest guidance and
                lifelong support.
              </p>

              <ul className="space-y-4 mt-8">
                {[
                  "Personalized guidance tailored to your unique goals and circumstances",
                  "Up-to-date knowledge of visa policies and university requirements",
                  "Comprehensive support from application to arrival and beyond",
                  "Focus on courses with strong career prospects and opportunities",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-4 mt-1 bg-red-50 p-1 rounded-full">
                      <Check className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Link href="/about">
                  <Button variant="outline" className="border-red-300 text-navy-800 hover:bg-red-50 group">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UK Feature Section */}
      <UKFeature />

      {/* USA Feature Section */}
      <USAFeature />

      {/* Canada Feature Section */}
      <CanadaFeature />

      {/* Germany Feature Section */}
      <GermanyFeature />

      {/* Australia Feature Section */}
      <AustraliaFeature />

      {/* Study Destinations Preview */}
      <section id="study-destinations" className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold border-gray-700 text-gray-300 mb-4">
              Study Destinations
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white section-heading">
              Top Global Study Destinations
            </h2>

            <p className="mt-8 text-gray-300 max-w-2xl mx-auto text-lg">
              We help students apply to top universities in these popular destinations, focusing on applied and
              industry-relevant courses with excellent career prospects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 fade-in-up">
            {/* UK Card */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800">
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
                  </ul>
                </div>
                <Link href="/destinations#uk">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Explore UK Study Options</Button>
                </Link>
              </div>
            </div>

            {/* USA Card */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800">
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
                  </ul>
                </div>
                <Link href="/destinations#usa">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Explore USA Study Options</Button>
                </Link>
              </div>
            </div>

            {/* Canada Card */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800">
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
                      <span>Clear pathway to permanent residency</span>
                    </li>
                  </ul>
                </div>
                <Link href="/destinations#canada">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Explore Canada Study Options
                  </Button>
                </Link>
              </div>
            </div>

            {/* Germany Card */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800">
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
                  </ul>
                </div>
                <Link href="/destinations#germany">
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                    Explore Germany Study Options
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 fade-in-up">
            <Link href="/destinations">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                View All Destinations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold border-navy-200 text-navy-800 mb-4">
              Our Services
            </div>

            <h2 className="text-4xl font-bold tracking-tight gradient-text section-heading">
              Comprehensive Support Services
            </h2>

            <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
              From initial counseling to pre-departure guidance, we provide end-to-end support for your international
              education journey, with a focus on applied and industry-relevant programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in-up">
            <ServiceCard
              title="Education Counseling"
              description="Personalized guidance to help you choose the right course and university based on your career goals and qualifications."
              icon={<GraduationCap className="h-8 w-8 text-navy-600" />}
            />
            <ServiceCard
              title="Application Assistance"
              description="Complete support with university applications, personal statements, and documents to maximize your chances of acceptance."
              icon={<FileText className="h-8 w-8 text-navy-600" />}
            />
            <ServiceCard
              title="Visa Guidance"
              description="Expert advice on visa requirements, application process, and interview preparation with high success rate."
              icon={<Plane className="h-8 w-8 text-navy-600" />}
            />
            <ServiceCard
              title="Pre-Departure Support"
              description="Comprehensive guidance on accommodation, travel, and settling in a new country for a smooth transition."
              icon={<BookOpen className="h-8 w-8 text-navy-600" />}
            />
          </div>

          <div className="text-center mt-12 fade-in-up">
            <Link href="/services">
              <Button className="bg-navy-800 hover:bg-navy-900 text-white">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Begin Your Global Education Journey?</h2>
          <p className="max-w-2xl mx-auto text-gray-200 mb-8">
            Contact us today to book a free consultation with our expert counselors and take the first step towards your
            international education.
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
