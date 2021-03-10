import React from 'react';

interface ITouchInteractiveProps {
    onTouchStart?: (evt: React.SyntheticEvent) => void;

    onTouchMove?: (evt: React.SyntheticEvent) => void;

    onTouchEnd?: (evt: React.SyntheticEvent) => void;

    onDragLeave?: (evt: React.SyntheticEvent) => void;
}

export default ITouchInteractiveProps;
