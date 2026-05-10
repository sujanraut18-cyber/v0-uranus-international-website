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
            alt="Student Testimonials"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Success Stories</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Hear from our students who successfully achieved their dreams of studying abroad with our guidance.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Aarav Sharma",
                university: "University of Manchester, UK",
                course: "MSc Computer Science",
                image: "/placeholder.svg?height=300&width=300",
                testimonial:
                  "Uranus International Education made my dream of studying in the UK a reality. Their counselors guided me through every step of the process, from choosing the right university to securing my visa. The personal statement assistance was particularly helpful, and I believe it played a key role in my acceptance to the University of Manchester. I'm now enjoying my studies in the UK, and I couldn't have done it without their support.",
              },
              {
                name: "Priya Tamang",
                university: "University of Toronto, Canada",
                course: "Bachelor of Business Administration",
                image: "/placeholder.svg?height=300&width=300",
                testimonial:
                  "I was confused about which country to choose for my studies. The team at Uranus provided detailed information about each destination and helped me make an informed decision. Now I'm happily studying in Canada! Their visa guidance was exceptional, and they prepared me well for the visa interview. I recommend Uranus International Education to anyone looking to study abroad.",
              },
              {
                name: "Niraj Poudel",
                university: "Technical University of Munich, Germany",
                course: "MSc Mechanical Engineering",
                image: "/placeholder.svg?height=300&width=300",
                testimonial:
                  "The visa process for Germany seemed complicated, but with Uranus International Education's expert guidance, it was smooth sailing. Their pre-departure orientation was incredibly helpful too. I particularly appreciated their assistance with the German language requirements and finding affordable accommodation in Munich. Thanks to their support, I'm now pursuing my dream course at one of Germany's top universities.",
              },
              {
                name: "Sita Gurung",
                university: "University of Sydney, Australia",
                course: "Bachelor of Nursing",
                image: "/placeholder.svg?height=300&width=300",
                testimonial:
                  "I had a wonderful experience with Uranus International Education. Their counselors were knowledgeable, patient, and always available to answer my questions. They helped me find a nursing program that matched my career goals and guided me through the application process. Their scholarship advice also helped me secure partial funding for my studies. I'm grateful for their support and highly recommend their services.",
              },
              {
                name: "Rohan Thapa",
                university: "New York University, USA",
                course: "MBA",
                image: "/placeholder.svg?height=300&width=300",
                testimonial:
                  "Applying for an MBA in the US was a complex process, but Uranus International Education made it manageable. Their counselors provided valuable insights into different programs and helped me prepare a compelling application. Their GMAT preparation resources and interview coaching were excellent. Thanks to their guidance, I received an offer from NYU Stern, which was my top choice. I'm truly grateful for their professional support.",
              },
              {
                name: "Anisha Maharjan",
                university: "University of British Columbia, Canada",
                course: "MSc Environmental Science",
                image: "/placeholder.svg?height=300&width=300",
                testimonial:
                  "Uranus International Education provided exceptional service from start to finish. They helped me identify universities with strong environmental science programs and guided me through the application process. Their visa support was outstanding, and they even connected me with alumni already studying at UBC. The pre-departure orientation prepared me well for life in Canada. I highly recommend their services to anyone planning to study abroad.",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <Quote className="h-8 w-8 text-navy-600/20 mb-2" />
                  <p className="text-gray-600 italic mb-4">{testimonial.testimonial}</p>
                  <div className="border-t pt-4">
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-navy-600">{testimonial.course}</p>
                    <p className="text-gray-500">{testimonial.university}</p>
                  </div>
                </div>
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

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-600">Our Success in Numbers</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We take pride in our track record of helping Nepali students achieve their study abroad dreams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "500+",
                label: "Students Placed",
              },
              {
                number: "95%",
                label: "Visa Success Rate",
              },
              {
                number: "100+",
                label: "Partner Universities",
              },
              {
                number: "5",
                label: "Study Destinations",
              },
            ].map((stat, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-navy-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
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
            Join hundreds of successful students who achieved their study abroad dreams with our guidance.
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
