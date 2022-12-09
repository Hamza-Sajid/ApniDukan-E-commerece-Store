//1- create the conetext
//2- Make a provider function ( you can also make useThatProvider within the Context for ease)
//3 - useContext / useThat function is you have created an custom hook
// A very important point to remember always use small 'type' while dispatching
// otherwise it will throw an error
import { createContext, useContext, useEffect, useReducer } from "react";
import { filterReducer } from "../Reducers/FilterReducer";
import { useProductContext } from "./ProductContext";

const FilterContext = createContext();

const initialState = {
  all_products: [],
  loading: false,
  featured_products: [],
  text: "",
  fiter_products: [],
  price_value: "0",
  maxProductValue: "",
  minProductValue: "",
};

const FilterProvider = ({ children }) => {
  var { products } = useProductContext();

  const [state, dispatch] = useReducer(filterReducer, initialState);

  const handlePriceChange = (e) => {
    const val = e.target.value;
    dispatch({ type: "ADJUST_PRIE_VALUE", payload: { val } });
  };

  const updateMobile = () => {
    dispatch({ type: "UPDATE_MOBILE" });
  };

  const updateLaptop = () => {
    dispatch({ type: "UPDATE_LAPTOP" });
  };
  const updateWatches = () => {
    dispatch({ type: "UPDATE_WATCHES" });
  };

  const clearFilter = () => {
    dispatch({ type: "CLEAR_FILTER" });
  };

  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  const callMe = async () => {
    // const api = await fetch('https://api.pujakaitem.com/api/products');
    // const res = await api.json();

    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  };

  useEffect(() => {
    dispatch({ type: "UPDATE_SEARCH" });
  }, [state.text]);
  useEffect(() => {
    callMe();
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        clearFilter,
        handlePriceChange,
        updateWatches,
        updateLaptop,
        updateMobile,
        updateFilterValue,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const FilterConsumer = () => {
  return useContext(FilterContext);
};

export { FilterConsumer, FilterProvider, FilterContext };
