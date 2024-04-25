import './App.css'
import {useState} from "react";

function App() {
  const [leftScore, setLeftScore] = useState(0)
  const [rightScore, setRightScore] = useState(0)

  return (
    <>
      <h1>Solitare Clicky Game</h1>

      <div>
        left
        <button onClick={() => {
        setLeftScore(leftScore +1);
        }}> Push Me!
        </button>
      </div>

      <div>
        right
        <button onClick={() => {
        setRightScore(rightScore +1);
        }}>No, Push Me!
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