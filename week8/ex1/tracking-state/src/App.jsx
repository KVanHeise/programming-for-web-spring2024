import './App.css'
import {useState} from "react";

const imageList = [{
  name: "Alpaca",
  image: "./alpaca.png",
  alt: "Alpaca photo"
},
{
  name: "Llama",
  image: "./llama.png",
  alt: "Alpaca photo"
}]

function App() {

  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let camelid = imageList[index];

  return (
    <>
      <h1>Alpaca VS Llama!</h1>

      <img src={camelid.image} alt={camelid.alt}></img>

      <div>
        Alpaca
        <button onClick={handleClick}> Alpaca
        </button>
      </div>

      <div>
        Llama
        <button onClick={handleClick}> Llama
        </button>
      </div>
    </>
  )
}

export default App