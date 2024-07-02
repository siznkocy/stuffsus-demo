import { ProductsAccordion } from "./_components/side-filter";
import { ProductList } from "./_components/products-list";
import { getCategory } from "../action/category";
import { Suspense } from "react";
import Loading from "./loading";

export default function ProductPage({
  searchParams,
  params,
}: {
  searchParams: { q?: string };
  params: { category: string };
}) {
  const search = typeof searchParams.q === "string" ? searchParams.q : null;

  const category = typeof params.category === "string" ? params.category : null;

  let query = null;
  if (category === "shop") {
    query = null;
  } else {
    query = `/category/${category}?`;
  }

  if (search) {
    query = `/search?q=${search}&`;
  }

  return (
    <div className="min-h-[60vh]">
      <Suspense key={query} fallback={<Loading />}>
        <ProductContent query={query} />
      </Suspense>
    </div>
  );
}

export type productRequestProps = {
  query: string | null | undefined;
  aspect_ratio: "video" | "square" | "custom";
};

async function ProductContent({ query }: Partial<productRequestProps>) {
  const categories = await getCategory();

  return (
    <>
      <div className="w-full flex align-top">
        <ProductsAccordion categories={categories} />
        <ProductList query={query} aspect_ratio={"square"} />
      </div>
    </>
  );
}
