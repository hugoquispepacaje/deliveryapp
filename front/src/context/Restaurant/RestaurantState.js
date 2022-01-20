import React, { useReducer } from 'react';
import RestaurantContext from './RestaurantContext';
import RestaurantReducer from './RestaurantReducer';
import { SET_RESTAURANT } from '../types';

const initialState = {
  restaurant: {},
};
const RestaurantState = (props) => {

  const [state, dispatch] = useReducer(RestaurantReducer, initialState);

  const setRestaurant = (restaurant) => {
    try {
      dispatch({ type: SET_RESTAURANT, payload: restaurant });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurant: state.restaurant,
        setRestaurant,
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantState;