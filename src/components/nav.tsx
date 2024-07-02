"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React, {
  ComponentProps,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "./ui/button";

interface headerProps extends React.ComponentProps<"div"> {}

export function Header({ children, className }: headerProps) {
  const [height, setHeight] = useState<number>(0);
  const elementRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      setHeight(elementRef.current?.clientHeight);
    }
  }, []);

  return (
    <header
      ref={elementRef}
      className={cn(
        `lg:mx-auto rounded-b-xl max-w-screen-lg mx-3 bg-white sticky top-0 z-10`,
        className
      )}
    >
      {children}
    </header>
  );
}

interface navProps extends React.ComponentProps<"nav"> {}

export function Nav({ children, className }: navProps) {
  return (
    <nav className={cn("text-primary flex justify-center text-sm", className)}>
      {children}
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "font-medium text-slate-300  p-4 hover:text-primary focus-visible:text-primary",
        pathname === props.href && "text-primary"
      )}
    />
  );
}
