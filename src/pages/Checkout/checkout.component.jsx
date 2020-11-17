import React from "react";
import "./checkout.styles.scss";
import {connect } from "react-redux";

import CheckoutItem from "../../components/checkout-items/items.component";

import { selectTotal, selectCartItem } from "../../redux/cart-box/cart-selector";
import StripeCheckoutButton from "../../components/stripe/stripe-button.component";

class CheckoutPage extends React.Component {
    

    render(){
        const showpayButton = this.props.total ? true : false;
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
                    {`Total : $${this.props.total}`}
                </div>
               
                <div className="test-warning">
                    *Please use the following test credit card detail for payments
                    <br />
                    4242-4242-4242-4242 Exp : 01/21 - CVV : 123
                </div>
                {showpayButton ? <StripeCheckoutButton price={this.props.total} /> : null}
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