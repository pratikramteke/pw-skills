import React from 'react'

export default function DetailsCard({src,count,names}) {
  return (
    <div className='flex justify-center items-center flex-col text-3xl'>
      <img className='w-36' src={src} alt="" />
      <h1 className='my-8 font-bold'>{count}</h1>
      <h2 className='font-bold text-gray-500'>{names}</h2>
    </div>
  )
}
