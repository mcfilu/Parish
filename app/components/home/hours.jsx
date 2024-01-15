import React from 'react'
import Image from 'next/image'
const Hours = () => {
  return (
    <div className='flex flex-col w-full h-[65vh] relative justify-center'>
        <Image src="/godziny.jpeg" alt="tlo dziecko" fill={true} objectFit='cover'/>
        <div className="absolute ml-[50%] w-[40%] h-full text-white py-[5vh] flex flex-col justify-center">
            <div className='w-full h-[15%] flex flex-row '>
                <div className={`relative w-[10%] h-full`}>
                    <Image alt="ikonka kosciol" src="/icon-1.png" fill={true} objectFit='contain'></Image>
                </div>
                <h2 className='text-white text-[5.5vh] ml-[2vw] font-header2'>Porządek Liturgiczny</h2>
            </div>
            <div className='flex flex-row mt-[5vh] text-white'>
                <div className='mx-[1vw] border-r-[2px]'>
                    <h4 className='font-bold text-[2.3vh]'>Niedziele i Swieta</h4>
                    <p className='mt-[2vh]'>7:00</p>
                    <p>8:30</p>
                    <p>10:00</p>
                    <p>11:30</p>
                    <p>13:00</p>
                    <p>18:00</p>
                </div>

                <div className='mx-[1vw] border-r-[2px]'>
                    <h4 className='font-bold text-[2.3vh]'>Dni Powszednie</h4>
                    <p className='mt-[2vh]'>6:30</p>
                    <p>8:00</p>
                    <p>9:00</p>
                    <p>18:00</p>
                </div>
                
                <div className='mx-[1vw]'>
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