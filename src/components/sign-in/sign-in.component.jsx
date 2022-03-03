import React from 'react';
import { CustomButton } from '../custom-button/custom-button.component';
import { FormInput } from '../form-input/form-input.component';
import './sign-in.styles.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import { signInWithEmailAndPassword } from 'firebase/auth';

export class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log('Error in login', error.message);
        }
    }

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label='email'
                        type='email'
                        name='email'
                        value={this.state.email}
                        required
                        handleChange={this.handleChange} />
                    <FormInput
                        label='password'
                        type='password'
                        name='password'
                        value={this.state.password}
                        required
                        handleChange={this.handleChange} />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}