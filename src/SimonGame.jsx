import React, {useState, useRef } from 'react';
import BoxButton from "./BoxButton.jsx";
import {blueClick, delay, greenClick, redClick, yellowClick} from "./utils.jsx";
import { Play } from 'lucide-react';

function random(max) {
    return Math.floor(Math.random() * max);
}

function SimonGame(props, currentIndex = index) {
  let colors= useRef([])
  let round = useRef(0)
  let score = useRef(0)
	const flashStyle = {background: 'white'};
	const initStyle = [{},{},{},{}]
	const [style,setStyle] = useState(initStyle);


	function flashOnColor(colorIndex){
		setStyle(initStyle.map((item, idx) => idx === colorIndex ? flashStyle : item))
		switch (colorIndex) {
			case 0: blueClick.play(); break;
			case 1: greenClick.play(); break;
			case 2: redClick.play(); break;
			case 3: yellowClick.play(); break;
			default:
				break;
		}
	}
	function flashOffColor(){
		setStyle(initStyle);
	}

	function addColor(){
		colors.current.push(random(4));
	}

  async function playSequence(currentIndex){
		flashOnColor(colors.current[currentIndex]);
    await delay(450);
		flashOffColor();
		await delay(200)
    if(currentIndex < score.current)
      await playSequence(currentIndex + 1);
  }

  async function resetGame() {
	  round.current = 0
	  colors.current = []
	  score.current = 0
	  addColor()
	  await props.changeColorEvent()
	  await delay(50)
	  playSequence(0)
  }

  async function check(i) {
	  if (i === colors.current[round.current]) {
		  round.current += 1;
		  if (round.current === colors.current.length) {
			  addColor();
			  score.current += 1;
			  round.current = 0;
			  playSequence(0);
		  }
		  return true;
	  }
	  await resetGame();
	  return false;
  }

  return (
					<div className={"SimonGame "}>
						<p>{colors.current.length===0?"click play button to start":`score ${score.current}`}</p>
	          <div className="Container" >
	            <BoxButton  color="blue" onClickEvent ={check}  index={0} style={style[0]}/>
	            <BoxButton  color="green" onClickEvent ={check}  index={1} style={style[1]}/>
	            <BoxButton  color="red" onClickEvent ={check}  index={2} style={style[2]}/>
	            <BoxButton  color="yellow" onClickEvent ={check}  index={3} style={style[3]}/>
	            <button
					            className=" flex justify-center items-center bg-gray-700 text-white text-2xl" onClick={()=>{
											if(colors.current.length===0)addColor();
					            playSequence(0);
	            }}>
		            {colors.current.length === 0 ? <Play /> : `${score.current}`}
							</button>
	          </div>
					</div>
    );
}

export default SimonGame;