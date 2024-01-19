import React from 'react'
import Header from './header'
import Footer from '@/app/components/footer'
import Content from './content'
import Streets from './streets'

const Page = () => {
  return (
    <div>
        <Header/>
        <Content/>
        <Streets/>
        <Footer/>
    </div>
  )
}

export default Page