import { combineReducers } from "redux";

import {
    verifyOtpReducer,
  
  } from "./common";
  

const allReducers = combineReducers({
    verifyOtpReducer
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_REQUEST") {
    state = undefined;
  }

  return allReducers(state, action);
};

export default rootReducer;
