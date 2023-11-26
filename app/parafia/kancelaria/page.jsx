import React from 'react'
import Header from './header'
import Footer from '@/app/components/footer'
import Hours from './hours'
import Account from './account'
import Contact from './contact'
import Map from './map'

const Page = () => {
  return (
    <div className='bg-white'>
        <Header/>
        <Hours/>
        <Account/>
        <Contact/>
        <Map/>
        <Footer/>
    </div>
  )
}

export default Page