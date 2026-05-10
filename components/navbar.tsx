"use client"

import type React from "react"
import { Suspense, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { scrollToSection } from "@/utils/scroll-to-section"
import { NavbarClient } from "./navbar-client"

// Define navigation items
const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Destinations", href: "/destinations" },
  { label: "Applied Courses", href: "/applied-courses" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  const handleNavigation = (href: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault()

    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false)
    }

    // Close dropdown if open
    if (activeDropdown) {
      setActiveDropdown(null)
    }

    // Check if the href is a hash link
    if (href.includes("#")) {
      const [path, hash] = href.split("#")

      // If we're already on the correct path or it's a section on the homepage, just scroll to the section
      if ((path === "" && pathname === "/") || pathname === path) {
        scrollToSection(hash)
      } else {
        // Navigate to the page first, then the browser will automatically scroll to the section
        router.push(href)
      }
    } else {
      // Regular navigation - direct to the page
      router.push(href)
    }
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="Uranus International" width={50} height={50} />
            <span className="ml-2 text-xl font-bold text-gray-800">Uranus International</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation items with Suspense */}
          <Suspense fallback={<div>Loading...</div>}>
            <NavbarClient navItems={navItems} isOpen={isOpen} setIsOpen={setIsOpen} />
          </Suspense>
        </div>
      </div>
    </nav>
  )
}
