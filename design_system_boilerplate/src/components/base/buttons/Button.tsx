import React from "react";

export interface IButtonProps{
    /**
     * When true the button cannot be clicked by the user.
     * Compliant with: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled
     */
    disabled:boolean;

    /**
     * The inner content.
     */
    children:JSX.Element[]|JSX.Element;

    /**
     * A callback to be called when the button is clicked.
     * Compliant with: https://it.reactjs.org/docs/handling-events.html
     * As specified here: https://www.w3.org/TR/DOM-Level-3-Events/
     * @param evt: React.SyntheticEvent, an event compliant with https://www.w3.org/TR/DOM-Level-3-Events/
     */
    onClick:(evt:React.SyntheticEvent)=>void;

    /**
     * A CSSinJS style object as specified here: https://reactjs.org/docs/dom-elements.html#style.
     */
    style:any;

    /**
     * A list of classnames as specified here: https://reactjs.org/docs/faq-styling.html
     */
    className:any;
}

const Button:React.FC<IButtonProps>=(props)=><>
    <button {...props}/>
</>;


export default Button;