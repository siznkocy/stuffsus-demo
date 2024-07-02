"use client";
import { Card, CardDescription, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/formatter";
import { Minus, Pencil, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { BuyCartCardButtons } from "../../_components/buy-cart-buttons";

export default function BuyCartCard(props: Partial<productProps>) {
  // * assign product count to "1"
  const [productCount, setProductCount] = useState<number>(1);

  const { images } = props;

  let SubTotal: number = (props?.price ?? 0) * productCount;

  return (
    <Card className="border sm:min-w-60 lg:w-min w-2/5 rounded-md h-fit p-3 space-y-6 hidden md:block">
      <CardContent className="p-0 space-y-3">
        <div className="flex items-center gap-2">
          <div className="relative w-2/5 aspect-square bg-muted rounded-lg overflow-hidden">
            {images ? (
              <Image
                src={images[0]!}
                alt={images[0]!}
                fill
                className="object-contain aspect-square"
              />
            ) : (
              <div className="w-full bg-muted animate-pulse"></div>
            )}
          </div>
          <h3 className="font-semibold uppercase text-sm">
            {props.title?.slice(0, 15)}
          </h3>
        </div>
        <div className="flex gap-2 items-center">
          {/* client count */}
          <div className="border rounded-md w-fit flex justify-around items-center">
            <button
              className="px-4 py-2 disabled:text-muted"
              disabled={productCount < 2}
              onClick={() => setProductCount(productCount - 1)}
            >
              <Minus size={15} />
            </button>
            <span className="max-w-8 min-w-7 text-center">{productCount}</span>
            <button
              className="px-4 py-2 disabled:text-muted"
              disabled={productCount == props.stock}
              onClick={() => setProductCount(productCount + 1)}
            >
              <Plus size={15} />
            </button>
          </div>
          <p className="text-muted-foreground text-sm">
            Stock:{" "}
            <span className="text-primary font-medium">{props.stock}</span>
          </p>
        </div>
        <div className="w-full flex gap-2 items-center">
          <Pencil size={15} />
          <span className="text-sm font-semibold">add notes</span>
        </div>
        <div className="flex flex-col justify-between w-full text-xs ">
          <CardDescription className="flex justify-between w-full text-xs line-through flex-row-reverse">
            {formatCurrency(SubTotal)}
          </CardDescription>
          <CardDescription className="flex justify-between w-full items-center">
            <span>Subtotal</span>
            <span className="text-primary text-base font-bold">
              {formatCurrency(
                SubTotal * (1 - (props.discountPercentage ?? 0) / 100)
              )}
            </span>
          </CardDescription>
        </div>
      </CardContent>
      <BuyCartCardButtons orientation={"col"} />
    </Card>
  );
}
