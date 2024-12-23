import React, { useEffect, useState, useRef } from 'react';
import BoxButton from "./BoxButton.jsx";

function random(max) {
    return Math.floor(Math.random() * max)+1;
}

function Container(props) {
  let colors = [1]
  let round = 0

  function addColor(){
    colors.push(random(4));
    console.log(colors);
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
    round = 0;//place reset with reset game
    return false;
  }

  return (
          <div className="Container">
            <BoxButton  color="blue" onClickEvent ={check} index={1}/>
            <BoxButton  color="green" onClickEvent ={check} index={2}/>
            <BoxButton  color="red" onClickEvent ={check} index={3}/>
            <BoxButton  color="yellow" onClickEvent ={check} index={4}/>
            {/*<button onClick={addColor}>add</button>*/}
        </div>
    );
}

export default Container;