import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./views/Home";
import { DeckDetail } from "./views/DeckDetail";


function App() {
  
  return (
    <Routes>
      <Route path="/" element={Home} />
      <Route path=":id" element={DeckDetail} />
    </Routes>
  )
}

export default App;