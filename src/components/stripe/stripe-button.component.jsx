import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { withRouter } from "react-router-dom";

import "./stripe.styles.scss";

const StripeCheckoutButton = ({price, history }) => {
    const priceForStripe = price * 100;
    const publisherKey = "pk_test_51HXgIaF0cuqWqUtferu9O8kE6W6bW7tYsl0n1YSUvctsuJjv12RL4xUn1DDvp4sKcYeNzHovfeU3cx4qlzomDr7e00rR9mihnU";

    
    const onToken = (token) => {
        console.log(token)
        console.log(history);
        history.push("/");
        
    }
    return (
        
        <StripeCheckout
            label="Pay now"
            name="Commercial shopping"
            billingAddress
            shippingAddress
            description={`Your total is ${price}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publisherKey}
            className="stripeButton"

        />
    )
}

export default withRouter(StripeCheckoutButton);