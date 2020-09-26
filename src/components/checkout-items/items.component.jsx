import React from "react";
import "./items.styles.scss";
import { connect } from "react-redux";
import { removeItemFromCart, addCartItems, decreaseQuantityFromCart } from "../../redux/cart-box/cart-item.actions";

const CheckoutItem = (props) => {
 
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={props.cartItem.imageUrl} alt={props.cartItem.name} />
            </div>
            <div className="name">{props.cartItem.name}</div>
            <div className="quantity">
                <div 
                    className="arrow"
                    onClick={() => props.decreaseQuantityFromCart(props.cartItem)}
                    > &#10094; </div>
                <span className="value"> {props.cartItem.quantity} </span>
                <div 
                    className="arrow"
                    onClick={() => props.addCartItems(props.cartItem)}
                    > &#10095; </div>
            </div>
            <div className="price">{props.cartItem.price}</div>
            <div 
                className="remove-button"
                onClick={() => props.removeItemFromCart(props.cartItem)}
                >&#10005;</div>
        </div>
    )
}

export default connect(null, {
    removeItemFromCart, addCartItems, decreaseQuantityFromCart}
    )(CheckoutItem);