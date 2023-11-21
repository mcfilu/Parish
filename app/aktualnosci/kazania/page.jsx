import React from 'react'
import Header from './header'
import Footer from '@/app/components/footer'
import Episodes from './episodes'
import Menu from '@/app/components/navigation/menu'

const Page = () => {
  return (
    <div>
        
        <Header/>
        <Episodes />
        <Footer/>
    </div>
  )
}

export default Page
  