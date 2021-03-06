import React from 'react';
import FormInput from '../form-input/formInput.component'
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle, auth } from '../../firebase/firebase.utils';

import './signIn.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password }= this.state;
        
        try{
            const { user } = await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email: "",
                password:""
            })
        }catch(error){
            console.error(error);
        }

       
    }

    handleChange = (event) => {
        const {value, name } = event.target;

        this.setState({ [name] : value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have a account</h2>
                <p>Sign in with your email and password</p>
                <form onSubmit={this.handleSubmit} className="form-box">
                    <FormInput 
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="Email"
                        handleChange={this.handleChange} 
                    />
                
                    <FormInput 
                        name="password"
                        type="password" 
                        value={this.state.password}
                        label="Password"
                        handleChange={this.handleChange}
                    />
                    
                    <CustomButton type="submit" > Sign in </CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                </form>
            </div>
        )
    }
}


export default SignIn;