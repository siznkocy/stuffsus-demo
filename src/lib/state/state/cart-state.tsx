import { useQuery } from "@tanstack/react-query";

/**
 * for a custom api we would have out own.
 */

type Cart = {
  id: number;
  product: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string;
  }[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};

export const useCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      console.log("fetching cart");
      const res = await fetch("https://dummyjson.com/carts?limit=5", {
        cache: "no-store",
      });
      const cart = await res.json();
      return cart as Cart | undefined;
    },
  });
};
