import { combineReducers } from "redux";
import userReducer from "./user/user.reducers";
import cartBoxReducer from "./cart-box/cart-box.reducer"

// importing local storage
import {persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";    

// for storing session in localstorage
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartBoxReducer
})

export default persistReducer(persistConfig, rootReducer);