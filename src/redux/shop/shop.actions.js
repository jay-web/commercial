import ShopActionTypes from "./shop.types";
import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";

const ShopUpdateCollection = (collectionMap) => {
    return {
        type: ShopActionTypes.UPDATE_COLLECTIONS,
        payload: collectionMap
    }
}

export const fetchCollectionsStart = () => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_START
    }
}

export const fetchCollectionsSuccess = (collectionMap) => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collectionMap
    }
}

export const fetchCollectionsError = (errorMessage) => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: errorMessage
    }
}

export const fetchCollectionStartAsync = () => {
    return (dispatch) => {
        const collectionRef = firestore.collection("collection");
        dispatch(fetchCollectionsStart);

        collectionRef.get().then((snapshot) => {
           const collections = convertCollectionSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collections));
         }).catch((error) => {
             dispatch(fetchCollectionsError(error.message));
         })
    }
}

