import Footer from "@/components/footer";
import Recommendations from "./_components/recommendations";
import ImageCover from "@/components/Image-cover";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Recommendations />
      <Footer />
    </>
  );
}
