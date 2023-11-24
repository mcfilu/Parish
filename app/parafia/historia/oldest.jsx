import React from 'react'

const Oldest = () => {
  return (
    <div className='w-screen flex flex-row px-[5vw] my-[5vh]'>
        <div className='w-1/2 h-full pr-[5vw]'>
            <h2 className='text-[40px] font-header2'>Najstarsza Parafia Na Woli</h2>
            <p className='mt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>
        <div className='w-1/2 h-full '>
            
            <div className='w-full flex flex-row justify-between'>
                <div className='mt-[2vh]'>
                    <p className='text-[40px] font-header2'>1738</p>
                    <p className='text-[40px] font-header2'>Rok Zalozenia</p>
                </div>
                <div>
                    <p className='text-[40px] font-header2'>15</p>
                    <p className='text-[40px] font-header2'>Liczba Proboszczy</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Oldest