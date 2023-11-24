import React from 'react'
import Header from './header'
import Footer from '@/app/components/footer'
import Chronology from './chronology'
import Oldest from './oldest'
import Detailed from './detailed'
import Banner from './banner'

const Page = () => {
  return (
    <div className='bg-white'>
        <Header/>
        <Banner/>
        <Oldest/>
        <Chronology/>
        <Detailed/>
        <Footer/>
    </div>
  )
}

export default Page