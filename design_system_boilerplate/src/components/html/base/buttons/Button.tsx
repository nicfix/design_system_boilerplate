import React from 'react';
import IButtonProps from '../../../../props/base/buttons/IButtonProps';


const Button: React.FC<IButtonProps> = ({ ...props }) => (
    <>
        <button {...props} />
    </>
);

export default Button;
