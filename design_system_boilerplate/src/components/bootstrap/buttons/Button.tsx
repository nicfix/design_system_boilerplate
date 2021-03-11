import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import IBootstrapButtonProps from './IBootstrapButtonProps';
import 'bootstrap/dist/css/bootstrap.min.css';

const Button: React.FC<IBootstrapButtonProps> = ({ ...props }) => (
    <>
        <BootstrapButton {...props} />
    </>
);

export default Button;
