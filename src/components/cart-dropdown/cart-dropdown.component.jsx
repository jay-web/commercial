import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItems from "../cart-items/cart-item.component";
import "./cart-dropdown.styles.scss";
import { selectCartItem } from "../../redux/cart-box/cart-selector";
import { withRouter } from "react-router-dom";
import cartBoxToggle from "../../redux/cart-box/cart-box.actions";

const CartDropdown = (props) => {
    console.log(props)
    const showCheckout = props.cartItems.length === 0 ? "hide" : "";
    return (
        <div className="cart-dropdown">
           { props.cartItems.length ? <div className="cart-items" >
                {props.cartItems.map((item) => {
                    return <CartItems key={item.id} item={item}/>
                })}
            </div> : <span className="emptyCart">Cart is empty</span> }
            <CustomButton onClick={
                () => { 
                    props.history.push("/checkout");
                    props.cartBoxToggle();
                }
                } buttonClass={showCheckout}> Go To Checkout </CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => {
    
    return { cartItems : selectCartItem(state)}
}

export default withRouter(connect(mapStateToProps, {cartBoxToggle})(CartDropdown));