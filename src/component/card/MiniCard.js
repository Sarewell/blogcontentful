import React from 'react'

export default function MiniCard(img, title, extract) {
  return (
    <div>
      
      <img src={img} alt={title} className='w-[20px] rounded-xl h-[20px]' />
      <p className='font-bold'>{title}</p>
      <p>{extract}</p>
    </div>
  )
}
