import React from "react";
import CollectionPreview from "../../components/collectionPreview/collection-preview.component";

import { connect } from "react-redux";

import "./shop.styles.scss";

const ShopPage = ({ collection }) => {
  return (
    <div className="shopPage">
      {collection.map(({ id, ...items }) => {
        return <CollectionPreview key={id} {...items} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { collection: state.shop.collection };
};

export default connect(mapStateToProps)(ShopPage);
