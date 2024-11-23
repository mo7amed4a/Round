import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("services");
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20  relative z-10">
        <div className="flex justify-end items-center">
          <Image src="/s-3/right.png" alt="Image" width={500} height={500} />
        </div>
        <div className="text-gray-400 space-y-4">
          <h1 className="text-2xl font-bold text-primary">{t("services")}</h1>
          <p className="text-xl w-3/4 font-bold">{t("servicesDescription")}</p>
          <div className="space-y-5">
            <Card className="md:w-3/4 shadow-md border-none p-4">
              <div className="flex items-center gap-x-4">
                <Image
                  src="/s-3/1.png"
                  alt="Image"
                  className="size-16"
                  width={100}
                  height={100}
                />
                <div className="flex-1 space-y-2">
                  <p className="text-lg font-medium leading-none text-primary">
                    {t("travelServicesTitle")}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t("travelServicesDescription")}
                  </p>
                </div>
              </div>
            </Card>
            <Card className="md:w-3/4 shadow-md border-none p-4">
              <div className="flex items-center gap-x-4">
                <Image
                  src="/s-3/2.png"
                  alt="Image"
                  className="size-16"
                  width={100}
                  height={100}
                />
                <div className="flex-1 space-y-2">
                  <p className="text-lg font-medium leading-none text-primary">
                    {t("transportServicesTitle")}{" "}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t("transportServicesDescription")}
                  </p>
                </div>
              </div>
            </Card>
            <Card className="md:w-3/4 shadow-md border-none p-4">
              <div className="flex items-center gap-x-4">
                <Image
                  src="/s-3/3.png"
                  alt="Image"
                  className="size-16"
                  width={100}
                  height={100}
                />
                <div className="flex-1 space-y-2">
                  <p className="text-lg font-medium leading-none text-primary">
{t('entertainmentServicesTitle')}
                  </p>
                  <p className="text-sm text-muted-foreground">{t('entertainmentServicesDescription')}</p>
                </div>
              </div>
            </Card>
            <Card className="md:w-3/4 shadow-md border-none p-4">
              <div className="flex items-center gap-x-4">
                <Image
                  src="/s-3/4.png"
                  alt="Image"
                  className="size-16"
                  width={100}
                  height={100}
                />
                <div className="flex-1 space-y-2">
                  <p className="text-lg font-medium leading-none text-primary">
                    {t('hotelBookingTitle')}
                  </p>
                  <p className="text-sm text-muted-foreground">{t('hotelBookingDescription')}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Image
        src="/s-3/bg.png"
        alt="Image"
        width={500}
        height={500}
        className="w-full h-full bg-contain absolute inset-0 z-0 py-10"
      />
    </section>
  );
}
