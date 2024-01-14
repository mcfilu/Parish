'use client'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Slides = ({id}) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`http://3.10.214.193:1337/api/galerias/${id}?populate=*`)
        .then(res => res.json())
        .then(data => {
            
            const toSet = {}
            toSet.tytul = data.data.attributes.tytul
            toSet.data = data.data.attributes.data
            toSet.slides = []
            toSet.slides.push(data.data.attributes.glowne.data.attributes.url)
            console.log(data.data.attributes.zdjecia.data)
            data.data.attributes.zdjecia.data.forEach((object) => {toSet.slides.push(object.attributes.url)})
            setData(toSet)
            console.log(toSet.slides)
        })
    }, [])
    if (data == null){
        return (<div>Problem</div>)
    }
  else return (
    
        
        <div>
        <div className='flex flex-col w-full pt-[20vh]'>
            <h2 className='text-[50px] font-header2 text-center'>{data.tytul}</h2>
            <h3 className='text-[30px] font-header2 mt-[2vh] mb-[5vh] text-center'>{data.data}</h3>
        </div>
    
        <div className='w-full px-[5vw] grid grid-cols-4 gap-4 py-[5vh]'>
            {data.slides && data.slides.map((object) => (
                <div key="" className='w-full h-[30vh] relative'>
                    <Image fill objectFit="cover" src={`http://3.10.214.193:1337${object}`} alt="zdjecie galeria" />
                </div>
            ))}
            

        </div>
        </div>
        
    
  )
}

export default Slides