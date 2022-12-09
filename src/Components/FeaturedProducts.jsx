import React, { useContext } from "react";
import { Button, Text } from "@chakra-ui/react";
import { useProductContext } from "../Context/ProductContext";
import { NavLink } from "react-router-dom";
function FeaturedProducts() {
  const { isLoading, featureProducts, ProductContext } = useProductContext();
  //Function to make title first letter capital

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className=" w-full relative bottom-36  mt-36 md:mt-0 lg:mt-0">
      <Text
        fontSize="4xl"
        className="relative top-6 font-medium text-center newFont"
      >
        Deal of the Day
      </Text>

      <div className="flex md:flex-nowrap lg:flex-nowrap flex-wrap w-3/4 m-auto ">
        {isLoading == true ? (
          <h2>Loading data</h2>
        ) : (
          featureProducts.map((item, index) => {
            //price function to make number in standard value
            const price = Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "PKR",
            }).format(item.price);

            //making title first letter capital
            const name = capitalizeFirstLetter(item.name);

            return (
              <NavLink to={`SingleProduct/${item.id}`}>
                <div className=" w-2/3 h-full m-auto mt-12">
                  <div className="    ">
                    <img
                      className="w-full h-full rounded"
                      src={item.image}
                    ></img>
                  </div>
                  <Text
                    fontSize="xl"
                    className="font-semibold text-center mt-4"
                  >
                    {name}
                  </Text>
                  <Text
                    fontSize="xl"
                    className="mt-2 mb-2    font-light text-center"
                  >
                    {price}
                  </Text>

                  <Button
                    style={{ background: "rgb(26 15 52)", color: "white" }}
                    className="m-auto block text-center"
                  >
                    Add to Basket
                  </Button>
                </div>
              </NavLink>
            );
          })
        )}
      </div>
    </div>
  );
}

export default FeaturedProducts;
