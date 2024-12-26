import React from 'react';
import {blueClick, greenClick, redClick, yellowClick} from "./utils.jsx";

const BoxButton =(props) => (
        <div
                className={`BoxButton`}
                style={{background: props.color || "black",...props.style}}
                id={`boxButton-${props.index}`}
                onClick={() => {
                  if(props.onClickEvent(props.index)) {
                    switch (props.index) {
                      case 0: blueClick.play(); break;
                      case 1: greenClick.play(); break;
                      case 2: redClick.play(); break;
                      case 3: yellowClick.play(); break;
                    }
                  }
                }}
        >

        </div>
);

export default BoxButton;
