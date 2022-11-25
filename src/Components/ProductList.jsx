import React, { useContext } from "react";
import { Button, Image, Text } from "@chakra-ui/react";
import { useProductContext } from "../Context/ProductContext";
import { FilterConsumer } from "../Context/Filter_Context";
import { NavLink } from "react-router-dom";
import Rating from "./Rating";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

function ProductList() {
 
 const {products , isLoading} = useProductContext();
const {fiter_products} = FilterConsumer();
 function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


console.log(fiter_products)
  return (
  <div>
 
    <div className=" p-1 gap-x-4 flex  flex-wrap w-full overflow-hidden bg-white">
      {isLoading === true ? (
        <h2>Loading </h2>
      )
      :
      fiter_products.length!==0 ? 
       (
       
        fiter_products.map((item, index) => {
            
          const randomNumber = () => {
            return Math.round(Math.random() * (80 - 11) + 11); // Whole number between min and max
          };
          const name = capitalizeFirstLetter(item.name);
          const number = randomNumber();
          return (
            <NavLink to={`SingleProduct/${item.id}`}>
            <>
              <div className="w-80 h-2/3 ml-2  mt-4  border solid border-gray-300 hover:border-4 hover:solid hover:border-purple-100 hover:rounded hover:cursor-pointer hover:shadow-sm hover:shadow-gray-900 ">
                <img className="w-full h-full" src={item.image} />

                <Text className="text-gray-600 font-medium text-2xl ml-4 mt-2">
                  {name}
                </Text>
                <div className="flex justify-between mt-2 ml-4">
                  <Text className="font-bold text-xl">Rs. {item.price}</Text>
                  <Text className="bg-purple-600 text-white rounded-full p-3 font-extrabold mr-2">
                    {number}% Off
                  </Text>
                </div>
                <div className="mt-2 ml-4">
                  <Rating value={item.stars} />
                </div>

                <div className="flex mt-1 items-center ml-2 p-2">
                  <LocalShippingOutlinedIcon className="text-gray-500" />{" "}
                  <Text className="ml-2 font-light text-sm text-gray-600">
                    Free Shipping
                  </Text>
                </div>
              </div>
            </>
            </NavLink>
          );
        })       
      ) 
      
      :  (

        products &&
        products.map((item, index) => {
            
          const randomNumber = () => {
            return Math.round(Math.random() * (80 - 11) + 11); // Whole number between min and max
          };
          const name = capitalizeFirstLetter(item.name);
          const number = randomNumber();
          return (
            <NavLink to={`SingleProduct/${item.id}`}>
            <>
              <div className="w-80 h-2/3 ml-2  mt-4  border solid border-gray-300 hover:border-4 hover:solid hover:border-purple-100 hover:rounded hover:cursor-pointer hover:shadow-sm hover:shadow-gray-900 ">
                <img className="w-full h-full" src={item.image} />

                <Text className="text-gray-600 font-medium text-2xl ml-4 mt-2">
                  {name}
                </Text>
                <div className="flex justify-between mt-2 ml-4">
                  <Text className="font-bold text-xl">Rs. {item.price}</Text>
                  <Text className="bg-purple-600 text-white rounded-full p-3 font-extrabold mr-2">
                    {number}% Off
                  </Text>
                </div>
                <div className="mt-2 ml-4">
                  <Rating value={item.stars} />
                </div>

                <div className="flex mt-1 items-center ml-2 p-2">
                  <LocalShippingOutlinedIcon className="text-gray-500" />{" "}
                  <Text className="ml-2 font-light text-sm text-gray-600">
                    Free Shipping
                  </Text>
                </div>
              </div>
            </>
            </NavLink>
          );
        })
      )}
    </div>
    </div>
  );
}

export default ProductList;
