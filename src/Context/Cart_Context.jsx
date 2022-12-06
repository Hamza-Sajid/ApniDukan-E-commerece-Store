import { createContext, useContext, useEffect, useReducer } from "react";
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
        dispatch({type:'ADD_TO_CART',payload:{id,selectedColor,quantity,data}});
     
    }
    
        const removeItem = (item,index2) =>
        {
            
            dispatch({type:'REMOVE_ITEM', payload:{item,index2}})
        }

        useEffect(() => {
            localStorage.setItem('orderdItems:', JSON.stringify(state.cart));        
        }, [state])
        
        
    return(
        <CartContext.Provider value={{...state,addToCart , removeItem}}>
            
            {children}

        </CartContext.Provider>
    )
}

const userCartConsumer = ()=>
{
    return useContext(CartContext);
};

export {userCartConsumer , CartProvider , CartContext};