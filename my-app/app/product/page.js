import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col-reverse gap-10 justify-center items-center h-[90vh]'>
     <h2 className='text-2xl underline'> This is Products Collection Page </h2>
     <div className='flex gap-5 justify-center items-center'> 
     <Link href={"/product/men"} className='border rounded-md bg-green-500 hover:bg-green-600 px-4 py-2'>Mens</Link>
     <Link href={"/product/women"} className='border rounded-md bg-blue-500 hover:bg-blue-600 px-4 py-2'>Womens </Link>
     </div>
     <h2 className='text-3xl text-cyan-200'>Choose Your Choice</h2>
      </div>
  )
}

export default page