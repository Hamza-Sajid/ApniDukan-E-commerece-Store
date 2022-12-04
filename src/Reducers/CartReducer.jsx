export const cartReducer  =(state, action)=>
{
    switch(action.type)
    {
        case 'ADD_TO_CART':
            let   {id,selectedColor,quantity,data} = action.payload;      
        
           // console.log(data)
            const productObj = {
                id:id,
                name:data.name,
                color:data.colors[selectedColor],
                amount:quantity,
                image:data.image[0].url,
                price:data.price,
            }
            
            return{
                ...state,
                //Method to push element into an array it was difficult so note it
                cart:[...state.cart,productObj],
                total_price: state.total_price + productObj.price
                }
        default:
            return action.state;
    }
}