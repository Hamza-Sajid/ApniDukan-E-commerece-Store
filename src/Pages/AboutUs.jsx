import React from 'react'
import Contact from '../assets/contact.jpg';
import {Heading, Input, Button ,Text , Textarea , Stack, Highlight} from '@chakra-ui/react';
function AboutUs() {
  return (
    <div>
        <div className='bg-gray-800 relative top-0  lg:top-80 md:top-80 w-50 block m-auto rounded'>
            <Heading className='  text-center text-white'>
                Contact Us
            </Heading>
        </div>
        <img className='w-full md:w-3/5 lg:w-3/5 block m-auto  h-48 md:h-80 lg:h-80 ' src={Contact}></img>


        <Heading className='mt-8 text-center' as='h2' size='xl'>
    Let's start a conversation
  </Heading>

    <div className='flex flex-wrap mt-2 p-16'>

        <div>
                <Text className='font-semibold mb-4' fontSize='2xl'>Ask how we can help you:</Text>

                <Text fontSize='xl'>See our platform In action</Text>

                <Text fontSize='md'>Request a personalized demo, or singup for a 
                <Highlight
    query='30 days free trial'
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'blue.100' }}>
                     30 days free trial
                </Highlight>
                </Text>

                <Text className='mt-2' fontSize='xl'>Master performace Markeeting</Text>

                
                <Text fontSize='md'>Learn from our pro courses the secret of trading and making better stores</Text>
                

        </div>



            <div className=' w-full  md:w-2/4 lg:w-2/4  ml:0 md:ml-12 lg:ml-12   mt-12 md:mt-0 lg:mt-0 '>
            <Heading size="sm">Please note that all fields are requried</Heading>

            <Input className='mt-4' variant='outline' placeholder='First Name' />


            <Input className='mt-4' variant='outline' placeholder='Last Name' />


            <Textarea className='mt-4' placeholder='Enter your question / suggestion here' />

            <Stack direction='row' spacing={4} align='center'>
                
                <Button className='block m-auto mt-4' size={'lg'} colorScheme='blue'>Submit</Button>

            </Stack>
            



            </div>
    </div>

    </div>
  )
}

export default AboutUs