import React, { useEffect, useState, useRef } from 'react';
import BoxButton from "./BoxButton.jsx";
import {delay} from "./utils.jsx";

function random(max) {
    return Math.floor(Math.random() * max);
}

function Container(props, currentIndex = index) {
  let colors= useRef([])
  let round = useRef(0)
  let score = useRef(0)
	const flashStyle = {background: 'white'};
	const initStyle = [{},{},{},{}]
	const [style,setStyle] = useState(initStyle);


  function addColor(){
    colors.current.push(random(4));
		console.log(colors.current);
  }
	function flashOnColor(colorIndex){
		setStyle(initStyle.map((item, idx) => idx === colorIndex ? flashStyle : item))
	}

	function flashOffColor(){
		setStyle(initStyle);
	}

  async function playSequence(currentIndex){
    console.log(colors.current[currentIndex],"on");
		flashOnColor(colors.current[currentIndex]);
    await delay(700);
		flashOffColor();
    console.log(colors.current[currentIndex],"off");
    if(currentIndex < score.current)
      await playSequence(currentIndex + 1);
  }

  function resetGame() {
    round.current = 0
    colors.current = []
    score.current = 0
    addColor()
  }

  function check(i){
    if(i === colors.current[round.current]){
      round.current +=1 ;
      if(round.current === colors.current.length){
        addColor();
        score.current += 1;
        playSequence(0)
        round.current = 0;
      }
      return true;
    }
    resetGame();
    return false;
  }

  return (
          <div className="Container" >
            <BoxButton  color="blue" onClickEvent ={check}  index={0} style={style[0]}/>
            <BoxButton  color="green" onClickEvent ={check}  index={1} style={style[1]}/>
            <BoxButton  color="red" onClickEvent ={check}  index={2} style={style[2]}/>
            <BoxButton  color="yellow" onClickEvent ={check}  index={3} style={style[3]}/>
            <button onClick={()=>(addColor())}>add</button>
        </div>
    );
}

export default Container;