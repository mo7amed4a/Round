import { Button } from "../ui/button";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { CustomCarouselForTravel } from "./CustomCarouselForTravel";
import { CarouselItem } from "../ui/carousel";
import { ImageCard } from "./ImageCard";
import ImageCardLarge from "./ImageCardLarge";
import { useTranslations } from "next-intl";

export function Travel() {
  const t = useTranslations('travel')
  return (
    <section className="py-10 bg-[#189CCE]/10 relative">
      <div className="container mx-auto px-4 space-y-10">
        <div className="flex justify-end">
          <Button size="lg" color="primary">
            {t('explore')}
            <MdOutlineArrowRightAlt className="rtl:rotate-180" />
          </Button>
        </div>
        <div className="w-full flex">
          <CustomCarouselForTravel>
            <CarouselItem className="md:basis-1/2 lg:basis-1/5 h-96 md:h-72">
              <ImageCard
                alt={t('tripEconomy')}
                src="/s-2/5.png"
                title={t('tripEconomy')}
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-96 md:h-72">
               <ImageCardLarge title={t('tripFamily')} image="/s-2/3.png" price={t('price')} btnText={t('more')} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/5 h-96 md:h-72">
              <ImageCard
                alt={t('tripEconomy')}
                src="/s-2/5.png"
                title={t('tripEconomy')}
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/5 h-96 md:h-72">
              <ImageCard
                alt={t('tripEconomy')}
                src="/s-2/5.png"
                title={t('tripEconomy')}
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/5 h-96 md:h-72">
              <ImageCard
                alt={t('tripEconomy')}
                src="/s-2/5.png"
                title={t('tripEconomy')}
              />
            </CarouselItem>
            
          </CustomCarouselForTravel>
        </div>
      </div>
    </section>
  );
}
