import {cartBoxActionTypes } from "./cart-box.actionTypes";


export const addCartItems = (item) => {
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

export const decreaseQuantityFromCart = (item ) => {
    return {
        type: cartBoxActionTypes.DECREASE_QUANTITY,
        payload: item
    }
}