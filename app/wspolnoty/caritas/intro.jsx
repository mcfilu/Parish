import React from 'react'
import Image from 'next/image'

const Intro = () => {
  return (
    <div className='w-screen flex flex-row h-[90vh] px-[5vw] py-[10vh] bg-white'>
        <div className='flex w-1/2 h-full relative'>
            <Image className="pr-[2vw]" alt="zdjecie schola" src="/schola4.jpeg" fill objectFit='cover'/>
        </div>
        <div className='pl-[2vw] flex flex-col justify-center w-1/2'>
            <h3 className='text-[40px] font-header2'>Tytul do Dodania</h3>
            <p className='mt-[4vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <p className='mt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <p className='mt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>
    </div>
  )
}

export default Intro