import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/homepages/hero/Hero'
import Our from '../../components/homepages/ourchef/Our'
import Menu from '../../components/homepages/menu/menu'
import Satisfied from '../../components/homepages/satisfied/Satisfied'
import Blog from '../../components/homepages/blog/Blog'
import Footer from '../../components/homepages/footer/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Our/>
    <Menu/>
    <Satisfied/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default Home