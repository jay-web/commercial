import { combineReducers } from "redux";
import userReducer from "./user/user.reducers";
import cartBoxReducer from "./cart-box/cart-box.reducer";

export default combineReducers({
    user: userReducer,
    cart: cartBoxReducer
})