import { Suspense } from "react";
import { ProductsResponse } from "../../action/products";
import HorizontalSlider from "./rec-products-slider";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ProductCards from "@/components/product-card";

async function getRecommendedProducts() {
  const res = await fetch(
    "https://dummyjson.com/products?limit=6&sortBy=rating&select=title,price,rating,images,reviews,category&order=desc"
  );

  if (!res.ok) throw Error("Failed to load Recommend products");

  return (await res.json()) as ProductsResponse;
}

export default async function Recommendations() {
  const { products } = await getRecommendedProducts();

  return (
    <div className="lg:max-w-full">
      <Suspense fallback={<>Loading...</>}>
        <HorizontalSlider title=" Explore our recommendations">
          <CarouselContent>
            {products?.map((product, index) => (
              <CarouselItem key={index} className="basis-1/2 lg:basis-2/5">
                <ProductCards
                  key={product.id}
                  {...product}
                  aspect_ratio={"responsive"}
                  className=""
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </HorizontalSlider>
      </Suspense>
    </div>
  );
}
