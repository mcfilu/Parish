import React from 'react'
import Image from 'next/image'

const News = () => {
  return (
    <div className='flex flex-col w-screen h-screen items-center justify-center'>
        <h2>Aktualnosci</h2>
        <div className='flex flex-col '>
            <div className='flex flex-row h-[30vh] w-[60vw]'>
                <div className='w-1/2 h-full relative '>
                    <Image/>
                </div>
                <div>

                </div>
            </div>
            <div className='flex flex-row h-[30vh] w-[60vw]'>
                <div>

                </div>
                <div className='w-1/2 h-full relative '>
                    <Image alt="tlo aktualnosci"  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default News