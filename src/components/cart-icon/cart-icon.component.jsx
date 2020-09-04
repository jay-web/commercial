import React from "react";
import {connect } from "react-redux";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg"; 
import cartBoxToggle from "../../redux/cart-box/cart-box.actions";

import "./cart-icon.styles.scss";

const CartIcon = (props) => {
    return (
        <div className="cart-icon" onClick={props.cartBoxToggle}>
            <ShoppingCart className="shopping-icon" />
            <span className="item-count"> 0 </span>
        </div>
       
    )
}

export default connect(null, {cartBoxToggle : cartBoxToggle})(CartIcon);