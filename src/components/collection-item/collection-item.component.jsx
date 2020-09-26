import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";
import { addCartItems } from "../../redux/cart-box/cart-item.actions";

import "./collection-item.styles.scss";

const CollectionItem = ({ id, item, cartItems }) => {
  return (
    <div className="collection-item">
      <div className="item">
        <div
          className="image"
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        ></div>
        <div className="item-detail">
          <span>{item.name}</span>
          <span>${item.price}</span>
        </div>
        <CustomButton 
            buttonClass="cartButton" 
            onClick={() => cartItems(item)}> Add to cart </CustomButton>
      </div>
     
    </div>
  );
};
 
export default connect(null, {cartItems: addCartItems } )(CollectionItem);
