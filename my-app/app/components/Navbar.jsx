"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const path = usePathname();
  console.log("path is", path);
  // const cleanPath = path.replace("/", "");
  // console.log("cleanPath is", cleanPath);

  return (
    <div className="flex justify-between items-center px-10 py-5 bg-blue-900">
      <Link href={"/"} className="hover:text-orange-500 text-2xl font-bold">
        <span className="text-green-500">Shop</span>Ease
      </Link>
      <div className="flex gap-4">
        <Link
          href={"/"}
          className={`hover:text-orange-500 ${
            path === "/" ? "text-orange-500" : ""
          }`}
        >
          {" "}
          Home
        </Link>
        <Link
          href={"/about"}
          className={`hover:text-orange-500 ${
            path === "/about" ? "text-orange-500" : ""
          }`}
        >
          {" "}
          About
        </Link>
        <Link
          href={"/contact"}
          className={`hover:text-orange-500 ${
            path === "/contact" ? "text-orange-500" : ""
          }`}
        >
          {" "}
          Contact
        </Link>
        <Link
          href={"/product"}
          className={`hover:text-orange-500 ${
            path === "/product" ? "text-orange-500" : ""
          }`}
        >
          {" "}
          Product
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
