'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Slides = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('http://3.10.214.193:1337/api/galerias?populate=*')
        .then(res => res.json())
        .then(data => {
            const toSet = []
            data.data.forEach((object) => {toSet.push({
                id: object.id,
                tytul: object.attributes.tytul,
                img: object.attributes.glowne.data.attributes.url,
                })
            })
            setData(toSet)
        })
    }, [])
  return (
    <div className='w-full grid grid-cols-4 gap-4 bg-white px-[5vw] py-[5vh]'>
        {data && data.map((object) => (

            <div key="" className='w-full h-[30vh]'>
                <Link href={`/parafia/galeria/${object.id}`}>
                <div className='w-full h-full relative bg-black'>
                    <Image className="bg-opacity-50" src={`http://3.10.214.193:1337${object.img}`} fill objectFit='cover' alt="zdjecie tytulowe z galerii" />
                    {/* Dark background layer with 50% opacity */}
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                    {/* Centered h2 tag */}
                    <h2 className="absolute inset-0 flex items-center justify-center text-white text-center text-[30px] font-header2">
                        {object.tytul}
                    </h2>
                </div>
                </Link>
            </div>
        ))}
        
    </div>
  )
}

export default Slides