import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Kazania = () => {
  return (
    <div className='flex w-full  flex-row bg-black'>
        <div className='w-[50%] flex relative bg-black'>
            <Image className='pr-[5vw] ' alt='tlo kazania' fill objectFit='cover' src="/proboszcz2.jpeg"/>
        </div>
        <div className='flex flex-col w-1/2 h-full justify-center pr-[10vw] text-white bg-black my-[10vh]'>
            <h2 className='text-[5.5vh] font-header2'>Kazania Proboszcza</h2>
            <p className='mt-[3vh]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content her,</p>
            <p className='mt-[1vh]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content her,</p>
            <p className='mt-[1vh]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content her,</p>
            <Link href="/aktualnosci/kazania"><button className='p-4 bg-dark text-white mt-[5vh]'>Zobacz Więcej</button></Link>
        </div>
    </div>
  )
}

export default Kazania