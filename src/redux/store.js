import {createStore, applyMiddleware } from "redux";
import combineReducers from "./root-reducer";
import logger from "redux-logger";

const middleware = [logger];


const store = createStore(combineReducers, applyMiddleware(...middleware));


export default store;