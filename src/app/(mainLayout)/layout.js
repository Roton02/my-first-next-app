import Navbar from '@/components/shared/Navbar'
import React from 'react'

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className='py-10 min-h-[500px] text-center text-xl flex justify-center items-center bg-black text-cyan-50'>
        {children}
      </div>
    </div>
  )
}

export default layout
