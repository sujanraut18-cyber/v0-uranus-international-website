import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-lg mb-8 max-w-md">
          We couldn't find the page you were looking for. It might have been moved or doesn't exist.
        </p>
        <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Return to Home
        </Link>
      </div>
    </div>
  )
}
