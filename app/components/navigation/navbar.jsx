import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={`fixed top-0 left-0 z-10 flex flex-row w-screen items-center justify-between px-[5vw] h-[15vh] bg-opacity-100 pt-[2vh]`}>
        <div className={` flex relative h-full w-[20%]`}>
            <Image src="/kosciol_logo.png"  alt="opis parafii" fill={true} objectFit='contain'/>
        </div>
        
        <div className='flex flex-row  h-[20%] '>
            <Image src="/more_white.png" alt="close icon"  width={20} height={30} ></Image>
            <p className='flex ml-[10px] text-white '>MENU</p>
        </div>
    </div>
  )
}

export default Navbar