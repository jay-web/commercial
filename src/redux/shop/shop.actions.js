import ShopActionTypes from "./shop.types";

const ShopUpdateCollection = (collectionMap) => {
    return {
        type: ShopActionTypes.UPDATE_COLLECTIONS,
        payload: collectionMap
    }
}

export default ShopUpdateCollection;