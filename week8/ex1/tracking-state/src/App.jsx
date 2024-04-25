import './App.css'
import {useState} from "react";

function App() {
  const [leftScore, setLeftScore] = useState(0)
  const [rightScore, setRightScore] = useState(0)

  return (
    <>
      <h1>Camelids!</h1>

      <img src="./alpaca.png" alt="Alpaca Photo"></img>
      <img src="./llama.png" alt="Llama Photo"></img>

      <div>
        left
        <button onClick={() => {
        setLeftScore(leftScore +1);
        }}> Alpaca
        </button>
      </div>

      <div>
        right
        <button onClick={() => {
        setRightScore(rightScore +1);
        }}>Llama
        </button>
      </div>

      <div>
        <h2>Scores</h2>
        Left Score {leftScore} | Right Score {rightScore}
      </div>
    </>
  )
}

export default App