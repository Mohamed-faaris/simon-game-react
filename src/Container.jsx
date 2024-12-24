import React, { useEffect, useState, useRef } from 'react';
import BoxButton from "./BoxButton.jsx";
import {delay} from "./utils.jsx";

function random(max) {
	return Math.floor(Math.random() * max)+1;
}

function Container(props, currentIndex = index) {
	const [colors, setColors] = useState([]);
	const [round, setRound] = useState(0);
	const [score, setScore] = useState(0);
	const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];


	function addColor(){
		let randomColor = random(4);
		console.log(randomColor);
		setColors((prevColors) => [...prevColors, randomColor]);
	}

	async function playSequence(currentIndex){
		refs[colors[currentIndex]].current.classList.add("Glow");
		console.log(colors[currentIndex],"on");
		await delay(50);
		console.log(colors[currentIndex],"off");
		refs[colors[currentIndex]].current.classList.remove("Glow");
		if(currentIndex < score)
			await playSequence(currentIndex + 1);
	}

	function resetGame() {
		setRound(0)
		setColors([])
		setScore(0)
		addColor()
	}

	function check(i){
		if(i === colors[round]){
			setRound((prev)=>(prev+1));
			if(round === colors.length){
				addColor();
				setScore((prev)=>(prev+1));
				playSequence(0)
				setRound(0)
			}
			return true;
		}
		resetGame();
		return false;
	}

	return (
					<div className="Container" >
						<BoxButton  color="blue" onClickEvent ={check} ref ={refs[0]} index={1}/>
						<BoxButton  color="green" onClickEvent ={check} ref ={refs[1]} index={2}/>
						<BoxButton  color="red" onClickEvent ={check} ref ={refs[2]} index={3}/>
						<BoxButton  color="yellow" onClickEvent ={check} ref ={refs[3]} index={4}/>
						<button onClick={()=>(addColor())}>add</button>
					</div>
	);
}

export default Container;