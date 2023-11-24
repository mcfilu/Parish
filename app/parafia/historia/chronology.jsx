import React from 'react'
import Image from 'next/image'

const Chronology = () => {
  return (
    <div className='w-screen flex flex-col'>
        <div className='flex flex-row w-full h-[50vh]'>
            <div className='w-2/5 h-full relative'>
                <Image fill objectFit='cover' alt="zdjecie historyczne" src="/"/>
            </div>
            <div className='flex flex-row'>
                <span className='rounded-full '></span>
                <div className='h-full w-[0.5vw border-black border-1'></div>
            </div>

            <div className='w-2/5 h-full flex flex-col'>
                <h2 className='text-[40px] font-header2'>1948</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
        </div>
    </div>
  )
}

export default Chronology