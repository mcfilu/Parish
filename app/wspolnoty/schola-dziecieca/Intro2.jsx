import React from 'react'
import Image from 'next/image'

const Intro2 = () => {
  return (
    <div className='flex flex-col md:flex-row w-full py-[5vh] md:py-[10vh] px-[5vw] bg-white'>
        <div className='md:hidden h-[40vh] w-full mb-[5vh] relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/rodz6.jpeg" alt="schola"/>
        </div>
        <h2 className='text-[5.5vh] font-header2 text-center'>A na „szkole” śpiewania od kuchni…</h2>
        <div className='flex flex-col w-full justify-center items-center mt-[5vh]'>
            <div className='w-full  flex flex-col'>
                <p className='text-black text-[1.7vh]'>Przed:</p>
                <p className='text-black text-[1.7vh] mt-[1vh]'>- przychodzimy punktualnie, chyba, że ktoś lubi przysiady …</p>
                <p className='text-black text-[1.7vh]'>- zawsze mamy przy sobie nasz własnej produkcji śpiewnik : „Śpiewam, więc jestem”</p>
            </div>
            <div className='w-full mt-[3vh] flex flex-col'>
                <p className='text-black text-[1.7vh]'>W trakcie:</p>
                <p className='text-black text-[1.7vh] mt-[1vh]'>- cierpliwie słuchamy Wujka </p>
                <p className='text-black text-[1.7vh] mt-[1vh]'>- angażujemy się ile sił w ćwiczenia – u nas każdy głos jest najważniejszy</p>
                <p className='text-black text-[1.7vh] mt-[1vh]'>- nie mamy granic wiekowych, a przykład starszych wspomaga młodszych w śpiewaniu</p>
            </div> 
            <div className='w-1/2  relative'>
                <Image className='pr-[5vw]' fill objectFit='cover' src="/rodz6.jpeg" alt="schola"/>
            </div>
        </div>
        
    </div>
  )
}

export default Intro2


