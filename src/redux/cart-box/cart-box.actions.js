import {cartBoxActionTypes } from "./cart-box.actionTypes";


const cartBoxToggle = () => {
    return {
        type : cartBoxActionTypes["TOGGLE_CART_BOX"]
    }
}

export default cartBoxToggle;