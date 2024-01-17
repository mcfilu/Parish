import React from 'react'
import Image from 'next/image'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Chronology = () => {
  return (
    <div className='w-full flex flex-col px-[5vw] my-[5vh]'>
        <div className='flex flex-row w-full h-[60vh] justify-between'>
            <div className='w-2/5 h-full relative '>
                <Image className='py-[1vh] pb-[7vh]' fill objectFit='cover' alt="zdjecie historyczne" src="/Historia1.png"/>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <i className='fa-solid fa-circle my-[2vh]'></i>
                <div className='h-full border-black border-l-2'></div>
            </div>

            <div className='w-2/5 h-full flex flex-col'>
                <h2 className='text-[4.5vh] font-header2'>1948</h2>
                <p className='mt-[3vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p className='mt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
        </div>

        <div className='flex flex-row w-full h-[60vh] justify-between'>
            <div className='w-2/5 h-full flex flex-col'>
                <h2 className='text-[4.5vh] font-header2'>1948</h2>
                <p className='mt-[3vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p className='mt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <i className='fa-solid fa-circle my-[2vh]'></i>
                <div className='h-full border-black border-l-2'></div>
            </div>
            <div className='w-2/5 h-full relative '>
                <Image className='py-[1vh] pb-[7vh]' fill objectFit='cover' alt="zdjecie historyczne" src="/Historia1.png"/>
            </div>
            
        </div>

        <div className='flex flex-row w-full h-[60vh] justify-between'>
            <div className='w-2/5 h-full relative '>
                <Image className='py-[1vh] pb-[7vh]' fill objectFit='cover' alt="zdjecie historyczne" src="/Historia1.png"/>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <i className='fa-solid fa-circle my-[2vh]'></i>
                <div className='h-full border-black border-l-2'></div>
            </div>

            <div className='w-2/5 h-full flex flex-col'>
                <h2 className='text-[4.5vh] font-header2'>1948</h2>
                <p className='mt-[3vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p className='mt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
        </div>
        <div className='flex flex-row w-full h-[60vh] justify-between'>
            <div className='w-2/5 h-full flex flex-col'>
                <h2 className='text-[4.5vh] font-header2'>1948</h2>
                <p className='mt-[3vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p className='mt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <i className='fa-solid fa-circle my-[2vh]'></i>
                <div className='h-full border-black border-l-2'></div>
            </div>
            <div className='w-2/5 h-full relative '>
                <Image className='py-[1vh] pb-[7vh]' fill objectFit='cover' alt="zdjecie historyczne" src="/Historia1.png"/>
            </div>
            
        </div>
    </div>
  )
}

export default Chronology