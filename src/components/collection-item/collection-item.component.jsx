import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";

const CollectionItem = ({ id, item }) => {
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
        <CustomButton buttonClass="cartButton" > Add to cart </CustomButton>
      </div>
     
    </div>
  );
};

export default CollectionItem;
