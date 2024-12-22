import React, { useEffect, useState, useRef } from 'react';
import BoxButton from "./BoxButton.jsx";

function random(max) {
    return Math.floor(Math.random() * max);
}

function Container(props) {


    return (
        <div className="Container">
            <BoxButton  color="blue" />
            <BoxButton  color="green" />
            <BoxButton  color="red" />
            <BoxButton  color="yellow" />
            {/*<button onClick={addColor}>add</button>*/}
        </div>
    );
}

export default Container;