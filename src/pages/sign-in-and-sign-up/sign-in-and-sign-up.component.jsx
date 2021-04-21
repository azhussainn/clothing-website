import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import {SignUpAndSignInContainer} from './sign-in-and-sign-up.styles'

const SignInAndSignUpPage = () => (
    <SignUpAndSignInContainer>
        <SignIn />
        <SignUp />
    </SignUpAndSignInContainer>
)

export default SignInAndSignUpPage