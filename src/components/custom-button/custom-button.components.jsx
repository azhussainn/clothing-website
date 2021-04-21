import React from 'react'
import { CustomButtonContainer } from './custom-button.styles'

const CustomButton = ({children, ...props})=> {
    const {isGoogleSignIn} = props
    return(
    <CustomButtonContainer
        type={isGoogleSignIn ? 'button' : "submit"}
        {...props}
    >
        {children}
    </CustomButtonContainer>
)}

export default CustomButton