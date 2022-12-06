import { Text } from '@chakra-ui/react'
import React from 'react'
import {userCartConsumer} from '../Context/Cart_Context';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
// import {userCartConsumer} from '../Context/Cart_Context';

function Cart() {

  let {shipping_fee, cart , total_price , removeItem} = userCartConsumer();

  // cart = cart.productObj;
  console.log(cart)
  return (
    <div>

    {/* ALL UI ELEMENT ARE GOING TO BE HERE */}

      <div className='flex p-10 '>

      {/* THIS DIV WILL BE MANAGING THE LIST OF ITEMS */}
        <div className='bg-white w-3/5 '>

          <Text  className='font-bold text-2xl bannerFont mt-6 ml-12 '>
            SHOPPING CART
          </Text>

      {/* //product list item */}
      {
        cart  && 
        
        cart.length>=1 ? (
        cart.map((element,index)=>
        {
         return(
          <div  className='flex m-auto w-full justify-center items-center mt-6  p-4 '>
            <div className='mr-4'>
              <img className='rounded-lg border border-solid border-gray-200' width={150} height={150} src={element.image}></img>
            </div>
            {/* handling the discription */}
              <div className=''>
                <Text className='font-medium newFont'>{element.name}</Text>
                
                <div className='flex items-center'>
                <div>
                <Text className='text-gray-400 newFont text-sm font-thin'>Color:   </Text></div>
                  <div className='ml-2'>
                  <div style={{background: element.color , width:'10px ' , height:'10px' , borderRadius:'10px', display:'block'}}> </div>
                    </div>
                </div>
                <Text  className='text-gray-400 newFont  text-sm  font-extralight'>Qty. {element.amount}</Text>
              </div>
                  <div className=' w-2/5 text-right'>
                    <Text className='font-thin text-gray-400  text-xl newFont'>
                      R.s {element.price}
                    </Text>
                  </div>
<div className=' relative -top-8'>
  {/* awlays use an function inside onClick when you want to pass some argument's */}
                  <button onClick={()=> removeItem(element.id , index) } className='text-gray-400 text-sm'><HighlightOffOutlinedIcon/></button>
                  </div>
        </div>
        
         )
        })
        ) : <h2>No product</h2>
      }
        

          {/* //2nd div code */}

          

          </div>
    {/* THIS DIV WILL BE MANGING THE PRICE OF ITEMS */}
          <div className='bg-gray-100  w-2/5  items-center '>

              {/* //User information */}
              <div className='flex flex-col'>
                
                  <div className='w-4/5 flex mt-12  m-auto'>
                      <div className=' w-4/5'>
                        <Text className='font-medium newFont'>Adnan</Text>
                        

                        <Text className='font-thin text-sm newFont text-gray-600'>F-8 Markaz /ISB</Text>
                        

                        <Text className='newFont text-sm text-gray-600 '>Pakistan</Text>
                      </div>

                      <div className='text-center items-center'>

                        <button className='text-orange-500'>Edit</button>
                      </div>
                  </div>


                  

              {/* PAYMENT METHODS */}
                
              <div className='w-4/5 flex mt-12  m-auto'>
                      <div className=' w-4/5'>
                      <Text className='font-medium newFont'>Payment Method</Text>
                        
                      <Text className='newFont text-sm text-gray-600 '>Credit Card</Text>
                      <Text className='newFont text-sm text-gray-600 inline '>00-1122-330</Text>
                        <img width={30} className="inline ml-2 rounded-lg" src={'https://cdn.vox-cdn.com/thumbor/UKSLdttYoIK2bv1gd231rqL4eiQ=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg'}></img>
                      </div>

                      <div className='text-center items-center'>

                      <button className='text-orange-500'>Edit</button>
                      </div>
                  </div>



                {/* //DICOUNT CODE UI  */}


              <div>
                <Text className='newFont text-center mt-8 font-semibold text-gray-700'>Do you have any discount code?</Text>
                <Text className='newFont text-center text-sm font-thin text-gray-700'>Only one discount code per order can be applied.</Text>
                <div className='  flex justify-around mt-3 '>
                  <div className='w-full'> 
                  
                  <input className='ml-16 w-3/4 bg-gray-100 border-2 p-3 border-solid border-gray-300 rounded h-12' type="text" placeholder='Your code here'></input> 
                  
                   </div>
                  <div> <button className='mr-12 bg-gray-700 text-white w-28 h-12 rounded newFont'>APPLY</button> </div>
                  
                  </div>
              </div>



              {/* COST CALCULATION'S */}


              <div className='flex  flex-col mt-12  m-auto w-4/5'>
                  <div className=''>
                    <Text className='inline newFont text-sm text-gray-600 '>Subtotall</Text>

                    <Text className='inline float-right newFont text-sm text-gray-600 '>R.s {total_price}</Text>
                    
                  </div>

                  <div className='mt-2'>
                    <Text className='inline newFont text-sm text-gray-600'>Shipping Cost</Text>

                    <Text className='inline float-right newFont text-sm font-bold text-gray-600'>{shipping_fee}</Text>
                  </div>

                  <div className='mt-2'>
                    <Text className='inline newFont text-sm text-gray-600'>Discount</Text>

                    <Text className='inline float-right newFont text-sm text-gray-600'>0</Text>
                  </div>
              </div>


            {/* CHECKOUT BUTTON */}

            <div className='flex mt-10   w-3/4 justify-between'>
                <div className='ml-12'>
                  <Text className='inline float-right newFont text-sm text-gray-600'>Totall incl.VAT</Text>
                  <Text className='text-2xl font-bold text-gray-700 '>Rs{shipping_fee + total_price}</Text>
                </div>

                <div>
                  <button className='newFont bg-pink-500  rounded text-white w-40 p-2 h-12'>
                    <ShoppingCartCheckoutOutlinedIcon className='inline text-gray-50  mr-2'/>
                    CHECKOUT
                  </button>
                </div>
            </div>

              </div>
          </div>

      </div>
{/* *************** */}
    </div>
  )
}

export default Cart