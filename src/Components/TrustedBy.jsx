import React from 'react'
import {Heading} from '@chakra-ui/react';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
function TrustedBy() {
  return (
    <div className='bg-gray-100 mt-8'>
         <Heading as='h2' size='lg' className='text-center pt-8' noOfLines={1}>
    Trusted By 100+ Companies
  </Heading>

        <div className='flex justify-center w-2/4  m-auto mt-4 flex-wrap'>
            <div className=' w-24 h-20 block m-auto'>
            <TwitterIcon  style={{fontSize:'60' , color:'#007FFF'}}/> 
            </div>

            {/* 2nd company */}

            <div className=' w-24 h-20 block m-auto'>
            <YouTubeIcon  style={{fontSize:'60',  color:'#CC0000'}}/> 
            </div>


            <div className=' w-24 h-20 block m-auto'>
            <InstagramIcon style={{fontSize:'60', color:'#F6076E'}}/> 
            </div>

            <div className=' w-24 h-20 block m-auto'>
            <WhatsAppIcon style={{fontSize:'60', color:'#43E961'}}/> 
            </div>

         
        </div>
    </div>
  )
}

export default TrustedBy