import { Infinity, Menu, Search, ShoppingCart } from "lucide-react";
import { Header, Nav, NavLink } from "./nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

const navList = [
  { path: "/", name: "Home" },
  { path: "/shop", name: "Shop" },
  { path: "/blog", name: "Blog" },
];

const mobileList = [
  { name: "search", icon: <Search className="stroke-inherit" /> },
  { name: "cart", icon: <ShoppingCart className="stroke-inherit" /> },
  { name: "menu", icon: <Menu className="stroke-inherit" /> },
];

// todo: Making the search, cart and profile button functional.

export default function Navbar() {
  return (
    <Header className="flex  items-center px-4 sticky py-2 md:py-3 justify-between">
      <div className="flex gap-1">
        <Infinity />
        <span className="font-semibold">Stuffsus</span>
      </div>
      <Nav className="hidden md:flex">
        {navList.map((link, i) => (
          <NavLink key={i} href={link.path}>
            {link.name}
          </NavLink>
        ))}
      </Nav>
      <div className="flex gap-2">
        {mobileList.map((item, i) => (
          <Button
            className={`size-9 relative ${item.name === "menu" && "md:hidden"}`}
            key={i}
            variant={"icon"}
            size={"icon"}
          >
            {item.icon}
            {item.name === "cart" && (
              <span className="bg-red-500 absolute text-white rounded-full text-xs top-0 right-0 px-1">
                0
              </span>
            )}
          </Button>
        ))}
        {/* show the avatar for medium screens to large */}
        <Avatar className="size-9">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </Header>
  );
}
