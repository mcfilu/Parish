import React from 'react'
import Image from 'next/image'

const Episodes = () => {
  return (
    <div className='w-screen flex flex-col py-[10vh]'>
        <div className='flex flex-row w-full space-x-4 h-[5vh] items-center justify-center '>
            <button className='bg-dark text-white p-4'>
                2023
            </button>
            <button className='border-1 p-4'>
                2022
            </button>
            <button className='border-1 p-4'>
                2021
            </button>
        </div>
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='w-[60%] h-[40vh] flex flex-row'>
                <div className='flex flex-col h-full w-1/2'>
                    <h2>Kazanie</h2>
                    <h2>19.10.2023</h2>
                    <p>Lorem Ipsum dolores et </p>
                    <button className='p-4 bg-dark text-white'>Obejrzyj</button>
                </div>
                <div className='h-full w-1/2 relative'>
                    <Image alt='zdjecie kazanie'></Image>
                </div>
            </div>
            <div className='w-[60%] h-[40vh] '>

            </div>
        </div>
    </div>
  )
}

export default Episodes