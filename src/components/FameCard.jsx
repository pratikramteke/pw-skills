import React from 'react'

export default function FameCard({image,name,company,bio,link}) {
  return (
    <div className='shadow-xl text-center rounded-lg border m-10  flex flex-col gap-6 justify-center items-center px-20'>
      <img width={100} className='rounded-full' src={image} alt="" />
      <h3 className='font-bold text-xl'>{name}</h3>
      <p>{company}</p>
      <h4 className='text-gray-500'>{bio}</h4>
      <img src={link} alt="" />
    </div>
  )
}
