import React from "react";
import { Route } from "react-router-dom";
import "./shop.styles.scss";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import CollectionPage from "../collection/collection.component";

import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";

import { connect } from "react-redux";
import ShopUpdateCollection from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  unSubscribeFromSnapshot = null;
  
  componentDidMount() { 
    const collectionRef = firestore.collection("collection");

    collectionRef.onSnapshot(async (snapshot) => {
      const collections = convertCollectionSnapshotToMap(snapshot);
      this.props.ShopUpdateCollection(collections);
    })
  }
  render(){
    const { match } = this.props;
    return (
      <div className="shopPage">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        
      </div>
    );
  }
 
};



export default connect(null, {ShopUpdateCollection})(ShopPage);
