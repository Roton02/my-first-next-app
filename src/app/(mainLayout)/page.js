import Image from 'next/image'
import React from 'react'
import romadanImg from '@/assets/happy-ramadan-happy-eid-crescent-of-ramadan-islamic-moon-ramadan-mubarak-and-ramadan-kareem-concept-photo.jpg'

export const metadata = {
  title: 'Home Page ',
  description: 'this is home description ',
}

const HomePage = () => {
  return (
    <div>
      <Image
        src='https://static.vecteezy.com/system/resources/thumbnails/021/058/855/small/happy-ramadan-happy-eid-crescent-of-ramadan-islamic-moon-ramadan-mubarak-and-ramadan-kareem-concept-photo.jpg'
        alt='image '
        width={500}
        height={500}
      ></Image>
      <Image src={romadanImg} alt='image ' width={500} height={500}></Image>
    </div>
  )
}

export default HomePage
