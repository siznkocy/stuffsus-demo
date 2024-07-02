/**
 * the cart should show only three of my products.
 */

import Link from "next/link";
import { Button } from "./ui/button";

export default function cart() {
  return (
    <div>
      <Button variant={"secondary"} asChild>
        <Link href={"/cart"}>View All</Link>
      </Button>
    </div>
  );
}
