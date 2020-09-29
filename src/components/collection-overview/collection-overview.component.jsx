import React from "react";
import {connect } from "react-redux";

import CollectionPreview from "../collectionPreview/collection-preview.component";

const CollectionOverview = ({ collection }) =>  {
        return (
            <div>
                  {
                collection.map(({ id, ...items }) => {
                    return <CollectionPreview key={id} {...items} />;
                   })
                }
            </div>
        )
    
}

const mapStateToProps = (state) => {
    return { collection: state.shop.collection }
}

export default connect(mapStateToProps)(CollectionOverview)