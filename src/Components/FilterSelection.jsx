import { Button, Text, Input } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { FilterConsumer } from "../Context/Filter_Context";
//import { useFilterCotext } from '../Context/Filter_Context';
//import {FilterContext} from '../Context/Filter_Context';

function FilterSelection() {
  const {
    clearFilter,
    handlePriceChange,
    price_value,
    text,
    fiter_products,
    all_products,
    updateFilterValue,
    updateWatches,
    updateLaptop,
    updateMobile,
  } = FilterConsumer();

  //states to handle min and max price
  const [lowestPrice, setLowestPrice] = useState(0);
  const [highestPrice, setHighestPrice] = useState(0);

  //AN FUNCTION TO HANDLE MIN AND MAX PRICE OF THE PRODUCT TO HANDLE FILTER RANGE FUNCAITONALITY
  const updateminMax = () => {
    console.log("I AM GOING TO RUN");
    //HERE WE ARE GETTING THE PRICE OF ALL THE PRODUCTS
    var price = all_products.map((e, index) => {
      return e.price;
    });

    //HERE WE ARE GETTING MIN / MAX VALUE OF OUR PRODUCT'S
    var maxPrice = price.reduce((initial, e) => {
      return Math.max(initial, e);
    }, 0);

    var minPrice = price.reduce((initial, e) => {
      return Math.min(initial, e);
    }, 0);

    setHighestPrice(maxPrice);
    setLowestPrice(minPrice);

    console.log(highestPrice);
  };

  useEffect(() => {
    updateminMax();
  }, [0]);

  return (
    <div className="mt-12 bg-gray-50 h-full rounded hidden   lg:block">
      <Text className="pl-2 pt-12 font-semibold  text-lg simpleFont ">
        Search your product:
      </Text>
      <input
        className="bg-gray-100 rounded w-4/5 ml-1 pl-3 pt-1"
        placeholder="MAC"
        step={10}
        name="text"
        min={15000}
        value={text}
        type="text"
        onChange={updateFilterValue}
      ></input>

      <Text className="font-semibold text-lg mt-6 pl-2 simpleFont">
        Categories:
      </Text>
      <div className="pl-2">
        <h3 onClick={updateMobile} className=" mt-1 cursor-pointer">
          Mobile's
        </h3>
        <h3 onClick={updateLaptop} className=" mt-1 cursor-pointer">
          Laptop
        </h3>
        <h3 onClick={updateWatches} className="font-medium mt-1 cursor-pointer">
          Watches
        </h3>
      </div>
      <Text className="font-semibold text-lg mt-6 pl-2 simpleFont">
        Filter Price
      </Text>

      <input
        className="ml-3 cursor-pointer"
        type="range"
        value={price_value}
        onChange={handlePriceChange}
        min={lowestPrice}
        max={highestPrice}
      ></input>
    </div>
  );
}

export default FilterSelection;
