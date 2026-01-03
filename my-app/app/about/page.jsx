"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[90vh]">
      <h2 className="text-2xl underline">This is About Page</h2>
      <button
        onClick={() => router.push("/")}
        className="hover:underline cursor-pointer"
      >
        Go To Home{" "}
      </button>
    </div>
  );
}
