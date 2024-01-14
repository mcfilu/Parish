import React from 'react'
import Image from 'next/image'

const Hours = () => {
  return (
    <div className='w-full h-[60vh] px-[5vw] flex flex-row bg-white my-[5vh]'>
        <div className='w-1/2 h-full relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' alt="Godziny Otwarcia Tlo" src="/Image.png"/>
        </div>
        <div className='w-1/2 h-full flex flex-col justify-center'>
            <h2 className='text-[50px] font-header2'>Godziny Otwarcia</h2>
            <p className='mt-[3vh]'>Czynna w poniedziałek, wtorek, czwartek i piątek
w godzinach 16:00 - 17:30 (w środę nieczynna)</p>
            <p className='mt-[1vh]'>W okresie wakacyjnym (lipiec-sierpień)
Kancelaria jest czynna: we wtorek i w piątek
w godzinach 16:00 - 17:30</p>
        </div>
    </div>
  )
}

export default Hours