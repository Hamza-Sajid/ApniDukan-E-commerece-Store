import { createContext , useContext, useEffect, useReducer} from "react";
import ProductReduer from '../Reducers/ProductReducer';

const api = 'https://api.pujakaitem.com/api/products';

const ProductContext = createContext();

const initialState ={
    isLoading: false,
    isLoaded: false,
    isAnyError: false,
    products: [],
    featureProducts: []
}  

const ProductProvider = ({children})=>
{
    
    //Reducer
    const [state,dispatch]= useReducer(ProductReduer,initialState);
    
    
    const fetchProducts = async (api)=>
    {         //use CHOOTA TO ASK FOR SOME FUNCTION        
        dispatch({ type: "API-TRYING "});
        try {
            const res = await fetch(api);
            const products = await res.json();
            dispatch({type:'API-LOADING',payload:products})
            
        } catch (error) {
            dispatch({type:'API-ERROR'})
        }}

            useEffect(() => {
            fetchProducts(api);
            
            }, [0,initialState])
    return(
        <ProductContext.Provider value={{...state}}>
            {children}
        </ProductContext.Provider>
    )
}

//Hook
const useProductContext = () => {
    return useContext(ProductContext);
  };
  
export {ProductProvider, ProductContext , useProductContext};