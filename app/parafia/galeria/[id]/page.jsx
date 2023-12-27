import React from 'react'

import Slides from './slides'
import Footer from '@/app/components/footer'

const Page = ({params}) => {
  return (
    <div className='bg-white'>
            <Slides id={params.id}/>
            <Footer/>
        </div>
  )
}

export default Page