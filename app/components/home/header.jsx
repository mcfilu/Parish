import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <div className={`w-full h-screen flex relative `}>
        <Image src="/teren_parafii.jpeg" alt="zdjecie kosciola" fill={true} objectFit='cover' ></Image>
        <div className='absolute top-[30%] left-[11%] text-white w-[80vw]'>

        <h1 className='text-[80px] font-header2'>Parafia św </h1>
        <h1 className='text-[80px] font-header2'>Andrzeja Apostoła</h1>
        <h1 className='text-[50px] font-header2 mt-[5vh]'>Jedna z Najstarszych Parafii w Warszawie</h1>
        {/* <h1 className='text-[50px] font-header2 '>Parafii w Warszawie</h1> */}
            
            {/* <h1 className='text-[70px] font-header2'>Andrzeja Apostoła</h1> */}
            {/* <p className='mt-[4vh]'>Najstarsza parafia w centrum warszawy. jedna z wielu blah blah lorem ipsum dolores.Najstarsza parafia w centrum warszawy. jedna z wielu blah blah lorem ipsum dolores.Najstarsza parafia w centrum warszawy. jedna z wielu blah blah lorem ipsum dolores. </p> */}
            {/* <h1 className='text-[70px] font-header2 mt-[10vh]'>Jedna z Najstarszych Parafii w Warszawie</h1> */}
        </div>
    </div>
  )
}

export default Header
