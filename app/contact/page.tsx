"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  destination: z.string({
    required_error: "Please select a study destination.",
  }),
  courseInterest: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      destination: "",
      courseInterest: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSuccess(true)
      form.reset()
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=300&width=1920"
            alt="Contact Us"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Get in touch with our expert counselors to discuss your study abroad options.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-navy-600 mb-6">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="mr-3 h-6 w-6 text-navy-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Our Office</h3>
                    <p className="text-gray-600">New Baneshwor, Kathmandu, Nepal (44600)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-3 h-6 w-6 text-navy-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">
                      <Link href="tel:+9771234567890" className="hover:text-navy-600">
                        +977 1234 567 890
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="mr-3 h-6 w-6 text-navy-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">
                      <Link href="mailto:info@uranusinternational.edu.np" className="hover:text-navy-600">
                        info@uranusinternational.edu.np
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="mr-3 h-6 w-6 text-navy-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Office Hours</h3>
                    <p className="text-gray-600">Sunday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: Closed</p>
                  </div>
                </div>

              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Connect With Us</h3>
                <p className="text-gray-600 mb-4">
                  Follow us on social media for the latest updates on study abroad opportunities, visa changes, and
                  success stories.
                </p>
                <div className="flex space-x-4">
                  <Link
                    href="https://facebook.com"
                    className="bg-navy-600 text-white p-2 rounded-full hover:bg-navy-700"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Link>
                  <Link
                    href="https://instagram.com"
                    className="bg-navy-600 text-white p-2 rounded-full hover:bg-navy-700"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </Link>
                  <Link
                    href="https://twitter.com"
                    className="bg-navy-600 text-white p-2 rounded-full hover:bg-navy-700"
                    aria-label="Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    className="bg-navy-600 text-white p-2 rounded-full hover:bg-navy-700"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-navy-600 mb-6">Send Us a Message</h2>

              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700 mb-4">
                    Thank you for contacting Uranus International Education. One of our counselors will get back to you
                    shortly.
                  </p>
                  <Button onClick={() => setIsSuccess(false)} className="bg-navy-600 hover:bg-navy-700">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="destination"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Study Destination</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your preferred destination" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="usa">United States</SelectItem>
                              <SelectItem value="canada">Canada</SelectItem>
                              <SelectItem value="germany">Germany</SelectItem>
                              <SelectItem value="australia">Australia</SelectItem>
                              <SelectItem value="undecided">Not Sure Yet</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="courseInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Course Interest</FormLabel>
                          <FormControl>
                            <Input placeholder="What course or field are you interested in studying?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your study abroad plans and how we can help you"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-navy-600 hover:bg-navy-700" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-navy-600">Visit Our Office</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We are conveniently located in New Baneshwor, Kathmandu. Feel free to visit us during office hours.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5762736212776!2d85.33619!3d27.694187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1651825200000!5m2!1sen!2snp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-navy-600">Frequently Asked Questions</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and the study abroad process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "Do I need to pay for the initial consultation?",
                answer:
                  "No, we offer free initial consultations to all students. During this session, our counselors will assess your profile and discuss suitable study options.",
              },
              {
                question: "How long does the visa process take?",
                answer:
                  "Visa processing times vary by country. Generally, it takes 2-8 weeks depending on the destination. We recommend starting the process at least 3 months before your intended departure.",
              },
              {
                question: "Can you help me find scholarships?",
                answer:
                  "Yes, we provide information about available scholarships and guide you through the application process. We help you identify scholarships you're eligible for and assist with preparing compelling applications.",
              },
              {
                question: "What documents do I need for the university application?",
                answer:
                  "Required documents typically include academic transcripts, certificates, passport, statement of purpose, recommendation letters, and English proficiency test scores. Specific requirements vary by university and program.",
              },
              {
                question: "Do you provide IELTS preparation support?",
                answer:
                  "Yes, we offer IELTS preparation resources and can recommend trusted training centers. We also provide guidance on other English proficiency tests like TOEFL and PTE.",
              },
              {
                question: "How do I start the process with Uranus International Education?",
                answer:
                  "Simply book a free consultation through our website, by phone, or by visiting our office. Our counselors will guide you through the entire process from there.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-navy-600 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Start Your Global Education Journey?</h2>
          <p className="max-w-2xl mx-auto text-gray-200 mb-8">
            Book a free consultation with our expert counselors to discuss your study abroad options.
          </p>
          <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-800 font-semibold">
            Book a Free Consultation Now
          </Button>
        </div>
      </section>
    </div>
  )
}
