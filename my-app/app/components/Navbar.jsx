import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-5 bg-blue-900">
      <Link href={"/"} className="hover:text-orange-500 text-xl">
        ShopEase
      </Link>
      <div className="flex gap-4">
        <Link href={"/"} className="hover:text-orange-500">
          {" "}
          Home
        </Link>
        <Link href={"/about"} className="hover:text-orange-500">
          {" "}
          About
        </Link>
        <Link href={"/contact"} className="hover:text-orange-500">
          {" "}
          Contact
        </Link>
        <Link href={"/product"} className="hover:text-orange-500">
          {" "}
          Product
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
