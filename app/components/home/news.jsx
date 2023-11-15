import React from 'react'
import Image from 'next/image'

const News = () => {
  return (
    <div className='flex flex-col w-screen h-screen items-center justify-center'>
        <h2 className='text-[40px] '>Aktualnosci</h2>
        <div className='flex flex-col '>
            <div className='flex flex-row h-[30vh] w-[60vw] my-[2vh]'>
                <div className='w-[45%] h-full relative '>
                <Image alt="tlo aktualnosci" fill objectFit='cover' src="/news1.jpeg" />
                </div>
                <div className='w-[55%] px-[2vw] py-[1vh] h-full flex flex-col justify-center'>
                    <h3 className='font-bold text-[25px] mb-[1vh]'>Tytul Danej Aktualnosci</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='flex flex-row justify-between mt-[2vh] text-gold2'>
                    <a>Czytaj Wiecej</a>
                    <p>28.10.2023</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row h-[30vh] w-[60vw] my-[2vh]'>
                <div className='w-[55%] px-[2vw] py-[1vh] h-full flex flex-col justify-center'>
                    <h3 className='font-bold text-[25px] mb-[1vh]'>Tytul Danej Aktualnosci</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='flex flex-row justify-between mt-[2vh] text-gold2'>
                    <a>Czytaj Wiecej</a>
                    <p>28.10.2023</p>
                    </div>
                </div>
                <div className='w-[45%] h-full relative '>
                    <Image alt="tlo aktualnosci" fill objectFit='cover' src="/news2.jpeg" />
                </div>
            </div>
        </div>
        <button className='bg-dark text-white text-[20px] p-4'>Zobacz Wiecej</button>
    </div>
  )
}

export default News