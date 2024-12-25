import './App.css'
import SimonGame from "./SimonGame.jsx";
import {useState} from "react";
import {delay} from "./utils.jsx";

function App() {
  const [style, setStyle] = useState({});

  async function flashRed(){
    setStyle({backgroundColor: "red"});
    await delay(200)
    setStyle({});
  }

  return (
      <div className="App" style={style}>
          <SimonGame changeColorEvent={flashRed}/>
      </div>
  )
}

export default App
