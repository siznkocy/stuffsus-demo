import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export interface TagProps extends ComponentProps<"div"> {
  text: string;
}

export default function Tag({ text, className }: TagProps) {
  return (
    <div
      className={cn(
        "absolute text-primary bg-primary-foreground border px-3 font-medium rounded-xl shadow-white shadow-inner text-sm md:text-base",
        className
      )}
    >
      {text}
    </div>
  );
}
