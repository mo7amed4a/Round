import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import { FaStar } from "react-icons/fa";
import { FiTag } from "react-icons/fi";
import { Button } from "../ui/button";
import { MdOutlineArrowRightAlt } from "react-icons/md";

type PropsType = {
    title: string
    image: string
    price: string
    btnText: string
};

export default function ImageCardLarge({
    title,
    image,
    price,
btnText
}: PropsType) {
  return (
    <div className="relative w-full h-72 rounded-3xl overflow-hidden">
      <Image src={image} alt={"d"} fill className="object-cover" />
      <Badge className="bg-white text-gray-500 flex gap-x-1 absolute end-4 top-4">
        <FaStar className="text-yellow-500" />
        <span>4.5</span>
      </Badge>
      <div className=" h-full flex items-end relative z-10">
        <div className="bg-black/60 text-white p-4 w-full text-start">
          <h3 className="font-semibold text-center">{title}</h3>
          <div className="flex justify-between">
            <span className="flex gap-x-1 items-center">
              <FiTag />
              {price}
            </span>
            <Button
              size="lg"
              variant={"ghost"}
              className="border border-white rounded-full px-4"
            >
              {btnText}
              <MdOutlineArrowRightAlt className="rtl:rotate-180" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
