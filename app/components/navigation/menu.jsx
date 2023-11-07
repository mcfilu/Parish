import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className={`w-screen h-screen bg-dark text-white px-[10vw] pb-[10vh]`}>
        <div className='flex flex-col'>
            <div className={`flex flex-row justify-end h-auto mt-[5vh] mb-[10vh]`}>
                <p className='flex align-center justify-center mr-[10px]'>ZAMKNIJ</p>
                <Image src="/close.png" alt="close icon"  width={20} height={10} objectFit='contain'></Image>
            </div>
            <div className={`flex flex-row`}>
                <div className={`flex flex-col w-[35%]  text-[20px]`}>
                    <div className={`flex relative h-[35vh] w-[60%] mb-[5vh] `}>
                        <Image src="/kosciol_logo.png" alt="logo kosciola" fill={true} objectFit='contain' className='align-left' ></Image>
                    </div>
                    <h3 className='font-bold text-[30px]'>Adres</h3>
                    <p>Chłodna 9</p>
                    <p>00-891 Warszawa</p>
                    <h2 className='font-bold text-[30px] mt-[3vh] '>Kontakt</h2>
                    <p>parafiachlodna@gmail.com</p>
                    <p>22 620 37 47</p>
                </div>
                <div className={`flex flex-col w-[65%] text-white text-[30px] justify-center ml-[10%]`}>
                    <Link href="" className='text-4'>Nabozenstwa</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="">Aktualności</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="">Parafia</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="">Sakramenty</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="">Wspólnoty</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Menu