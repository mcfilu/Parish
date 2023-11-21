'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { useEffect } from 'react'

const Episodes = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('http://127.0.0.1:1337/api/kazania?populate=*')
        .then(res => res.json())
        .then(data => {setData(data)})
    }, [])

    console.log(data);
    let years = []
    if (data && data.data) {
        years = Array.from(new Set(data.data.map(item => item.attributes.data.split('-')[0]))).sort().reverse();
    }
    // const years = Array.from(new Set(data.data.map(item => item.attributes.data.split('-')[0]))).sort().reverse();
    const [currentYear, changeYear] = useState(new Date().getFullYear());
    
    console.log('yalla');
  return (

    <div className='w-screen flex flex-col py-[10vh]'>
        
        <div className='flex flex-row w-full space-x-4 h-[5vh] items-center justify-center '>
            {years && years.map(item => (
                // eslint-disable-next-line react/jsx-key
                <button onClick={item => changeYear(item)} className={`bg-dark text-white p-4 ${item == currentYear ? 'bg-dark text-white' : 'bg-white text-black'}`}>
                    {item}
                </button>
            ))}
            {/* <button className='bg-dark text-white p-4'>
                2023
            </button>
            <button className='border-1 p-4'>
                2022
            </button>
            <button className='border-1 p-4'>
                2021
            </button> */}
        </div>
        
        {data && data.data.map((item) => (
        <div key={item.id} className='w-full flex flex-col items-center justify-center'>
            <div className='w-[60%] h-[40vh] flex flex-row'>
                <div className='flex flex-col h-full w-1/2'>
                    <h2>{item.attributes.tytul}</h2>
                    <h2>{item.attributes.data}</h2>
                    <p>{item.attributes.opis}</p>
                    <button className='p-4 bg-dark text-white'>Obejrzyj</button>
                </div>
                <div className='h-full w-1/2 relative'>
                    <Image fill objectFit="cover" alt='zdjecie kazanie' src={'http://127.0.0.1:1337' + item.attributes.zdjecie.data.attributes.url}></Image>
                </div>
            </div>
            <div className='w-[60%] h-[40vh] '>

            </div>
        </div>
        ))}
    </div>
  )
}

export default Episodes