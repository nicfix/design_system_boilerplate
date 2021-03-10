import React from 'react';
import IStyledProps from '../IStyledProps';
import IClickableProps from '../IClickableProps';
import IChildrenProps from '../IChildrenProps';
import IMouseInteractiveProps from '../IMouseInteractiveProps';
import ITouchInteractiveProps from '../ITouchInteractiveProps';

export interface IButtonProps
    extends IStyledProps,
        IClickableProps,
        IMouseInteractiveProps,
        ITouchInteractiveProps,
        IChildrenProps {
    /**
     * When true the button cannot be clicked by the user.
     * Compliant with: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled
     */
    disabled: boolean;
}

const Button: React.FC<IButtonProps> = (props) => (
    <>
        <button {...props} />
    </>
);

export default Button;
