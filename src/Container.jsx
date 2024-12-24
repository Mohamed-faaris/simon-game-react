import React, { useEffect, useState, useRef } from 'react';
import BoxButton from "./BoxButton.jsx";
import {delay} from "./utils.jsx";

function random(max) {
    return Math.floor(Math.random() * max)+1;
}

function Container(props, currentIndex = index) {
  let colors = [1,2,3,4]
  let round = 0
  let refs = [useRef(null),useRef(null),useRef(null),useRef(null)]

  function addColor(){
    colors.push(random(4));
    console.log(colors);
  }

  async function playSequence(currentIndex){
    //refs[colors[currentIndex]].current.classList.add("Glow");
    console.log(colors[currentIndex],"on");
    await delay(50);
    console.log(colors[currentIndex],"off");
    //refs[colors[currentIndex]].current.classList.remove("Glow");
    if(currentIndex < round)
      await playSequence(currentIndex + 1);
  }

  // useEffect(async () => {
  //   await playSequence(0)
  // }, [colors]);

  function resetGame() {
   round = 0
  }

  function check(i){
    if(i === colors[round]){
      round +=1 ;
      if(round === colors.length){
        addColor();
        round = 0;
      }
      return true;
    }
    resetGame();
    return false;
  }

  return (
          <div className="Container">
            <BoxButton  color="blue" onClickEvent ={check} ref ={refs[0]} index={1}/>
            <BoxButton  color="green" onClickEvent ={check} ref ={refs[1]} index={2}/>
            <BoxButton  color="red" onClickEvent ={check} ref ={refs[2]} index={3}/>
            <BoxButton  color="yellow" onClickEvent ={check} ref ={refs[3]} index={4}/>
            {/*<button onClick={addColor}>add</button>*/}
        </div>
    );
}

export default Container;