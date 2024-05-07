import { useState } from "react";
import {Link} from "react-router-dom";
import "../css/App.css";
import Masthead from "../assets/Masthead/Masthead";
import ItemCard from "../assets/ItemCard/ItemCard";
import deckData from "../assets/deck-data.json";


export function Home() {
    const [decks] = useState(deckData);

  return (
    <div className="page">
      <Masthead />
      <nav>
        <ul>
          <li><Link to="/" className="home">Home</Link></li>
          <li><Link to="/About" className="about">About</Link></li>
          <li><Link to="/Contact" className="about">Contact</Link></li>
        </ul>
      </nav>

      <div className="collection">
        {decks.map((projectDeck) => {
          return (
            <ItemCard
            key={projectDeck.id}
            {...projectDeck}/>
          )
        })}
      </div>

      <footer>
      <nav>
        <ul>
          <li><Link to="/" className="home">Home</Link></li>
          <li><Link to="/About" className="about">About</Link></li>
          <li><Link to="/Contact" className="about">Contact</Link></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}