import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, GraduationCap, BookOpen, FileText, Plane, Award, Users } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=300&width=1920"
            alt="Our Services"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Comprehensive support services to guide you through every step of your study abroad journey.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-600">Comprehensive Support Services</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              From initial counseling to pre-departure guidance, we provide end-to-end support for your international
              education journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Education Counseling",
                description:
                  "Personalized guidance to help you choose the right course and university based on your academic background, career goals, and budget.",
                icon: <GraduationCap className="h-10 w-10 text-navy-600" />,
              },
              {
                title: "University Selection",
                description:
                  "Expert advice on choosing universities that match your academic profile, with insights into admission requirements, rankings, and campus life.",
                icon: <BookOpen className="h-10 w-10 text-navy-600" />,
              },
              {
                title: "Application Assistance",
                description:
                  "Complete support with university applications, including personal statements, essays, recommendation letters, and other required documents.",
                icon: <FileText className="h-10 w-10 text-navy-600" />,
              },
              {
                title: "Visa Guidance",
                description:
                  "Expert advice on visa requirements, application process, documentation, and interview preparation to maximize your chances of approval.",
                icon: <Plane className="h-10 w-10 text-navy-600" />,
              },
              {
                title: "Scholarship Assistance",
                description:
                  "Information and guidance on available scholarships, application procedures, and how to create compelling scholarship applications.",
                icon: <Award className="h-10 w-10 text-navy-600" />,
              },
              {
                title: "Pre-Departure Support",
                description:
                  "Comprehensive guidance on accommodation, travel arrangements, insurance, banking, and other essential aspects of settling in a new country.",
                icon: <Plane className="h-10 w-10 text-navy-600" />,
              },
            ].map((service, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Counseling Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Education Counseling"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-navy-600 text-white hover:bg-navy-700">
                Education Counseling
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Personalized Education Counseling</h2>
              <p className="text-gray-600">
                Our education counseling service is the foundation of your study abroad journey. We take the time to
                understand your academic background, career aspirations, and personal preferences to provide tailored
                guidance that aligns with your goals, with a special focus on applied and industry-relevant courses that
                offer excellent employment prospects.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Our Counseling Process:</h3>
                <ul className="space-y-3">
                  {[
                    "Initial assessment of your academic background, interests, and career goals",
                    "Detailed information about study destinations, education systems, and course options",
                    "Guidance on choosing the right course and specialization based on your career objectives",
                    "Advice on university selection considering factors like rankings, location, and tuition fees",
                    "Timeline planning for applications, tests, and visa processes",
                    "Regular follow-ups and continuous support throughout your journey",
                    "In-depth information about applied and industry-relevant courses with strong job prospects",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact">
                <Button className="mt-4 bg-navy-600 hover:bg-navy-700">Book a Free Counseling Session</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Application Assistance Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-navy-600 text-white hover:bg-navy-700">
                Application Assistance
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Comprehensive Application Support</h2>
              <p className="text-gray-600">
                Our application assistance service ensures that your university applications are compelling, complete,
                and submitted on time. We guide you through each step of the application process, helping you present
                your academic achievements and personal qualities effectively.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Our Application Support Includes:</h3>
                <ul className="space-y-3">
                  {[
                    "Guidance on creating a strong academic CV/resume",
                    "Assistance with personal statements and essays that highlight your strengths",
                    "Support with obtaining and preparing recommendation letters",
                    "Document verification and preparation according to university requirements",
                    "Application form filling and submission assistance",
                    "Regular follow-up with universities regarding application status",
                    "Guidance on accepting offers and paying deposits",
                    "Strategic course selection advice focusing on applied programs with strong industry connections",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact">
                <Button className="mt-4 bg-navy-600 hover:bg-navy-700">Learn More About Application Support</Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Application Assistance"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visa Guidance Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Visa Guidance"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-navy-600 text-white hover:bg-navy-700">
                Visa Guidance
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Expert Visa Application Support</h2>
              <p className="text-gray-600">
                Securing a student visa is a critical step in your study abroad journey. Our visa specialists have
                in-depth knowledge of visa requirements and processes for all our study destinations, ensuring a smooth
                and successful visa application.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Our Visa Support Services:</h3>
                <ul className="space-y-3">
                  {[
                    "Detailed guidance on visa requirements and application procedures",
                    "Document preparation and verification according to embassy guidelines",
                    "Assistance with financial documentation and sponsorship letters",
                    "Comprehensive visa application form filling support",
                    "Mock interview sessions and preparation for visa interviews",
                    "Guidance on addressing potential visa challenges",
                    "Regular updates on visa application status",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact">
                <Button className="mt-4 bg-navy-600 hover:bg-navy-700">Enquire About Visa Support</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Departure Support Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-navy-600 text-white hover:bg-navy-700">
                Pre-Departure Support
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Comprehensive Pre-Departure Guidance</h2>
              <p className="text-gray-600">
                Our support doesn't end with your visa approval. We provide thorough pre-departure orientation to
                prepare you for life in a new country, covering everything from accommodation to cultural adjustment.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Our Pre-Departure Support Includes:</h3>
                <ul className="space-y-3">
                  {[
                    "Guidance on finding suitable accommodation options",
                    "Information on travel arrangements and airport pickup services",
                    "Advice on health insurance and medical requirements",
                    "Banking and currency exchange information",
                    "Orientation about the local culture, weather, and lifestyle",
                    "Tips on managing finances and budgeting",
                    "Information on student communities and support networks",
                    "Guidance on part-time work regulations and opportunities",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact">
                <Button className="mt-4 bg-navy-600 hover:bg-navy-700">Learn More About Pre-Departure Support</Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Pre-Departure Support"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-600">Our Service Process</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure you receive comprehensive support throughout your study abroad
              journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "Step 1",
                title: "Initial Consultation",
                description:
                  "Meet with our counselors to discuss your goals, preferences, and options for studying abroad.",
                icon: <Users className="h-10 w-10 text-navy-600" />,
              },
              {
                step: "Step 2",
                title: "Profile Assessment",
                description:
                  "We evaluate your academic background, test scores, and other qualifications to identify suitable programs and universities.",
                icon: <FileText className="h-10 w-10 text-navy-600" />,
              },
              {
                step: "Step 3",
                title: "Application Process",
                description:
                  "We guide you through the application process, helping with documents, personal statements, and submissions.",
                icon: <BookOpen className="h-10 w-10 text-navy-600" />,
              },
              {
                step: "Step 4",
                title: "Visa & Pre-Departure",
                description:
                  "Once you receive offers, we assist with visa applications and provide comprehensive pre-departure guidance.",
                icon: <Plane className="h-10 w-10 text-navy-600" />,
              },
            ].map((step, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2">{step.icon}</div>
                  <div className="text-sm font-medium text-navy-600">{step.step}</div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Begin Your Study Abroad Journey?</h2>
          <p className="max-w-2xl mx-auto text-gray-200 mb-8">
            Contact us today to book a free consultation with our expert counselors and take the first step towards your
            global education.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-800 font-semibold w-full sm:w-auto">
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/testimonials">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 w-full sm:w-auto"
              >
                Read Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
