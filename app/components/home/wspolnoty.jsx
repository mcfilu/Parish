import React from 'react'
import Image from 'next/image'

const Wspolnoty = () => {
  return (
    <div className='w-screen h-[50vh] flex relative'>
        <Image src="/wspolnoty.jpeg" alt="tlo wspolnoty" fill={true} /> 
    </div>
  )
}

export default Wspolnoty