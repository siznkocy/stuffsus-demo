import { CardDescription } from "@/components/ui/card";
import { Ratings } from "@/components/product-card";
import { Heart } from "lucide-react";
import { formatCurrency } from "@/lib/formatter";
import { ProductImage, ProductVariant } from "./_component/product-variant";
import ProductDetails from "./_component/details";
import BreadCrumbs from "./_component/bread-crumbs";
import BuyCartCard from "./_component/buy-cart-card";
import BuyCartButtons, {
  BuyCartCardButtons,
} from "../_components/buy-cart-buttons";
import { Button } from "@/components/ui/button";

async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export default async function page({ params }: { params: { slug: string } }) {
  let slug_array = params.slug[0].split("_");
  const product = await getProduct(slug_array[slug_array.length - 1]);

  return (
    <>
      <BreadCrumbs {...product} />
      <div className="flex gap-5">
        <div className="lg:flex md:w-4/5 w-full gap-6">
          {/* col 1 */}
          <div className="w-full lg:w-4/6">
            <ProductImage images={product.images} />
          </div>
          {/* col 2 */}
          <div className="flex flex-col overflow-hidden space-y-3 w-full">
            <div>
              <h1 className="text-3xl font-medium capitalize">
                {product.title}
              </h1>
              <div className="flex items-center gap-1 mt-2 flex-wrap">
                <CardDescription className="flex items-center md:text-sm">
                  Brand:
                  <span className="text-primary text-sm font-semibold pl-[0.15rem]">
                    {product.brand}
                  </span>
                </CardDescription>
                <div className="text-muted-foreground text-lg md:text-xs">
                  <Ratings {...product} />
                </div>

                <CardDescription className="text-primary font-semibold flex items-center gap-1 whitespace-nowrap text-sm">
                  <Heart
                    fill="#ff003c"
                    strokeWidth={"0"}
                    className="md:size-4 size-6"
                  />
                  Add to Wish List
                </CardDescription>
              </div>
              <div className="py-5 border-b">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">
                    {formatCurrency(
                      product.price *
                        (1 - (product.discountPercentage ?? 0) / 100)
                    )}
                  </span>

                  {product.discountPercentage && (
                    <span className="text-muted-foreground line-through">
                      {formatCurrency(product.price)} USD
                    </span>
                  )}
                </div>
                <BuyCartCardButtons
                  orientation={"row"}
                  className="md:hidden flex mt-2"
                />
              </div>
            </div>
            <ProductVariant {...product} />
            <ProductDetails {...product} />
            <Button variant="secondary">More</Button>
            <div>Review here</div>
          </div>
        </div>
        {/* Organize quantities and notes  */}
        <BuyCartCard {...product} />
      </div>
    </>
  );
}
