export const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return {
        ...state,
        all_products: action.payload,
      };
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        all_products: [...action.payload],
      };

    case "UPDATE_MOBILE": {
      let { all_products } = state;
      let mobile = [...all_products];

      mobile = mobile.filter((e, index) => {
        return e.category == "mobile";
      });
      return {
        ...state,
        fiter_products: mobile,
      };
    }


    //handle laptop category

    case "UPDATE_LAPTOP": {
        let { all_products } = state;
        let mobile = [...all_products];
  
        mobile = mobile.filter((e, index) => {
          return e.category == "laptop";
        });
        return {
          ...state,
          fiter_products: mobile,
        };
      }

      //handle watch cateogry
      case "UPDATE_WATCHES": {
        let { all_products } = state;
        let mobile = [...all_products];
  
        mobile = mobile.filter((e, index) => {
          return e.category == "watch";
        });
        return {
          ...state,
          fiter_products: mobile,
        };
      }
    //good one case to be handled

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        text: value,
      };

    case "UPDATE_SEARCH":
      
      const { text } = state;
      var { all_products } = state;
      let tempProducts = [...all_products];
      

      if (text) {
        tempProducts = tempProducts.filter((e) => {
          return e.name.toLowerCase().includes(text);
        });
      }

      return {
        ...state,
        fiter_products: tempProducts,
      };

      case 'ADJUST_PRIE_VALUE':
        const {val} = action.payload;
        var {all_products} = state;
         
        let price_value = [...all_products];
          
        if (val) {
            console.log(val);

            price_value = price_value.filter((e) => {
                
            return e.price<val;
          });
        }
        console.log(price_value);
        return{
            ...state,
            price_value : val,
            fiter_products:price_value
        }

        case 'CLEAR_FILTER':
            var empty = '0';
            return{
                ...state,
                fiter_products : fiter_products[0]
            }

    default:
      return state;
  }
};
