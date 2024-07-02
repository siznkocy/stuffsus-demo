import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Star } from "lucide-react";
import { formatCurrency } from "@/lib/formatter";
import { forwardRef } from "react";
import Link from "next/link";
import BuyCartButtons from "@/app/(customerFacing)/[category]/_components/buy-cart-buttons";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Tag from "./tag";

export type productProps = {
  className: string;
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerEmail: string;
  }[];
};

const ProductCard = cva("w-full relative rounded-2xl overflow-hidden border", {
  variants: {
    aspect_ratio: {
      video: "aspect-video",
      square: "aspect-square",
      responsive: "aspect-square md:aspect-video",
      custom: "aspect-[4/3]",
    },
  },
  defaultVariants: {
    aspect_ratio: "square",
  },
});

interface ProductCardProps
  extends Partial<productProps>,
    VariantProps<typeof ProductCard> {}

// for product card details
export function Ratings(props: Partial<productProps>) {
  const { rating, reviews } = props;
  return (
    <div className="flex items-end gap-0 text-inherit">
      <CardDescription>
        <Star fill="#ffb700" strokeWidth={"0"} className="size-5 md:size-4" />
        <span className="sr-only">star ratings</span>
      </CardDescription>
      <CardDescription className={"whitespace-nowrap text-sm"}>
        {rating}
        <span>({reviews?.length} rating )</span>
      </CardDescription>
    </div>
  );
}

// for product card view
export function Reviews(props: Partial<productProps>) {
  const { rating, reviews } = props;
  return (
    <div className="flex items-start gap-1 text-inherit">
      <CardDescription>
        <Star
          fill="#ffffff"
          strokeWidth={"2"}
          size={19}
          className="stroke-primary"
        />
        <span className="sr-only">star ratings</span>
      </CardDescription>
      <CardDescription className={"whitespace-nowrap text-inherit"}>
        {rating}
        <span>({reviews?.length} Reviews)</span>
      </CardDescription>
    </div>
  );
}

const ProductCards = forwardRef<HTMLDivElement, ProductCardProps>(
  function Product({ aspect_ratio, className, ...props }, ref) {
    const { id, title, price, images, category } = props;
    // * Card visible character length
    let length: number = 17;

    return (
      <Card
        className={cn(
          "flex flex-col space-y-1 border-none shadow-none rounded-lg p-1 mb-4 w-full",
          className
        )}
        ref={ref}
      >
        <div>
          <Link
            href={`/shop/${title?.replaceAll(" ", "_")}_${id}`}
            className="hover:cursor-pointer"
          >
            <div className={ProductCard({ aspect_ratio })}>
              {images ? (
                <>
                  {/* <div className="absolute text-primary bg-primary-foreground border px-3 font-medium rounded-xl z-10 top-1 right-1 shadow-white shadow-inner text-sm md:text-base">
                    {category}
                  </div> */}
                  <Tag className="top-1 right-1" text={category!} />
                  <Image
                    alt={title!}
                    src={images[0]!}
                    fill
                    className="object-contain w-full overflow-hidden bg-muted"
                  />
                </>
              ) : (
                // * image loading skeleton
                <Skeleton className="w-full aspect-square rounded-2xl"></Skeleton>
              )}
            </div>

            <CardTitle className="text-lg ms:text-xl md:min-h-7 min-h-4 line-clamp-1">
              {title}
            </CardTitle>
          </Link>
        </div>
        <CardContent className="flex md:flex-row flex-col items-start md:items-center justify-between p-0 text-muted-foreground text-lg">
          <Reviews {...props} />
          <CardTitle className="text-primary md:text-xl text-lg">
            {formatCurrency(price!)}
          </CardTitle>
        </CardContent>
        <BuyCartButtons orientation={"row"} />
      </Card>
    );
  }
);

export default ProductCards;

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="w-full aspect-square rounded-2xl"></Skeleton>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
      <div className="flex gap-3">
        <Skeleton className="h-8 w-[200px] rounded-2xl" />
        <Skeleton className="h-8 w-[200px] rounded-2xl" />
      </div>
    </div>
  );
}
