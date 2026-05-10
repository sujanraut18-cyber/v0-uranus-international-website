import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  university: string
  image: string
  testimonial: string
}

export default function TestimonialCard({ name, university, image, testimonial }: TestimonialCardProps) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-navy-600/20 mb-2" />
        <p className="text-gray-600 italic">{testimonial}</p>
      </CardContent>
      <CardFooter className="flex items-center gap-4 border-t pt-4">
        <Image src={image || "/placeholder.svg"} alt={name} width={50} height={50} className="rounded-full" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{university}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
