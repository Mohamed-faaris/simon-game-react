import React from 'react';

function BoxButton(props) {
    return (
        <div
            className="BoxButton"
            style={{ backgroundColor: props.color || "black" }}
        >
        </div>
    );
}

export default BoxButton;
