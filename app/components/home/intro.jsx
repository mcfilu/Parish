import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Intro = () => {
  return (
    <div className='flex flex-col md:flex-row w-full bg-white'>
        <div className='flex w-full md:w-1/2 py-[10vh] flex-col justify-center pl-[5vw]'>
            <p className='text-black text-[2.5vh] font-bold'>O Parafii</p>
            <h2 className='text-[5.5vh] mt-[3vh] text-black font-header2'>Parafia Której Pragniemy</h2>
            <div className='flex md:hidden h-[30vh] w-full md:w-1/2  relative'>
              <Image src="/parafia_szkic_no_bg_2.png" href="kontru kosciola" objectFit="cover" fill />
            </div>
            <p className='text-black text-[1.8vh] mt-[3vh]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content her,</p>
            <p className='text-black text-[1.8vh] mt-[1vh]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content her,</p>
            <Link href="/parafia/kosciol"><button className='p-4  bg-dark text-white mt-[2vh] md:mt-[5vh]'>Zobacz Więcej</button></Link>
        </div>
        <div className='hidden md:flex h-[20vh] w-full w-1/2  relative'>
            <Image src="/parafia_szkic_no_bg_2.png" href="kontru kosciola" objectFit="cover" fill />
        </div>
    </div>
  )
}

export default Intro