import React from 'react'
import Image from 'next/image'

const Pozostali = () => {
  return (
    <div className='w-full flex flex-col px-[5vw] py-[10vh] bg-white'>
        <div className='w-full  flex flex-row'>
            <div className='hidden md:flex w-1/2 h-[50vh] relative'>
                <Image className='pr-[5vw]' alt="zdjecie wikariusza" src="/ksiadz_andrzej.jpeg" fill objectFit='cover'/>
            </div>
            <div className='flex flex-col w-full md:w-1/2 justify-center md:pl-[3vw]'>
                <h2 className='text-[4.5vh] font-header2'>Ks. Andrzej Ostrowski</h2>
                <div className='flex md:hidden w-full h-[40vh] relative my-[2vh]'>
                    <Image className='' alt="zdjecie wikariusza" src="/ksiadz_andrzej.jpeg" fill objectFit='cover'/>
                </div>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </div>
        </div>
        <div className='w-full  flex flex-row mt-[5vh]'>
            
            <div className='flex flex-col w-full md:w-1/2 justify-center pr-[3vw]'>
                <h2 className='text-[4.5vh] font-header2'>Ks. Pawel Powierza</h2>
                <div className='flex md:hidden w-full h-[40vh] relative my-[2vh]'>
                    <Image className='' alt="zdjecie wikariusza" src="/ksiadz_pawel2.jpeg" fill objectFit='cover'/>
                </div>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </div>
            <div className='hidden md:flex w-1/2 h-[50vh] relative'>
                <Image className='pl-[5vw]' alt="zdjecie wikariusza" src="/ksiadz_pawel2.jpeg" fill objectFit='cover'/>
            </div>
        </div>
        <div className='w-full  flex flex-row mt-[5vh]'>
            <div className='hidden md:flex w-1/2 h-[50vh] relative'>
                <Image className='pr-[5vw]' alt="zdjecie wikariusza" src="/ksiadz_zbigniew.jpeg" fill objectFit='cover'/>
            </div>
            <div className='flex flex-col w-full md:w-1/2 justify-center md:pl-[3vw]'>
                <h2 className='text-[4.5vh] font-header2'>Ks. Zbigniew Badowski</h2>
                <div className='flex md:hidden w-full h-[40vh] relative my-[2vh]'>
                    <Image className='' alt="zdjecie wikariusza" src="/ksiadz_zbigniew.jpeg" fill objectFit='cover'/>
                </div>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </div>
        </div>
    </div>
  )
}

export default Pozostali