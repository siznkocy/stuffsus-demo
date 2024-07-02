"use client";

import Image from "next/image";
import { useState } from "react";

// function ImageSelect(props: Partial<productProps>) {
//   return <Image src={} />;
// }

export function ProductImage({ images }: Partial<productProps>) {
  const [image, setImage] = useState<number>(0);
  return (
    <>
      <div className="bg-muted aspect-video lg:aspect-square relative rounded-xl overflow-hidden">
        <Image
          src={images![image]!}
          alt={images![image]}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex gap-2 mt-3 relative">
        {images?.map((url, i) => (
          <div
            key={i}
            className={`w-1/5 p-2 bg-muted aspect-square relative rounded-lg overflow-hidden border cursor-pointer
              ${image === i ? "border-foreground" : "border-muted"}`}
            onClick={() => setImage(i)}
          >
            <Image src={url} alt={url} fill className="object-contain" />
          </div>
        ))}
      </div>
    </>
  );
}

/**
 * the api used does not have variant for any of the products
 */
export function ProductVariant(props: Partial<productProps>) {
  const { images } = props;

  return (
    <div className="mt-2 space-y-3">
      <h3 className="text-lg font-semibold">Choose Variant</h3>
      <div className="aspect-square relative w-12 border border-primary-foreground rounded-lg overflow-hidden bg-muted p-2">
        {images ? (
          <Image
            src={images[0]!}
            alt={images[0]!}
            fill
            className="object-contain"
          />
        ) : (
          <div className="w-full bg-muted animate-pulse aspect-square"></div>
        )}
      </div>
    </div>
  );
}
