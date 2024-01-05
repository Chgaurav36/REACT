import React, { useContext } from 'react'
import HeroSection from './HeroSection'
import { AppContext } from './context/productContext'


const About = () => {

  const myName = useContext(AppContext)


  const data = {
    name: "Shop Now"
  }
  return <>
  {myName}
  <HeroSection mydata = {data}/>
  
  </>
}

export default About
