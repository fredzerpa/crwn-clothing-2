import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ title, isGoogleSignIn, inverted, ...otherProps }) => (
    <button
        className={` ${inverted ? 'inverted' : ''} 
        ${isGoogleSignIn ? 'google-sign-in' : ''}  custom-button`}
        {...otherProps}
    >
        {title}
    </button>
);

export default CustomButton;