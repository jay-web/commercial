import React from "react";
import "./cart-items.styles.scss";

const CartItems = ({item}) => {
    return (
        <div className="itemToShow">
            <img src={item.imageUrl} alt={item.name}/>
            <div className="item-details">
                <span className="name">{item.name}</span>
                <span className="price">{item.quantity} X ${item.price}</span>
            </div>
        </div>
    )
}


export default CartItems;