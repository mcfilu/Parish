'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

const Citations = () => {
    const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="flex w-screen h-[60vh] justify-center items-center relative flex flex-col">
        <Image src="/back_parafia.jpeg" alt="tlo kosciola" fill={true} objectFit='cover'/>
        <div className='border-[2px] h-auto w-[40%] z-10 flex flex-col justify-center items-center p-[5vh]'>
            <div className='relative h-[3vh] w-[10%] mb-[3vh]'>
                <Image alt="ikonka cytat" src="/quotation-marks.png" fill={true} objectFit='contain'></Image>
            </div>
            <p className='text-white text-center'>Cursus lorem, ae iacuis metus sem vitae purus. Vivamus Suscipit velit nee maximus interdum</p>
            <p className='text-gold1 text-center mt-[2vh]'>FRANKLIN DAVE</p>
        </div>
        <div className="flex items-center space-x-2 z-10 mt-[8vh]">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full cursor-pointer ${
            index === activeIndex
              ? 'bg-gold1' // Active dot is gold background
              : 'border border-gold1' // Inactive dots have gold border
          }`}
          onClick={() => handleDotClick(index)}
        ></div>
      ))}
    </div>
    </div> 
  )
}

export default Citations