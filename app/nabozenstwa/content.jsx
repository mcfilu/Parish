import React from 'react'
import Image from 'next/image'

const Content = () => {
  return (
    <div className='w-full flex flex-col bg-white py-[10vh]'>
        <div className='hidden md:flex flex-col'>
        <div className=' h-[55vh] w-full px-[5v flex flex-row'>
            <div className='w-1/2 h-full relative '>
                <Image className="px-[4vw" alt="tlo msza swieta" src="/nabozenstwa2.jpeg" fill objectFit='cover'></Image>
            </div>
            <div className='w-1/2  justify-center flex flex-col pl-[5vw]'>
                <h2 className='text-[4.5vh] font-main font-bold'>Msze Swięte</h2>
                <div className='flex flex-row mt-[5vh]'>
                    <div className='ml-0 mx-[1vw] border-r-[2px]'>
                        <h4 className='font-bold text-[2.3vh]'>Dni Powszednie</h4>
                        <p className='mt-[2vh]'>6:30</p>
                        <p>8:00</p>
                        <p>9:00</p>
                        <p>18:00</p>
                    </div>
                    <div className='mx-[1vw] border-r-[2px]'>
                        <h4 className='font-bold text-[2.3vh]'>Niedziele i Swieta</h4>
                        <p className='mt-[2vh]'>7:00</p>
                        <p>8:30</p>
                        <p>10:00</p>
                        <p>11:30</p>
                        <p>13:00</p>
                        <p>18:00</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='mt-[10vh h-[55vh] w-full px-[5v flex flex-row'>
            
            <div className='w-1/2  justify-center flex flex-col pl-[5vw]'>
                <h2 className='text-[4.5vh] font-main font-bold'>Spowiedź</h2>
                <div className='flex flex-row mt-[5vh]'>
                    <div className='ml-0 mx-[1vw] border-r-[2px]'>
                        <h4 className='font-bold text-[2.3vh]'>Dni Powszednie</h4>
                        <p className='mt-[2vh]'>6:30</p>
                        <p>8:00</p>
                        <p>9:00</p>
                        <p>18:00</p>
                    </div>
                    <div className='mx-[1vw] border-r-[2px]'>
                        <h4 className='font-bold text-[2.3vh]'>Niedziele i Swieta</h4>
                        <p className='mt-[2vh]'>7:00</p>
                        <p>8:30</p>
                        <p>10:00</p>
                        <p>11:30</p>
                        <p>13:00</p>
                        <p>18:00</p>
                    </div>
                </div>
            </div>
            <div className='w-1/2 h-full relative '>
                <Image className="px-[4vw" alt="tlo msza swieta" src="/nabozenstwa3.jpeg" fill objectFit='cover'></Image>
            </div>
            
        </div>
        <div className='mt-[10vh h-[55vh] w-full px-[5vw flex flex-row'>
            <div className='w-1/2 h-full relative '>
                <Image className="px-[4vw" alt="tlo msza swieta" src="/nabozenstwa4.jpeg" fill objectFit='cover'></Image>
            </div>
            <div className='w-1/2  justify-center flex flex-col pl-[5vw]'>
                <h2 className='text-[4.5vh] font-main font-bold'>Adoracja Najswietszego Sakramentu</h2>
                <div className='flex flex-row mt-[5vh]'>
                    <div className='ml-0 mx-[1vw] border-r-[2px]'>
                        <h4 className='font-bold text-[2.3vh]'>Dni Powszednie</h4>
                        <p className='mt-[2vh]'>6:30</p>
                        <p>8:00</p>
                        <p>9:00</p>
                        <p>18:00</p>
                    </div>
                    <div className='mx-[1vw] border-r-[2px]'>
                        <h4 className='font-bold text-[2.3vh]'>Niedziele i Swieta</h4>
                        <p className='mt-[2vh]'>7:00</p>
                        <p>8:30</p>
                        <p>10:00</p>
                        <p>11:30</p>
                        <p>13:00</p>
                        <p>18:00</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='mt-[10vh h-[55vh] w-full px-[5vw flex flex-row'>
            
            <div className='w-1/2  justify-center flex flex-col pl-[5vw]'>
                <h2 className='text-[4.5vh] font-main font-bold'>Nabozenstwa</h2>
                <div className='flex flex-row mt-[5vh]'>
                    <div className='ml-0 mx-[1vw] border-r-[2px]'>
                        <h4 className='font-bold text-[2.3vh]'>Dni Powszednie</h4>
                        <p className='mt-[2vh]'>6:30</p>
                        <p>8:00</p>
                        <p>9:00</p>
                        <p>18:00</p>
                    </div>
                    <div className='mx-[1vw] border-r-[2px]'>
                        <h4 className='font-bold text-[2.3vh]'>Niedziele i Swieta</h4>
                        <p className='mt-[2vh]'>7:00</p>
                        <p>8:30</p>
                        <p>10:00</p>
                        <p>11:30</p>
                        <p>13:00</p>
                        <p>18:00</p>
                    </div>
                </div>
            </div>
            <div className='w-1/2 h-full relative '>
                <Image className="px-[4vw" alt="tlo msza swieta" src="/nabozenstwa1.jpeg" fill objectFit='cover'></Image>
            </div>
        </div>
        </div>
        <div className='flex md:hidden flex-col'>
        <div className=' h-[55vh w-full px-[5v flex flex-col'>
            
            <div className='w-full  justify-center flex flex-col pl-[5vw] mt-[5vh]'>
                <h2 className='text-[4.5vh] font-main font-bold'>Msze Swięte</h2>
                <div className='flex flex-row mt-[5vh]'>
                    <div className='ml-0 mx-[1vw] border-r-[2px]'>
                        <h4 className='font-bold text-[2.3vh]'>Dni Powszednie</h4>
                        <p className='mt-[2vh]'>6:30</p>
                        <p>8:00</p>
                        <p>9:00</p>
                        <p>18:00</p>
                    </div>
                    <div className='mx-[1vw] border-r-[2px'>
                        <h4 className='font-bold text-[2.3vh]'>Niedziele i Swieta</h4>
                        <p className='mt-[2vh]'>7:00</p>
                        <p>8:30</p>
                        <p>10:00</p>
                        <p>11:30</p>
                        <p>13:00</p>
                        <p>18:00</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-[40vh] relative mt-[2vh]'>
                <Image className="px-[4vw" alt="tlo msza swieta" src="/nabozenstwa2.jpeg" fill objectFit='cover'></Image>
            </div>
            
        </div>
        <div className='mt-[10vh h- w-full px-[5v flex flex-col'>
            
            <div className='w-full  justify-center flex flex-col pl-[5vw] mt-[5vh]'>
                <h2 className='text-[4.5vh] font-main font-bold'>Spowiedź</h2>
                <div className='flex flex-row mt-[5vh]'>
                    <div className='ml-0 mx-[1vw] border-r-[2px]'>
                        <h4 className='font-bold text-[2.3vh]'>Dni Powszednie</h4>
                        <p className='mt-[2vh]'>6:30</p>
                        <p>8:00</p>
                        <p>9:00</p>
                        <p>18:00</p>
                    </div>
                    <div className='mx-[1vw] border-r-[2px'>
                        <h4 className='font-bold text-[2.3vh]'>Niedziele i Swieta</h4>
                        <p className='mt-[2vh]'>7:00</p>
                        <p>8:30</p>
                        <p>10:00</p>
                        <p>11:30</p>
                        <p>13:00</p>
                        <p>18:00</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-[40vh] relative mt-[2vh]'>
                <Image className="px-[4vw" alt="tlo msza swieta" src="/nabozenstwa3.jpeg" fill objectFit='cover'></Image>
            </div>
            
        </div>
        <div className='mt-[10vh h-[55vh w-full px-[5vw flex flex-col'>
            
            <div className='w-full  justify-center flex flex-col pl-[5vw] mt-[5vh]'>
                <h2 className='text-[4.5vh] font-main font-bold'>Adoracja Najswietszego Sakramentu</h2>
                <div className='flex flex-row mt-[5vh]'>
                    <div className='ml-0 mx-[1vw] border-r-[2px]'>
                        <h4 className='font-bold text-[2.3vh]'>Dni Powszednie</h4>
                        <p className='mt-[2vh]'>6:30</p>
                        <p>8:00</p>
                        <p>9:00</p>
                        <p>18:00</p>
                    </div>
                    <div className='mx-[1vw] border-r-[2px'>
                        <h4 className='font-bold text-[2.3vh]'>Niedziele i Swieta</h4>
                        <p className='mt-[2vh]'>7:00</p>
                        <p>8:30</p>
                        <p>10:00</p>
                        <p>11:30</p>
                        <p>13:00</p>
                        <p>18:00</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-[40vh] relative mt-[2vh]'>
                <Image className="px-[4vw" alt="tlo msza swieta" src="/nabozenstwa4.jpeg" fill objectFit='cover'></Image>
            </div>
            
        </div>
        <div className='mt-[10vh h-[55vh w-full px-[5vw flex flex-col'>
            
            <div className='w-full  justify-center flex flex-col pl-[5vw] mt-[5vh]'>
                <h2 className='text-[4.5vh] font-main font-bold'>Nabozenstwa</h2>
                <div className='flex flex-row mt-[5vh]'>
                    <div className='ml-0 mx-[1vw] border-r-[2px]'>
                        <h4 className='font-bold text-[2.3vh]'>Dni Powszednie</h4>
                        <p className='mt-[2vh]'>6:30</p>
                        <p>8:00</p>
                        <p>9:00</p>
                        <p>18:00</p>
                    </div>
                    <div className='mx-[1vw] border-r-[2px'>
                        <h4 className='font-bold text-[2.3vh]'>Niedziele i Swieta</h4>
                        <p className='mt-[2vh]'>7:00</p>
                        <p>8:30</p>
                        <p>10:00</p>
                        <p>11:30</p>
                        <p>13:00</p>
                        <p>18:00</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-[40vh] relative mt-[5vh'>
                <Image className="px-[4vw" alt="tlo msza swieta" src="/nabozenstwa1.jpeg" fill objectFit='cover'></Image>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Content