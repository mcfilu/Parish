import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex flex-col w-full h-screen'>
        <div className='w-full h-full relative'>
            <Image alt="ksiadz proboszcz ogloszenia" fill objectFit='cover' src="/ogloszenia2.jpeg"/>
        </div>
        <div className='bg-white w-full flex flex-col md:flex-row px-[5vw] md:py-[2vh] pt-[0] pb-[1vh] items-start md:items-center justify-between'>
            <h1 className='text-[55px] font-header2 font-bold text-black'>Ogłoszenia Parafialne</h1>
            <div className='w-full md:w-[50%] h-full flex flex-col justify-center items-start'>
                <p className='text-black text-[1.7vh]'>Zachęcamy do zapoznania się z najnowszymi biuletynami tak aby być na bieząco z wydarzeniami w parafii.</p>
                <button className='bg-dark text-white px-4 py-3 mt-[1vh]'>Zobacz Więcej</button>
            </div>
        </div>
    </div>
  )
}

export default Header