import {Link, Route, Routes} from "react-router-dom"
import {Home} from "./views/Home"
import {Llamas} from "./views/Llamas"
import {Alpaca} from "./views/Alpaca"
import './index.css'

function App() {
  return (
    <>
     {/* Navigation here */}
     <ul className="navigation">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/llamas">Llamas</Link></li>
      <li><Link to="/alpacas">Alpacas</Link></li>
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
