import React from 'react'
import Image from 'next/image'

const Intro = () => {
  return (
    <div className='w-screen flex flex-row h-[80vh]'>
        <div className='flex w-1/2 h-full relative'>
            <Image alt="zdjecie schola" src="/schola4.jpeg" fill objectFit='cover'/>
        </div>
        <div>
            <h3></h3>
            <p></p>
            <p></p>
            <p></p>
        </div>
    </div>
  )
}

export default Intro