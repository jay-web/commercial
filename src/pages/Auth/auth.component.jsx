import React from 'react';

import './auth.styles.scss';

import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/signUp/sign-up.component';


const AuthPage = () => {
    return (
        <div className="authPage">
            <SignIn />
            <SignUp />
        </div>
    )
}


export default AuthPage;