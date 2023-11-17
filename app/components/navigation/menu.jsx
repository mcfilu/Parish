'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useHeaderVisibility } from '@/app/HeaderVisibilityContext'

const Menu = () => {
    const { isHeaderVisible, toggleMenu } = useHeaderVisibility();
    const [menuElement, setElement] = useState('');
    const closeReset = () => {
        setElement('');
        toggleMenu();
    }
    console.log(isHeaderVisible, toggleMenu);
  return (
    <div className={`fixed z-50 overflow-hidden w-screen h-screen bg-dark text-white px-[10vw] pb-[10vh] ${isHeaderVisible ? 'fixed' : 'hidden'}`}>
        <div className='flex flex-col'>
            <div className={`flex flex-row justify-end h-auto mt-[5vh] mb-[10vh]`}  onClick={() => closeReset()}>
                <Image src="/close.png" alt="close icon"  width={20} height={10} objectFit='contain'></Image>
                <p className='flex align-center justify-center ml-[10px]'>ZAMKNIJ</p>
                
            </div>
            <div className={`flex flex-row`}>
                <div className={`flex flex-col w-[35%]  text-[20px]`}>
                    <div className={`flex relative h-[35vh] w-[60%] mb-[5vh] `}>
                        <Image src="/kosciol_logo.png" alt="logo kosciola" fill={true} objectFit='contain' className='align-left' ></Image>
                    </div>
                    <h3 className='font-bold text-[30px]'>Adres</h3>
                    <p>Chłodna 9</p>
                    <p>00-891 Warszawa</p>
                    <h2 className='font-bold text-[30px] mt-[3vh] '>Kontakt</h2>
                    <p>parafiachlodna@gmail.com</p>
                    <p>22 620 37 47</p>
                </div>
                <div className={`flex flex-col w-[65%] text-white text-[30px] justify-center ml-[10%] ${menuElement == '' ? '' : 'hidden'}`}>
                    <Link href="/nabozenstwa">Nabozenstwa</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <a className='mt-[1vh] mb-[1vh] border-1' onClick={() => setElement('aktualnosci')}>Aktualnosci</a>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <a className='mt-[1vh] mb-[1vh] border-1' onClick={() => setElement('parafia')}>Parafia</a>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <a className='mt-[1vh] mb-[1vh] border-1' onClick={() => setElement('sakramenty')}>Sakramenty</a>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <a className='mt-[1vh] mb-[1vh] border-1' onClick={() => setElement('wspolnoty')}>Wspolnoty</a>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                </div>

                <div className={`flex flex-col w-[65%] text-white text-[30px] justify-center ml-[10%] ${menuElement == 'aktualnosci' ? '' : 'hidden'}`}>
                    <Link href="" className='text-4'>Aktualnosci</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="/aktualnosci/ogloszenia">Ogloszenia</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="/aktualnosci/biuletyn">Biuletyn</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="/aktualnosci/wydarzenia">Wydarzenia</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="/aktualnosci/ciekawostki">Ciekawostki Kosciola</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="/aktualnosci/kazania">Kazania Proboszcza</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                </div>

                <div className={`flex flex-col w-[65%] text-white text-[30px] justify-center ml-[10%] ${menuElement == 'parafia' ? '' : 'hidden'}`}>
                    <Link href="/parafia/historia" className='text-4'>Histora</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="/parafia/gallery">Galeria</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="/parafia/ciekawostki">Ciekawosti Parafia</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="/parafia/duszpasterze">Duszpasterze</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="/parafia/teren">Teren Parafii</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="/parafia/kancelaria">Kancelaria</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                </div>

                <div className={`flex flex-col w-[65%] text-white text-[30px] justify-center ml-[10%] ${menuElement == 'sakramenty' ? '' : 'hidden'}`}>
                    <Link href="/sakramenty/chrzest" className='text-4'>Chrzest</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="/sakramenty/komunia">Komunia</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="/sakramenty/bierzmowanie">Bierzmowanie</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="/sakramenty/pokuta">Pokuta</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="/sakramenty/malzenstwo">Malzenstwo</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="/sakramenty/kaplanstwo">Kaplanstwo</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="/sakramenty/namaszczenie">Namaszczenie Chorych</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                </div>

                <div className={`flex flex-col w-[65%] text-white text-[30px] justify-center ml-[10%] ${menuElement == 'wspolnoty' ? '' : 'hidden'}`}>
                    <Link href="/wspolnoty/schola" className='text-4'>Schola</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="/wspolnoty/schola-dziecieca">Schola Dzieci</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="/wspolnoty/caritas">Caritas</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="/wspolnoty/ministranci">Ministranci</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="">Rada Parafialna</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                    <Link href="">Kolo Zywego Rozanca</Link>
                    <hr className='mt-[1vh] mb-[1vh] border-1'/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Menu