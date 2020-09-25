import React from "react";
import "./checkout.styles.scss";
import {connect } from "react-redux";

import CheckoutItem from "../../components/checkout-items/items.component";

import { selectTotal, selectCartItem } from "../../redux/cart-box/cart-selector";

class CheckoutPage extends React.Component {


    render(){
        return (
            <div className="checkout-page">
                <div className="checkout-header">
                    <div className="header-block">
                        <span>Product</span>
                    </div>
                    <div className="header-block">
                        <span>Description</span>
                    </div>
                    <div className="header-block">
                        <span>Quantity</span>
                    </div>
                    <div className="header-block">
                        <span>Price</span>
                    </div>
                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                </div>
                {
                    this.props.cartItems.map((item) => {
                        return <CheckoutItem key={item.id} cartItem={item} />
                    })
                }

                <div className="total">
                    {`Total : ${this.props.total}`}
                </div>
            </div>
        )
    }
}

const mapStateToProp = (state) => {
    return { 
        cartItems : selectCartItem(state),
        total : selectTotal(state)

    }
}

export default connect(mapStateToProp)(CheckoutPage);