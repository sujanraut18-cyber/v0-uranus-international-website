"use client"
import { usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"
import { scrollToSection } from "@/utils/scroll-to-section"

// This component uses useSearchParams and must be wrapped in Suspense
export function NavbarClient({
  navItems,
  isOpen,
  setIsOpen,
}: {
  navItems: any[]
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleNavigation = (href: string) => {
    if (href.startsWith("/#")) {
      // Handle hash links on the homepage
      const sectionId = href.substring(2)
      if (pathname === "/") {
        scrollToSection(sectionId)
      } else {
        // Navigate to homepage then scroll
        window.location.href = href
      }
    } else if (href.includes("#") && !href.startsWith("#")) {
      // Handle hash links on other pages
      window.location.href = href
    } else {
      // Regular navigation
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Navigation items */}
      <ul className="hidden md:flex space-x-8">
        {navItems.map((item, index) => (
          <li key={index}>
            {item.href ? (
              <Link
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => handleNavigation(item.href)}
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700 font-medium cursor-pointer">{item.label}</span>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 p-4">
          {navItems.map((item, index) => (
            <li key={index}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium text-lg"
                  onClick={() => handleNavigation(item.href)}
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-700 font-medium text-lg cursor-pointer">{item.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
