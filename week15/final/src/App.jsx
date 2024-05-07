import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import { Home } from "./views/Home";
import { ProjectDetail } from "./views/ProjectDetail";
import { About } from "./views/About";
import { Contact } from "./views/Contact";
import deckData from "./assets/deck-data.json";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<ProjectDetail data={deckData} />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  )
}

export default App;