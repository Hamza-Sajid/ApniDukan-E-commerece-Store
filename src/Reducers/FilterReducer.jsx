export  const filterReducer = (state,action)=>
{
    switch(action.type)
    {
        case "LOAD_PRODUCTS":   
        return{
                ...state,
               all_products: action.payload,
            }
        case "LOAD_FILTER_PRODUCTS":
            return{
                ...state,  
                all_products: [...action.payload],
            }


            //good one case to be handled

        case "UPDATE_FILTERS_VALUE":
        
                const { name, value } = action.payload;
            
                // const {text} = state;
                
            // let {all_products} = state;
            // let tempProducts = [...all_products];

            

            // if(text)
            // {
            //     tempProducts = tempProducts.filter((e)=>
            //     {
                   
            //         return e.name.toLowerCase().includes(text);
            //     })
            // }
            
        return{
                ...state,
                text:value
            // fiter_products: tempProducts,
        }

     

        case "UPDATE_SEARCH":
                console.log("i am going to handle everything")
        const {text} = state;
                
            let {all_products} = state;
            let tempProducts = [...all_products];
            console.log(text)

            if(text)
            {
                tempProducts = tempProducts.filter((e)=>
                {
                   
                    return e.name.toLowerCase().includes(text);
                })
            }
            
            return{
                ...state,
            fiter_products: tempProducts,
        }


        default: return state
    }
}


