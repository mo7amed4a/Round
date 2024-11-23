import React from "react";
import { Card, CardContent } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { useLocale, useTranslations } from "next-intl";
import { destinations, price, typeTrip } from "@/data/data";

export default function TravelFilterCard() {
  const t = useTranslations("travelFilter");
  const lang = useLocale();
  return (
    <Card className="text-gray-600 max-w-4xl mx-auto absolute -bottom-16 inset-x-5 md:left-[50%] md:translate-x-[-50%] border-primary">
      <CardContent className="p-6">
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm mb-2">{t("tripType")}</label>
            <Select>
              <SelectTrigger
                className="w-full rtl:flex-row-reverse"
                styleIcon="text-primary size-6 border-2 border-primary rounded-full"
              >
                <SelectValue placeholder={t("chooseTripType")} />
              </SelectTrigger>
              <SelectContent>
              {typeTrip(lang).map((item, index) => {
                  return (
                    <SelectItem key={index} value={item.value}>
                      {item.title}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm mb-2">{t("destinations")}</label>
            <Select>
              <SelectTrigger
                className="w-full rtl:flex-row-reverse"
                styleIcon="text-primary size-6 border-2 border-primary rounded-full"
              >
                <SelectValue placeholder={t("chooseDestination")} />
              </SelectTrigger>
              <SelectContent>
                {destinations(lang).map((item, index) => {
                  return (
                    <SelectItem key={index} value={item.title}>
                      {item.title}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm mb-2">{t("price")}</label>
            <Select>
              <SelectTrigger
                className="w-full rtl:flex-row-reverse"
                styleIcon="text-primary size-6 border-2 border-primary rounded-full"
              >
                <SelectValue placeholder={t("specifyPrice")} />
              </SelectTrigger>
              <SelectContent>
                {price(lang).map((item, index) => {
                  return (
                    <SelectItem key={index} value={item}>
                      {item}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-1 lg:hidden"></div>
          <div className="flex items-end">
            <Button color="primary" className="w-full !hover:text-primary">
              {t("search")}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
