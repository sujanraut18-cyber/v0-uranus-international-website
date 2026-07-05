import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white">
      {/* Pre-Footer Newsletter */}
      <div className="bg-navy-800 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Stay Updated with Latest Opportunities</h3>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates on scholarships, university application deadlines, and
              study abroad tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-navy-700 border-navy-600 text-white placeholder:text-gray-300 focus:border-gold-500"
              />
              <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-medium">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <div className="relative h-20 w-20 bg-white rounded-full p-1">
                <Image
                  src="/images/logo.png"
                  alt="Uranus International Education Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-gray-300 mb-6">
              Founded by Sujan Raut (KU Mechanical Engineer), we are your trusted partner for international education
              opportunities, specializing in applied and industry-relevant courses with excellent career prospects.
            </p>

            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="bg-navy-700 hover:bg-navy-600 p-2 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://instagram.com"
                className="bg-navy-700 hover:bg-navy-600 p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://twitter.com"
                className="bg-navy-700 hover:bg-navy-600 p-2 rounded-full transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="bg-navy-700 hover:bg-navy-600 p-2 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gold-500 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Study Destinations", href: "/destinations" },
                { name: "Applied Courses", href: "/applied-courses" },
                { name: "Services", href: "/services" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white flex items-center footer-link">
                    <ArrowRight className="mr-2 h-4 w-4 text-gold-500" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Study Destinations
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gold-500 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "United Kingdom", href: "/destinations#uk" },
                { name: "United States", href: "/destinations#usa" },
                { name: "Canada", href: "/destinations#canada" },
                { name: "Germany", href: "/destinations#germany" },
                { name: "Australia", href: "/destinations#australia" },
              ].map((destination) => (
                <li key={destination.name}>
                  <Link
                    href={destination.href}
                    className="text-gray-300 hover:text-white flex items-center footer-link"
                  >
                    <ArrowRight className="mr-2 h-4 w-4 text-gold-500" />
                    <span>{destination.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mt-8 mb-6 relative inline-block">
              Office Hours
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gold-500 -mb-2"></span>
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
              <li>Saturday: 10:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Information
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gold-500 -mb-2"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-gray-300">New Baneshwor, Kathmandu, Nepal (44600)</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-gold-500" />
                <Link href="tel:+9771234567890" className="text-gray-300 hover:text-white">
                  +977 1234 567 890
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-gold-500" />
                <Link href="mailto:info@uranusinternational.edu.np" className="text-gray-300 hover:text-white">
                  info@uranusinternational.edu.np
                </Link>
              </li>
            </ul>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 relative inline-block">
                Certifications
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gold-500 -mb-2"></span>
              </h3>
              <div className="flex gap-4 mt-6">
                <div className="bg-navy-800 p-2 rounded-md">
                  <Image
                    src="/placeholder.svg?height=40&width=80"
                    alt="Certification 1"
                    width={80}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="bg-navy-800 p-2 rounded-md">
                  <Image
                    src="/placeholder.svg?height=40&width=80"
                    alt="Certification 2"
                    width={80}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="bg-navy-800 p-2 rounded-md">
                  <Image
                    src="/placeholder.svg?height=40&width=80"
                    alt="Certification 3"
                    width={80}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Uranus International Education. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
