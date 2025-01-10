export type ProductsResponse = {
  products: productProps[];
  total: string;
  skip: string;
  limit: string;
};

export async function getProducts(
  page: number = 1,
  limit: number = 2,
  query: string | null | undefined
) {
  let skip: string = String((page - 1) * limit);

  const res = await fetch(
    `${process.env.NextPublicUrlApi}/products${
      query ? query : "?"
    }limit=${limit}&skip=${skip}&select=title,price,rating,images,reviews,category`,
    {}
  );
  if (!res.ok) throw Error("Could not get products");

  return (await res.json()) as ProductsResponse;
}
