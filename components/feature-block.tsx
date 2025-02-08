import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface FeatureBlockProps {
  title: string
  description: string
  bulletPoints: string[]
  image: string
  buttonText?: string
  imagePosition?: "right" | "left"
}

export function FeatureBlock({
  title,
  description,
  bulletPoints,
  image,
  buttonText = "Start Free Trial",
  imagePosition = "right",
}: FeatureBlockProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 py-16">
      <div className={`flex-1 ${imagePosition === "right" ? "md:order-1" : "md:order-2"}`}>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-4 mb-8">
          {bulletPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
        <Button variant="outline" size="lg" className="rounded-full border-2 hover:bg-gray-50">
          {buttonText}
        </Button>
      </div>
      <div className={`flex-1 ${imagePosition === "right" ? "md:order-2" : "md:order-1"}`}>
        <Image
          src={image || "/placeholder.svg"}
          alt="Feature illustration"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

