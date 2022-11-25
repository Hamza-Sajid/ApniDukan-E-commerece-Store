import React from 'react'
import './index.css';
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom';
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/public-sans';
import {ProductProvider} from  './Context/ProductContext';
import {FilterProvider} from './Context/Filter_Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
   <ProductProvider>
    <FilterProvider>
    <BrowserRouter>
      
    <App />
    
    </BrowserRouter>
    </FilterProvider>
    
    </ProductProvider>
    </ChakraProvider>
  </React.StrictMode>
)
