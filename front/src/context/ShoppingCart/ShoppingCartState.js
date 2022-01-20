import React, { useReducer } from 'react';
import ShoppingCartContext from './ShoppingCartContext';
import { ShoppingCartReducer, sumItems } from './ShoppingCartReducer';
import { ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM, CLEAR_CART } from '../types';

const storage = localStorage.getItem('shoppingCart') ? JSON.parse(localStorage.getItem('shoppingCart')) : [];
const initialState = {
  cartItems: storage,
  ...sumItems(storage)
};

const ShoppingCartState = ({ children }) => {

  const [state, dispatch] = useReducer(ShoppingCartReducer, initialState);

  const addItem = (item) => {
    try {
      dispatch({ type: ADD_ITEM, payload: item });
    } catch (error) {
      console.error(error);
    }
  };
  const updateItem = (item) => {
    try {
      dispatch({ type: UPDATE_ITEM, payload: item });
    } catch (error) {
      console.error(error);
    }
  };
  const removeItem = (item) => {
    try {
      dispatch({ type: REMOVE_ITEM, payload: item });
    } catch (error) {
      console.error(error);
    }
  };
  const clearCart = () => {
    try {
      dispatch({ type: CLEAR_CART });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        ...state,
        addItem,
        updateItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartState;