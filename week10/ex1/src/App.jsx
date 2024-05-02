import {Link, Route, Routes} from "react-router-dom"
import {Home} from "./views/Home"
import {Llamas} from "./views/Llamas"
import {Alpaca} from "./views/Alpaca"
import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* Navigation here */}
     <ul>
      <li>Home</li>
      <li>Llamas</li>
      <li>Alpacas</li>
     </ul>

     {/* Routes here */}
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/llamas" element={<Llamas/>} />
      <Route path="/alpacas" element={<Alpaca/>} />
     </Routes>
    </>
  )
}

export default App
