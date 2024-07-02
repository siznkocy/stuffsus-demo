"use client";

import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";
import { ReactNode } from "react";

type InputWithButtonInputProps = {
  iconComponent?: ReactNode;
  text: string;
  placeholder: string;
  // pass a function too.
};

//! create a search modal.

export default function InputWithButtonInput({
  text,
  placeholder,
  iconComponent,
}: InputWithButtonInputProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);

  function handleSearch(term: string) {
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
  }

  function searchButton() {
    console.log("params",params);
    router.replace(`/shop?${params.toString()}`);
  }

  return (
    <div className="border has-[:focus]:border-primary has-[:focus]:bg-zinc-50  stroke-slate-300 has-[:focus]:stroke-primary  pl-2 p-1 rounded-full md:flex hidden items-center text-muted-foreground space-x-2 w-fit text-sm bg-primary-foreground">
      {iconComponent ? iconComponent : null}
      <input
        id={text}
        className="outline-none max-w-[18rem] min-w-[14rem] w-[calc(18vw)] focus:bg-inherit bg-inherit peer/search text-primary"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("q")?.toString()}
      />
      <Button
        className="px-5 py-1 w-fit text-white bg-primary rounded-full text-sm capitalize"
        onClick={() => searchButton()}
      >
        {text}
      </Button>
    </div>
  );
}

export function IconButton({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <button
      className="p-2 rounded-full border md:hidden stroke-primary hover:border-primary"
      aria-label={label}
    >
      {icon}
    </button>
  );
}
