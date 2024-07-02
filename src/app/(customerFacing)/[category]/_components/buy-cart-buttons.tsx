"use client";

import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { cva, VariantProps } from "class-variance-authority";
import { ShoppingCart } from "lucide-react";
import { IconButton } from "./search-input";

// todo: component to use for all product card.

// type BuyCartProps = VariantProps<typeof BuyCart>;
const BuyCart = cva("w-full px-0 py-0 text-sm gap-2", {
  variants: {
    orientation: {
      row: "flex flex-nowrap",
      col: "flex flex-col",
    },
  },
  defaultVariants: {
    orientation: "row",
  },
});

interface BuyCartButtonProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof BuyCart> {}

export default function BuyCartButtons({
  orientation,
  className,
}: BuyCartButtonProps) {
  // add the buy and cart button functionality

  return (
    <CardFooter className={BuyCart({ orientation, className })}>
      <Button
        variant="secondary"
        className="hidden sm:block"
        onClick={() => {
          console.log("Add to card");
        }}
      >
        Add to Card
      </Button>
      <Button
        variant="icon"
        aria-label="cart"
        className="flex-1 sm:hidden"
        onClick={() => {
          console.log("Add to card");
        }}
      >
        <ShoppingCart size={15} />
      </Button>
      <Button
        variant="default"
        onClick={() => {
          console.log("buy product");
        }}
      >
        Buy Now
      </Button>
    </CardFooter>
  );
}

export function BuyCartCardButtons({
  orientation,
  className,
}: BuyCartButtonProps) {
  // add the buy and cart button functionality

  return (
    <CardFooter className={BuyCart({ orientation, className })}>
      <Button
        variant="secondary"
        onClick={() => {
          console.log("Add to card");
        }}
      >
        Add to Card
      </Button>
      <Button
        variant="default"
        onClick={() => {
          console.log("buy product");
        }}
      >
        Buy Now
      </Button>
    </CardFooter>
  );
}
