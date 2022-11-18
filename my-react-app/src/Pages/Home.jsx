import React from 'react'
import FeaturedProducts from '../Components/FeaturedProducts'
import HeroSection from '../Components/HeroSection'
import Services from '../Components/Services'
import TrustedBy from '../Components/TrustedBy'
function Home() {
  return (
    <div className=''>

        <HeroSection/>

        <FeaturedProducts />
        <Services/>

        
        <TrustedBy/>

        


    </div>
  )
}

export default Home