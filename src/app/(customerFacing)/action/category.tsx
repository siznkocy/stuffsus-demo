import { CircleDollarSign, Search, ShoppingBag, Sparkles } from "lucide-react";
import { ReactNode } from "react";

export type CategoryResponse = {
  slug: string;
  name: string;
  url: string;
}[];

export const groupCategory: { name: string; icon: ReactNode }[] = [
  { name: "All products", icon: <ShoppingBag className="stroke-1 size-5" /> },
  { name: "New Arrival", icon: <Sparkles className="stroke-1 size-5" /> },
  { name: "Best Seller", icon: <Search className="stroke-1 size-5" /> },
  {
    name: "On Discount",
    icon: <CircleDollarSign className="stroke-1 size-5" />,
  },
];

export async function getCategory() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL_API}/products/categories`
  );

  if (!res.ok) throw Error("Could not get products");

  return (await res.json()) as CategoryResponse;
}
