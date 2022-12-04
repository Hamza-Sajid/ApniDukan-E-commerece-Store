import React from 'react'
import '../App.css';
import Banner from '../assets/banner.jpg';
import {Heading, Button} from '@chakra-ui/react';
import GppGoodIcon from '@mui/icons-material/GppGood';
import { NavLink } from 'react-router-dom';
function HeroSection() {
  return (
    <>
    <div className=' mt-4  w-full'>
    <img className='rounded-xl sm:w-2/3 sm:h-2/3 md:h-5/6 lg:h-5/6 lg:w-4/5 md:w-4/5  m-auto lg:ml-28 md:ml-28 sm:ml-2  mt-2 ' src={Banner}></img>
<div className='text-center ml-40 relative bottom-12 w-2/12'>
    <Heading  className=' w-40 md:w-72 lg:w-72 text-sm  md:text-3xl lg:text-3xl md:ml-96 md:relative md:bottom-64 md:left-44 lg:ml-96 lg:relative lg:bottom-64 lg:left-44   bannerFont'  width={'2xl'} as='h3'   color={'rgb(142,56,179)'}>
    Shopping to stay happy 
  </Heading>    

  
  </div>

    </div>

    <NavLink to={'/products'}>
    <Button className='md:relative md:bottom-72 md:left-48 lg:relative lg:bottom:72 lg:left-48  mt-4 w-40 block m-auto' colorScheme='purple' variant='outline' size={'lg'} >
    Shop Now
  </Button>
  </NavLink>

  <div className=' md:relative md:bottom-52 md:ml-56 lg:bottom-52 lg:pl-56  mt-4 text-center   '>
    <GppGoodIcon style={{color:'green'}}/> <p className='inline font-black'>Award wining 24/7 customer service</p>
  </div>
      </>
  )
}

export default HeroSection