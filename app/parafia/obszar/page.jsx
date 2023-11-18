import React from 'react'
import Header from './header'
import Footer from '@/app/components/footer'

import Menu from '@/app/components/navigation/menu'
const Page = () => {
  return (
    <div>
        <Menu/>
        <Header/>

        <Footer/>
    </div>
  )
}

export default Page