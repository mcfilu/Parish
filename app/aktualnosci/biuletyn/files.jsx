'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const Files = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('http://127.0.0.1:1337/api/biuletyny?populate=*')
        .then(res => res.json())
        .then(data => {setData(data)})
    }, [])

    console.log(data);
    let years = []
    let yearsData = []
    if (data && data.data) {
        years = Array.from(new Set(data.data.map(item => item.attributes.data.split('-')[0]))).sort().reverse();
        yearsData = years.map(year => ({year: year, data: data.data.filter((item) => item.attributes.data.startsWith(year))}));
        console.log(years.map(year => (yearsData.find(y => y.year == year).data)))
    }
    // const years = Array.from(new Set(data.data.map(item => item.attributes.data.split('-')[0]))).sort().reverse();
    const [currentYear, changeYear] = useState(new Date().getFullYear());
    // console.log(currentYear);
    console.log(years);
    // console.log(yearsData);
  return (

    <div className='w-screen flex flex-col py-[10vh]'>
        
        <div className='flex flex-row w-full space-x-4 h-[5vh] pb-[5vh] items-center justify-center '>
            {years && years.map(item => (
                // eslint-disable-next-line react/jsx-key
                <button onClick={() => changeYear(item)} className={`bg-dark text-white p-4 ${item == currentYear ? 'bg-dark text-white' : 'bg-white text-black'}`}>
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
        
        {years && years.map(item => (
            <div key={item.id} className={`w-screen grid grid-cols-3 gap-10 ${item == currentYear ? '' : 'hidden'} mx-[5vw]`}>
                {yearsData && yearsData.find(y => y.year == item).data.map(entry => (
                    <div key={entry.id} className={`w-[20vw] h-[40vh] relative ${entry.attributes.data.split('-')[0] == currentYear ? '': 'hidden'}`}>
                        <Image fill objectFit="cover" alt='zdjecie kazanie' src={'http://127.0.0.1:1337' + entry.attributes.tlo.data.attributes.url}></Image>
                        <p className='absolute bottom-[10%] left-[40%] text-white'>{entry.attributes.data}</p>
                    </div>
                ))}
            </div>
        ))}
        
    </div>
  )
}

export default Files