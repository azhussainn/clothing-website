import React, {useState} from 'react'
import FormInput from '../form-input/form-input-component'
import CustomButton from '../custom-button/custom-button.components'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'
import {
    SignInContainer,
    Title,
    ButtonsContainer
} from './sign-in.styles'


const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async   (e) => {
        e.preventDefault()

        try {
            await auth.signInWithEmailAndPassword(email, password)
            setEmail("")
            setPassword("")
        } catch (error) {
            console.log("error in signing in", error)
        }
    }
    const handleChange = (e) => {
        const {name, value} = e.target
        name === "email" ?
            setEmail(value) :
            setPassword(value)
    }

    return (
        <SignInContainer>
            <Title>I already have an account</Title>
            <span>Sign in with your email and password</span>


            <form onSubmit={handleSubmit}>
                <FormInput type="email"
                    name='email'
                    value={email}
                    required
                    handleChange={handleChange}
                    label="Email"
                />

                <FormInput type="password"
                    name='password'
                    value={password}
                    required
                    handleChange={handleChange}
                    label="Password"
                />

                <ButtonsContainer>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}
                        isGoogleSignIn
                    >
                        {' '}
                        Sign In With Google
                        {' '}
                    </CustomButton>
                </ButtonsContainer>


            </form>
        </SignInContainer>
    )
}

export default SignIn