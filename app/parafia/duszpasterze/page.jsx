import React from 'react'
import Header from './header'
import Footer from '@/app/components/footer'
import Proboszcz from './proboszcz'
import Pozostali from './pozostali'

const Page = () => {
  return (
    <div>
        <Header/>
        <Proboszcz/>
        <Pozostali/>
        <Footer/>
    </div>
  )
}

export default Page