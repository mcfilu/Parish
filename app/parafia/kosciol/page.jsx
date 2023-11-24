import React from 'react'
import Header from './header'
import Footer from '@/app/components/footer'
import Places from './places'
import Gallery from './gallery'


const Page = () => {
  return (
    <div>
        <Header/>
        <Places/>
        <Gallery/>
        <Footer/>
    </div>
  )
}

export default Page