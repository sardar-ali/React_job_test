import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducers";

//create store and pass rootReducer and Thunk Middleware as parameter
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
