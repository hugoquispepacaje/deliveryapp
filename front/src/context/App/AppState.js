import React, { useReducer } from 'react';
import AppContext from './AppContext';
import AppReducer from './AppReducer';
import { SET_STATE_LOADING_ALERT } from '../types';

const initialState = {
  stateLoadingeAlert: false,
};
const AppState = (props) => {

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const openLoadingAlert = () => {
    try {
      dispatch({ type: SET_STATE_LOADING_ALERT, payload: true });
    } catch (error) {
      console.error(error);
    }
  };

  const closeLoadingAlert = () => {
    try {
      dispatch({ type: SET_STATE_LOADING_ALERT, payload: false });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        openLoadingAlert,
        closeLoadingAlert
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;