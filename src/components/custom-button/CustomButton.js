import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ title, isGoogleSignIn, ...otherProps }) => (
    <button
        className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}
    >
        {title}
    </button>
)

export default CustomButton;