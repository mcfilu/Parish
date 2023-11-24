import React from 'react'

const Account = () => {
  return (
    <div className='w-screen h-[30vh] bg-dark flex flex-row justify-between items-center text-white px-[5vw] my-[5vh]'>
        <h2 className='text-[50px] font-header2 w-[40%]'>Dane Bankowe</h2>
        <div className='w-[40%] '>
        <p className=''>Bank Pekao SA XIII Oddział w Warszawie</p>
        <p className='mt-[1vh]'>Warszawa, ul. Górczewska 137</p>
        <p className='mt-[1vh]'>nr konta: 95 1240 2034 1111 0000 0306 9677</p>
        </div>

    </div>
  )
}

export default Account