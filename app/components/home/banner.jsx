import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='flex flex-row w-screen h-[25vh]'>
        <div className='w-1/5 h-full relative'>
            <Image src="/katolik.png" alt="logo serwis katolicki" fill objectFit='contain'/>
        </div>
        <div className='w-1/5 h-full relative'>
            <Image src="/deon.png" alt="logo serwis katolicki" fill objectFit='contain'/>
        </div>
        <div className='w-1/5 h-full relative'>
            <Image src="/ekai.png" alt="logo serwis katolicki" fill objectFit='contain'/>
        </div>
        <div className='w-1/5 h-full relative'>
            <Image src="/radio_maryja.png" alt="logo serwis katolicki" fill objectFit='contain'/>
        </div>
    </div>
  )
}

export default Banner