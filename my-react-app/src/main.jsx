import React from 'react'
import './index.css';
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom';
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/public-sans';
import {ProductProvider} from  './Context/ProductContext';
import {filterProvider} from './Context/Filter_Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
   <ProductProvider>
    <filterProvider>
    <BrowserRouter>
      
    <App />
    
    </BrowserRouter>
    </filterProvider>
    
    </ProductProvider>
    </ChakraProvider>
  </React.StrictMode>
)
