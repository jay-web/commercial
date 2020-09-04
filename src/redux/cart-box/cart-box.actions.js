import {cartBoxActionTypes } from "./cart-box.actionTypes";


const cartBoxToggle = () => {
    return {
        type : cartBoxActionTypes["toggle-cart-box"]
    }
}

export default cartBoxToggle;