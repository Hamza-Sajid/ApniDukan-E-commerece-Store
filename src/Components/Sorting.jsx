import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
function Sorting() {
  return (
    <div className='pl-4'>
      <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem>
  <NavLink to={'/'}>
    <BreadcrumbLink >Home</BreadcrumbLink>
    </NavLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
  
    <BreadcrumbLink href='#'>Products</BreadcrumbLink>
  </BreadcrumbItem>

  
</Breadcrumb>
    </div>
  )
}

export default Sorting