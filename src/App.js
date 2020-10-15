import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import { auth , createUserProfileDocument} from './firebase/firebase.utils';
import {connect } from "react-redux";
import setCurrentUser from "../src/redux/user/user.actions";

import './App.css';

import HomePage from './pages/HomePage/homePage.component';
import ShopPage from './pages/Shop/shop.component';
import AuthPage from './pages/Auth/auth.component';
import CheckoutPage from './pages/Checkout/checkout.component';
import Header from './components/header/header.component';



class App extends React.Component {
  // constructor(props){
  //   super(props);

  //   this.state = {
  //     currentUser : null
  //   }
  // } 

  unsubscribeFromAuth = null;


  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser : user});
      console.log(userAuth);
      if(userAuth){
      
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.props.setCurrentUser(
            {
              id: snapshot.id,
              ...snapshot.data()
            }
          )
          
          console.log(this.state);
        });

      }else{
        // if userAuth return null
        this.props.setCurrentUser(userAuth);
      }
      // const collection = Object.values(this.props.collection);
      // addCollectionAndDocuments('collection', collection.map(({title, items}) => ({title, items})));
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}  />
          <Route path="/shop" component={ShopPage} />
          <Route
             exact 
             path="/signin" 
             render={() => this.props.currentUser ? (<Redirect to="/" />) : (<AuthPage /> )} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
 
}

// * To pass the current user value from redux store to app
const mapStateToProps = (state) => {
  return {
    currentUser : state.user.currentUser
    // collection: state.shop.collection
  }
}



export default connect(mapStateToProps, { setCurrentUser: setCurrentUser})(App);
