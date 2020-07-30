import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';


const Header = () => {
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
            </div>

        </div>
    )
}


export default Header;