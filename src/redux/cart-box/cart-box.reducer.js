import {cartBoxActionTypes } from "./cart-box.actionTypes";

const INITIAL_STATE = {
    hidden: false,
}

const cartBoxReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type){
        case cartBoxActionTypes["toggle-cart-box"] :
            return {
                ...state,
                hidden: !state.hidden
            }
        default :
            return state
    }
}

export default cartBoxReducer;