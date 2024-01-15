import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex flex-col w-full h-screen'>
        <div className='w-full h-full relative'>
            <Image alt="ksiadz proboszcz kazanie" fill objectFit='cover' src="/nabozenstwa5.jpeg"/>
        </div>
        <div className='bg-white w-full flex flex-row px-[5vw] py-[2vh] items-center justify-between'>
            <h1 className='text-[55px] font-heade2 font-bold'>Nabożeństwa</h1>
            <div className='w-[50%] h-full flex flex-col justify-center items-start'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                <button className='bg-dark text-white px-4 py-3 mt-[1vh]'>Zobacz Wiecej</button>
            </div>
        </div>
    </div>
  )
}

export default Header