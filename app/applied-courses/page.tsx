import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, BookOpen, Briefcase, GraduationCap, TrendingUp } from "lucide-react"
import AppliedCoursesScrollHandler from "./scroll-handler"

export default function AppliedCoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppliedCoursesScrollHandler />
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=300&width=1920"
            alt="Applied Courses"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Applied & Industry-Relevant Courses</h1>
          <p className="mt-4 text-lg max-w-2xl">
            We specialize in helping students enroll in courses that provide practical skills and excellent career
            prospects in today's competitive job market.
          </p>
        </div>
      </section>

      {/* Why Applied Courses Section */}
      <section id="why-applied" className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Applied Education"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-navy-600 text-white hover:bg-navy-700">
                Our Specialization
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Why Focus on Applied Courses?</h2>
              <p className="text-gray-600">
                At Uranus International Education, we specialize in guiding students toward applied and
                industry-relevant courses that provide practical skills, hands-on experience, and direct pathways to
                rewarding careers. These programs are designed in collaboration with industry partners to address
                real-world challenges and prepare students for the jobs of today and tomorrow.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Benefits of Applied Courses:</h3>
                <ul className="space-y-3">
                  {[
                    "Practical skills that employers value immediately upon graduation",
                    "Industry partnerships providing internships and job placement opportunities",
                    "Higher employment rates compared to purely theoretical programs",
                    "Hands-on learning experiences with modern equipment and technologies",
                    "Curriculum designed with input from industry professionals",
                    "Better return on investment for your education expenses",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact">
                <Button className="mt-4 bg-navy-600 hover:bg-navy-700">Discuss Your Career Goals With Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Top Applied Fields Section */}
      <section id="top-fields" className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-600">Top Applied Fields of Study</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              These fields offer excellent career prospects and are in high demand across global job markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Information Technology & Computer Science",
                description:
                  "From software development to cybersecurity, IT fields offer excellent career prospects and competitive salaries worldwide.",
                courses: [
                  "Software Engineering",
                  "Data Science & Analytics",
                  "Cybersecurity",
                  "Artificial Intelligence",
                  "Cloud Computing",
                  "Mobile App Development",
                ],
                icon: <BookOpen className="h-10 w-10 text-navy-600" />,
              },
              {
                title: "Engineering & Manufacturing",
                description:
                  "Applied engineering programs provide practical skills for industries ranging from automotive to renewable energy.",
                courses: [
                  "Mechanical Engineering",
                  "Electrical Engineering",
                  "Civil Engineering",
                  "Renewable Energy Systems",
                  "Automotive Engineering",
                  "Robotics & Automation",
                ],
                icon: <BookOpen className="h-10 w-10 text-navy-600" />,
              },
              {
                title: "Business & Management",
                description:
                  "Applied business programs focus on practical skills needed for modern business operations and management.",
                courses: [
                  "Project Management",
                  "Supply Chain Management",
                  "Digital Marketing",
                  "Financial Technology",
                  "Business Analytics",
                  "International Business",
                ],
                icon: <BookOpen className="h-10 w-10 text-navy-600" />,
              },
              {
                title: "Healthcare & Medical Sciences",
                description:
                  "Healthcare programs with practical components prepare students for careers in this growing sector.",
                courses: [
                  "Nursing",
                  "Healthcare Administration",
                  "Medical Laboratory Technology",
                  "Physiotherapy",
                  "Public Health",
                  "Health Informatics",
                ],
                icon: <BookOpen className="h-10 w-10 text-navy-600" />,
              },
              {
                title: "Creative & Digital Media",
                description:
                  "Applied creative programs focus on practical skills needed in the digital content and entertainment industries.",
                courses: [
                  "Digital Media Production",
                  "Game Design & Development",
                  "Animation",
                  "User Experience Design",
                  "Digital Marketing",
                  "Web Development",
                ],
                icon: <BookOpen className="h-10 w-10 text-navy-600" />,
              },
              {
                title: "Environmental & Sustainability",
                description:
                  "Programs focusing on practical approaches to environmental challenges and sustainable development.",
                courses: [
                  "Environmental Engineering",
                  "Sustainable Energy Management",
                  "Water Resource Management",
                  "Sustainable Agriculture",
                  "Urban Planning",
                  "Conservation Technology",
                ],
                icon: <BookOpen className="h-10 w-10 text-navy-600" />,
              },
            ].map((field, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2">{field.icon}</div>
                  <CardTitle>{field.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{field.description}</p>
                  <h4 className="font-semibold mb-2">Popular Courses:</h4>
                  <ul className="space-y-1">
                    {field.courses.map((course, j) => (
                      <li key={j} className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">{course}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="our-approach" className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-600">Our Approach to Course Selection</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We help you find the perfect applied course that aligns with your interests, strengths, and career goals.
            </p>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Our team brings technical expertise and industry insights to guide your educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Assess Your Profile",
                description:
                  "We evaluate your academic background, skills, and interests to identify suitable fields of study.",
                icon: <GraduationCap className="h-10 w-10 text-navy-600" />,
              },
              {
                title: "Research Job Markets",
                description:
                  "We analyze global job markets to identify fields with strong demand and growth potential.",
                icon: <TrendingUp className="h-10 w-10 text-navy-600" />,
              },
              {
                title: "Match With Programs",
                description:
                  "We find programs that combine academic quality with practical skills and industry connections.",
                icon: <BookOpen className="h-10 w-10 text-navy-600" />,
              },
              {
                title: "Career Pathway Planning",
                description:
                  "We help you understand the career pathways available after completing your chosen program.",
                icon: <Briefcase className="h-10 w-10 text-navy-600" />,
              },
            ].map((step, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2">{step.icon}</div>
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

      {/* Industry Partnerships Section */}
      <section id="industry-partnerships" className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-navy-600 text-white hover:bg-navy-700">
                Industry Connections
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Our Industry Partnerships</h2>
              <p className="text-gray-600">
                We maintain strong relationships with universities that have excellent industry connections. These
                partnerships ensure that our students have access to programs that include internships, industry
                projects, and job placement assistance.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Benefits of Our Industry Network:</h3>
                <ul className="space-y-3">
                  {[
                    "Access to universities with strong industry advisory boards",
                    "Programs featuring internships and work placements",
                    "Opportunities for industry-sponsored projects",
                    "Connections to alumni working in relevant industries",
                    "Information about industry recruitment events",
                    "Insights into industry trends and skill requirements",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact">
                <Button className="mt-4 bg-navy-600 hover:bg-navy-700">Learn More About Our Industry Network</Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Industry Partnerships"
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
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Pursue an Applied Course Abroad?</h2>
          <p className="max-w-2xl mx-auto text-gray-200 mb-8">
            Contact us today to discuss how we can help you find the perfect applied program that aligns with your
            career goals and leads to excellent job opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-800 font-semibold w-full sm:w-auto">
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/destinations">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 w-full sm:w-auto"
              >
                Explore Study Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
