import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./views/Home";
import { DeckDetail } from "./views/DeckDetail";
import { About } from "./views/About";
import deckData from "./assets/deck-data.json";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<DeckDetail data={deckData} />} />
      <Route path=":id" element={<About />} />
    </Routes>
  )
}

export default App;