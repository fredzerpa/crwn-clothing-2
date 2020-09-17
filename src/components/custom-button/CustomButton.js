import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ title, ...otherProps }) => (
    <button
        className='custom-button'
        {...otherProps}
    >
        {title}
    </button>
)

export default CustomButton;