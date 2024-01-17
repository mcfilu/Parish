import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Contact = () => {
  return (
    <div className='w-full  px-[5vw] my-[5vh] grid grid-cols-1 md:grid-cols-3 md:justify-items-center'>
        <div className='flex flex-col h-full mt-[2vh] md:mt-0'>
            <i className='fa-solid fa-envelope text-[4.5vh]'></i>
            <h3 className='mt-[2vh] text-[4.5vh] font-header2'>Email</h3>
            <p className='mt-[1vh]'>Zachecamy do kontaktu mailowego</p>
            <a className='mt-[1vh]'>parafianachlodnej@gmail.com</a>
        </div>
        <div className='flex flex-col h-full mt-[4vh] md:mt-0'>
            <i className='fa-solid fa-phone text-[4.5vh]'></i>
            <h3 className='mt-[2vh] text-[4.5vh] font-header2'>Telefon</h3>
            <p className='mt-[1vh]'>Zachecamy do kontaktu mailowego</p>
            <a className='mt-[1vh]'>22 620 37 47</a>
        </div>
        <div className='flex flex-col h-full mt-[4vh] md:mt-0'>
            <i className='fa-solid fa-location-dot text-[4.5vh]'></i>
            <h3 className='mt-[2vh] text-[4.5vh] font-header2'>Adres</h3>
            <p className='mt-[1vh]'>ul. Chłodna 9</p>
            <p className='mt-[1vh]'>00-891 Warszawa</p>
        </div>
    </div>
  )
}

export default Contact