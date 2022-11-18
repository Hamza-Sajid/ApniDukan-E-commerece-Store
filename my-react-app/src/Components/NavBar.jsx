import React, { useContext, useState } from 'react'
import Logo from '../assets/Logo.png';
import { Button, ButtonGroup, Stack ,Heading} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HouseIcon from '@mui/icons-material/House';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import StorefrontIcon from '@mui/icons-material/Storefront';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
function NavBar() {
    //navigation bar
    const [nav,setNav]=useState(false);

        //handle navigation code

        const handleNav = (e)=>
        {
            e.preventDefault();
            setNav(!nav);
        }

    return (
    <div className='flex bg-white h-16 items-center flex-row justify-around'>
      {name}
        <div className='w-2/3'>
            <img   className='w-36 sm: hidden md:block  lg:block'src={Logo}></img>
            <Button onClick={handleNav} className=' sm: block md:hidden lg:hidden' leftIcon={<HamburgerIcon />} colorScheme='gray' size={'lg'} variant='solid'></Button>
{
nav &&  <div className='bg-gray-400 h-96 absolute mt-2 w-56  sm: block md:hidden lg:hidden  '>

    {/* //buttons card */}
    <div className='block m-auto w-4/5'>
    <Stack direction='column' spacing={6} margin={6}>
  <Button leftIcon={<HouseIcon />} colorScheme='blackAlpha' variant='solid'>
    Home
  </Button>

  <Button leftIcon={<StorefrontIcon />} colorScheme='blackAlpha' variant='solid'>
    Products
  </Button>

  <Button leftIcon={<WhatshotIcon />} colorScheme='blackAlpha' variant='solid'>
    Today Deals
  </Button>

  <Button leftIcon={<ContactPageIcon />} colorScheme='blackAlpha' variant='solid'>
    Contact
  </Button>
  </Stack>

</div>
<p className='block m-auto text-center mt-20'><AddIcCallIcon/>+920011133</p>
</div>

}
           
        </div>
        <div className='w-56 sm: block md:hidden lg:hidden'>
        <Heading as='h2' size='md'>
    Apni Dukan
  </Heading>
  </div>
        <div className='w-2/6 '>
            <nav className='sm: hidden md:contents lg:contents' >
                <ul className='px-3 font-medium text-lg	cursor-pointer'>

                    <li className='inline px-3'>
                        Home
                    </li>

                    <li className='inline px-3'>
                        Products
                    </li>

                    <li className='inline px-3'>
                        Hot Offer's
                    </li>

                    <li className='inline px-3'>
                        Contact
                    </li>
                </ul>
            </nav>
        </div>

            <div className='mr-12'>
                <ShoppingCartIcon/>
                <div className='bg-blue-400 block w-2 h-2 rounded float-right absolute top-3 right-12'>

                </div>
            </div>
    </div>
  )
}

export default NavBar