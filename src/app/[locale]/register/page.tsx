"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, EyeOff } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl"; 

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const t = useTranslations("signup"); 

  return (
    <div className="container text-start mx-auto w-full flex flex-col lg:flex-row items-center px-5 mt-44 py-20">
      <div className="size-full flex justify-center items-center">
        <div className="w-full lg:w-4/5 h-[80vh] overflow-hidden relative">
          <div className="relative size-full flex items-center rounded- justify-start ps-8 z-10">
            <div className="space-y-7">
              <h1 className="text-2xl md:text-5xl font-bold text-white lg:w-3/4">
                {t("hero.title")} 
                <span className="border-b-2"> Round</span>
              </h1>
              <p className="md:text-lg font-bold text-white/90">{t("hero.description")}</p>
            </div>
          </div>
          <Image
            src="/auth/icon.png"
            alt="Round bg"
            width={100}
            height={100}
            className="absolute end-4 top-4 size-24 z-10"
          />
          <Image
            src="/auth/bg.png"
            alt="Round bg"
            width={1000}
            height={1000}
            className="absolute inset-0 size-full z-0"
          />
          <div className="absolute inset-0 rounded-[2.4rem] bg-black/40 z-0" />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <Card className="lg:max-w-md p-4 border-none">
          <div className="flex justify-center">
            <Image
              src="/icons/logo.png"
              alt="Round Logo"
              width={100}
              height={100}
            />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {t("title")} 
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {t("description")} 
          </p>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="space-y-4 rounded-md shadow-sm">
              <div>
                <Input
                  id="full-name"
                  className="p-6 rounded-full bg-gray-50"
                  placeholder={t("fullName")} 
                  name="full-name"
                  type="text"
                  required
                />
              </div>
              <div>
                <Input
                  id="email"
                  className="p-6 rounded-full bg-gray-50"
                  placeholder={t("email")} 
                  name="email"
                  type="email"
                  required
                />
              </div>
              <div>
                <div className="flex gap-0 rounded-full border border-gray-200 bg-gray-50">
                  <Input
                    id="whatsapp"
                    name="whatsapp" className="flex-1 border-none shadow-none p-6 rtl:placeholder:text-end"
                    placeholder={t("whatsapp")} 
                    type="tel"
                    required
                  />
                  <Select defaultValue="+968">
                    <SelectTrigger className="w-[110px] p-6  border-none shadow-none">
                      <SelectValue placeholder="+968" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+968">+968</SelectItem>
                      <SelectItem value="+967">+967</SelectItem>
                      <SelectItem value="+966">+966</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    className="p-6 rounded-full bg-gray-50"
                    placeholder={t("password")}
                    type={showPassword ? "text" : "password"}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 end-0 pe-5 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full p-6 rounded-full">
                {t("submit")} 
              </Button>
            </div>
          </form>
          <div className="text-sm text-center mt-4">
            <Link
              href="/"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              {t("login")} 
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
