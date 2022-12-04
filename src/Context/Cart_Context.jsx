import { createContext, useContext, useReducer } from "react";
const CartContext = createContext();
import {cartReducer} from '../Reducers/CartReducer';
const CartProvider = ({children})=>
{

    const initialState ={
        cart:[],
        color:"RGB",
        total_item:"",
        total_price:0,
        shipping_fee:300,
    };

    const [state,dispatch]=useReducer(cartReducer,initialState);

    const addToCart = (id,selectedColor,quantity,data)=>
    {
        console.log("Going to work on the caart")
        
        dispatch({type:'ADD_TO_CART',payload:{id,selectedColor,quantity,data}});
        

    }

    return(
        <CartContext.Provider value={{...state,addToCart}}>
            
            {children}

        </CartContext.Provider>
    )
}

const userCartConsumer = ()=>
{
    return useContext(CartContext);
};

export {userCartConsumer , CartProvider , CartContext};