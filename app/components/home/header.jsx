import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <div className={`w-screen h-screen flex relative `}>
        <Image src="/teren_parafii.jpeg" alt="zdjecie kosciola" fill={true} objectFit='cover' ></Image>
        <div className='absolute top-[40%] left-[12%] text-white w-[40vw]'>
            <h1 className='text-[70px] font-header2'>Parafia Sw Andrzeja</h1>
            <p className='mt-[4vh]'>Najstarsza parafia w centrum warszawy. jedna z wielu blah blah lorem ipsum dolores.Najstarsza parafia w centrum warszawy. jedna z wielu blah blah lorem ipsum dolores.Najstarsza parafia w centrum warszawy. jedna z wielu blah blah lorem ipsum dolores. </p>
        </div>
    </div>
  )
}

export default Header
