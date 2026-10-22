import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollHandler from "@/components/scroll-handler"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Uranus International Education | Premier Study Abroad Consultancy in Nepal",
  description:
    "Educational consultancy in Nepal helping students apply to top universities in UK, USA, Canada, Germany, and Australia with focus on applied and industry-relevant courses.",
  keywords:
    "study abroad, education consultancy, Nepal, UK, USA, Canada, Germany, Australia, visa support, university application",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-padding-top-[80px]">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col relative">
            <Suspense fallback={null}>
              <ScrollHandler />
            </Suspense>
            <Navbar />
            <main className="flex-1 pt-24">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
