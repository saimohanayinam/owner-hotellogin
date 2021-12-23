import { createStore } from "redux";
import { combineReducers } from "redux";

import loginReducer from "./loginstore";
import signUpReducer from "./signupstore";

const allReducers = combineReducers({
  login: loginReducer,
  signup: signUpReducer,
});

const store = createStore(allReducers);

export default store;
