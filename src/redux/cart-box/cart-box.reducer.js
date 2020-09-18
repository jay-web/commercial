import {cartBoxActionTypes } from "./cart-box.actionTypes";

import { addItemToCart}  from "./utility";

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
        default :
            return state
    }
}

export default cartBoxReducer;