import { SET_STATE_LOADING_ALERT } from "../types";

const AppReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_STATE_LOADING_ALERT:
      return {
        ...state,
        stateLoadingeAlert: payload,
      };
    default:
      return state;
  }
};
export default AppReducer;