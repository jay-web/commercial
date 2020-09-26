import {cartBoxActionTypes } from "./cart-box.actionTypes";


export const cartItems = (item) => {
    return {
        type : cartBoxActionTypes.ADD_ITEM,
        payload: item
    }
}

export const removeItemFromCart = (item) => {
    return {
        type: cartBoxActionTypes.CLEAR_ITEM_FROM_CART,
        payload: item
    }
}