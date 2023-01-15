import { applyMiddleware, legacy_createStore as createStore } from "redux";
// import combineReducers from "./reducers/combineReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { moviesReducer } from "./reducers/movies";

// const store = createStore(moviesReducer, composeWithDevTools());
const store = createStore(moviesReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;