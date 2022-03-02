import React from 'react';
import { SignIn } from '../../components/sign-in/sign-in.component';
import { SignUp } from '../../components/sign-up/sign-up.component';

import './sign-in-sign-up.styles.scss';

export const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
);