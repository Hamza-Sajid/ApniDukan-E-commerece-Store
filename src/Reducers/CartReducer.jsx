export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, selectedColor, quantity, data } = action.payload;

      // console.log(data)
      const productObj = {
        id: id,
        name: data.name,
        color: data.colors[selectedColor],
        amount: quantity,
        image: data.image[0].url,
        price: data.price,
      };
      return {
        ...state,        
        //Method to push element into an array it was difficult so note it
        cart: [...state.cart, productObj],
        total_price: state.total_price + productObj.price,
      };

    case "REMOVE_ITEM":
      let { item, index2 } = action.payload;

      let newValues = state.cart.filter((e) => {
        return (
          //I am passing id 1 now it travewrse all element and return only those values
          //which are not = the providede values
          e.id != item
        );
      });

      return {
        ...state,
        //here i am not creating the replica using rest operator....
        //becuase it will create an another array and push updated
        //values into that which will not make any sense on frontend
        //becuase in cart.jsx we are traversing on cart 1st array.

        cart: newValues,
      };
    default:
      return action.state;
  }
};
