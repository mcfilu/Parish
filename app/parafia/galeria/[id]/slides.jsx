import React from 'react'
import Image from 'next/image'
const Slides = ({id}) => {
  return (
    <div className='w-screen px-[5vw] grid grid-cols-4 gap-4 py-[5vh]'>
        <div className='w-full h-[30vh] relative'>
            <Image fill objectFit="cover" src="/galeria11.jpeg" alt="zdjecie galeria" />
        </div>
        <div className='w-full h-[30vh] relative'>
            <Image fill objectFit="cover" src="/galeria12.jpeg" alt="zdjecie galeria" />
        </div>
        <div className='w-full h-[30vh] relative'>
            <Image fill objectFit="cover" src="/galeria13.jpeg" alt="zdjecie galeria" />
        </div>
        <div className='w-full h-[30vh] relative'>
            <Image fill objectFit="cover" src="/galeria14.jpeg" alt="zdjecie galeria" />
        </div>
        <div className='w-full h-[30vh] relative'>
            <Image fill objectFit="cover" src="/galeria15.jpeg" alt="zdjecie galeria" />
        </div>
        <div className='w-full h-[30vh] relative'>
            <Image fill objectFit="cover" src="/galeria21.jpeg" alt="zdjecie galeria" />
        </div>
        <div className='w-full h-[30vh] relative'>
            <Image fill objectFit="cover" src="/galeria17.jpeg" alt="zdjecie galeria" />
        </div>
        <div className='w-full h-[30vh] relative'>
            <Image fill objectFit="cover" src="/galeria18.jpeg" alt="zdjecie galeria" />
        </div>
        <div className='w-full h-[30vh] relative'>
            <Image fill objectFit="cover" src="/galeria19.jpeg" alt="zdjecie galeria" />
        </div>
        <div className='w-full h-[30vh] relative'>
            <Image fill objectFit="cover" src="/galeria20.jpeg" alt="zdjecie galeria" />
        </div>

    </div>
  )
}

export default Slides