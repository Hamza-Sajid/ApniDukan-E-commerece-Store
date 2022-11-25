const ProductReducer = (state, action) => {
  switch (action.type) {
    case "API-TRYING":
      return {
        ...state,
        isLoading: true,
      };
    case "API-LOADING":
      const featureData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        products: action.payload,
        featureProducts: featureData,
      };
    case "API-ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default ProductReducer;




