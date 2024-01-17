import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='w-full px-[5vw] bg-white py-[5vh]'>
        <div className='w-full h-[50vh] relative'>
            <Image fill objectFit='cover' alt="kosciol tlo" src="/kosciol2.jpeg" />
        </div>
    </div>
  )
}

export default Banner