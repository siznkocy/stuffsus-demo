import InputWithButtonInput from "@/app/(customerFacing)/[category]/_components/search-input";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { X, Linkedin, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="space-y-4">
        <Card className="w-full rounded-lg flex md:flex-row flex-col justify-between p-0 md:p-2 bg-gradient-to-t from-primary to-primary ">
          <CardContent className="md:w-1/3 w-full">
            <CardTitle className="capitalize text-primary-foreground text-base md:text-4xl font-normal my-6">
              ready to Get our new stuff?
            </CardTitle>
            <InputWithButtonInput text="send" placeholder="Your email" />
          </CardContent>
          <CardContent className="flex flex-col items-end md:w-2/4 w-full">
            <div className="mt-auto">
              <CardTitle className="text-primary-foreground text-base mb-1">
                Stuffus for home and needs
              </CardTitle>
              <CardDescription>
                We&#39;ll listen to your needs, identity the best approach, and
                then give you the bespoke services that just right for you.
              </CardDescription>
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-col md:flex-row justify-between md:px-4 px-0">
          <Card className="shadow-none border-none flex md:flex-row flex-col">
            {/* about & support */}
            <div className="flex gap-10">
              <CardContent className="p-0 space-y-2">
                <CardTitle>About</CardTitle>
                {["Blog", "Meet the team", "Contact Us"].map((item, i) => (
                  <CardDescription key={i}>{item}</CardDescription>
                ))}
              </CardContent>
              {/* social media */}
              <CardContent className="p-0 space-y-2 ">
                <CardTitle>Support</CardTitle>
                {["Contact Us", "Shipping", "Return", "FAQ"].map((item, i) => (
                  <CardDescription key={i}>{item}</CardDescription>
                ))}
              </CardContent>
            </div>
          </Card>
          <Card className="border-none shadow-none space-y-3 md:mt-auto">
            <CardDescription>Social Media</CardDescription>
            <div className="flex gap-2">
              <X
                className="bg-black stroke-white rounded-full p-1"
                size={30}
                aria-label="x.com"
              />
              <Facebook
                className="bg-black stroke-white rounded-full p-1"
                size={30}
                aria-label="facebook"
              />
              <Linkedin
                className="bg-black stroke-white rounded-full p-1"
                size={30}
                aria-label="Linkedin"
              />
              <Instagram
                className="bg-black stroke-white rounded-full p-1"
                size={30}
                aria-label="instagram"
              />
            </div>
          </Card>
        </div>
      </footer>
      <div className=" border-t py-3 text-center flex flex-col md:flex-row">
        <p className="text-muted-foreground mx-auto md:ml-0 md:mr-auto p-4">
          Copyright © {new Date().getFullYear()} Stuffus. All Right Reserved
        </p>
        <div className="flex justify-around md:gap-5">
          <Link href="/">Terms of Service</Link>
          <Link href="/">Privacy Policy</Link>
        </div>
      </div>
    </>
  );
}
