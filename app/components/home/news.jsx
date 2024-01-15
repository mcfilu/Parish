import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const News = () => {

    const [news, setNews] = useState(null);
    const [data, setData] = useState(null)
    const [img1, setImg1] = useState('')
    const [img2, setImg2] = useState('')

    function loadImages(id1, id2) {
        fetch(`http://3.10.214.193:1337/api/ogloszenia/${id1}?populate=*`)
        .then(res => res.json())
        .then(data => setImg1('http://3.10.214.193:1337' + data.data.attributes.tlo.data.attributes.url))

        fetch(`http://3.10.214.193:1337/api/ogloszenia/${id2}?populate=*`)
        .then(res => res.json()) 
        .then(data => setImg2('http://3.10.214.193:1337' + data.data.attributes.tlo.data.attributes.url))

        console.log('laduje zdjecia')
    }
    
    useEffect(() => {
        fetch('http://3.10.214.193:1337/api/ogloszenia-last-two/')
        .then(res => res.json())
        .then(data => {
            setNews([data[0], data[1]])
            return data
        })
        .then(data => {
            loadImages(data[0].id, data[1].id)})
    }, []);

  return (
    <div className='flex flex-col w-full h-screen items-center justify-center bg-white text-black'>
        <h2 className='text-[5.5vh] font-header2'>Aktualnosci</h2>
        
            {news !== null ? (
            <div className='flex flex-col '>
            <div className='flex flex-row h-[60vh] w-full my-[2vh] items-center justify-center'>
                
                <div className='w-[40%] px-[2vw] py-[1vh] h-full flex flex-col justify-center'>
                    <h3 className='font-bold text-[30px] mb-[1vh] text-center font-header2'>{news[0].tytul}</h3>
                    <div className='w-full h-full relative '>
                    {img1 !== null ? (
                            <Link href={`/aktualnosci/ogloszenia/${news[0].id}`}><Image alt="tlo aktualnosci" fill objectFit='cover' src={img1} /></Link>
                        ) : null}
                    </div>
                    <p>{news[0].skrot_tresci}</p>
                    <div className='flex flex-row justify-between mt-[2vh] text-gold2'>
                    <Link href={`/aktualnosci/ogloszenia/${news[0].id}`}>Czytaj Wiecej</Link>
                    <p>{news[0].data}</p>
                    </div>
                </div>
                <div className='w-[40%] px-[2vw] py-[1vh] h-full flex flex-col justify-center'>
                    <h3 className='font-bold text-[30px] mb-[1vh] text-center font-header2'>{news[1].tytul}</h3>
                    <div className='w-full h-full relative '>
                    {img1 !== null ? (
                            <Link href={`/aktualnosci/ogloszenia/${news[1].id}`}><Image alt="tlo aktualnosci" fill objectFit='cover' src={img2} /></Link>
                        ) : null}
                    </div>
                    <p>{news[1].skrot_tresci}</p>
                    <div className='flex flex-row justify-between mt-[2vh] text-gold2'>
                    <Link href={`/aktualnosci/ogloszenia/${news[1].id}`}>Czytaj Wiecej</Link>
                    <p>{news[1].data}</p>
                    </div>
                </div>
            </div>
            {/* <div className='flex flex-row h-[30vh] w-[60vw] my-[2vh]'>
                <div className='w-[55%] px-[2vw] py-[1vh] h-full flex flex-col justify-center'>
                    <h3 className='font-bold text-[25px] mb-[1vh]'>{news[1].tytul}</h3>
                    <p>{news[1].skrot_tresci}</p>
                    <div className='flex flex-row justify-between mt-[2vh] text-gold2'>
                    <Link href={`/aktualnosci/ogloszenia/${news[1].id}`}>Czytaj Wiecej</Link>
                    <p>{news[1].data}</p>
                    </div>
                </div>
                <div className='w-[45%] h-full relative '>
                    {img2 !== null ? (
                        <Image alt="tlo aktualnosci" fill objectFit='cover' src={img2} />
                    ) : null}
                </div>
            </div> */}
            </div>
            ) : null}
        
        <Link href="/aktualnosci/ogloszenia">
            <button className='bg-dark text-white text-[2.3vh] p-4'>Zobacz Wiecej</button>
        </Link>
    </div>
  )
}

export default News