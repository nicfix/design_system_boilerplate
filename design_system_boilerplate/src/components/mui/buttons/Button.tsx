import React from 'react';
import { default as MuiButton } from '@material-ui/core/Button';
import IMuiButtonProps from './IMuiButtonProps';

const Button: React.FC<IMuiButtonProps> = ({ ...props }) => (
    <>
        <MuiButton {...props} />
    </>

);

export default Button;
