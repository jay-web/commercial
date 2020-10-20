import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";

const CollectionPage = (props) => {
  const { collection } = props;

  return (
    <div>
      <h1>{props.match.params.collectionId}</h1>

      <div className="collection-page ">
        {collection.items.map((item) => {
          return (
            <div key={item.id}>
              <CollectionItem
                key={collection.id}
                item={item}
                className="inItem"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let reqCollection = state.shop.collection[ownProps.match.params.collectionId];
  return { collection: reqCollection ? reqCollection : null};
};

export default connect(mapStateToProps)(CollectionPage);
