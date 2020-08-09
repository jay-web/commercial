import React from 'react';
import {Switch, Route } from 'react-router-dom';
import { auth , createUserProfileDocument} from './firebase/firebase.utils';

import './App.css';

import HomePage from './pages/HomePage/homePage.component';
import ShopPage from './pages/Shop/shop.component';
import AuthPage from './pages/Auth/auth.component';
import Header from './components/header/header.component';



class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser : null
    }
  } 

  unsubscribeFromAuth = null;


  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser : user});
      console.log(userAuth);
      if(userAuth){
      
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
          console.log(this.state);
        });

      }else{
        this.setState({ currentUser: userAuth})
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser }/>
        <Switch>
          <Route exact path="/" component={HomePage}  />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={AuthPage} />
        </Switch>
      </div>
    );
  }
 
}



export default App;
