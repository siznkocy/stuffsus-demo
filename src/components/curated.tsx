import { Suspense } from "react";
import HorizontalSlider from "@/app/(customerFacing)/[category]/_components/rec-products-slider";
import { CarouselContent, CarouselItem } from "./ui/carousel";
import CuratedCard from "./curated-card";

// create the card arrays.

export default function Curated() {
  return (
    <div className="w-full">
      <Suspense fallback={<>Loading...</>}>
        <HorizontalSlider title="Explore our curated categories and transform your living spaces">
          <CarouselContent>
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-[38%] basis-[66%]">
                <CuratedCard text="music" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </HorizontalSlider>
      </Suspense>
    </div>
  );
}
