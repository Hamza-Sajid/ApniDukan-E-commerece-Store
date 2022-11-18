import React, { useContext } from 'react'
import NotFound from '../assets/404.svg';
import { Button, ButtonGroup } from '@chakra-ui/react'
import HomeIcon from '@mui/icons-material/Home';
function ErrorPage() {

  
 
  return (
    <div>
     
      <div className='p-12 w-3/4 block m-auto'>
          <img  className='w-full  lg:w-2/4 md:w-2/4 block m-auto' src={NotFound}></img>
          <Button size={'lg'} className='block m-auto mt-8 text-white bg-purple-600' rightIcon={<HomeIcon className=' relative top-1' />} colorScheme='' variant='outline'>
    Go Back
  </Button>
        </div>
    </div>
  )
}

export default ErrorPage