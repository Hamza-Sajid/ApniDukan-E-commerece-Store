import React from 'react'
import FilterSelection from '../Components/FilterSelection'
import ProductList from '../Components/ProductList'
import Sorting from '../Components/Sorting'


function Products() {

  
  return (
    <div style={{background:'#EFF7FA'}} className='p-6 flex'>

    <div className='bg-blue-400 h-screen w-1/5'>
      <FilterSelection/>
      </div>
<div className='bg-green-400 w-full'>
  <div className='bg-yellow-400 h-36'>    <Sorting/>   </div>
      
<div className='bg-yellow-700'>
<ProductList/>
</div>
  
      </div>

    </div>
  )
}

export default Products