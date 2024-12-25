import React from 'react';

const BoxButton =(props) => (
        <div
                className={`BoxButton`}
                style={{background: props.color || "black",...props.style}}
                id={`boxButton-${props.index}`}
                onClick={() => {
                  console.log(props.onClickEvent(props.index), props.index);
                }}
        >
          {props.index}
        </div>
);

export default BoxButton;
