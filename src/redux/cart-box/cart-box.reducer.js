import {cartBoxActionTypes } from "./cart-box.actionTypes";

import { addItemToCart, decreaseItem}  from "./utility";

const INITIAL_STATE = {
    hidden: false,
    cartItems: []
}

const cartBoxReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type){
        case cartBoxActionTypes.TOGGLE_CART_BOX :
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartBoxActionTypes.ADD_ITEM : 
            return {
                ...state,
                cartItems : addItemToCart(state.cartItems, action.payload)
            }
        case cartBoxActionTypes.DECREASE_QUANTITY :
            return {
                ...state,
                cartItems: decreaseItem(state.cartItems, action.payload)
            }
        case cartBoxActionTypes.CLEAR_ITEM_FROM_CART :
            return {
                ...state,
                cartItems : state.cartItems.filter((item) => {
                    return item.id !== action.payload.id
                })
            }
        default :
            return state
    }
}

export default cartBoxReducer;