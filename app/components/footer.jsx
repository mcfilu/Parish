import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={`bg-dark w-screen h-auto text-white flex flex-col pt-[4vh] pb-[2vh] px-[5vw]`}>
        <div className='flex flex-row'>
        <div className={`flex flex-col w-[15%]`}>
            <div className={`w-full h-full relative`}>
                <Image alt="logo kosciola" src="/kosciol_logo.png" fill={true}></Image>
            
            </div>
            
        </div>
        <div className={`w-[20%] flex flex-col ml-[3vw]`}>
                    <h3 className='font-bold text-[20px]'>Adres</h3>
                    <p>Chłodna 9</p>
                    <p>00-891 Warszawa</p>
                    <h2 className='font-bold text-[20px] mt-[3vh] '>Kontakt</h2>
                    <p>parafiachlodna@gmail.com</p>
                    <p>22 620 37 47</p>
            
        </div>
        <div className='flex flex-col w-[20%] mx-[2vw] border-r-[2px]'>
            <h3 className='font-bold text-[20px]'>Msze Swiete</h3>
            <div className='w-full flex flex-row mt-[2vh]'>
                <div>
                    <h4>Dni Powszednie</h4>
                    <p className='mt-[2vh]'>6:30</p>
                    <p>8:00</p>
                    <p>9:00</p>
                    <p>18:00</p>
                </div>
                <div className='ml-[2vw]'>
                    <h4>Niedziele i Swieta</h4>
                    <p className='mt-[2vh]'>7:00</p>
                    <p>8:30</p>
                    <p>10:00</p>
                    <p>11:30</p>
                    <p>13:00</p>
                    <p>18:00</p>
                </div>
            </div>
        </div>
        <div className='w-[20%] mx-[2vw] flex flex-col border-r-[2px]'>
            <h3 className='font-bold text-[20px]'>Spowiedz</h3>
            <p className='mt-[2vh]'>Dni tygodnia: 30min przed msza</p>
            <p className='mt-[2vh]'>Sobota: 16:00-18:00 w dolnym kosciele</p>
            <p className='mt-[2vh]'>Niedziela: 8:00-13:00 w dolnym kosciele</p>
        </div>
        <div className='w-[10vw] h-auto relative flex flex-col ml-[2vw]'>
                <div className='relative w-[30%] h-full'>
                    <Image src="/instagram.png" alt="ikonka instagrama" fill={true} objectFit='contain'></Image>
                </div>
                <div className='relative w-[30%] h-full'>
                    <Image src="/youtube.png" alt="ikonka youtube" fill={true} objectFit='contain'></Image>
                </div>
                <div className='relative w-[30%] h-full'>
                    <Image src="/facebook.png" alt="ikonka facebooka" fill={true} objectFit='contain'></Image>
                </div>
            </div>
            </div>
            <div className=' mt-[1vh] w-full flex flex-col'>
                <p className='text-center'>© 2023 – Wszelkie prawa zastrzezone</p>
                <p className='mt-[1vh] text-center'>Developed by - Filip Olszewski</p>
            </div>
    </div>
  )
}
export default Footer
