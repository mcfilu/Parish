import React from 'react'
import Header from './header'
import Footer from '@/app/components/footer'
import Places from './places'
import Gallery from './gallery'
import Banner from './banner'
import Detailed from './detailed'

const Page = () => {
  return (
    <div className='bg-white'>
        <Header/>
        <Banner/>
        <Detailed/>
        <Places/>
        <Gallery/>
        <Footer/>
    </div>
  )
}

export default Page