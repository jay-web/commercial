import React from "react";
import {connect } from "react-redux";
import "./collection-overview.styles.scss";

import CollectionPreview from "../collectionPreview/collection-preview.component";

const CollectionOverview = ({ collection }) =>  {
     
        return (
            <div className=".collectionOverview">
                  {
                      collection.map(({ id, ...items}) => {
                        return <CollectionPreview key={id} {...items} />;
                      })
             
                }
            </div>
        )
    
}

const mapStateToProps = (state) => {
    let collection = Object.keys(state.shop.collection).map( (key) => state.shop.collection[key]);
    return { collection: collection}
}

export default connect(mapStateToProps)(CollectionOverview)