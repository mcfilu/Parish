import React from 'react'
import Image from 'next/image'

const Proboszcz = () => {
  return (
    <div className='w-full flex flex-col bg-white px-[5vw]'>
        <div className='w-full h-[70vh] relative'>
            <Image alt="ksiadz proboszcz" src="/leszek_slipek.jpeg" fill objectFit='cover'/>
        </div>
        <div className='flex flex-row w-full justify-between mt-[5vh]'>
            <div className='min-w-[30%]'>
                <h2 className='text-[40px] font-header2'>Ks. Proboszcz</h2>
                <h2 className='text-[40px] font-header2'>Leszek Slipek</h2>
            </div>
            <div className='max-w-[40%]'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Proboszcz