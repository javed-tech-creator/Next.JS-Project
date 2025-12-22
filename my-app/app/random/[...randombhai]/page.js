"client use"
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const param = useParams()
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <h2 className="text-2xl underline">This is Random page</h2>
    </div>
  );
};

export default page;
