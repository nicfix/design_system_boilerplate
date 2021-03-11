import IStyledProps from '../IStyledProps';
import IClickableProps from '../IClickableProps';
import IMouseInteractiveProps from '../IMouseInteractiveProps';
import ITouchInteractiveProps from '../ITouchInteractiveProps';
import IChildrenProps from '../IChildrenProps';

interface IButtonProps
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

export default IButtonProps;
