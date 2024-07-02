"use client";

import { productProps } from "@/components/product-card";
import { Card, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

/**
 * * Tabs "USES" client components
 * @param props the product details needed for this component.
 * @returns
 */

export default function ProductDetails(props: Partial<productProps>) {
  let product_information = [
    props.warrantyInformation,
    `weigh: ${props.weight} kg`,
    props.availabilityStatus,
  ];

  let dimensions: string = "";

  if (typeof props.dimensions === "object") {
    for (let [key, val] of Object.entries(
      props.dimensions as { width: number; height: number; depth: number }
    )) {
      dimensions += `${key}: ${val} mm, `;
    }
  }

  return (
    <Tabs defaultValue="Description" className="w-full space-y-3">
      <hr />
      <TabsList className="flex gap-4">
        <TabsTrigger
          className="data-[state=active]:text-primary text-muted-foreground font-medium"
          value="Description"
        >
          Description
        </TabsTrigger>
        <TabsTrigger
          className="data-[state=active]:text-primary text-muted-foreground font-medium"
          value="Seller_information"
        >
          Seller information
        </TabsTrigger>
      </TabsList>
      <hr />
      <TabsContent className="text-muted-foreground" value="Description">
        <Card className="border-none space-y-1 shadow-none">
          <CardDescription>
            {props.description} Additional Details:
          </CardDescription>
          <div className="text-sm text-muted-foreground">
            <ul className="list-disc ">
              {product_information?.map((info, i) => (
                <li key={i} className="whitespace-nowrap capitalize">
                  {i + 1}
                  {". "}
                  {info}
                </li>
              ))}
            </ul>
          </div>
          <CardDescription className="flex flex-col">
            <span>Dimension:</span> <span>{dimensions}</span>
          </CardDescription>
        </Card>
      </TabsContent>
      <TabsContent
        className="text-muted-foreground text-sm"
        value="Seller_information"
      >
        Sold by stuffus.
      </TabsContent>
    </Tabs>
  );
}
