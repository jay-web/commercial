import {cartBoxActionTypes } from "./cart-box.actionTypes";


const cartItems = (item) => {
    return {
        type : cartBoxActionTypes.ADD_ITEM,
        payload: item
    }
}

export default cartItems;