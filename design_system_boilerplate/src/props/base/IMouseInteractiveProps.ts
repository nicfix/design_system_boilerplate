import React from 'react';

interface IMouseInteractiveProps {
    onMouseDown?: (evt: React.SyntheticEvent) => void;

    onMouseUp?: (evt: React.SyntheticEvent) => void;

    onMouseLeave?: (evt: React.SyntheticEvent) => void;

    onMouseEnter?: (evt: React.SyntheticEvent) => void;

    onMouseOver?: (evt: React.SyntheticEvent) => void;
}

export default IMouseInteractiveProps;
