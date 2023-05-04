
import React from 'react'
import Link from 'next/link'


export default function Card({img, title, extract}) {
  
  return (
    <div className=''>
      
      <img src={img} alt={title} className=' w-full h-64 rounded-sm' />
      <div className=''>
        <p className='font-bold'>{title}</p>
        <p className=''>{extract}</p>
      </div>
      
    </div>
  )
}
