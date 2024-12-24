import React, {forwardRef} from 'react';

const BoxButton = forwardRef((props,ref) => (
        <div
                className={`BoxButton`}
                style={{backgroundColor: props.color || "black"}}
                ref={props.ref}
                onClick={() => {
                  console.log(props.onClickEvent(props.index), props.index);
                }}
        >
        </div>
));

export default BoxButton;
