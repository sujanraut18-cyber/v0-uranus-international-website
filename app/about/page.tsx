import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Award, Users, Clock, Target, Globe, BookOpen, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=300&width=1920"
            alt="About Uranus International Education"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Us</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Your trusted partner in international education, guiding Nepali students toward successful global futures.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/graduate-freedom.png"
                alt="Education for Freedom"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-navy-600">Our Story</h2>
              <p className="text-gray-600">
                Founded in 2025 in New Baneshwor, Kathmandu, Uranus International Education began with a clear mission:
                to bridge the gap between Nepali students and quality international education opportunities.
              </p>
              <p className="text-gray-600">
                We recognized the challenges Nepali students face when navigating the complex process of studying
                abroad—from choosing the right program to securing visas and preparing for life in a new country.
              </p>
              <p className="text-gray-600">
                Today, we've helped hundreds of students secure admissions in prestigious universities across the UK,
                USA, Canada, Germany, and Australia. Our success is measured not just by acceptances, but by the
                thriving global careers our students build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student-First Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-600">Our Student-First Approach</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We believe in empowering students with honest guidance, clear information, and lifelong support—not just
              helping you apply, but preparing you to thrive abroad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Beyond Applications</h3>
              <p className="text-gray-600">
                We don't just help you get accepted—we prepare you for success abroad. From cultural adaptation
                workshops to connecting you with alumni networks, we ensure you're ready for every aspect of
                international student life.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Current & Accurate</h3>
              <p className="text-gray-600">
                Our team stays continuously updated with changing visa policies, course options, and country
                regulations. We maintain direct relationships with universities and immigration experts to provide you
                with the most accurate, up-to-date advice.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Personalized Guidance</h3>
              <p className="text-gray-600">
                We take time to understand your academic background, career goals, and personal circumstances. This
                allows us to recommend programs and destinations that truly align with your unique situation and
                aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-navy-50 p-8 rounded-lg">
              <Target className="h-12 w-12 text-navy-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To empower Nepali students with the knowledge, resources, and support they need to access quality
                international education and build successful global careers. We are committed to providing ethical,
                transparent, and personalized guidance throughout the study abroad journey.
              </p>
            </div>

            <div className="bg-navy-50 p-8 rounded-lg">
              <Users className="h-12 w-12 text-navy-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be Nepal's most trusted educational consultancy, recognized for our integrity, expertise, and
                student-centered approach. We envision a future where every ambitious Nepali student has the opportunity
                to access world-class education and contribute to global knowledge and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-600">Our Core Values</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Uranus International Education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-red-50 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                <Award className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Integrity</h3>
              <p className="text-gray-600">
                We provide honest advice and transparent information, even when it's not what students want to hear. We
                never recommend programs or destinations that don't align with a student's best interests.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-red-50 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                <Award className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in all our services, continuously improving our knowledge, processes, and
                support systems to meet the evolving needs of students in a changing global education landscape.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-red-50 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Student-Centered</h3>
              <p className="text-gray-600">
                We put students' interests first, tailoring our guidance to their unique goals and circumstances. Every
                recommendation we make is based on what's best for the individual student, not what's easiest or most
                profitable for us.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-red-50 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Reliability</h3>
              <p className="text-gray-600">
                We are committed to being a dependable partner throughout the entire study abroad journey, from initial
                counseling to pre-departure support and beyond. Students can count on us to be there when they need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-600">
              Why Choose Uranus International Education?
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We stand out from other consultancies through our commitment to excellence and student success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <ul className="space-y-4">
                {[
                  "Specialized expertise in applied and industry-relevant courses with strong job prospects",
                  "Experienced counselors who stay updated with the latest visa and immigration changes",
                  "Direct partnerships with prestigious universities worldwide",
                  "Personalized guidance tailored to each student's goals and qualifications",
                  "Comprehensive support from university selection to pre-departure",
                  "High visa success rate through expert documentation and preparation",
                  "Transparent processes with no hidden fees",
                  "Regular workshops and seminars on study abroad opportunities",
                  "Continuous support even after you reach your destination",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="mr-3 h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Uranus International Education Office"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
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
          <Link href="/contact">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold">
              Book a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
