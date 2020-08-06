import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';


const Header = ({ currentUser }) => {
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


export default Header;