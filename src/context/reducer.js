export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    // case "FILTERED_PRODUCT":
    //   const filteredProduct = state.products.filter((product) => {
    //     product.category === action.payload;
    //   });
    //   return { ...state, products: filteredProduct };

    case "ADD_TO_CART":
      const isExisted = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (isExisted) {
        return state;
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }

    case "REMOVE_FROM_CART":
      const removedProduct = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      return { ...state, cart: removedProduct };

    default:
      return state;
  }
};
