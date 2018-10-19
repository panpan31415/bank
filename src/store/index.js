import {createStore} from "redux";
import reducer from "../reducers/";
const state = {
    username: "Janny",
    totalAmount: 2500701
  };
const store = createStore(reducer,state);
export default store;