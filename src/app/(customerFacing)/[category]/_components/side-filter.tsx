import {
  AccordionContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { CategoryResponse, groupCategory } from "../../action/category";
import Link from "next/link";
// import { useRefetchStore } from "@/lib/state/refretch";
// import { usePathname, useSearchParams, useRouter } from "next/navigation";

/**
 * ! make is use route instead of using search params to fetching data.
 * ! remove the category click button to another location.
 */

export function ProductsAccordion({
  categories,
}: {
  categories: CategoryResponse;
}) {
  let results;

  return (
    <div className="w-1/4 space-y-4 hidden lg:block h-fit">
      <div className="flex">
        <h1 className="font-semibold leading-none tracking-tight">Category</h1>
        <p>{results}</p>
      </div>
      <Accordion
        type="single"
        collapsible
        className=" px-2 text-primary font-light"
      >
        {groupCategory.map((group, i) => (
          <AccordionItem
            value={`item-${i + 1}`}
            className="has-[:hover]:bg-zinc-100 rounded-lg overflow-hidden border-none "
            key={i}
          >
            <AccordionTrigger className="hover:no-underline px-3 py-2 hover: flex gap-2 font-normal text-sm w-full justify-between ">
              <div className="flex gap-1 min-w-36">
                {group.icon}
                <p>{group.name}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-white py-1 px-3 flex flex-col">
              <Link
                className="font-normal text-sm hover:bg-zinc-100 p-1 rounded-sm before:content-[''] last:border-b w-full text-left whitespace-nowrap"
                href={`/shop`}
              >
                All
              </Link>
              {categories?.map((category, i) => (
                <Link
                  className="font-normal text-sm hover:bg-zinc-100 p-1 rounded-sm before:content-[''] last:border-b w-full text-left whitespace-nowrap"
                  key={i}
                  href={`/${category.slug}`}
                  // onClick={() => selectButton(category.slug)}
                >
                  {category.name}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
