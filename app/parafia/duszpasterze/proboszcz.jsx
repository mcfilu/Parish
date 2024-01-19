import React from 'react'
import Image from 'next/image'

const Proboszcz = () => {
  return (
    <div className='w-full flex flex-col bg-white px-[5vw] py-[10vh]'>
        <div className='w-full h-[50vh] md:h-[60vh] relative'>
            <Image alt="ksiadz proboszcz" src="/ks_proboszcz3.jpeg" fill objectFit='cover'/>
        </div>
        <div className='flex flex-col md:flex-row w-full justify-between mt-[5vh]'>
            <div className='min-w-[30%]'>
                <h2 className='text-[4.5vh] font-header2'>Ks. Proboszcz</h2>
                <h2 className='text-[4.5vh] font-header2'>Leszek Slipek</h2>
            </div>
            <div className='w-full md:max-w-[40%]'>
                <p className='mt-[2vh] md:mt-0'>Urodził się 10 lipca 1953 w Legnicy. Ukończył Wyższe Metropolitalne Seminarium Duchowne w Warszawie i przyjął święcenia kapłańskie w roku 1978. Ukończył studia i uzyskał doktorat z teologii duchowości na Uniwersytecie Gregoriańskim w Rzymie (1982). Posługę w parafii św. Andrzeja Apostoła rozpoczął 30 listopada 2001 r.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Proboszcz