// noinspection ES6UnusedImports

import React, {useEffect,useState, useRef} from 'react';
import BoxButton from "./BoxButton.jsx";

function random( max) {
    return Math.floor(Math.random() * (max-1));
}

function Container() {
    let playState = {
        level: 0,
        array: [],
        index: 0,
        canPlay: false
    };

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function play(ref) {
        ref.current.classList.add("playing");
        await delay(100); // Wait for 100ms
        ref.current.classList.remove("playing");
    }

    function addColor(){
        playState.array.add(random(4))
    }


    const buttonRefs = [useRef(), useRef(), useRef(), useRef()];

    useEffect(async () => {
        playState.canPlay = false;
        for (const index of playState.array) {
            await play(buttonRefs[index]);
        }
        playState.canPlay = true;
    }, [playState.array]);


    return (
        <div className="Container">
            <BoxButton ref={buttonRefs[0]} color="blue" />
            <BoxButton ref={buttonRefs[1]} color="green" />
            <BoxButton ref={buttonRefs[2]} color="red" />
            <BoxButton ref={buttonRefs[3]} color="yellow" />
            <button onClick={addColor}>add</button>
        </div>
    );

}

export default Container;