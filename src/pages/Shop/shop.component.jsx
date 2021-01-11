import React from "react";
import { Route } from "react-router-dom";
import "./shop.styles.scss";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import CollectionPage from "../collection/collection.component";

import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";

import { connect } from "react-redux";
import withSpinner from "../../components/withSpinner/spinner.component";
import ShopUpdateCollection from "../../redux/shop/shop.actions";

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);


class ShopPage extends React.Component {
  constructor(){
    super();

    this.state = {
      loading: true
    }
  }
  unSubscribeFromSnapshot = null;
  
  componentDidMount() { 
    const collectionRef = firestore.collection("collection");

   collectionRef.get().then((snapshot) => {
      const collections = convertCollectionSnapshotToMap(snapshot);
      this.props.ShopUpdateCollection(collections);
     
      this.setState({loading: false});
      
    })
  }
  render(){
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shopPage">
        <Route 
          exact 
          path={`${match.path}`} 
          render={(props) =>  <CollectionOverviewWithSpinner isLoading={loading} {...props}/>} />
        <Route 
          path={`${match.path}/:collectionId`} 
          render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>} 
          />
        
      </div>
    );
  }
 
};



export default connect(null, {ShopUpdateCollection})(ShopPage);
