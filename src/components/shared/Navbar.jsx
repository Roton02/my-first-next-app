import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between py-10 max-w-7xl mx-auto '>
      <div>
        <Link href='/'>Home</Link>
      </div>
      <div className='space-x-6'>
        <Link href='/products'>Products</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
