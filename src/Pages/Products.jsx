import React from 'react'
import FilterSelection from '../Components/FilterSelection'
import ProductList from '../Components/ProductList'
import Sorting from '../Components/Sorting'


function Products() {

  
  return (
    <div style={{background:'white'}} className='p-6 flex'>

    <div className='h-screen w-1/5'>
      <FilterSelection/>
      </div>
<div className=' w-full'>
  <div className=' m-3'>    <Sorting/>   </div>
      
<div className='bg-gray-50'>
<ProductList/>
</div>
  
      </div>

    </div>
  )
}

export default Products