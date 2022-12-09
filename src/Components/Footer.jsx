import React from 'react'
import { Text , Input, Button } from '@chakra-ui/react'
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: 'color',
                backgroundColor: 'white',
                height: 3
            }}
        />
    );
    
  return (
    <div className='' style={{background:'rgb(26 15 52)'}}>
        <div className='flex flex-wrap text-white p-8 justify-around  w-full lg:w-3/4 md:w-3/4 mx-auto'>

            <div className='md:w-1/3 lg:w-1/3 w-full'>
                <Text fontSize={'lg'} className="font-bold">Apni Dukkan</Text>

                    <Text  fontSize={'sm'}>Buy and sell your product with few taps,we are providing the most immersive experiance in buying and selling by maintaining highest standard in the industry. </Text>
            </div>

                <div>
                <Text fontSize={'lg'} className="font-bold mt-4 lg:mt-0 md:mt-0 ">Subscribe to get important updates</Text>
                <Input className='mt-4' variant='outline' placeholder='Email @' />
                <Button className=' mt-4'  colorScheme='blackAlpha'>Subscribe</Button>
                </div>

                    <div className=' w-full lg:w-auto md:w-auto'>
                    <Text fontSize={'lg'} className="font-bold ">Follow us</Text>
                    <TwitterIcon style={{fontSize:'35'}}/> <YouTubeIcon style={{fontSize:'35'}}/> <InstagramIcon style={{fontSize:'35'}}/>
                    </div>

                        <div>
                        <Text fontSize={'lg'} className="font-bold">Contact us</Text>
                        <Text fontSize={'lg'}>+9200111222</Text>
                        </div>

        </div>
        
            
            <ColoredLine color="white" />


        <div className='flex flex-wrap w-full  md:w-2/4 lg:w-2/4 justify-around m-auto text-white'>
            <div className='     w-full text-center'>
            <Text fontSize={'lg'}>©2022 All Right Reserved By ApniDukan</Text>
            </div>

                <div className=' w-full text-center'>
                <Text fontSize={'lg'}>Privacy Policy</Text>
                <Text fontSize={'lg'}>Terms & Conditions</Text>
                </div>
        </div>
    </div>
  )
}

export default Footer