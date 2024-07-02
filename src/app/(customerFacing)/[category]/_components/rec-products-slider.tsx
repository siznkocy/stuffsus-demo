"use client";
import { ReactNode } from "react";
import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type horizontalSlideProps = {
  children: ReactNode;
  title: string;
};

export default function HorizontalSlider({
  title,
  children,
}: horizontalSlideProps) {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <div className="flex justify-between items-center pt-2">
          <h1 className="font-semibold text-lg sm:text-2xl mb-4 w-full lg:w-2/5 sm:w-3/5">
            {title}
          </h1>
          <div className="md:flex gap-3 hidden">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
        {children}
      </Carousel>
    </>
  );
}
