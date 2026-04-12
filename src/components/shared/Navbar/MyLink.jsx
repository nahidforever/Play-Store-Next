"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({ href, children }) => {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`font-semibold pb-2 ${pathName === href ? "border-b-2 text-purple-500" : ""}`}
    >
      {children}
    </Link>
  );
};
export default MyLink;
