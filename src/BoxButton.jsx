import React from 'react';

function BoxButton(props) {
    return (
        <div
            className="BoxButton"
            style={{ backgroundColor: props.color || "black" }}
            onClick={()=>console.log(props.onClickEvent(props.index),props.index)}
        >
        </div>
    );
}

export default BoxButton;
