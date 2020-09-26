import React from "react";
import "./items.styles.scss";
import { connect } from "react-redux";
import { removeItemFromCart } from "../../redux/cart-box/cart-item.actions";

const CheckoutItem = (props) => {
 
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={props.cartItem.imageUrl} alt={props.cartItem.name} />
            </div>
            <div className="name">{props.cartItem.name}</div>
            <div className="quantity">{props.cartItem.quantity}</div>
            <div className="price">{props.cartItem.price}</div>
            <div 
                className="remove-button"
                onClick={() => props.removeItemFromCart(props.cartItem)}
                >&#10005;</div>
        </div>
    )
}

export default connect(null, {removeItemFromCart: removeItemFromCart})(CheckoutItem);