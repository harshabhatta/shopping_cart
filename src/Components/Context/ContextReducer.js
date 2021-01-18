const contextReducer = (state, action) => {
  let cartProducts;
  switch (action.type) {
    case 'ADD_CART_ITEM':
      const addProduct = state.find((i) => i.id === action.payload.id);
      if (addProduct) {
        cartProducts = state.map((item) =>
          item.id === action.payload.id
            ? { ...addProduct, quantity: addProduct.quantity + 1 }
            : item
        );
      } else {
        cartProducts = [...state, { ...action.payload, quantity: 1 }];
      }
      console.log('add to cart', action.payload, cartProducts);

      return cartProducts;
    case 'AMEND_CART_ITEM':
      const delProduct = state.find((i) => i.id === action.payload.id);
      if (delProduct.quantity === 1) {
        cartProducts = state.filter((i) => i.id !== action.payload.id);
      } else {
        cartProducts = state.map((item) =>
          item.id === action.payload.id
            ? { ...delProduct, quantity: delProduct.quantity - 1 }
            : item
        );
      }
      return cartProducts;
    case 'DELETE_CART_ITEM':
      return state.filter((i) => i.id !== action.payload);
    default:
      return state;
  }
};

export default contextReducer;
