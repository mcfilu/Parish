import React from 'react'

const Contact = () => {
  return (
    <div className='w-full bg-white md:h-[80vh] flex flex-col py-[10vh px-[8vw text-black relative'>
        <div className='md:child md:absolute right-[50px] p-6 z-10 bg-white text-black py-[5vh] md:py-0'>
            <div className='flex flex-row md:flex-col h-full items-center md:items-start md:justify-center'>
                <i className='fa-solid fa-envelope text-[4.3vh]'></i>
                <h3 className='mt-[1vh] text-[4.3vh] font-header2'>Email</h3>
                {/* <p className='mt-[1vh]'>Zachecamy do kontaktu mailowego</p> */}
                <a className='mt-[2vh] text-[1.8vh]'>parafianachlodnej@gmail.com</a>
            </div>
            <div className='flex flex-row md:flex-col h-full items-center md:items-start md:justify-center '>
                <i className='fa-solid fa-phone text-[4.3vh]'></i>
                <h3 className='mt-[1vh] text-[4.3vh] font-header2'>Telefon</h3>
                {/* <p className='mt-[1vh]'>Zachecamy do kontaktu mailowego</p> */}
                <a className='mt-[2vh] text-[1.8vh]'>22 620 37 47</a>
            </div>
            <div className='flex flex-row md:flex-col h-full items-center md:items-start md:justify-center '>
                <i className='fa-solid fa-location-dot text-[4.3vh]'></i>
                <h3 className='mt-[2vh] text-[4.3vh] font-header2'>Adres</h3>
                <p className='mt-[1vh] text-[1.8vh]'>ul. Chłodna 9</p>
                <p className='mt-[1vh] text-[1.8vh]'>00-891 Warszawa</p>
            </div>
        </div>

        <div className='md:absolute flex flex-col h-[50vh] md:h-full w-full'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327.3313466167734!2d20.992228354675344!3d52.238162823798994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc865a66dd77%3A0x787bfcd0383976fd!2sRoman%20Catholic%20Parish%20of%20St.%20Andrew%20the%20Apostle!5e0!3m2!1sen!2spl!4v1700818752335!5m2!1sen!2spl" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        

    </div>
  )
}

export default Contact