import Image from 'next/image'
import Loader from './components/navigation/loader'
import Menu from './components/navigation/menu'
import Footer from './components/footer'
import Header from './components/home/header'
import Hours from './components/home/hours'



export default function Home() {
  return (
   <div>
    {/* <Loader/> */}
    {/* <Menu/> */}
    <Header/>
    <Hours/>
    <Footer/>
   </div>
  )
}
