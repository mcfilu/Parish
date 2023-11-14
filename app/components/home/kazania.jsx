import React from 'react'
import Image from 'next/image'

const Kazania = () => {
  return (
    <div className='flex w-screen h-[60vh] flex-row '>
        <div className='w-[50%] h-full flex relative'>
            <Image className='px-[10vw] py-[5vh] ' alt='tlo kazania' fill objectFit='cover' src="/proboszcz2.jpeg"/>
        </div>
        <div className='flex flex-col w-1/2 h-full justify-center'>
            <h2 className='text-[40px]'>Kazania Proboszcza</h2>
            <p className='mt-[3vh]'>Zainteresuj sie lorem ipsum dolores et </p>
            <p className='mt-[1vh]'>Zainteresuj sie lorem ipsum dolores et </p>
            <button className='p-4 border-4 bg-dark text-white mt-[5vh] w-[10vw]'>Zobacz Wiecej</button>
        </div>
    </div>
  )
}

export default Kazania