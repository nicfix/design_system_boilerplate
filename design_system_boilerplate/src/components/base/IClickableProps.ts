import React from 'react';

interface IClickableProps {
    /**
     * A callback to be called when the button is clicked.
     * Compliant with: https://it.reactjs.org/docs/handling-events.html
     * As specified here: https://www.w3.org/TR/DOM-Level-3-Events/
     * @param evt: React.SyntheticEvent, an event compliant with https://www.w3.org/TR/DOM-Level-3-Events/
     */
    onClick?: (evt: React.SyntheticEvent) => void;

    onMouseDown?: (evt: React.SyntheticEvent) => void;

    onMouseUp?: (evt: React.SyntheticEvent) => void;

    onMouseLeave?: (evt: React.SyntheticEvent) => void;
}

export default IClickableProps;
