import React from 'react'
import Header from './header'
import Footer from '@/app/components/footer'
import Chronology from './chronology'
import Oldest from './oldest'

const Page = () => {
  return (
    <div>
        <Header/>
        <Oldest/>
        <Chronology/>
        <Footer/>
    </div>
  )
}

export default Page