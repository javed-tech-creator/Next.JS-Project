"use client";
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const {dynamic} = useParams();
  console.log("params is", dynamic);
  
  return (
  <div className='flex justify-center items-center h-[90vh]'>
     <h2 className='text-2xl underline'>This is Dynamic Page</h2>
     </div>
  )
}

export default page