import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";
import {
  HeaderContainer,
  NavGroupContainer,
  LinkContainer,
} from "./header.styles";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, cartBoxToggle }) => {
  console.log(currentUser);
  return (
    <HeaderContainer>
      <LinkContainer to="/" logo="true">
        <Logo />
      </LinkContainer>
      <NavGroupContainer>
        <LinkContainer to="/shop">Shop</LinkContainer>
        <LinkContainer to="/contact">Contact</LinkContainer>
        {currentUser ? (
          <LinkContainer as="span" onClick={() => auth.signOut()}>
            Sign Out
          </LinkContainer>
        ) : (
          <LinkContainer to="/signin">Sign-In</LinkContainer>
        )}
        <CartIcon />
      </NavGroupContainer>
      {cartBoxToggle ? <CartDropdown /> : null}
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    cartBoxToggle: state.cart.hidden,
  };
};

export default connect(mapStateToProps)(Header);
