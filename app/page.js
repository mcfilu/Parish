'use client'
import Image from 'next/image'
import Loader from './components/navigation/loader'
import Menu from './components/navigation/menu'
import Footer from './components/footer'
import Header from './components/home/header'
import Hours from './components/home/hours'
import Proboszcz from './components/home/proboszcz'
import Intro from './components/home/intro'
import Kazania from './components/home/kazania'
import Sakramenty from './components/home/sakramenty'
import Wspolnoty from './components/home/wspolnoty'
import Citations from './components/home/citations'
import Galeria from './components/home/galeria'
import News from './components/home/news'
import { useState } from 'react'



export default function Home() {
  // const { isHeaderVisible, changeVisibility } = useHeaderVisibility();
  // console.log(isHeaderVisible, changeVisibility);
  return (
   <div>
    {/* <Loader/> */}
    {/* <Menu isHeaderVisible={isHeaderVisible} changeVisibility={changeVisibility}/> */}
    {/* <Menu/> */}
    <Header/>
    <Intro/>
    <Hours/>
    <News/>
    <Citations/>
    <Sakramenty/>
    <Wspolnoty/>
    <Proboszcz/>
    <Galeria/>
    <Kazania/>
    <Footer/>
   </div>
  )
}
