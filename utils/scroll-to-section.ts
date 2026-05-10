"use client"

export function scrollToSection(sectionId: string): void {
  // Small delay to ensure the DOM is fully loaded
  setTimeout(() => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      // Remove smooth scrolling behavior for immediate navigation
      window.scrollTo({
        top: offsetPosition,
        // Removed smooth behavior for instant scrolling
      })
    } else {
      console.log(`Section with ID "${sectionId}" not found`)
    }
  }, 100) // Reduced delay for faster response
}
