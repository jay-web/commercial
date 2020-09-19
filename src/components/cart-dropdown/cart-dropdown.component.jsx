import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItems from "../cart-items/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = (props) => {
    console.log(props)
    return (
        <div className="cart-dropdown">
           { props.cartItems ? <div className="cart-items" >
                {props.cartItems.map((item) => {
                    return <CartItems key={item.id} item={item}/>
                })}
            </div> : "" }
            <CustomButton> Go To Checkout </CustomButton>
        </div>

    )
}

const mapStateToProps = (state) => {
    console.log(state.cartBoxToggle.cartItems);
    return { cartItems : state.cartBoxToggle.cartItems}
}

export default connect(mapStateToProps)(CartDropdown);