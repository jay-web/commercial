import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';


const Header = ({ currentUser }) => {
    console.log(currentUser)
    return (
        <div className="header">
            <Link className="logo" to="/">
                <Logo />
            </Link>
            <div className="navGroup">
                <Link to="/shop" className="link">
                    Shop
                </Link>
                <Link to="/contact" className="link">
                    Contact
                </Link>
                {
                    currentUser ? (
                    <span className="link" onClick={() => auth.signOut()} >Sign Out</span>
                    )
                    :(
                    <Link to="/signin" className="link">
                    Sign-In
                     </Link>
                    )

                }
                
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return { currentUser : state.user.currentUser }
}

export default connect(mapStateToProps)(Header);