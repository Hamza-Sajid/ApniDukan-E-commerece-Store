import './App.css'
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Cart from './Pages/Cart';
import SingleProduct from './Pages/SingleProduct';
import Products from './Pages/Products';
import Contact from './Pages/ Contact';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Error from './Pages/ErrorPage';
function App() {
  return (
    <div className="App">
     <NavBar/>

     <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<AboutUs/>}> </Route>
        <Route path='/Contact' element={<Contact/>}> </Route>
        <Route path='/Cart' element={<Cart/>}> </Route>
        <Route path='/Products' element={<Products/>}> </Route>
        <Route path='/SingleProduct/:id' element={<SingleProduct/>}> </Route>
        <Route path='products/SingleProduct/:id' element={<SingleProduct/>}> </Route>
        <Route path='/*' element={<Error/>}> </Route>

     </Routes>
     <Footer/>
      </div>
  )
}

export default App
