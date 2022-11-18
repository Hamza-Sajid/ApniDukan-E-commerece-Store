export  const filterReducer = (state,action)=>
{
    switch(action.type)
    {

        case "LOAD_FILTER_PRODUCTS":
            return{
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            }

        case "SET_GRID_VIEW":
            return{
                ...state,
                grid_view:true
            }


        case "UPDATE_FILTER_VALUE":
            const {name,value}=action.payload;
            return{
                ...state,
                
            }

        default: return state
    }
}


