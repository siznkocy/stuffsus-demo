"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import ProductCard, { ProductCardSkeleton } from "@/components/product-card";
import { ComponentProps, ReactNode, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getProducts } from "../../action/products";
import { productRequestProps } from "../page";

export function ProductList({
  query,
  aspect_ratio,
}: Partial<productRequestProps>) {
  const [limit, setLimit] = useState<number>(10);

  const lastPostRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useInView({
    root: lastPostRef.current,
    threshold: 1,
  });

  const {
    data,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => getProducts(pageParam, limit, query),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.products.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry]);

  const _data = data?.pages.flatMap((page) => page.products);

  if (isLoading) return <>isLoading...</>;

  if (isError) return <>Error with loading data</>;

  if (data)
    return (
      <ProductGridContainer>
        {Number(data?.pages[0].total) != 0 ? (
          _data?.map((product, i) => {
            if (i === _data.length - 1)
              return (
                <ProductCard
                  key={product.id}
                  {...product}
                  aspect_ratio={aspect_ratio}
                  // ref={ref}
                />
              );
            return (
              <ProductCard
                key={product.id}
                {...product}
                aspect_ratio={aspect_ratio}
              />
            );
          }) ||
          (isFetchingNextPage && <SkeletonProductList limit={limit} />)
        ) : isFetching ? (
          <SkeletonProductList limit={limit} />
        ) : (
          <div>No data</div>
        )}
      </ProductGridContainer>
    );
}

// * Grid List wrapper
function ProductGridContainer({
  children,
  props,
}: {
  children: ReactNode;
  props?: Omit<ComponentProps<"div">, "className">;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full" {...props}>
      {children}
    </div>
  );
}

/**
 * * Skeleton loader for products list
 * @param {number} limit : number of product request with each page.
 * */
function SkeletonProductList({ limit }: { limit: number }) {
  return Array.from({ length: limit }, (_, index) => (
    <ProductCardSkeleton key={index} />
  ));
}
