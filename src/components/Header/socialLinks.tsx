import React from "react";

import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram, BsTiktok } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

export default function SocialLinks({
  isScrolled,
}: {
  isScrolled?: boolean;
}) {
  const pathname = usePathname()
  return (
    <div className="flex gap-x-2">
      <Button
        variant="outline"
        size="icon"
        className={`border rounded-full bg-transparent size-6 ${
          isScrolled
            ? "text-gray-700 border-gray-700"
            : pathname.endsWith("register") ? "text-gray-700 border-gray-700" : "text-white border-white"
        }`}
      >
        <FaXTwitter />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className={`border bg-transparent rounded-full size-6 ${
          isScrolled
            ? "text-gray-700 border-gray-700"
            : pathname.endsWith("register") ? "text-gray-700 border-gray-700" : "text-white border-white"
        }`}
      >
        <BsTiktok />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className={`border bg-transparent rounded-full size-6 ${
          isScrolled
            ? "text-gray-700 border-gray-700"
            : pathname.endsWith("register") ? "text-gray-700 border-gray-700" : "text-white border-white"
        }`}
      >
        <BsInstagram />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className={`border bg-transparent rounded-full size-6 ${
          isScrolled
            ? "text-gray-700 border-gray-700"
            : pathname.endsWith("register") ? "text-gray-700 border-gray-700" : "text-white border-white"
        }`}
      >
        <IoIosNotificationsOutline />
      </Button>
    </div>
  );
}
