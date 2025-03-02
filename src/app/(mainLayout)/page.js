import Image from 'next/image'
import React from 'react'
import romadanImg from '@/assets/happy-ramadan-happy-eid-crescent-of-ramadan-islamic-moon-ramadan-mubarak-and-ramadan-kareem-concept-photo.jpg'

export const metadata = {
  title: 'Home Page ',
  description: 'this is home description ',
}

const HomePage = async () => {
  const res = await fetch('http://localhost:3004/products')
  const data = await res.json()
  console.log(data)
  return (
    <div>
      <h1>Home Page</h1>
      {/* <Image src={romadanImg} alt='happy ramadan' width={500} height={300} /> */}
      <ul className='text-white'>
        {data.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
