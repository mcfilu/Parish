import React from 'react'
import Image from 'next/image'
const Hours = () => {
  return (
    <div className='flex flex-col w-full py-[10vh] relative justify-center'>
        <Image src="/godziny.jpeg" alt="tlo dziecko" fill={true} objectFit='cover'/>
        <div className="ml-[50%] w-[40%] h-full text-white py-[5vh] flex flex-col justify-center z-10">
            <div className='w-full flex flex-row '>
                <div className={`relative w-[10%] h-[8vh] `}>
                    <Image alt="ikonka kosciol" src="/icon-1.png" fill={true} objectFit='contain '></Image>
                </div>
                <h2 className='text-white text-[5.5vh] ml-[2vw] font-header2'>Porządek Liturgiczny</h2>
            </div>
            <div className='flex flex-row mt-[8vh] text-white'>
                <div className='pr-[1vw] border-r-[2px]'>
                    <h4 className='font-bold text-[2.3vh]'>Niedziele i Swieta</h4>
                    <p className='mt-[2vh]'>7:00</p>
                    <p>8:30</p>
                    <p>10:00</p>
                    <p>11:30</p>
                    <p>13:00</p>
                    <p>18:00</p>
                </div>

                <div className='px-[1vw]'>
                    <h4 className='font-bold text-[2.3vh]'>Dni Powszednie</h4>
                    <p className='mt-[2vh]'>6:30</p>
                    <p>8:00</p>
                    <p>9:00</p>
                    <p>18:00</p>
                </div>
                
                <div className='pl-[1vw] border-l-[2px]'>
                    <h3 className='font-bold text-[2.3vh]'>Spowiedz</h3>
                    <p className='mt-[2vh]'>Dni tygodnia: 30min przed msza</p>
                    <p className='mt-[2vh]'>Sobota: 16:00-18:00 w dolnym kosciele</p>
                    <p className='mt-[2vh]'>Niedziela: 8:00-13:00 w dolnym kosciele</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hours