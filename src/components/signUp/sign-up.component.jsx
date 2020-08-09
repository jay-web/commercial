import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/formInput.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName,email, password,confirmPassword} = this.state;

        if(password !== confirmPassword){
            return;
        }

        try{
            const {user } =  await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })

        }catch(error){
            console.error(error);
        }
     
    }
    render(){
        return (
            <div className="sign-up">
                <h2>I don't have account</h2>
                <span>Please sign up using email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                            name="displayName"
                            label="Display Name"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.state.displayName}
                            required
                            
                    />
                    <FormInput 
                            name="email"
                            label="Email"
                            type="email"
                            handleChange={this.handleChange}
                            value={this.state.email}
                            required
                    />
                    <FormInput 
                            name="password"
                            label="Password"
                            type="password"
                            handleChange={this.handleChange}
                            value={this.state.password}
                            required
                    />
                    <FormInput 
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            handleChange={this.handleChange}
                            value={this.state.confirmPassword}
                            required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}


export default SignUp;