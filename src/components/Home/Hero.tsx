import { Button } from "@/components/ui/button"
import TravelFilterCard from "./TravelFilterCard"
import { MdOutlineArrowRightAlt } from "react-icons/md"
import { useTranslations } from "next-intl"


export function Hero() {
  const t = useTranslations('hero')
  return (
    <div className="relative h-[80vh] flex items-center justify-center pt-44 md:pt-0 mt">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('/images/image.png')",
          backgroundPosition: "center 10%"
        }}
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="z-20 container mx-auto px-4">
        <div className="text-start text-white mb-16">
          <h1 className="text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl mb-8">{t('description')}</p>
          <Button size="lg" color="primary">
            {t('button')}
            <MdOutlineArrowRightAlt className="rtl:rotate-180" />
          </Button>
        </div>
        <TravelFilterCard />
      </div>
    </div>
  )
}

