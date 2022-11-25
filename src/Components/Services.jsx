import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ContactlessIcon from '@mui/icons-material/Contactless';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Heading, Text} from '@chakra-ui/react';
function Services() {
  return (
    <div className='flex flex-wrap mt-4 lg:mt-0 md:mt-0  md:relative md:bottom-20    lg:relative lg:bottom-20  justify-center items-center'>
        <div className='p-4 bg-gray-100 h-32 rounded-xl items-center text-center flex mr-8'>
            
            <div>
            <div className=' bg-white block m-auto border divide-solid w-14 h-14 rounded-full'>
                <p className='mt-3'>
                    
                <LocalShippingIcon className='fill-purple-700' />    
                </p>
            </div>
            
            <Text className='mt-2'  fontSize='xl' as='h5'>
            Super Fast & Free Delivery
  </Text>
  
            
        </div>
        </div>
        
        <div className='flex flex-wrap justify-center items-center flex-col mt-4 lg:mt-0 md:mt-0'>

            <div>
            <div className='p-4 bg-gray-100 h-24 rounded-xl items-center text-center flex mr-8'>
            <div className='bg-white border divide-solid w-14 h-14 rounded-full'>
                <p className='block m-auto mt-3'>
                <ContactlessIcon  fontSize="large" className='fill-purple-700' />    
                </p>
                
            </div>
            <Text className='mt-2 ml-4'  fontSize='xl' as='h5'>
            No-Contact Shiping  </Text>
            
                <h2></h2>
            </div>

            </div>


            <div className='p-4 bg-gray-100 h-24 rounded-xl items-center text-center flex mr-8 mt-4'>
            <div className='bg-white border divide-solid w-14 h-14 rounded-full'>
                <p className='block m-auto mt-3'>
                <AccountBalanceWalletIcon fontSize="large" className='fill-purple-700' />    
                </p>
            </div>
            <Text className='mt-2 ml-4'  fontSize='xl' as='h5'>
            Money-back Grunteed </Text>
                
            </div>
        </div>

        <div className=' mt-4 lg:mt-0 md:mt-0 p-4 bg-gray-100 h-32 rounded-xl flex items-center'>
            <h2>
            <div className='bg-white block m-auto  border divide-solid w-14 h-14 rounded-full'>
                <p className='mt-3 ml-2  '>
                <ReceiptIcon fontSize="large" className='fill-purple-700' />    
                </p>
            </div>
            <Text className='mt-2 ml-4'  fontSize='xl' as='h5'>
            Super Secure Payment System</Text>
                
            </h2>
        </div>


    </div>
  )
}

export default Services