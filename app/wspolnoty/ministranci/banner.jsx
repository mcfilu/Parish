import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col justify-between w-full px-[5vw]  bg-dark text-white items-center py-[5vh]'>
         <h2 className='text-[5.5vh] font-header2 text-center'>Informacje Kontaktowe</h2>
        <div className='flex flex-col md:flex-row w-full justify-between items-center mt-[5vh]'>
        <div className='w-full md:w-[40%] flex flex-col'>
          <p className='text-white text-[1.7vh]'>Do ministrantów można się zapisać od III klasy szkoły podstawowej.</p>
          {/* <p className='text-white text-[1.7vh] mt-[1vh]'>- w czwartki o godz. 19.00</p> */}
          {/* <p className='text-white text-[1.7vh]'>- w niedzielę o godz. 17.00 (przed mszą św.).</p> */}
        </div>
        <div className='w-full md:w-[40%] mt-[3vh] md:mt-0 flex flex-col'>
          <p className='text-white text-[1.7vh]'>Kontakt: ks. Paweł - opiekun tel. 696 267 555</p>
          {/* <p className='text-white text-[1.7vh] mt-[1vh]'>KONTAKT: Tomasz Owczarek tel. +48 501 561 393 (tomaszadamowczarek@gmail.com)</p> */}
        </div>
        </div>
    </div>
  )
}

export default Banner