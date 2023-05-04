import Link from 'next/link'
import React from 'react'
import Hero from '../hero/Hero'


export default function NavBar() {
  return (
    <div className='hero'>
      <div className='flex justify-between  px-[10%] bg-transparent '>
      <h1 className='font-black text-white'>Read<span className='text-yellow-400'>it</span>.</h1>
        <ul className='flex justify-end gap-5 text-white'>
            <Link href='/'>
              <li>home</li>
            </Link>
            <Link href='/about'>
              <li>about</li>
            </Link>
            <Link href='/contact'>
              <li>contact</li>
            </Link>
            <Link href='/post/23'>
              <li>post</li>
            </Link>
            
        </ul>
        
    </div>
    <Hero/>
    </div>
    
  )
}
