import React, {useState} from 'react'
import FormInput from '../form-input/form-input-component'
import CustomButton from '../custom-button/custom-button.components'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import { SignUpContainer, Title } from './sign-up.styles'
const SignUp = () => {

    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(password !== confirmPassword){
            alert("Password don't match.")
            return
        }

        try {

            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            )
            await createUserProfileDocument(user, {displayName} )

            setDisplayName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")

        } catch (error) {
            console.log('error in signing up', error)
        }

    }

    const handleChange = (e) => {
        const {name, value} = e.target
        switch(name){
            case "displayName":
                setDisplayName(value)
                return
            case "email":
                setEmail(value)
                return

            case "password":
                setPassword(value)
                return

            case "confirmPassword":
                setConfirmPassword(value)
                return

            default:
                return
        }
    }

    return (
        <SignUpContainer>
            <Title>
                I do not have an account.
            </Title>
            <span>
                Sign up with your email and password
            </span>
            <form
                className='sign-up-form'
                onSubmit={handleSubmit}
            >
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Name'
                    required
                />

                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />

                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />

                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>
                    SIGN UP
                </CustomButton>
            </form>
        </SignUpContainer>
    )
}

export default SignUp