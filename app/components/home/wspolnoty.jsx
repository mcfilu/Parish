import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Wspolnoty = () => {
  return (
    <div className='w-full h-[50vh] flex relative'>
        <Image src="/wspolnoty.jpeg" alt="tlo wspolnoty" fill={true} /> 
        <div className='z-10 w-full h-full py-[8vh] px-[8vw] flex flex-col justify-center items-center'>
            <h2 className='text-white text-[30px]'>Poznaj Nasze Wspolnoty Parafialne</h2>
            <p className='text-white mt-[3vh]'>W naszym kosciel istnieje nie od dzis wiele roznych zgromadzen ktore zajmuja sie blah blah przerozny;mji rzeczami. Juz dzis mozesz dolaczyc i sie zaangazowac.</p>
            <div className='mt-[5vh] flex flex-row justify-center'>
                <Link href="/wspolnoty/caritas">
                <div className='flex h-[15vh] w-[15vh] hover:bg-white hover:bg-opacity-30 flex-col justify-center items-center mx-[1vw]'>
                    <div className='h-[60%] relative w-[50%]'>
                        <Image src="/handshake.png" alt="ikonka wspolnoty" fill objectFit='contain'/>
                    </div>
                    <p className='text-center text-bold'>CARITAS</p>
                </div>
                </Link>
                <Link href="/wspolnoty/schola">
                <div className='flex h-[15vh] w-[15vh] hover:bg-white hover:bg-opacity-30 flex-col justify-center items-center mx-[1vw]'>
                    <div className='h-[60%] relative w-[50%]'>
                        <Image src="/handshake.png" alt="ikonka wspolnoty" fill objectFit='contain'/>
                    </div>
                    <p className='text-center text-bold '>SCHOLA</p>
                </div>
                </Link>
                <Link href="/wspolnoty/schola-dziecieca">
                <div className='flex h-[15vh] w-[15vh] hover:bg-white hover:bg-opacity-30 flex-col justify-center items-center mx-[1vw]'>
                    <div className='h-[60%] relative w-[50%]'>
                        <Image src="/handshake.png" alt="ikonka wspolnoty" fill objectFit='contain'/>
                    </div>
                    <p className='text-center text-bold'>SCHOLA DZIECECA</p>
                </div>
                </Link>
                <Link href="/wspolnoty/ministranci">
                <div className='flex h-[15vh] w-[15vh] hover:bg-white hover:bg-opacity-30 flex-col justify-center items-center mx-[1vw]'>
                    <div className='h-[60%] relative w-[50%]'>
                        <Image src="/handshake.png" alt="ikonka wspolnoty" fill objectFit='contain'/>
                    </div>
                    <p className='text-center text-bold'>MINISTRANCI</p>
                </div>
                </Link>
                <Link href="/wspolnoty/rada">
                <div className='flex h-[15vh] w-[15vh] hover:bg-white hover:bg-opacity-30 flex-col justify-center items-center mx-[1vw]'>
                    <div className='h-[60%] relative w-[50%]'>
                        <Image src="/handshake.png" alt="ikonka wspolnoty" fill objectFit='contain'/>
                    </div>
                    <p className='text-center text-bold'>RADA PARAFIALNA</p>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Wspolnoty