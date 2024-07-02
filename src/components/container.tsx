import { ReactNode } from "react";

export default function ProductsContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative mx-3 lg:mx-auto top-[5rem] rounded-t-xl min-h-screen max-w-screen-lg bg-background bg-white mt-72 p-5 shadow-2xl shadow-primary-foreground space-y-12">
      {children}
    </div>
  );
}
