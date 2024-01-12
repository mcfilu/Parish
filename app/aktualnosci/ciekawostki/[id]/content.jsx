'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { marked } from 'marked'

const Content = ({id}) => {
    // const router = useRouter()
    // const id = router.query.id
    console.log(id)
    // const [data, setData] = useState(null);
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('http://3.10.214.193:1337/api/ciekawostki/' + id +'?populate=*')
        .then(res => res.json())
        .then(data => {setData(data)})
    },[])

    let htmlContent = null
    if (data != null){
        htmlContent = marked.parse(data.data.attributes.tekst)
    }

    if (data == null){
        return (
            <div>
                Problem
            </div>
        )
    }
    else {
        console.log(data);
        return (
            <div className='flex flex-row px-[5vw] bg-white pt-[25vh] pb-[10vh]'>
                <div className='w-1/2 pr-[5vw] relative'>
                    <Image fill alt="tlo ogloszenia" src={'http://3.10.214.193:1337' + data.data.attributes.tlo.data.attributes.url}/>
                </div>
                <div className='w-1/2 pl-[5vw]'>
                    <h1 className='text-[50px] font-header2 text-center'>{data.data.attributes.tytul}</h1>
                    {/* <textarea className='w-full mt-[5vh]'>{data.data.attributes.tresc}</textarea> */}
                    <div className="markdown" dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </div>
            </div>
        )
    }
}

export default Content