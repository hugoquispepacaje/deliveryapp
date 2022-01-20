import { ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM, CLEAR_CART } from '../types';

const saveInStorage = (cartItems) => {
  localStorage.setItem('shoppingCart', JSON.stringify(cartItems.length > 0 ? cartItems : []));
}

export const sumItems = (cartItems) => {
  saveInStorage(cartItems);
  let itemCount = cartItems.reduce((total, product) => total + product.cantidad, 0);
  let total = cartItems.reduce((total, product) => total + product.precio * product.cantidad, 0);
  return { itemCount, total };
}

export const ShoppingCartReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_ITEM:
      state.cartItems.push(payload);
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case UPDATE_ITEM:
      state.cartItems = state.cartItems.map((item) => {
        if (payload.id === item.id) {
          return payload;
        }
        else {
          return item;
        }
      })
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case REMOVE_ITEM:
      state.cartItems = state.cartItems.filter(item => item.id !== payload.id);
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case CLEAR_CART:
      return {
        cartItems: [],
        ...sumItems([]),
      };
    default:
      return state;
  }
}