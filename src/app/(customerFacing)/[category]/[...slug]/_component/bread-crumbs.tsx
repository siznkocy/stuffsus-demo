"use client";

import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

export default function BreadCrumbs(props: Partial<productProps>) {
  const { category, title } = props;

  let crumbsLink: { label: string; link?: string }[] = [
    { label: "shop", link: "/shop" },
    { label: category! },
    { label: title! },
  ];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbsLink.map((item, i) => (
          <React.Fragment key={i}>
            <BreadcrumbItem>
              {i == crumbsLink.length - 1 ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink
                  href={`${
                    item.label === "shop" ? item.link : "/" + item.label
                  }`}
                >
                  {item.label}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {i != crumbsLink.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
