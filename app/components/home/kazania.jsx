import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Kazania = () => {
  return (
    <div className='flex w-screen h-[60vh] flex-row bg-white'>
        <div className='w-[50%] h-full flex relative'>
            <Image className='px-[10vw] py-[5vh] ' alt='tlo kazania' fill objectFit='cover' src="/proboszcz2.jpeg"/>
        </div>
        <div className='flex flex-col w-1/2 h-full justify-center pr-[10vw]'>
            <h2 className='text-[40px]'>Kazania Proboszcza</h2>
            <p className='mt-[3vh]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content her,</p>
            <p className='mt-[1vh]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content her,</p>
            <Link href="/aktualnosci/kazania"><button className='p-4 border-4 bg-dark text-white mt-[5vh] w-[10vw]'>Zobacz Wiecej</button></Link>
        </div>
    </div>
  )
}

export default Kazania