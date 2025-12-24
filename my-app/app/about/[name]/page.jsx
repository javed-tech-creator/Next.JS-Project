
import React from 'react'

 async function page ({params}) {
const { name } = await params
  
  return (
  <div className='flex justify-center items-center h-[90vh]'>
     <h2 className='text-2xl underline'>This is Dynamic Page -{name}</h2>
     </div>
  )
}

export default page