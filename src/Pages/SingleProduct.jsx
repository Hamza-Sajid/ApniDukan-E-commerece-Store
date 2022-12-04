import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import SingleProductNavigation from '../Components/SingleProductNavigation';
import { Spinner , Heading , Text, Button} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import {ChevronLeftIcon , ChevronRightIcon} from '@chakra-ui/icons'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import Rating from '../Components/Rating';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DoneIcon from '@mui/icons-material/Done';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import {userCartConsumer} from '../Context/Cart_Context';

function SingleProduct() {

  const {addToCart} = userCartConsumer();

  

  const [imageNumber,setImageNumber]=useState(0);
  const [colors,setColors]=useState();
  const [selectedColor,setSelectedColor]=useState(0);
  const [quantity,setQuantity]=useState(0);
  const [totallQuantity,setTotallQuantity]=useState();


  const plusQuantity = () =>
  {
    if(quantity<=totallQuantity)
    setQuantity( (e)=> {
      return e+1;
    } )
  }

  const minusQuantity = ()=>
  {
    if(quantity>0)
    {
      setQuantity( (e)=> {
        return e-1;
      } )
    }
    
  }
  const changeColorValue = (index)=>
  {
    setSelectedColor(index)
  }
  const previousImg = ()=>
  {

         

    if(imageNumber>0)
    {
      setImageNumber(e => --e)
    }
  }

  const nextImg = ()=>
  {
    if(imageNumber<3)
    {
      setImageNumber(e => ++e)
    }
  }

  


  const {id} = useParams()
      const [data,setData]=useState();
      // console.log(data);
      const productCall = async ()=>
      {
        const res = await fetch('https://api.pujakaitem.com/api/products?id='+id);
        const resData = await res.json(); 
        
        setColors(resData.colors);
        setData(resData);
        setTotallQuantity(resData.stock);
      }
        useEffect(() => {
         
          
          productCall();
        
        }, [0])
    

    return (
    <div className=''>
      
        {data!=null?

(function () {
  return(
    <>
    <SingleProductNavigation value={data.name}/>
      

      <div className='flex  flex-wrap md:flex-nowrap lg:flex-nowrap  justify-center w-full  lg:w-3/4 md:w-3/4 m-auto p-6 mb-20 '>

        <div className='   lg:w-1/2 md:w-1/2 md:block lg:block flex items-center relative  ' >
         
         
          <div className='flex   w-full justify-center  h-full lg:h-2/3 md:h-2/3'>

<IconButton onClick={previousImg} aria-label='Previous Image' icon={<ChevronLeftIcon />} className=" -left-6 md:left-0 lg:left-0  absolute  md:relative lg:relative top-1/3  md:top-2/4 lg:top-2/4 " />
    {/* Main Product Img Code */}
             <img  className=' max-w-xs hover:scale-110 transition duration-300 ease-in-out rounded m-auto w-full h-full' src={data.image[imageNumber].url}></img>
<IconButton onClick={nextImg} aria-label='Next Image' icon={<ChevronRightIcon />} className=" -right-6 lg:-right-0 md:-right-0  absolute md:relative lg:relative top-1/3 lg:top-2/4 md:top-2/4 " />
            </div>
            

            {/* more pictures code */}
            <div className='hidden  lg:flex md:flex mt-6 justify-around p-1'>
              <img className='w-24 h-24 rounded-lg' src={data.image[1].url}></img>

              <img className='w-24 h-24 rounded-lg' src={data.image[2].url}></img>

              <img className='w-24 h-24 rounded-lg' src={data.image[3].url}></img>

              </div>
        </div>

        <div className='w-full lg:w-1/2 md:w-1/2  ml-0 md:ml-8 lg:ml-8 '>

       {/* Title Code */}
        <Heading className='p-4 text-center md:text-left lg:text-left' as='h2' size='xl'>
        {data.name}
  </Heading>
  
          {/* Description Code */}
<Text fontSize='xl' className='p-2 hidden md:block lg:block'>
          {data.description}
          </Text>  



          <div className='flex items-center'>

          <Text fontSize='xl'  className=' md:hidden lg:hidden font-thin mr-4 md:mr-0 lg:mr-0 '>
          Rating
          </Text>

          <Rating  value={data.stars}/>
          <Text fontSize='xl'  className='p-2 font-thin'>
          {data.reviews} reviews
          </Text>
          </div> 

          {/* Quantity Code  */}

          <h2 className='text-gray-500 mt-4 font-normal text-lg md:block lg:block hidden'>Quantity</h2>
            <div className='md:flex  lg:flex items-center  mt-2 hidden'>
          <Button onClick={minusQuantity}>-</Button>
              <h2 className='ml-4  mr-4 font-semibold' >{quantity}</h2>
          <Button onClick={plusQuantity}>+</Button>
          </div>

    {/* Add To Bag Code */}
    <div className=' w-2/4 h-1/4 mt-4 hidden md:block lg:block'>
       <NavLink to="/cart">
          <Button  onClick={()=> addToCart( id,selectedColor,quantity , data)} className='mt-8  w-full h-2/4 ' leftIcon={<ShoppingBagIcon />} colorScheme='purple'  size={'lg'} variant='solid'>
    Add to Bag
  </Button>
  </NavLink>
  
  </div>
  <div className=' w-full hidden lg:block md:block '>
<Text className='text-gray-400 font-light'>
  <LocalShippingIcon className='mr-4'/>
  Free shipping all over Pakistan, risk free  
  <Text className='underline inline ml-2 font-bold'>
   quality guarntee!
  </Text>
  </Text>

  
</div>

    {/* Color Selection Code */}

<div className='flex mt-6 items-center w-3/5  md:block lg:block md:bottom-0 lg:bottom-0 '>
  <div>
  <Text fontSize='xl'  className=' md:hidden lg:hidden font-thin mr-4 md:mr-0 lg:mr-0 '>
    Colors
</Text>
</div>
<div className='flex items-center'>
{colors&& colors.map((e,index)=>
{
  return(
    <>
  <button onClick={ ()=>   changeColorValue(index)} 
  style={{  background:e}} className='ml-4 rounded-full w-10 h-10  '> 


  {
    index==`${selectedColor}`? <DoneIcon/>
    :
    <p></p>
  }
  
  
  </button>
    </>
  )
})}
  </div>
</div>


    {/* MOBILE DESCRIPTION CODE */}


      <div className='mt-12 md:hidden lg:hidden'>
        
          <Text className='font-bold text-2xl mb-2'>
              Description
          </Text>
          
        <Text className='text-lg '>
          {
            data.description
          }
        </Text>
      </div>

        <div className='md:hidden lg:hidden items-center flex justify-center mt-12'>

          <Text className='w-1/4 font-bold text-xl'>
            Quantity
          </Text>
        <NumberInput className=' w-1/3' size='md'  defaultValue={quantity}  min={0} max={totallQuantity}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
        </div>


        {/* MOBILE :: ADD TO CART BUTTON  */}

        <div className=' w-full h-1/4 mt-4  md:hidden lg:hidden'>
       <NavLink to="/cart">
          <Button  onClick={()=> addToCart( id,selectedColor,quantity , data)}  className='mt-8  w-full h-2/4 ' leftIcon={<ShoppingBagIcon />} colorScheme='purple'  size={'lg'} variant='solid'>
    Add to Bag
  </Button>
  </NavLink>
  
  </div>


        </div>


        </div>







    </>
  )
}())
      :
      <Spinner  className='block m-auto' size={'xl'}/>
        }
    
    </div>
  )
}

export default SingleProduct