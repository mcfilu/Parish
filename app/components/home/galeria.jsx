import React from 'react'
import Image from 'next/image'
const Galeria = () => {
  return (
    <div className='flex w-screen h-[65vh] flex flex-row'>
        <div className='flex flex-col w-[50%] h-full'>
            <div className={`flex relative h-[50%] w-full`}>
                <Image className="p-1" src="/galeria1.jpeg" alt="zdjecie galeria" objectFit='cover' fill={true} />
            </div>
            <div className='w-full h-[50%] flex flex-row '>
                <div className={`flex relative h-full w-[50%]`}>
                    <Image className="p-1" src="/galeria2.jpeg" alt="zdjecie galeria" objectFit='cover' fill={true} />
                </div>
                <div className={`flex relative h-full w-[50%] p-[5vh]`}>
                    <Image className="p-1" src="/galeria3.jpeg" alt="zdjecie galeria" objectFit='cover' fill={true} />
                </div>
            </div>
        </div>
        <div className='flex flex-col w-[50%] h-full'>
            <div className='flex h-[50%] w-full flex flex-row'>
                <div className={`flex relative h-full w-[50%]`}>
                    <Image className="p-1" src="/galeria4.jpeg" alt="zdjecie galeria" objectFit='cover' fill={true} />
                </div>
                <div className={`flex relative h-full w-[50%]`}>
                    <Image className="p-1" src="/galeria5.jpeg" alt="zdjecie galeria" objectFit='cover' fill={true} />
                </div>
            </div>
            <div className={`flex relative h-[50%] w-full`}>
                <Image className="p-1" src="/galeria6.jpeg" alt="zdjecie galeria" objectFit='cover' fill={true} />
            </div>
        </div>
    </div>
  )
}

export default Galeria