import React, { useReducer } from 'react';
import contextReducer from './ContextReducer';

const initialState = [];

export const ShoppingCartContext = React.createContext(initialState);

export const Provider = ({ children }) => {
  const [cartProducts, dispatch] = useReducer(contextReducer, initialState);

  //Action creators
  const AddToCart = (product) => {
    dispatch({
      type: 'ADD_CART_ITEM',
      payload: product,
    });
  };

  const DeleteFromCart = (id) => {
    dispatch({
      type: 'DELETE_CART_ITEM',
      payload: id,
    });
  };

  const ManipulateCart = (product) => {
    dispatch({
      type: 'AMEND_CART_ITEM',
      payload: product,
    });
  };

  const cartProductsTotalPrice = cartProducts.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  const cartProductsQuantity = cartProducts.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );

  console.log('cartProducts', cartProductsQuantity);

  return (
    <ShoppingCartContext.Provider
      value={{
        AddToCart,
        DeleteFromCart,
        ManipulateCart,
        cartProducts,
        cartProductsTotalPrice,
        cartProductsQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
