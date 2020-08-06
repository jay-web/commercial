import React from 'react';

import './auth.styles.scss';

import SignIn from '../../components/signIn/signIn.component';


const AuthPage = () => {
    return (
        <div className="authPage">
            <SignIn />
        </div>
    )
}


export default AuthPage;