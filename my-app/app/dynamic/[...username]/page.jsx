import React from "react";

const page = async ({ params }) => {
  const data = await params;
  console.log(data);

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <h2 className="text-2xl underline">
        This is dynamic page that catch all routes {data.username}{" "}
      </h2>
    </div>
  );
};

export default page;
