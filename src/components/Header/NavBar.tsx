"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import LocalSwitcher from "./local-switcher";
import { CiUser } from "react-icons/ci";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SocialLinks from "./socialLinks";
import NavLinks from "./NavLinks";
import LinkApp from "./LinkApp";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export function Navbar() {
  const t = useTranslations("navbar");
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : pathname.endsWith("register") ? "bg-white text-gray-700" : "bg-primary/90 backdrop-blur-sm text-black"
      }`}
    >
      <div className="container mx-auto px-4 divide-y divide-gray-400">
        <div className="flex justify-between py-2">
          <SocialLinks isScrolled={isScrolled} />
          <LocalSwitcher isScrolled={isScrolled} />
        </div>
        <div className="flex justify-between items-center py-4">
          <LinkApp href="/" className="flex items-center">
            <Image
              height={100}
              width={100}
              src="/icons/logo.png"
              alt="Logo"
              className="size-20"
            />
          </LinkApp>
          <div className="hidden md:flex items-center gap-8">
            <div
              className={`flex gap-6 ${
                isScrolled ? "text-gray-700" : pathname.endsWith("register")  ? "text-gray-700" : "text-white"
              }`}
            >
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <LinkApp href="/register">
              <Button color="primary" className="rounded-full">
                <CiUser />
                {t("links.register")}
              </Button>
            </LinkApp>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-4 mt-8">
                  <NavLinks />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
