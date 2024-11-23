import Image from "next/image"
import { Card } from "@/components/ui/card"

interface ImageCardProps {
  src: string
  alt: string
  title: string
}

export function ImageCard({ src, alt, title }: ImageCardProps) {
  return (
    <Card className="group relative overflow-hidden rounded-[2rem] bg-white">
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div 
          className="absolute right-4 bottom-0 rotate-180 -translate-y-1/2 writing-vertical-rl text-white text- font-semibold"
          style={{ writingMode: 'vertical-rl' }}
        >
          {title}
        </div>
      </div>
    </Card>
  )
}