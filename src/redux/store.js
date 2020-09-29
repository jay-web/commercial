import {createStore, applyMiddleware } from "redux";
import combineReducers from "./root-reducer";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

const middleware = [logger];


export const store = createStore(combineReducers, applyMiddleware(...middleware));

export const persistor = persistStore(store);

