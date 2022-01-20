
import { SET_RESTAURANT } from "../types";

const RestaurantReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_RESTAURANT:
      return {
        ...state,
        restaurant: payload,
      };
    default:
      return state;
  }
};
export default RestaurantReducer;