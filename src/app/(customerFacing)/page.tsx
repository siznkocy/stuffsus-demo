import Footer from "@/components/footer";
import { ProductList } from "./[category]/_components/products-list";
import Curated from "@/components/curated";
import Fronting from "@/components/fronting";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products/?limit=6");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

// ! productList to have different views.

export default async function HomePage() {
  const products = await getProducts();
  return (
    <>
      <ProductList aspect_ratio={"custom"} />
      {/* Footer is added here to comply with the design template */}
      <Fronting />
      <Curated />
      <Footer />
    </>
  );
}
