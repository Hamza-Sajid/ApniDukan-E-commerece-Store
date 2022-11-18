import { createContext, useContext, useEffect, useReducer } from "react";
import { ProductContext } from "./ProductContext";
import {filterReducer} from '../Reducers/FilterReducer';

export const FilterContext = createContext();

const initialState = {
    filter_products:[],
    all_products:[],
    name: 'hamza sajid',
}

export const filterProvider = ( {children})=>
{
    //to store the products here we will use UseReducer
    
    const { products} = ProductContext();

    const [state,dispatch]=useReducer(filterReducer,initialState);

    

        useEffect(() => {
         dispatch({type:"LOAD_FILTER_PRODUCTS", payload: products});
        }, [0])
        


    return(
        <FilterContext.Provider value={value="Hamza Sajid"}>
            {children}
        </FilterContext.Provider>
    )

}


//to easily use the context let's create another fuction

export  const useFilterProvider = ()=>
{
    // here we have to pass the context value not of a provider
    return  useContext(FilterContext);

}

