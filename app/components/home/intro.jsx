import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Intro = () => {
  return (
    <div className='flex flex-row w-screen h-[70vh] bg-white'>
        <div className='flex w-1/2 h-full flex-col justify-center pl-[5vw]'>
            <p>O Parafii</p>
            <h2 className='text-[40px] mt-[3vh]'>Kosciol ktory kocha Boga i ludzi</h2>
            <p className='mt-[3vh]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content her,</p>
            <p className='mt-[1vh]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content her,</p>
            <Link href="/aktualnosci/kazania"><button className='p-4  bg-dark text-white mt-[5vh] w-[10vw]'>Zobacz Wiecej</button></Link>
        </div>
        <div className='flex w-1/2 h-full relative'>
            <Image src="/introbg2.png" href="kontru kosciola" objectFit="cover" fill />
        </div>
    </div>
  )
}

export default Intro