import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBER2jdYv71x1vUjzJOjXgraW_3ZH5HMU8",
    authDomain: "commercial-dcf22.firebaseapp.com",
    databaseURL: "https://commercial-dcf22.firebaseio.com",
    projectId: "commercial-dcf22",
    storageBucket: "commercial-dcf22.appspot.com",
    messagingSenderId: "371825050978",
    appId: "1:371825050978:web:9a661bb767c8db4b5ed83b",
    measurementId: "G-CVRW6CESPV"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
 
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  // *If user doesn't already exists
  if(!snapshot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log("Getting error while created user profile ", error);
    }
  }

  return userRef;
}

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName : encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
  }, {})
}

// * To add bulk data to firestore, run only single time
// export const addCollectionAndDocuments = async (collectionKey, objectToadd) => {
//   const collectionRef = firestore.collection(collectionKey);
//   const batch = firestore.batch();

//   objectToadd.forEach(obj => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });

//   return await batch.commit();
// }

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});


export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;