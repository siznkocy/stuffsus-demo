import ImageCover from "@/components/Image-cover";
import Navbar from "@/components/nav-bar";
import { ProductHeader } from "@/components/product-header";
import ReactQueryProvider from "@/components/ReactQueryProvider";

export const dynamic = "force-dynamic";

// ! make the header responsive.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <ImageCover />
      <div className="my-6 overflow-x-clip">
        <ReactQueryProvider>
          {/* pages contents - shop, home and blog */}
          <div className="relative mx-3 lg:mx-auto top-[5rem] rounded-t-xl min-h-screen max-w-screen-lg bg-background bg-white mt-72 md:p-5 p-2 shadow-2xl shadow-primary-foreground space-y-12">
            <ProductHeader />
            {children}
          </div>
        </ReactQueryProvider>
      </div>
    </>
  );
}
