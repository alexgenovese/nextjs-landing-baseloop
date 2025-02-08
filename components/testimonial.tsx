import Image from "next/image"

interface TestimonialProps {
  name: string
  role: string
  company: string
  image: string
  quote: string
}

export function Testimonial({ name, role, company, image, quote }: TestimonialProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
      <Image src={image || "/placeholder.svg"} alt={name} width={80} height={80} className="rounded-full mb-4" />
      <p className="text-gray-700 mb-4 italic">"{quote}"</p>
      <div className="text-center">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-sm text-gray-600">{company}</p>
      </div>
    </div>
  )
}

