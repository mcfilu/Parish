import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-[70vh] bg-white flex flex-row py-[5vh] px-[5vw] text-black'>
        <div className='flex flex-col w-1/2 '>
            <div className='flex flex-row h-full items-center '>
                <i className='fa-solid fa-envelope text-[40px]'></i>
                <h3 className='mt-[2vh] text-[40px] font-header2'>Email</h3>
                {/* <p className='mt-[1vh]'>Zachecamy do kontaktu mailowego</p> */}
                <a className='mt-[1vh]'>parafianachlodnej@gmail.com</a>
            </div>
            <div className='flex flex-row h-full items-center '>
                <i className='fa-solid fa-phone text-[40px]'></i>
                <h3 className='mt-[2vh] text-[40px] font-header2'>Telefon</h3>
                {/* <p className='mt-[1vh]'>Zachecamy do kontaktu mailowego</p> */}
                <a className='mt-[1vh]'>22 620 37 47</a>
            </div>
            <div className='flex flex-row h-full items-center '>
                <i className='fa-solid fa-location-dot text-[40px]'></i>
                <h3 className='mt-[2vh] text-[40px] font-header2'>Adres</h3>
                <p className='mt-[1vh]'>ul. Chłodna 9</p>
                <p className='mt-[1vh]'>00-891 Warszawa</p>
            </div>
        </div>

        <div className='flex flex-col w-1/2'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327.3313466167734!2d20.992228354675344!3d52.238162823798994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc865a66dd77%3A0x787bfcd0383976fd!2sRoman%20Catholic%20Parish%20of%20St.%20Andrew%20the%20Apostle!5e0!3m2!1sen!2spl!4v1700818752335!5m2!1sen!2spl" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

    </div>
  )
}

export default Contact