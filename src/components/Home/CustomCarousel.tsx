"use client"
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useLocale } from "next-intl"

export function CustomCarousel({
children
}:{
    children: React.ReactNode
}) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const localActive = useLocale();

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index)
    }
  }

  return (
    <div className="mx-auto">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{ loop: true, direction: localActive === "ar" ? "rtl" : "ltr" }}
      >
        <CarouselContent className="flex">
            {children}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        <div className="flex justify-center gap-x-2">
          {Array.from({ length: count }).map((_, index) => (
            <span
              key={index}
              className={`size-3 rounded-full cursor-pointer ${
                current - 1 === index ? "bg-primary" : "bg-white border border-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
            >
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
