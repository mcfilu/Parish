import React from 'react'

import Slides from './slides'
import Footer from '@/app/components/footer'
import Intro from './intro'

const Page = ({params}) => {
  return (
    <div className='bg-white'>
            <Intro id={params.id}/>
            <Slides id={params.id}/>
            <Footer/>
        </div>
  )
}

export default Page