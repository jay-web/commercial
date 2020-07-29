import React from 'react';
import CollectionPreview from '../../components/collectionPreview/collection-preview.component';
import SHOP_DATA from '../../shop.data';

import './shop.styles.scss';

class ShopPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collection: SHOP_DATA
        }
    }


    render() {
        const { collection } = this.state;
        return (
            <div className="shopPage">
                {
                    collection.map(({id, ...items}) => {
                       return <CollectionPreview key={id} {...items} />
                    })
                }
            </div>
        )
    }
}


export default ShopPage;