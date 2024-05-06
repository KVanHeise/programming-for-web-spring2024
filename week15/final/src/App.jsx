import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import { Home } from "./views/Home";
import { DeckDetail } from "./views/DeckDetail";
import { About } from "./views/About";
import { Contact } from "./views/Contact";
import deckData from "./assets/deck-data.json";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<DeckDetail data={deckData} />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  )
}

export default App;