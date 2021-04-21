import React from 'react'
import "./custom-button.styles.scss"

const CustomButton = (
    {children, isGoogleSignIn, inverted ,...restProps}
    )=> (
    <button
        type={isGoogleSignIn ? 'button' : "submit"}
        className={`${inverted ? 'inverted' : ''}
            ${isGoogleSignIn ? 'google-sign-in' : ''} 
            custom-button`}
         {...restProps}>
        {children}
    </button>
)

export default CustomButton