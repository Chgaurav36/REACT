import React from 'react'
import HeroSection from './HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeatureProduct from './components/FeatureProduct';



const Home = () => {

  const data = {
    name: "Our Store"
  }
  return <>
  <HeroSection mydata = {data}/>
  <FeatureProduct/>
  <Services/>
  <Trusted/>
  
  </>
  
};



export default Home
