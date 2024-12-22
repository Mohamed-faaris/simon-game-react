import React, { forwardRef } from 'react';

const BoxButton = forwardRef(({color}, ref) => {
    return (
        <div
            className="BoxButton"
            style={{ backgroundColor: color}}
            ref={ref}
        >
        </div>
    );
});

export default BoxButton;
