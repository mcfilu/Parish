import React from 'react'
import Image from 'next/image'

const Wspolnoty = () => {
  return (
    <div className='w-screen h-[50vh] flex relative'>
        <Image src="/wspolnoty.jpeg" alt="tlo wspolnoty" fill={true} /> 
        <div className='z-10 w-screen h-full py-[8vh] px-[8vw] flex flex-col justify-center items-center'>
            <h2 className='text-white text-[30px]'>Poznaj Nasze Wspolnoty Parafialne</h2>
            <p className='text-white mt-[3vh]'>W naszym kosciel istnieje nie od dzis wiele roznych zgromadzen ktore zajmuja sie blah blah przerozny;mji rzeczami. Juz dzis mozesz dolaczyc i sie zaangazowac.</p>
            <div className='mt-[5vh] flex flex-row justify-center'>
                <div className='flex h-[15vh] w-[15vh] bg-white bg-opacity-40 flex-col justify-center items-center mx-[1vw]'>
                    <div className='h-[60%] relative w-[50%]'>
                        <Image src="/handshake.png" alt="ikonka wspolnoty" fill objectFit='contain'/>
                    </div>
                    <p className='text-center text-bold'>CARITAS</p>
                </div>
                <div className='flex h-[15vh] w-[15vh] bg-white flex-col justify-center items-center mx-[1vw]'>
                    <div className='h-[60%] relative w-[50%]'>
                        <Image src="/handshake.png" alt="ikonka wspolnoty" fill objectFit='contain'/>
                    </div>
                    <p className='text-center text-bold'>SCHOLA</p>
                </div>
                <div className='flex h-[15vh] w-[15vh] bg-white flex-col justify-center items-center mx-[1vw]'>
                    <div className='h-[60%] relative w-[50%]'>
                        <Image src="/handshake.png" alt="ikonka wspolnoty" fill objectFit='contain'/>
                    </div>
                    <p className='text-center text-bold'>SCHOLA DZIECECA</p>
                </div>
                <div className='flex h-[15vh] w-[15vh] bg-white flex-col justify-center items-center mx-[1vw]'>
                    <div className='h-[60%] relative w-[50%]'>
                        <Image src="/handshake.png" alt="ikonka wspolnoty" fill objectFit='contain'/>
                    </div>
                    <p className='text-center text-bold'>MINISTRANCI</p>
                </div>
                <div className='flex h-[15vh] w-[15vh] bg-white flex-col justify-center items-center mx-[1vw]'>
                    <div className='h-[60%] relative w-[50%]'>
                        <Image src="/handshake.png" alt="ikonka wspolnoty" fill objectFit='contain'/>
                    </div>
                    <p className='text-center text-bold'>RADA PARAFIALNA</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wspolnoty