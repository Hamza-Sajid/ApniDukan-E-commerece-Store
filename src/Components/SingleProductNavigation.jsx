import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
  import {ChevronRightIcon} from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'
function SingleProductNavigation({value}) {
    
  return (
    <div className='p-6'>
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink>
        <NavLink to="/">
            Home
    </NavLink>
    </BreadcrumbLink>
  </BreadcrumbItem>


  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink>{value}</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
    </div>
  )
}

export default SingleProductNavigation