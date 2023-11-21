import React from 'react'
import Image from 'next/image'

async function loadData() {
    const res = await fetch('http://127.0.0.1:1337/api/kazania?populate=*')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    
    return res.json()
}

const Episodes = async () => {
    const data = await loadData();
    const years = [ new Set(data.data.map(item => item.attributes.data.split('-')[0]))]
    console.log(data);
  return (

    <div className='w-screen flex flex-col py-[10vh]'>
        <p></p>
        <div className='flex flex-row w-full space-x-4 h-[5vh] items-center justify-center '>
            {years && years.map(item => (
                <p>{item}</p>
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
        {/* <div>
            {data && data.data.map((item) => (
                <div key={item.id}>Yalla
                    <p>{item.attributes.tytul}</p>
                    <p>{item.attributes.data}</p>
                    <p>{item.attributes.opis}</p>
                    <p>{item.attributes.link}</p>
                    <p>{item.attributes.zdjecie.data.attributes.url}</p>
                    <Image alt="test" src={'http://127.0.0.1:1337' + item.attributes.zdjecie.data.attributes.url}/>
                </div>
            ))}
        </div> */}
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