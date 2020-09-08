import React  from 'react';
import './custom-button.styles.scss';



const CustomButton = ({children, buttonClass , ...otherProps}) => {
    return (
        <button className={`${buttonClass} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}


export default CustomButton;