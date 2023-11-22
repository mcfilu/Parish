'use client'
import React from 'react'
import Footer from '@/app/components/footer'
import Content from './content'


const page = ({params}) => {
    // console.log(params.id)
  return (
    <div>
        <Content id={params.id}/>
        <Footer/>
    </div>
  )
}

export default page