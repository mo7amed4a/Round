import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { CustomCarousel } from "./CustomCarousel"
import { CarouselItem } from "../ui/carousel"
import { useLocale, useTranslations } from "next-intl"
import { destinations } from "@/data/data"

export function Destinations() {
  const t = useTranslations('destinations')
  const lang  = useLocale()
  return (
    <section className="py-20 mt-10 md:mt-20 relative ">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('exploreDestinations')}</h2>
          <p className="text-gray-600">{t("enjoyExploringTrips")}</p>
        </div>
        <CustomCarousel>
            {destinations(lang).map((destination, index) => (
            <CarouselItem key={index} className="basis-1/2 lg:basis-1/5">
              <Card className="overflow-hidden border-none shadow-none w-full">
                <CardContent className="p-0">
                  <div className="relative w-full h-64 bg-[#189CCE]/10 p-2 rounded-3xl">
                    <Image
                      src={destination.image}
                      alt={destination.title}
                      fill
                      className="object-cover p-2 rounded-3xl overflow-hidden"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-center">{destination.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CustomCarousel>
      </div>
      <Image src="/s-2/right-top.png" alt="image" width={300} height={300} className="absolute top-10 start-0 w-auto z-0 h-40 object-cover ltr:scale-x-[-1]" />
      <Image src="/s-2/right-bottom.png" alt="image" width={300} height={300} className="absolute bottom-0 -start-10 w-auto z-0 h-8 object-cover ltr:scale-x-[-1]" />
      <Image src="/s-2/left-bottom.png" alt="image" width={300} height={300} className="absolute bottom-0 md:end-40 w-auto z-0 h-24 object-cover ltr:scale-x-[-1]" />
    </section>
  )
}

