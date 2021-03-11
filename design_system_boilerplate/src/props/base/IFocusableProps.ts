import React from 'react';

interface IFocusableProps {
    /**
     *
     * @param evt
     */
    onFocus?: (evt: React.SyntheticEvent) => void;

    /**
     *
     */
    onFocusVisible?: (evt: React.SyntheticEvent) => void;

    /**
     *
     */
    onBlur?: (evt: React.SyntheticEvent) => void;
}

export default IFocusableProps;
