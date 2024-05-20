import React from 'react'
import Header from './header'
import Footer from '@/app/components/footer'
import Intro from './intro'
import Intro2 from './Intro2'
import Banner from './banner'
import Gallery from './gallery'

const Page = () => {
  return (
    <div>
        <Header/>
        <Intro/>
        <Intro2/>
        <Banner/>
        <Gallery/>
        <Footer/>
    </div>
  )
}

export default Page