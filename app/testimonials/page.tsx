import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=300&width=1920"
            alt="Student Resources and Support"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Commitment to Your Success</h1>
          <p className="mt-4 text-lg max-w-2xl">
            We are dedicated to helping you achieve your international education goals through personalized guidance and comprehensive support.
          </p>
        </div>
      </section>

      {/* Student Support Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-600">How We Support Your Journey</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Every student deserves expert guidance, honest advice, and continuous support throughout their education journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Counseling",
                description: "Personalized one-on-one sessions to help you choose the right program, university, and country based on your goals and aspirations.",
                icon: "💡",
              },
              {
                title: "Application Assistance",
                description: "Comprehensive guidance on preparing strong application materials, personal statements, and essays that highlight your unique strengths.",
                icon: "📝",
              },
              {
                title: "Visa & Documentation",
                description: "Complete support with visa applications, document preparation, and immigration procedures to ensure a smooth process.",
                icon: "📋",
              },
              {
                title: "Interview Coaching",
                description: "Professional preparation for university and visa interviews to build confidence and help you present your best self.",
                icon: "🎤",
              },
              {
                title: "Pre-Departure Orientation",
                description: "Comprehensive workshops on cultural adaptation, accommodation, academics, and practical tips for studying abroad.",
                icon: "✈️",
              },
              {
                title: "Ongoing Support",
                description: "Continued assistance even after your departure, connecting you with alumni networks and addressing any concerns that arise.",
                icon: "🤝",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-3 text-navy-600">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-600">Video Testimonials</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Watch our students share their experiences and success stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative aspect-video bg-gray-200 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt={`Video testimonial ${i + 1}`}
                    width={350}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-navy-600/90 flex items-center justify-center cursor-pointer">
                      <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Student Success Story {i + 1}</h3>
                  <p className="text-gray-500 text-sm">Study Destination: {["UK", "USA", "Canada"][i]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-navy-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Write Your Own Success Story?</h2>
          <p className="max-w-2xl mx-auto text-gray-200 mb-8">
            Guiding Nepali students toward quality education in the UK and Germany.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-800 font-semibold w-full sm:w-auto">
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
