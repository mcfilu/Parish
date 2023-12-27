import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Sakramenty = () => {
  return (
    <div className='flex flex-col w-screen pb-[5vh] bg-white'>
        <h2 className='text-[40px] text-center my-[5vh]'>Sakramenty</h2>
        <div className='flex flex-col w-screen '>
            <div className='flex flex-row h-[30vh] w-full justify-center'>
                <Link href="/sakramenty/chrzest">
                <div className='flex flex-col h-full w-[17vw] mx-[5vw] border-4 border-white hover:border-black p-1  '>
                    <div className='w-full h-[35%] relative'>
                        <Image alt="ikonka " fill objectFit="contain" src="/baptism.png"/>
                    </div>
                    <h3 className='text-[20px] text-center mt-[2vh] '>Chrzest Swiety</h3>
                    <p className='text-center mt-[1vh]'>Jest to sakrament, w którym ciężko chory otrzymuje przez namaszczenie olejem św. i modlitwę kapłana szczególne łaski, ulgę w cierpieniu, a niekiedy przywrócenie zdrowia.</p>
                </div>
                </Link>
                <Link href="/sakramenty/komunia">
                <div className='flex flex-col h-full w-[17vw] mx-[5vw] border-4 border-white hover:border-black p-1 '>
                    <div className='w-full h-[35%] relative'>
                        <Image alt="ikonka " fill objectFit="contain" src="/communion.png"/>
                    </div>
                    <h3 className='text-[20px] text-center mt-[2vh]'>Eucharystia</h3>
                    <p className='text-center mt-[1vh] '>Jest to sakrament, w którym ciężko chory otrzymuje przez namaszczenie olejem św. i modlitwę kapłana szczególne łaski, ulgę w cierpieniu, a niekiedy przywrócenie zdrowia.</p>
                </div>
                </Link>
                <Link href="/sakramenty/bierzmowanie">
                <div className='flex flex-col h-full w-[17vw] mx-[5vw] border-4 border-white hover:border-black p-1 '>
                    <div className='w-full h-[35%] relative'>
                        <Image alt="ikonka " fill objectFit="contain" src="/bierzmowanie.png"/>
                    </div>
                    <h3 className='text-[20px] text-center mt-[2vh]'>Bierzmowanie</h3>
                    <p className='text-center mt-[1vh] '>Jest to sakrament, w którym ciężko chory otrzymuje przez namaszczenie olejem św. i modlitwę kapłana szczególne łaski, ulgę w cierpieniu, a niekiedy przywrócenie zdrowia.</p>
                </div>
                </Link>
            </div>
            <div className='flex flex-row h-[30vh] w-full justify-center'>
                <Link href="/sakramenty/pokuta">
                <div className='flex flex-col h-full w-[17vw] mx-[5vw] border-4 border-white hover:border-black p-1 '>
                    <div className='w-full h-[35%] relative'>
                        <Image alt="ikonka " fill objectFit="contain" src="/contrition.png"/>
                    </div>
                    <h3 className='text-[20px] text-center mt-[2vh]'>Pokuta</h3>
                    <p className='text-center mt-[1vh] '>Jest to sakrament, w którym ciężko chory otrzymuje przez namaszczenie olejem św. i modlitwę kapłana szczególne łaski, ulgę w cierpieniu, a niekiedy przywrócenie zdrowia.</p>
                </div>
                </Link>
                <Link href="/sakramenty/malzenstwo">
                <div className='flex flex-col h-full w-[17vw] mx-[5vw] border-4 border-white hover:border-black p-1 '>
                    <div className='w-full h-[35%] relative'>
                        <Image alt="ikonka " fill objectFit="contain" src="/wedding-rings.png"/>
                    </div>
                    <h3 className='text-[20px] text-center mt-[2vh]'>Malzenstwo</h3>
                    <p className='text-center mt-[1vh] '>Jest to sakrament, w którym ciężko chory otrzymuje przez namaszczenie olejem św. i modlitwę kapłana szczególne łaski, ulgę w cierpieniu, a niekiedy przywrócenie zdrowia.</p>
                </div>
                </Link>
                {/* <Link href="/sakramenty/kaplanstwo">
                <div className='flex flex-col h-full w-[17vw] mx-[5vw] border-4 border-white hover:border-black p-1 '>
                    <div className='w-full h-[35%] relative'>
                        <Image alt="ikonka " fill objectFit="contain" src="/pope.png"/>
                    </div>
                    <h3 className='text-[20px] text-center mt-[2vh]'>Kaplanstwo</h3>
                    <p className='text-center mt-[1vh] '>Jest to sakrament, w którym ciężko chory otrzymuje przez namaszczenie olejem św. i modlitwę kapłana szczególne łaski, ulgę w cierpieniu, a niekiedy przywrócenie zdrowia.</p>
                </div>
                </Link> */}
                <Link href="/sakramenty/namaszczenie">
                <div className='flex flex-col h-full w-[17vw] mx-[5vw] border-4 border-white hover:border-black p-1 '>
                    <div className='w-full h-[35%] relative'>
                        <Image alt="ikonka " fill objectFit="contain" src="/anointing.png"/>
                    </div>
                    <h3 className='text-[20px] text-center mt-[2vh]'>Namaszczenie Chorych</h3>
                    <p className='text-center mt-[1vh] '>Jest to sakrament, w którym ciężko chory otrzymuje przez namaszczenie olejem św. i modlitwę kapłana szczególne łaski, ulgę w cierpieniu, a niekiedy przywrócenie zdrowia.</p>
                </div>
                </Link>
            </div>
            {/* <div className='flex flex-row h-[30vh] w-full justify-center'>
                <Link href="/sakramenty/namaszczenie">
                <div className='flex flex-col h-full w-[17vw] mx-[5vw] border-4 border-white hover:border-black p-1 '>
                    <div className='w-full h-[35%] relative'>
                        <Image alt="ikonka " fill objectFit="contain" src="/anointing.png"/>
                    </div>
                    <h3 className='text-[20px] text-center mt-[2vh]'>Namaszczenie Chorych</h3>
                    <p className='text-center mt-[1vh] '>Jest to sakrament, w którym ciężko chory otrzymuje przez namaszczenie olejem św. i modlitwę kapłana szczególne łaski, ulgę w cierpieniu, a niekiedy przywrócenie zdrowia.</p>
                </div>
                </Link>
            </div> */}
        </div>

    </div>
  )
}

export default Sakramenty