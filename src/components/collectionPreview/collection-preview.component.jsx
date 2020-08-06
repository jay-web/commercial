import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) => {
    return (
        <div className="collectionPreview">
            <h1 className="title">{title}</h1>
            <div className="collection-item">
            {
                items
                    .filter((item, idx) => idx < 4 )
                    .map((item) => {
                    return <CollectionItem key={item.id} item={item} />
                })
            }
            </div>
           

        </div>
    )
}

export default CollectionPreview;