import React from 'react'
import Image from 'next/image'

const Pozostali = () => {
  return (
    <div className='w-full flex flex-col px-[5vw] py-[10vh] bg-white'>
        <div className='w-full  flex flex-row'>
            <div className='hidden md:flex w-1/2 h-[50vh] relative'>
                <Image className='pr-[5vw]' alt="zdjecie wikariusza" src="/ksiadz_andrzej.jpeg" fill objectFit='cover'/>
            </div>
            <div className='flex flex-col w-full md:w-1/2 justify-center md:pl-[3vw]'>
                <h2 className='text-[4.5vh] font-header2'>Ks. Andrzej Ostrowski</h2>
                <div className='flex md:hidden w-full h-[40vh] relative my-[2vh]'>
                    <Image className='' alt="zdjecie wikariusza" src="/ksiadz_andrzej.jpeg" fill objectFit='cover'/>
                </div>
                <p className='pt-[2vh]'>Urodził się 27 listopada 1979 w Warszawie. Ukończył Wyższe Seminarium Duchowne w Warszawie i przyjął święcenia kapłańskie w roku 2005. Ukończył Papieski Wydział Teologiczny (2004) i studia podyplomowe w Wyższej Szkole Filologii Hebrajskiej w Toruniu (2013). Posługę w parafii św. Andrzeja Apostoła w Warszawie rozpoczął 26 sierpnia 2020 r.</p>
            </div>
        </div>
        <div className='w-full  flex flex-row mt-[5vh]'>
            
            <div className='flex flex-col w-full md:w-1/2 justify-center pr-[3vw]'>
                <h2 className='text-[4.5vh] font-header2'>Ks. Paweł Powierza</h2>
                <div className='flex md:hidden w-full h-[40vh] relative my-[2vh]'>
                    <Image className='' alt="zdjecie wikariusza" src="/ksiadz_pawel2.jpeg" fill objectFit='cover'/>
                </div>
                <p className='pt-[2vh]'>Urodził się 13 stycznia 1973 w Warszawie. Ukończył Warszawskie Metropolitalne Seminarium Duchowne i przyjął święcenia kapłańskie w roku 1998 r. Ukończył Papieski Wydział Teologiczny w Warszawie (1999). Posługę w parafii św. Andrzeja Apostoła w Warszawie rozpoczął w 2020 roku.</p>
            </div>
            <div className='hidden md:flex w-1/2 h-[50vh] relative'>
                <Image className='pl-[5vw]' alt="zdjecie wikariusza" src="/ksiadz_pawel2.jpeg" fill objectFit='cover'/>
            </div>
        </div>
        <div className='w-full  flex flex-row mt-[5vh]'>
            <div className='hidden md:flex w-1/2 h-[50vh] relative'>
                <Image className='pr-[5vw]' alt="zdjecie wikariusza" src="/ksiadz_zbigniew.jpeg" fill objectFit='cover'/>
            </div>
            <div className='flex flex-col w-full md:w-1/2 justify-center md:pl-[3vw]'>
                <h2 className='text-[4.5vh] font-header2'>Ks. Zbigniew Badowski</h2>
                <div className='flex md:hidden w-full h-[40vh] relative my-[2vh]'>
                    <Image className='' alt="zdjecie wikariusza" src="/ksiadz_zbigniew.jpeg" fill objectFit='cover'/>
                </div>
                <p className='pt-[2vh]'>Urodził się 26 października 1953 w Białobrzegach. Ukończył Wyższe Seminarium Duchowne w Warszawie i przyjął święcenia kapłańskie w roku 1978. Ukończył studia z prawa kanonicznego na Akademii Teologii Katolickiej w Warszawie (1985) i następnie studia doktoranckie (1990). Posługę w parafii św. Andrzeja Apostoła rozpoczął 30 listopada 2001 r.</p>
            </div>
        </div>
    </div>
  )
}

export default Pozostali