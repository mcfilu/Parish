import React from 'react'
import Image from 'next/image'

const Places = () => {
  return (
    <div className='w-screen flex flex-col px-[5vw] my-[5vh] bg-white'>
        <div className='flex flex-row w-full h-[50vh]'>
            <div className='w-1/2 h-full relative'>
                <Image className='pr-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/dzisiaj1.jpeg"/>
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[40px] font-header2'></h2>
                
            </div>
        </div>
    </div>
  )
}

export default Places