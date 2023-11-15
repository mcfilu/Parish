import React from 'react'
import Image from 'next/image'
const Proboszcz = () => {
  return (
    <div className='w-screen h-[60vh] flex flex-row bg-white'>
        <div className='flex flex-col w-[50%] h-full justify-center pl-[20%]'>
            <h1 className='text-[30px] text-bold'>Leszek Slipek</h1>
            <h2 className='text-[25px]'>Ksiądz Proboszcz</h2>
            <p className='mt-[5vh]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here,</p>
            <p className='mt-[2vh]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content her,</p>
            <div className='h-[20%] w-[30%] relative'>
                <Image alt="podpis" src="/signing.png" fill={true} objectFit='contain'/>
            </div>
        </div>
        <div className='w-[30%] h-[85%] relative ml-[10%] my-auto'>
            <Image src="/proboszcz1.jpeg" alt="zdjecie proboszcza" fill={true} objectFit='cover'></Image>
        </div>
    </div>
  )
}

export default Proboszcz