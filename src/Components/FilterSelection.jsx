import { Button } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FilterConsumer } from '../Context/Filter_Context';
//import { useFilterCotext } from '../Context/Filter_Context';
//import {FilterContext} from '../Context/Filter_Context';

function FilterSelection() {

  const { text,fiter_products,  all_products , updateFilterValue} = FilterConsumer(); 
  
  
  return (
    <div>
      Search your product
      <input name="text" value={text} type="text" onChange={updateFilterValue}></input>
      <Button className='mt-4 ml-2'>Search</Button>
    </div>
  )
}

export default FilterSelection